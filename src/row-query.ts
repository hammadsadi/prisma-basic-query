import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

const rowQueriesInPrisma = async () =>{
    // Get All data Using Raw Query
    const posts = await prisma.$queryRaw`SELECT * FROM "Category"`
   
    // Delete User Data Using Raq Query and Truncate
    await prisma.$queryRaw`TRUNCATE TABLE "users" CASCADE`

}
rowQueriesInPrisma()