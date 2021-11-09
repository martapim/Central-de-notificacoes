"use strict";
const { gql, ApolloServer } = require('apollo-server');
let users = [];
//DEFINE TYPES
const typeDefs = gql `
   type User {
     id:ID!
     name: String!
     message: String!
   }

   type Query {
     users: [User] 
     user(id: ID!): User
   }

   type Mutation {
     create(id: ID!, name: String!, message: String!): User
     delete(id: ID!): Boolean
     update(id: ID!, name: String, message: String): User
   }
`;
//DEFINE RESOLVERS
const resolvers = {
    Query: {
        users: () => {
            return users;
        },
        user: (_, { id }) => {
            return users.find(user => user.id === id);
        },
    },
    Mutation: {
        create: (_, { id, name, message }) => {
            const user = { id, name, message };
            users.push(user);
            return user;
        },
        delete: (_, { id }) => {
            const filteredUsers = users.filter(user => user.id !== id);
            users = filteredUsers;
            return true;
        },
        update: (_, { id, name, message }) => {
            const user = users.find(user => user.id === id);
            if (user === undefined) {
                return null;
            }
            user.id = user.id;
            user.name = name ? name : user.name;
            user.message = message ? message : user.message;
            return user;
        },
    },
};
//CREATE SERVER
const app = new ApolloServer({ typeDefs, resolvers });
//RUN SERVER
app.listen().then(({ url }) => console.log(`Server running on ${url}`));
