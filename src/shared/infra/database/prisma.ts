import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

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
      if (params.action === 'deleteMany') {
        // Delete many queries
        params.action = 'updateMany';
        if (params.args.data !== undefined) {
          params.args.data.deletado = true;
        } else {
          params.args.data = { deletado: true };
        }
      }
    }
    return next(params);
  });
}

main();

export { prisma };
