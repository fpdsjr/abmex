import 'dotenv/config';

import { PrismaClient } from '@prisma/client';

const ENV = process.env.NODE_ENV ?? 'dev';

const DB_URLS = {
  dev: process.env.DATABASE_URL,
  test: process.env.DATABASE_URL_TEST,
};

const url = DB_URLS[ENV as keyof typeof DB_URLS];

const prisma = new PrismaClient({ datasources: { db: { url } } });

async function main() {
  /** ******************************** */
  /* SOFT DELETE MIDDLEWARE */
  /** ******************************** */

  prisma.$use(async (params, next) => {
    // Check incoming query type
    if (params.model === 'Time') {
      if (params.action === 'delete') {
        // Delete queries
        // Change action to an update
        params.action = 'update';
        params.args.data = { deletado: true };
      }
    }
    return next(params);
  });
}

main();

export { prisma };
