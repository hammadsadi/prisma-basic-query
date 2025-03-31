import { PrismaClient, UserRole } from "@prisma/client";

const prisma = new PrismaClient()

const main = async() =>{
    // Create User
    // const createduser = await prisma.user.create({
    //     data:{
    //         username:"Sayyid Saadi",
    //         email:"sayyidsaadi@yahoo.com",
    //         role: UserRole.admin
    //     }
    // })

    // create Profile bio
    // const createdProfileBio = await prisma.profile.create({
    //     data:{
    //         bio:"Full Stack Developer",
    //         userId:4
    //     }
    // })

    //  Create Category
    // const createdCategory = await prisma.category.create({
    //     data:{
    //         name:'express js'
    //     }
    // })

    // Create Post
    // const createdPost = await prisma.post.create({
    //     data:{
    //         title:"Node  Js Developer",
    //         content: 'Im Node JS Developer and Full Stack Developer',
    //         authorId: 4,
    //         postCategory:{
    //             create:{
    //                categoryId: 2
    //             }
    //         }
    //     },
    //     include:{
    //         postCategory:true
    //     }
    // })

}
main()