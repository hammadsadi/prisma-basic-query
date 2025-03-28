import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()
const paginationPrisma = async () =>{

    // Offset Pagination
    const offsetPaginationResult = await prisma.books.findMany({
        skip:5,
        take:2
    })

      // Cursor Based Pagination
      const cursorBasedPaginationResult = await prisma.books.findMany({
        skip:5,
        take:2,
        cursor:{
            id: 20
        }
    })

  
      // Sorting Assending
      const assendingSortingResult = await prisma.books.findMany({
       orderBy:{
        bookName:'asc'
       }
    })


       // Sorting Dessending
       const desendingSortingResult = await prisma.books.findMany({
        orderBy:{
         id:'desc'
        }
     })

    //  Number Wise Sorting
     const desendingSortingNumberWiseResult = await prisma.books.findMany({
        orderBy:{
         id:'asc'
        },
        where:{

            published: true
        }
     })
    console.log(desendingSortingNumberWiseResult)
}

paginationPrisma()