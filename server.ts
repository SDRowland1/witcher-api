import { prisma } from './prisma/generated/prisma-client'
import datamodelInfo from './prisma/generated/nexus-prisma'
import * as path from 'path'
import { prismaObjectType, makePrismaSchema } from 'nexus-prisma'
import { GraphQLServer } from 'graphql-yoga'

const Query = prismaObjectType<'Query'>({
    name: 'Query',
    definition(t) {
        t.prismaFields(['characters', 'character', 'books', 'book', 'games', 'game'])
    },
})

const Mutation = prismaObjectType<'Mutation'>({
    name: 'Mutation',
    definition(t) {
        t.prismaFields(['createCharacter', 'createBook', 'createGame'])
    },
})

const schema = makePrismaSchema({
    types: [Query, Mutation],

    prisma: {
        datamodelInfo,
        client: prisma,
    },

    outputs: {
        schema: path.join(__dirname, './prisma/generated/schema.graphql'),
        typegen: path.join(__dirname, './prisma/generated/nexus.ts'),
    },
})

const server = new GraphQLServer({
    schema,
    context: { prisma },
})
server.start(() => console.log('Server is running on http://localhost:4000'))