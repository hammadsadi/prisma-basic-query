import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

const groupByPost = async () =>{

    // Group Post By Published
    const postGroup = await prisma.post.groupBy({
        by:['published', 'authorId'],
        _count:{
            title:true
        }
    })

    //  Having
    const filteringByHaving = await prisma.post.groupBy({
        by:['published'],
        _count:{
            title:true
        },
        having:{
            published: true
        }
    })
console.log(filteringByHaving)
}
groupByPost()