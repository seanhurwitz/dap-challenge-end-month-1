const fs = require("fs");
const { join } = require("path");
const { omit } = require("lodash");

const allDirectories = fs
  .readdirSync(__dirname, { withFileTypes: true })
  .filter((dir) => dir.isDirectory())
  .map((dir) => dir.name);
console.log(`allDirectories`, allDirectories);

let input = "";
let schema = "";
let query = "type Query {";
let mutation = "type Mutation {";
const resolvers = {
  Query: {},
  Mutation: {},
};

const cleanseData = (data = "") => {
  data = data.replace("type Query {", "");
  data = data.replace("type Mutation {", "");
  data = data.replace("}", "");
  return data;
};

allDirectories.forEach((dir) => {
  const inputPath = join(__dirname, dir, "schema", "input.gql");
  const schemaPath = join(__dirname, dir, "schema", "schema.gql");
  const queryPath = join(__dirname, dir, "schema", "query.gql");
  const mutationPath = join(__dirname, dir, "schema", "mutation.gql");
  const resolverPath = join(__dirname, dir, "resolvers.js");

  const doesPathExist = (path) => fs.existsSync(path);

  if (doesPathExist(inputPath)) {
    const data = fs.readFileSync(inputPath).toString();
    input += data;
  }
  if (doesPathExist(schemaPath)) {
    const data = fs.readFileSync(schemaPath).toString();
    schema += data;
  }
  if (doesPathExist(queryPath)) {
    const data = fs.readFileSync(queryPath).toString();
    query += cleanseData(data);
  }
  if (doesPathExist(mutationPath)) {
    const data = fs.readFileSync(mutationPath).toString();
    mutation += cleanseData(data);
  }
  if (doesPathExist(resolverPath)) {
    const dirResolver = require(resolverPath);
    resolvers.Query = { ...resolvers.Query, ...(dirResolver.Query || {}) };
    resolvers.Mutation = {
      ...resolvers.Mutation,
      ...(dirResolver.Mutation || {}),
    };
    Object.keys(omit(dirResolver, ["Query", "Mutation"])).forEach((key) => {
      resolvers[key] = dirResolver[key];
    });
  }
});

query += "}";
mutation += "}";
console.log(`resolvers`, resolvers);
const typeDefs = input + schema + query + mutation;

module.exports = { typeDefs, resolvers };
