import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function main(){
        /***Create User***/
    // const user = await prisma.user.create({
    //     data: {
    //         name: 'Alice',
    //         email: 'aalice@prisma.io'
    //     },
    // })
    // console.log(user)

        /***Read Data User***/
    // const users = await prisma.user.findMany()
    // console.log(users)

        /***Create User with Post***/
    // const user = await prisma.user.create({
    //     data: {
    //         name: 'Bob',
    //         email: 'bob@prisma.io',
    //         posts: {
    //             create: {
    //                 title: 'Hello World',
    //             },
    //         },
    //     },
    // })
    // console.log(user)

        /***Create User with Post amd Include***/
    const usersWithPosts = await prisma.user.findMany({
        include: {
            posts: true,
        },
    })
    console.dir(usersWithPosts, { depth: null })

}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })