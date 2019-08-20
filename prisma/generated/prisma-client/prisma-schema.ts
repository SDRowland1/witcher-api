// Code generated by Prisma (prisma@1.34.1). DO NOT EDIT.
  // Please don't change this file manually but run `prisma generate` to update it.
  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

export const typeDefs = /* GraphQL */ `type AggregateBook {
  count: Int!
}

type AggregateCharacter {
  count: Int!
}

type AggregateGame {
  count: Int!
}

type BatchPayload {
  count: Long!
}

type Book {
  id: ID!
  title: String!
  author: String!
  publisher: String!
  publicationDate: String!
  type: String!
  pages: Int!
}

type BookConnection {
  pageInfo: PageInfo!
  edges: [BookEdge]!
  aggregate: AggregateBook!
}

input BookCreateInput {
  id: ID
  title: String!
  author: String!
  publisher: String!
  publicationDate: String!
  type: String!
  pages: Int!
}

input BookCreateManyInput {
  create: [BookCreateInput!]
  connect: [BookWhereUniqueInput!]
}

type BookEdge {
  node: Book!
  cursor: String!
}

enum BookOrderByInput {
  id_ASC
  id_DESC
  title_ASC
  title_DESC
  author_ASC
  author_DESC
  publisher_ASC
  publisher_DESC
  publicationDate_ASC
  publicationDate_DESC
  type_ASC
  type_DESC
  pages_ASC
  pages_DESC
}

type BookPreviousValues {
  id: ID!
  title: String!
  author: String!
  publisher: String!
  publicationDate: String!
  type: String!
  pages: Int!
}

input BookScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  author: String
  author_not: String
  author_in: [String!]
  author_not_in: [String!]
  author_lt: String
  author_lte: String
  author_gt: String
  author_gte: String
  author_contains: String
  author_not_contains: String
  author_starts_with: String
  author_not_starts_with: String
  author_ends_with: String
  author_not_ends_with: String
  publisher: String
  publisher_not: String
  publisher_in: [String!]
  publisher_not_in: [String!]
  publisher_lt: String
  publisher_lte: String
  publisher_gt: String
  publisher_gte: String
  publisher_contains: String
  publisher_not_contains: String
  publisher_starts_with: String
  publisher_not_starts_with: String
  publisher_ends_with: String
  publisher_not_ends_with: String
  publicationDate: String
  publicationDate_not: String
  publicationDate_in: [String!]
  publicationDate_not_in: [String!]
  publicationDate_lt: String
  publicationDate_lte: String
  publicationDate_gt: String
  publicationDate_gte: String
  publicationDate_contains: String
  publicationDate_not_contains: String
  publicationDate_starts_with: String
  publicationDate_not_starts_with: String
  publicationDate_ends_with: String
  publicationDate_not_ends_with: String
  type: String
  type_not: String
  type_in: [String!]
  type_not_in: [String!]
  type_lt: String
  type_lte: String
  type_gt: String
  type_gte: String
  type_contains: String
  type_not_contains: String
  type_starts_with: String
  type_not_starts_with: String
  type_ends_with: String
  type_not_ends_with: String
  pages: Int
  pages_not: Int
  pages_in: [Int!]
  pages_not_in: [Int!]
  pages_lt: Int
  pages_lte: Int
  pages_gt: Int
  pages_gte: Int
  AND: [BookScalarWhereInput!]
  OR: [BookScalarWhereInput!]
  NOT: [BookScalarWhereInput!]
}

type BookSubscriptionPayload {
  mutation: MutationType!
  node: Book
  updatedFields: [String!]
  previousValues: BookPreviousValues
}

input BookSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: BookWhereInput
  AND: [BookSubscriptionWhereInput!]
}

input BookUpdateDataInput {
  title: String
  author: String
  publisher: String
  publicationDate: String
  type: String
  pages: Int
}

input BookUpdateInput {
  title: String
  author: String
  publisher: String
  publicationDate: String
  type: String
  pages: Int
}

input BookUpdateManyDataInput {
  title: String
  author: String
  publisher: String
  publicationDate: String
  type: String
  pages: Int
}

input BookUpdateManyInput {
  create: [BookCreateInput!]
  update: [BookUpdateWithWhereUniqueNestedInput!]
  upsert: [BookUpsertWithWhereUniqueNestedInput!]
  delete: [BookWhereUniqueInput!]
  connect: [BookWhereUniqueInput!]
  set: [BookWhereUniqueInput!]
  disconnect: [BookWhereUniqueInput!]
  deleteMany: [BookScalarWhereInput!]
  updateMany: [BookUpdateManyWithWhereNestedInput!]
}

input BookUpdateManyMutationInput {
  title: String
  author: String
  publisher: String
  publicationDate: String
  type: String
  pages: Int
}

input BookUpdateManyWithWhereNestedInput {
  where: BookScalarWhereInput!
  data: BookUpdateManyDataInput!
}

input BookUpdateWithWhereUniqueNestedInput {
  where: BookWhereUniqueInput!
  data: BookUpdateDataInput!
}

input BookUpsertWithWhereUniqueNestedInput {
  where: BookWhereUniqueInput!
  update: BookUpdateDataInput!
  create: BookCreateInput!
}

input BookWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  author: String
  author_not: String
  author_in: [String!]
  author_not_in: [String!]
  author_lt: String
  author_lte: String
  author_gt: String
  author_gte: String
  author_contains: String
  author_not_contains: String
  author_starts_with: String
  author_not_starts_with: String
  author_ends_with: String
  author_not_ends_with: String
  publisher: String
  publisher_not: String
  publisher_in: [String!]
  publisher_not_in: [String!]
  publisher_lt: String
  publisher_lte: String
  publisher_gt: String
  publisher_gte: String
  publisher_contains: String
  publisher_not_contains: String
  publisher_starts_with: String
  publisher_not_starts_with: String
  publisher_ends_with: String
  publisher_not_ends_with: String
  publicationDate: String
  publicationDate_not: String
  publicationDate_in: [String!]
  publicationDate_not_in: [String!]
  publicationDate_lt: String
  publicationDate_lte: String
  publicationDate_gt: String
  publicationDate_gte: String
  publicationDate_contains: String
  publicationDate_not_contains: String
  publicationDate_starts_with: String
  publicationDate_not_starts_with: String
  publicationDate_ends_with: String
  publicationDate_not_ends_with: String
  type: String
  type_not: String
  type_in: [String!]
  type_not_in: [String!]
  type_lt: String
  type_lte: String
  type_gt: String
  type_gte: String
  type_contains: String
  type_not_contains: String
  type_starts_with: String
  type_not_starts_with: String
  type_ends_with: String
  type_not_ends_with: String
  pages: Int
  pages_not: Int
  pages_in: [Int!]
  pages_not_in: [Int!]
  pages_lt: Int
  pages_lte: Int
  pages_gt: Int
  pages_gte: Int
  AND: [BookWhereInput!]
}

input BookWhereUniqueInput {
  id: ID
}

type Character {
  id: ID!
  name: String!
  race: String!
  profession: String!
  affiliations: String!
  region: String!
  gameAppearences(where: GameWhereInput, orderBy: GameOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Game!]
  bookAppearences(where: BookWhereInput, orderBy: BookOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Book!]
}

type CharacterConnection {
  pageInfo: PageInfo!
  edges: [CharacterEdge]!
  aggregate: AggregateCharacter!
}

input CharacterCreateInput {
  id: ID
  name: String!
  race: String!
  profession: String!
  affiliations: String!
  region: String!
  gameAppearences: GameCreateManyInput
  bookAppearences: BookCreateManyInput
}

type CharacterEdge {
  node: Character!
  cursor: String!
}

enum CharacterOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  race_ASC
  race_DESC
  profession_ASC
  profession_DESC
  affiliations_ASC
  affiliations_DESC
  region_ASC
  region_DESC
}

type CharacterPreviousValues {
  id: ID!
  name: String!
  race: String!
  profession: String!
  affiliations: String!
  region: String!
}

type CharacterSubscriptionPayload {
  mutation: MutationType!
  node: Character
  updatedFields: [String!]
  previousValues: CharacterPreviousValues
}

input CharacterSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: CharacterWhereInput
  AND: [CharacterSubscriptionWhereInput!]
}

input CharacterUpdateInput {
  name: String
  race: String
  profession: String
  affiliations: String
  region: String
  gameAppearences: GameUpdateManyInput
  bookAppearences: BookUpdateManyInput
}

input CharacterUpdateManyMutationInput {
  name: String
  race: String
  profession: String
  affiliations: String
  region: String
}

input CharacterWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  race: String
  race_not: String
  race_in: [String!]
  race_not_in: [String!]
  race_lt: String
  race_lte: String
  race_gt: String
  race_gte: String
  race_contains: String
  race_not_contains: String
  race_starts_with: String
  race_not_starts_with: String
  race_ends_with: String
  race_not_ends_with: String
  profession: String
  profession_not: String
  profession_in: [String!]
  profession_not_in: [String!]
  profession_lt: String
  profession_lte: String
  profession_gt: String
  profession_gte: String
  profession_contains: String
  profession_not_contains: String
  profession_starts_with: String
  profession_not_starts_with: String
  profession_ends_with: String
  profession_not_ends_with: String
  affiliations: String
  affiliations_not: String
  affiliations_in: [String!]
  affiliations_not_in: [String!]
  affiliations_lt: String
  affiliations_lte: String
  affiliations_gt: String
  affiliations_gte: String
  affiliations_contains: String
  affiliations_not_contains: String
  affiliations_starts_with: String
  affiliations_not_starts_with: String
  affiliations_ends_with: String
  affiliations_not_ends_with: String
  region: String
  region_not: String
  region_in: [String!]
  region_not_in: [String!]
  region_lt: String
  region_lte: String
  region_gt: String
  region_gte: String
  region_contains: String
  region_not_contains: String
  region_starts_with: String
  region_not_starts_with: String
  region_ends_with: String
  region_not_ends_with: String
  gameAppearences_some: GameWhereInput
  bookAppearences_some: BookWhereInput
  AND: [CharacterWhereInput!]
}

input CharacterWhereUniqueInput {
  id: ID
}

type Game {
  id: ID!
  title: String!
  platforms: [String!]!
  genres: [String!]!
  releaseDate: String!
  publisher: String!
  developer: String!
  website: String!
}

type GameConnection {
  pageInfo: PageInfo!
  edges: [GameEdge]!
  aggregate: AggregateGame!
}

input GameCreategenresInput {
  set: [String!]
}

input GameCreateInput {
  id: ID
  title: String!
  platforms: GameCreateplatformsInput
  genres: GameCreategenresInput
  releaseDate: String!
  publisher: String!
  developer: String!
  website: String!
}

input GameCreateManyInput {
  create: [GameCreateInput!]
  connect: [GameWhereUniqueInput!]
}

input GameCreateplatformsInput {
  set: [String!]
}

type GameEdge {
  node: Game!
  cursor: String!
}

enum GameOrderByInput {
  id_ASC
  id_DESC
  title_ASC
  title_DESC
  releaseDate_ASC
  releaseDate_DESC
  publisher_ASC
  publisher_DESC
  developer_ASC
  developer_DESC
  website_ASC
  website_DESC
}

type GamePreviousValues {
  id: ID!
  title: String!
  platforms: [String!]!
  genres: [String!]!
  releaseDate: String!
  publisher: String!
  developer: String!
  website: String!
}

input GameScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  releaseDate: String
  releaseDate_not: String
  releaseDate_in: [String!]
  releaseDate_not_in: [String!]
  releaseDate_lt: String
  releaseDate_lte: String
  releaseDate_gt: String
  releaseDate_gte: String
  releaseDate_contains: String
  releaseDate_not_contains: String
  releaseDate_starts_with: String
  releaseDate_not_starts_with: String
  releaseDate_ends_with: String
  releaseDate_not_ends_with: String
  publisher: String
  publisher_not: String
  publisher_in: [String!]
  publisher_not_in: [String!]
  publisher_lt: String
  publisher_lte: String
  publisher_gt: String
  publisher_gte: String
  publisher_contains: String
  publisher_not_contains: String
  publisher_starts_with: String
  publisher_not_starts_with: String
  publisher_ends_with: String
  publisher_not_ends_with: String
  developer: String
  developer_not: String
  developer_in: [String!]
  developer_not_in: [String!]
  developer_lt: String
  developer_lte: String
  developer_gt: String
  developer_gte: String
  developer_contains: String
  developer_not_contains: String
  developer_starts_with: String
  developer_not_starts_with: String
  developer_ends_with: String
  developer_not_ends_with: String
  website: String
  website_not: String
  website_in: [String!]
  website_not_in: [String!]
  website_lt: String
  website_lte: String
  website_gt: String
  website_gte: String
  website_contains: String
  website_not_contains: String
  website_starts_with: String
  website_not_starts_with: String
  website_ends_with: String
  website_not_ends_with: String
  AND: [GameScalarWhereInput!]
  OR: [GameScalarWhereInput!]
  NOT: [GameScalarWhereInput!]
}

type GameSubscriptionPayload {
  mutation: MutationType!
  node: Game
  updatedFields: [String!]
  previousValues: GamePreviousValues
}

input GameSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: GameWhereInput
  AND: [GameSubscriptionWhereInput!]
}

input GameUpdateDataInput {
  title: String
  platforms: GameUpdateplatformsInput
  genres: GameUpdategenresInput
  releaseDate: String
  publisher: String
  developer: String
  website: String
}

input GameUpdategenresInput {
  set: [String!]
}

input GameUpdateInput {
  title: String
  platforms: GameUpdateplatformsInput
  genres: GameUpdategenresInput
  releaseDate: String
  publisher: String
  developer: String
  website: String
}

input GameUpdateManyDataInput {
  title: String
  platforms: GameUpdateplatformsInput
  genres: GameUpdategenresInput
  releaseDate: String
  publisher: String
  developer: String
  website: String
}

input GameUpdateManyInput {
  create: [GameCreateInput!]
  update: [GameUpdateWithWhereUniqueNestedInput!]
  upsert: [GameUpsertWithWhereUniqueNestedInput!]
  delete: [GameWhereUniqueInput!]
  connect: [GameWhereUniqueInput!]
  set: [GameWhereUniqueInput!]
  disconnect: [GameWhereUniqueInput!]
  deleteMany: [GameScalarWhereInput!]
  updateMany: [GameUpdateManyWithWhereNestedInput!]
}

input GameUpdateManyMutationInput {
  title: String
  platforms: GameUpdateplatformsInput
  genres: GameUpdategenresInput
  releaseDate: String
  publisher: String
  developer: String
  website: String
}

input GameUpdateManyWithWhereNestedInput {
  where: GameScalarWhereInput!
  data: GameUpdateManyDataInput!
}

input GameUpdateplatformsInput {
  set: [String!]
}

input GameUpdateWithWhereUniqueNestedInput {
  where: GameWhereUniqueInput!
  data: GameUpdateDataInput!
}

input GameUpsertWithWhereUniqueNestedInput {
  where: GameWhereUniqueInput!
  update: GameUpdateDataInput!
  create: GameCreateInput!
}

input GameWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  releaseDate: String
  releaseDate_not: String
  releaseDate_in: [String!]
  releaseDate_not_in: [String!]
  releaseDate_lt: String
  releaseDate_lte: String
  releaseDate_gt: String
  releaseDate_gte: String
  releaseDate_contains: String
  releaseDate_not_contains: String
  releaseDate_starts_with: String
  releaseDate_not_starts_with: String
  releaseDate_ends_with: String
  releaseDate_not_ends_with: String
  publisher: String
  publisher_not: String
  publisher_in: [String!]
  publisher_not_in: [String!]
  publisher_lt: String
  publisher_lte: String
  publisher_gt: String
  publisher_gte: String
  publisher_contains: String
  publisher_not_contains: String
  publisher_starts_with: String
  publisher_not_starts_with: String
  publisher_ends_with: String
  publisher_not_ends_with: String
  developer: String
  developer_not: String
  developer_in: [String!]
  developer_not_in: [String!]
  developer_lt: String
  developer_lte: String
  developer_gt: String
  developer_gte: String
  developer_contains: String
  developer_not_contains: String
  developer_starts_with: String
  developer_not_starts_with: String
  developer_ends_with: String
  developer_not_ends_with: String
  website: String
  website_not: String
  website_in: [String!]
  website_not_in: [String!]
  website_lt: String
  website_lte: String
  website_gt: String
  website_gte: String
  website_contains: String
  website_not_contains: String
  website_starts_with: String
  website_not_starts_with: String
  website_ends_with: String
  website_not_ends_with: String
  AND: [GameWhereInput!]
}

input GameWhereUniqueInput {
  id: ID
}

scalar Long

type Mutation {
  createBook(data: BookCreateInput!): Book!
  updateBook(data: BookUpdateInput!, where: BookWhereUniqueInput!): Book
  updateManyBooks(data: BookUpdateManyMutationInput!, where: BookWhereInput): BatchPayload!
  upsertBook(where: BookWhereUniqueInput!, create: BookCreateInput!, update: BookUpdateInput!): Book!
  deleteBook(where: BookWhereUniqueInput!): Book
  deleteManyBooks(where: BookWhereInput): BatchPayload!
  createCharacter(data: CharacterCreateInput!): Character!
  updateCharacter(data: CharacterUpdateInput!, where: CharacterWhereUniqueInput!): Character
  updateManyCharacters(data: CharacterUpdateManyMutationInput!, where: CharacterWhereInput): BatchPayload!
  upsertCharacter(where: CharacterWhereUniqueInput!, create: CharacterCreateInput!, update: CharacterUpdateInput!): Character!
  deleteCharacter(where: CharacterWhereUniqueInput!): Character
  deleteManyCharacters(where: CharacterWhereInput): BatchPayload!
  createGame(data: GameCreateInput!): Game!
  updateGame(data: GameUpdateInput!, where: GameWhereUniqueInput!): Game
  updateManyGames(data: GameUpdateManyMutationInput!, where: GameWhereInput): BatchPayload!
  upsertGame(where: GameWhereUniqueInput!, create: GameCreateInput!, update: GameUpdateInput!): Game!
  deleteGame(where: GameWhereUniqueInput!): Game
  deleteManyGames(where: GameWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  book(where: BookWhereUniqueInput!): Book
  books(where: BookWhereInput, orderBy: BookOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Book]!
  booksConnection(where: BookWhereInput, orderBy: BookOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): BookConnection!
  character(where: CharacterWhereUniqueInput!): Character
  characters(where: CharacterWhereInput, orderBy: CharacterOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Character]!
  charactersConnection(where: CharacterWhereInput, orderBy: CharacterOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CharacterConnection!
  game(where: GameWhereUniqueInput!): Game
  games(where: GameWhereInput, orderBy: GameOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Game]!
  gamesConnection(where: GameWhereInput, orderBy: GameOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): GameConnection!
  node(id: ID!): Node
}

type Subscription {
  book(where: BookSubscriptionWhereInput): BookSubscriptionPayload
  character(where: CharacterSubscriptionWhereInput): CharacterSubscriptionPayload
  game(where: GameSubscriptionWhereInput): GameSubscriptionPayload
}
`