import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

const main = async() =>{

    //  Find User and Her data Fluent Api
    const userAndData = await prisma.user.findUnique({
        where:{
            id: 4
        },
        include:{
            post:true
        }
    })

    //  Get All Users and her Public Posts
    const usersPublishedPosts = await prisma.user.findMany({
        include:{
            post: {
                where:{
                    published: true
                }
            }
        }
    })
console.dir(usersPublishedPosts, {depth: Infinity})
}
main()