import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
    log:[
        {
            emit:'event',
            level:'query'
        }
    ]
})

// Subscription Listening ON
prisma.$on('query', (e) =>{
    console.log(e)
})

const loginInPrisma = async() =>{
    const loggingData = await prisma.post.findMany()
}
loginInPrisma()