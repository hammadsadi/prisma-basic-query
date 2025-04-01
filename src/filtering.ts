import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

const filtering = async () =>{
    // And Filtering 
    // const andFiltering = await prisma.post.findMany({
    //     where:{
    //         AND:[
    //             {
    //                 title:{
    //                     contains: 'Js'
    //                 }
    //             },
    //             {
    //                 published:true
    //             }
    //         ]
    //     }
    // })


    //  Or Filtering
    const ordFiltering = await prisma.post.findMany({
        where:{
            OR:[
                {
                    title:{
                        contains: 'Jvascript'
                    }
                },
                {
                    published:true
                }
            ]
        }
    })
    console.log(ordFiltering)

  
}

filtering()