
# Beaver Database Documentation

> [!NOTE]\
> This document outlines the relationships, schema, and database architecture.

---

## Logical Flow of Data

### Inserting and Subscribing to Logs

1. Client will send logs in the defined schema to the designated endpoint.
2. The `Express.js` backend will validate the `API` key.
   1. Log is inserted into a `Redis` queue.
   2. Log is persisted simultaneously in `PostgreSQL` database.
3. `Express` backend will listen to updates from `Redis`.
4. `Express` backend will send the log over a `socket` to subscribers.

```mermaid
flowchart TD
    express(Express)
    redis[(Redis)]
    postgresql[(PostgreSQL)]
    client((Client</br>Source))
    subscriber((Client</br>Subscriber))

    client-->|1. Send Log|express
    
    subgraph Server
        direction BT
        express-->|2 i. Insert Data|redis
        express-->|2 ii. Stores Data|postgresql
        redis-->|3. Inform on</br>Update|express
    end
    
    express-->|4. Push to Subscriber|subscriber
```

### Fetching Existing Logs

1. Client will make a `GET` request to a designated endpoint on the `Express` backend.
2. `Express` backend will validate the request.
   1. A call via `Prisma` will be made to fetch existing logs persisted in `PostgreSQL`.
   2. Data will be processed and formatted.
3. Data is then sent over to the client.

```mermaid
flowchart BT
    express(Express)
    postgresql[(PostgreSQL)]
    client((Client))
    
    client-->|1. GET request|express
    
    subgraph Server
        express-->|2 i. Fetch data|postgresql
        postgresql-->|2 ii. Return data|express
    end
    
    express-->|3. Response|client
```

---

## Relations

To incorporate `Beaver` into the suite of products in `Smeepy`, `API keys` are used to track,
authorise, and authenticate actions that occur outside of `Paddock`.

```mermaid
erDiagram
    paddock_user{}
    
    paddock_project{
        uuid id PK
        string name
        string description
        DateTime created_at
        DateTime updated_at
    }
    
    paddock_api_key{
        uuid id PK
        string label
        string description
        DateTime created_at
        uuid project_id FK
    }
    
    beaver_log{
        uuid id PK
        string log
        DateTime created_at
        uuid paddock_api_key FK
    }
    
    paddock_user |o--o{ paddock_project : "Has projects"
    paddock_project |o--o{ paddock_api_key : "Keys"
    paddock_api_key ||--o{ beaver_log : "Logs"
```