"use strict";
exports.__esModule = true;
var prisma_client_1 = require("./prisma/generated/prisma-client");
var nexus_prisma_1 = require("./prisma/generated/nexus-prisma");
var path = require("path");
var nexus_prisma_2 = require("nexus-prisma");
var graphql_yoga_1 = require("graphql-yoga");
var Query = nexus_prisma_2.prismaObjectType({
    name: 'Query',
    definition: function (t) {
        t.prismaFields(['characters', 'character', 'books', 'book', 'games', 'game']);
    }
});
var Mutation = nexus_prisma_2.prismaObjectType({
    name: 'Mutation',
    definition: function (t) {
        t.prismaFields(['createCharacter', 'createBook', 'createGame']);
    }
});
var schema = nexus_prisma_2.makePrismaSchema({
    types: [Query, Mutation],
    prisma: {
        datamodelInfo: nexus_prisma_1["default"],
        client: prisma_client_1.prisma
    },
    outputs: {
        schema: path.join(__dirname, './prisma/generated/schema.graphql'),
        typegen: path.join(__dirname, './prisma/generated/nexus.ts')
    }
});
var server = new graphql_yoga_1.GraphQLServer({
    schema: schema,
    context: { prisma: prisma_client_1.prisma }
});
server.start(function () { return console.log('Server is running on http://localhost:4000'); });
