import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

const batchTransaction = async () =>{
    // Create User FOr Batch Transaction
    const userCreate =  prisma.user.create({
        data:{
            username:"mohaimin",
            email: 'mohaimin@gmail.com'
        }
    })

    //  Updated User For Batch Transaction
    const userUpdate =  prisma.user.update({
        where:{
            id:4
        },
        data:{
            age: 28
        }
    })

    //  Batch Transaction
    const [userInfo, updatedUserInfo] = await prisma.$transaction([userCreate, userUpdate])
    console.log({
        createdUser:userInfo,
        updateUser: updatedUserInfo
    })
}

batchTransaction()