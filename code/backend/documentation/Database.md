
# Database Documentation

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