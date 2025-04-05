import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

const aggregationInPrisma = async () =>{

    //  User Age Avg Calculate Using aggregation avg
    const aggregationAvg = await prisma.user.aggregate({
        _avg:{
            age:true
        }
    })



    //  User Age Sum Calculate Using aggregation avg
    const sumAgeCalculate = await prisma.user.aggregate({
        _sum:{
            age:true
        }
    })


     //  Total Number Field  Data Count
     const dataCount = await prisma.user.aggregate({
        _count:{
            age:true
        }
    })


      //  Total Data Count
      const totalDataCount = await prisma.user.count()



    //   Max Age
    const maxAge = await prisma.user.aggregate({
        _max:{
            age:true
        }
    })

    //   Min Age
    const minAge = await prisma.user.aggregate({
        _min:{
            age:true
        }
    })
    console.log(minAge)

}
aggregationInPrisma()