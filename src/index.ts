import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()

const main = async () =>{


      // Create Single Data
    //   const result = await prisma.books.create({
    //     data:{
    //         bookName:'Name Here',
    //         authorName:'auth',

    //     }
    // })


    // Create Many Data
    // const result = await prisma.books.createMany({
    //     data:[
    //         {
    //             bookName:'Name1 Here',
    //             authorName:'auth1',
    //         },
    //         {
    //             bookName:'Name2 Here',
    //             authorName:'auth2',
    //         },
    //         {
    //             bookName:'Name3 Here',
    //             authorName:'auth3',
    //         },
    //         {
    //             bookName:'Name4 Here',
    //             authorName:'auth4',
    //         }
    //     ]
    // })



    // Update Single Data

//     const result = await prisma.books.update({
//         where:{
//             id: 5
//         },
//         data:{
//             bookName: "Javascript ES6"
//         }
//     })
// console.log(result)




// Update Many

//     const result = await prisma.books.updateMany({
//         where:{
//           bookName:"Name2 Here"
//         },
//         data:{
//             published: true
//         }
//     })
// console.log(result)

  
    // Get First Data condition wise match
    // const result = await prisma.books.findFirst({
    //     where:{
    //         id: 9
    //     }
    // })


      // Get First Data condition wise match if not Match data Return Error
    //   const result = await prisma.books.findFirstOrThrow({
    //     where:{
    //         id: 9
    //     }
    // })


      // Get Unique Data condition wise match
    //   const result = await prisma.books.findUnique({
    //     where:{
    //         id: 9
    //     }
    // })


      // Get Unique Data condition wise match if data not match Return Error
    //   const result = await prisma.books.findUniqueOrThrow({
    //     where:{
    //         id: 9
    //     }
    // })

  
}
main()