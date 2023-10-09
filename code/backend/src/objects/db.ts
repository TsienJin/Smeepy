import { PrismaClient } from '@prisma/client';



// https://github.com/prisma/prisma/issues/5139


/**
 * Method to export a singleton copy of PrismaClient()
 * Ngl, I don't fully understand this, but it kinda works,
 * so it's not stupid.
 */
const DBClient = {
  instance: new PrismaClient(),
};

export type IDBClient = typeof DBClient;

Object.freeze(DBClient);

export default DBClient;