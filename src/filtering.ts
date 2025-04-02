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
    // const ordFiltering = await prisma.post.findMany({
    //     where:{
    //         OR:[
    //             {
    //                 title:{
    //                     contains: 'Jvascript'
    //                 }
    //             },
    //             {
    //                 published:true
    //             }
    //         ]
    //     }
    // })


    //  Not Filtering 
    const notFiltering = await prisma.post.findMany({
        where:{
            NOT:[
                {
                    title:{
                        contains: 'Jvascript'
                    }
                }
            ]
        }
    })

    //  Start With
    const startWithFilter = await prisma.user.findMany({
        where:{
            email:{
                startsWith: 'ha'
            }
        }
    })

    //  End With
    const endWithFilter = await prisma.user.findMany({
        where:{
            username:{
                endsWith:'di'
            }
        }
    })

    //  Equals
    const equalsFilter = await prisma.user.findMany({
        where:{
            role:{
                equals:'admin'
            }
        }
    })

    // In
    const userNameList = ['Sayyid Saadi', 'Hammad Sadi', 'customer']
    const infilter = await prisma.user.findMany({
        where:{
            username:{
                in: userNameList
            }
        }
    })


    //  In Depth Relation Data Get
    const inDepthRelationData = await prisma.user.findUnique({
        where:{
            id:4
        },
        include:{
            post:{
                include:{
                    postCategory:{
                        include:{
                            category:true
                        }
                    }
                }
            }
        }
    })
    console.dir(inDepthRelationData, {depth: Infinity})

  
}

filtering()