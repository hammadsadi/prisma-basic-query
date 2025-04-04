import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

const aggregationInPrisma = async () =>{

    //  User Age Avg Calculate Using aggregation avg
    const aggregationAvg = await prisma.user.aggregate({
        _avg:{
            age:true
        }
    })

    console.log(aggregationAvg)

}
aggregationInPrisma()