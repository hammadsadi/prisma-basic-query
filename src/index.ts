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


    //  Single Data Dlete
    // const result = await prisma.books.delete({
    //   where:{
    //     id:8
    //   }
    // })

// Multiple Data Delete
// const result = await prisma.books.deleteMany({
//   where:{
//    published: false
//   }
// })


//  All Data Delete
// const result = await prisma.books.deleteMany()

// Upsert
  // const result  = await prisma.books.upsert({
  //   where:{
  //     id:9
  //   },
  //   update:{
  //     bookName:"9 Updated Book Name"
  //   },
  //   create:{
  //     bookName:"Political History"
    
  //   }
  // })



  //  Select
  // const result = await prisma.books.findMany({
  //   select:{
  //     authorName: true
  //   }
  // })
  // console.log(
  //   result
  // )

  await prisma.books.createMany({
    data: [
      { bookName: 'The Pragmatic Programmer', authorName: 'Andrew Hunt' },
      { bookName: 'Clean Code', authorName: 'Robert C. Martin' },
      { bookName: 'You Don’t Know JS', authorName: 'Kyle Simpson' },
      { bookName: 'JavaScript: The Good Parts', authorName: 'Douglas Crockford' },
      { bookName: 'Eloquent JavaScript', authorName: 'Marijn Haverbeke' },
      { bookName: 'Refactoring', authorName: 'Martin Fowler' },
      { bookName: 'Design Patterns', authorName: 'Erich Gamma' },
      { bookName: 'The Art of Computer Programming', authorName: 'Donald Knuth' },
      { bookName: 'Code Complete', authorName: 'Steve McConnell' },
      { bookName: 'Introduction to the Theory of Computation', authorName: 'Michael Sipser' },
      { bookName: 'Operating System Concepts', authorName: 'Abraham Silberschatz' },
      { bookName: 'Computer Networking: A Top-Down Approach', authorName: 'Kurose & Ross' },
      { bookName: 'The Mythical Man-Month', authorName: 'Frederick P. Brooks Jr.' },
      { bookName: 'Artificial Intelligence: A Modern Approach', authorName: 'Stuart Russell' },
      { bookName: 'Database System Concepts', authorName: 'Henry F. Korth' },
      { bookName: 'Programming Pearls', authorName: 'Jon Bentley' },
      { bookName: 'The Clean Coder', authorName: 'Robert C. Martin' },
      { bookName: 'Domain-Driven Design', authorName: 'Eric Evans' },
      { bookName: 'Working Effectively with Legacy Code', authorName: 'Michael Feathers' },
      { bookName: 'Head First Design Patterns', authorName: 'Eric Freeman' },
    ],
  })

}
main()