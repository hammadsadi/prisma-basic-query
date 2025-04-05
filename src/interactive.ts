import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

const interactiveTransaction = async () =>{

    // interactive Transaction
    const result = await prisma.$transaction(async(transactionClient)=>{

        // Query 1
        const getAllUser = await transactionClient.user.findMany({})
        // Query 2
        const countPost = await transactionClient.post.count()
        // Query 3
        const updatedUser = await transactionClient.user.update({
            where:{
                id:4
            },
            data:{
                age:2
            }
        })

        return {
            getAllUser,
            countPost,
            updatedUser
        }
    })

    console.log(result)
}
interactiveTransaction()