/**
 * This file was automatically generated by GraphQL Nexus
 * Do not make changes to this file directly
 */






declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
  BookCreateInput: { // input type
    author: string; // String!
    id?: string | null; // ID
    pages: number; // Int!
    publicationDate: string; // String!
    publisher: string; // String!
    title: string; // String!
    type: string; // String!
  }
  BookCreateManyInput: { // input type
    connect?: NexusGenInputs['BookWhereUniqueInput'][] | null; // [BookWhereUniqueInput!]
    create?: NexusGenInputs['BookCreateInput'][] | null; // [BookCreateInput!]
  }
  BookWhereInput: { // input type
    AND?: NexusGenInputs['BookWhereInput'][] | null; // [BookWhereInput!]
    author?: string | null; // String
    author_contains?: string | null; // String
    author_ends_with?: string | null; // String
    author_gt?: string | null; // String
    author_gte?: string | null; // String
    author_in?: string[] | null; // [String!]
    author_lt?: string | null; // String
    author_lte?: string | null; // String
    author_not?: string | null; // String
    author_not_contains?: string | null; // String
    author_not_ends_with?: string | null; // String
    author_not_in?: string[] | null; // [String!]
    author_not_starts_with?: string | null; // String
    author_starts_with?: string | null; // String
    id?: string | null; // ID
    id_contains?: string | null; // ID
    id_ends_with?: string | null; // ID
    id_gt?: string | null; // ID
    id_gte?: string | null; // ID
    id_in?: string[] | null; // [ID!]
    id_lt?: string | null; // ID
    id_lte?: string | null; // ID
    id_not?: string | null; // ID
    id_not_contains?: string | null; // ID
    id_not_ends_with?: string | null; // ID
    id_not_in?: string[] | null; // [ID!]
    id_not_starts_with?: string | null; // ID
    id_starts_with?: string | null; // ID
    pages?: number | null; // Int
    pages_gt?: number | null; // Int
    pages_gte?: number | null; // Int
    pages_in?: number[] | null; // [Int!]
    pages_lt?: number | null; // Int
    pages_lte?: number | null; // Int
    pages_not?: number | null; // Int
    pages_not_in?: number[] | null; // [Int!]
    publicationDate?: string | null; // String
    publicationDate_contains?: string | null; // String
    publicationDate_ends_with?: string | null; // String
    publicationDate_gt?: string | null; // String
    publicationDate_gte?: string | null; // String
    publicationDate_in?: string[] | null; // [String!]
    publicationDate_lt?: string | null; // String
    publicationDate_lte?: string | null; // String
    publicationDate_not?: string | null; // String
    publicationDate_not_contains?: string | null; // String
    publicationDate_not_ends_with?: string | null; // String
    publicationDate_not_in?: string[] | null; // [String!]
    publicationDate_not_starts_with?: string | null; // String
    publicationDate_starts_with?: string | null; // String
    publisher?: string | null; // String
    publisher_contains?: string | null; // String
    publisher_ends_with?: string | null; // String
    publisher_gt?: string | null; // String
    publisher_gte?: string | null; // String
    publisher_in?: string[] | null; // [String!]
    publisher_lt?: string | null; // String
    publisher_lte?: string | null; // String
    publisher_not?: string | null; // String
    publisher_not_contains?: string | null; // String
    publisher_not_ends_with?: string | null; // String
    publisher_not_in?: string[] | null; // [String!]
    publisher_not_starts_with?: string | null; // String
    publisher_starts_with?: string | null; // String
    title?: string | null; // String
    title_contains?: string | null; // String
    title_ends_with?: string | null; // String
    title_gt?: string | null; // String
    title_gte?: string | null; // String
    title_in?: string[] | null; // [String!]
    title_lt?: string | null; // String
    title_lte?: string | null; // String
    title_not?: string | null; // String
    title_not_contains?: string | null; // String
    title_not_ends_with?: string | null; // String
    title_not_in?: string[] | null; // [String!]
    title_not_starts_with?: string | null; // String
    title_starts_with?: string | null; // String
    type?: string | null; // String
    type_contains?: string | null; // String
    type_ends_with?: string | null; // String
    type_gt?: string | null; // String
    type_gte?: string | null; // String
    type_in?: string[] | null; // [String!]
    type_lt?: string | null; // String
    type_lte?: string | null; // String
    type_not?: string | null; // String
    type_not_contains?: string | null; // String
    type_not_ends_with?: string | null; // String
    type_not_in?: string[] | null; // [String!]
    type_not_starts_with?: string | null; // String
    type_starts_with?: string | null; // String
  }
  BookWhereUniqueInput: { // input type
    id?: string | null; // ID
  }
  CharacterCreateInput: { // input type
    affiliations: string; // String!
    bookAppearences?: NexusGenInputs['BookCreateManyInput'] | null; // BookCreateManyInput
    gameAppearences?: NexusGenInputs['GameCreateManyInput'] | null; // GameCreateManyInput
    id?: string | null; // ID
    name: string; // String!
    profession: string; // String!
    race: string; // String!
    region: string; // String!
  }
  CharacterWhereInput: { // input type
    affiliations?: string | null; // String
    affiliations_contains?: string | null; // String
    affiliations_ends_with?: string | null; // String
    affiliations_gt?: string | null; // String
    affiliations_gte?: string | null; // String
    affiliations_in?: string[] | null; // [String!]
    affiliations_lt?: string | null; // String
    affiliations_lte?: string | null; // String
    affiliations_not?: string | null; // String
    affiliations_not_contains?: string | null; // String
    affiliations_not_ends_with?: string | null; // String
    affiliations_not_in?: string[] | null; // [String!]
    affiliations_not_starts_with?: string | null; // String
    affiliations_starts_with?: string | null; // String
    AND?: NexusGenInputs['CharacterWhereInput'][] | null; // [CharacterWhereInput!]
    bookAppearences_some?: NexusGenInputs['BookWhereInput'] | null; // BookWhereInput
    gameAppearences_some?: NexusGenInputs['GameWhereInput'] | null; // GameWhereInput
    id?: string | null; // ID
    id_contains?: string | null; // ID
    id_ends_with?: string | null; // ID
    id_gt?: string | null; // ID
    id_gte?: string | null; // ID
    id_in?: string[] | null; // [ID!]
    id_lt?: string | null; // ID
    id_lte?: string | null; // ID
    id_not?: string | null; // ID
    id_not_contains?: string | null; // ID
    id_not_ends_with?: string | null; // ID
    id_not_in?: string[] | null; // [ID!]
    id_not_starts_with?: string | null; // ID
    id_starts_with?: string | null; // ID
    name?: string | null; // String
    name_contains?: string | null; // String
    name_ends_with?: string | null; // String
    name_gt?: string | null; // String
    name_gte?: string | null; // String
    name_in?: string[] | null; // [String!]
    name_lt?: string | null; // String
    name_lte?: string | null; // String
    name_not?: string | null; // String
    name_not_contains?: string | null; // String
    name_not_ends_with?: string | null; // String
    name_not_in?: string[] | null; // [String!]
    name_not_starts_with?: string | null; // String
    name_starts_with?: string | null; // String
    profession?: string | null; // String
    profession_contains?: string | null; // String
    profession_ends_with?: string | null; // String
    profession_gt?: string | null; // String
    profession_gte?: string | null; // String
    profession_in?: string[] | null; // [String!]
    profession_lt?: string | null; // String
    profession_lte?: string | null; // String
    profession_not?: string | null; // String
    profession_not_contains?: string | null; // String
    profession_not_ends_with?: string | null; // String
    profession_not_in?: string[] | null; // [String!]
    profession_not_starts_with?: string | null; // String
    profession_starts_with?: string | null; // String
    race?: string | null; // String
    race_contains?: string | null; // String
    race_ends_with?: string | null; // String
    race_gt?: string | null; // String
    race_gte?: string | null; // String
    race_in?: string[] | null; // [String!]
    race_lt?: string | null; // String
    race_lte?: string | null; // String
    race_not?: string | null; // String
    race_not_contains?: string | null; // String
    race_not_ends_with?: string | null; // String
    race_not_in?: string[] | null; // [String!]
    race_not_starts_with?: string | null; // String
    race_starts_with?: string | null; // String
    region?: string | null; // String
    region_contains?: string | null; // String
    region_ends_with?: string | null; // String
    region_gt?: string | null; // String
    region_gte?: string | null; // String
    region_in?: string[] | null; // [String!]
    region_lt?: string | null; // String
    region_lte?: string | null; // String
    region_not?: string | null; // String
    region_not_contains?: string | null; // String
    region_not_ends_with?: string | null; // String
    region_not_in?: string[] | null; // [String!]
    region_not_starts_with?: string | null; // String
    region_starts_with?: string | null; // String
  }
  CharacterWhereUniqueInput: { // input type
    id?: string | null; // ID
  }
  GameCreateInput: { // input type
    developer: string; // String!
    genres?: NexusGenInputs['GameCreategenresInput'] | null; // GameCreategenresInput
    id?: string | null; // ID
    platforms?: NexusGenInputs['GameCreateplatformsInput'] | null; // GameCreateplatformsInput
    publisher: string; // String!
    releaseDate: string; // String!
    title: string; // String!
    website: string; // String!
  }
  GameCreateManyInput: { // input type
    connect?: NexusGenInputs['GameWhereUniqueInput'][] | null; // [GameWhereUniqueInput!]
    create?: NexusGenInputs['GameCreateInput'][] | null; // [GameCreateInput!]
  }
  GameCreategenresInput: { // input type
    set?: string[] | null; // [String!]
  }
  GameCreateplatformsInput: { // input type
    set?: string[] | null; // [String!]
  }
  GameWhereInput: { // input type
    AND?: NexusGenInputs['GameWhereInput'][] | null; // [GameWhereInput!]
    developer?: string | null; // String
    developer_contains?: string | null; // String
    developer_ends_with?: string | null; // String
    developer_gt?: string | null; // String
    developer_gte?: string | null; // String
    developer_in?: string[] | null; // [String!]
    developer_lt?: string | null; // String
    developer_lte?: string | null; // String
    developer_not?: string | null; // String
    developer_not_contains?: string | null; // String
    developer_not_ends_with?: string | null; // String
    developer_not_in?: string[] | null; // [String!]
    developer_not_starts_with?: string | null; // String
    developer_starts_with?: string | null; // String
    id?: string | null; // ID
    id_contains?: string | null; // ID
    id_ends_with?: string | null; // ID
    id_gt?: string | null; // ID
    id_gte?: string | null; // ID
    id_in?: string[] | null; // [ID!]
    id_lt?: string | null; // ID
    id_lte?: string | null; // ID
    id_not?: string | null; // ID
    id_not_contains?: string | null; // ID
    id_not_ends_with?: string | null; // ID
    id_not_in?: string[] | null; // [ID!]
    id_not_starts_with?: string | null; // ID
    id_starts_with?: string | null; // ID
    publisher?: string | null; // String
    publisher_contains?: string | null; // String
    publisher_ends_with?: string | null; // String
    publisher_gt?: string | null; // String
    publisher_gte?: string | null; // String
    publisher_in?: string[] | null; // [String!]
    publisher_lt?: string | null; // String
    publisher_lte?: string | null; // String
    publisher_not?: string | null; // String
    publisher_not_contains?: string | null; // String
    publisher_not_ends_with?: string | null; // String
    publisher_not_in?: string[] | null; // [String!]
    publisher_not_starts_with?: string | null; // String
    publisher_starts_with?: string | null; // String
    releaseDate?: string | null; // String
    releaseDate_contains?: string | null; // String
    releaseDate_ends_with?: string | null; // String
    releaseDate_gt?: string | null; // String
    releaseDate_gte?: string | null; // String
    releaseDate_in?: string[] | null; // [String!]
    releaseDate_lt?: string | null; // String
    releaseDate_lte?: string | null; // String
    releaseDate_not?: string | null; // String
    releaseDate_not_contains?: string | null; // String
    releaseDate_not_ends_with?: string | null; // String
    releaseDate_not_in?: string[] | null; // [String!]
    releaseDate_not_starts_with?: string | null; // String
    releaseDate_starts_with?: string | null; // String
    title?: string | null; // String
    title_contains?: string | null; // String
    title_ends_with?: string | null; // String
    title_gt?: string | null; // String
    title_gte?: string | null; // String
    title_in?: string[] | null; // [String!]
    title_lt?: string | null; // String
    title_lte?: string | null; // String
    title_not?: string | null; // String
    title_not_contains?: string | null; // String
    title_not_ends_with?: string | null; // String
    title_not_in?: string[] | null; // [String!]
    title_not_starts_with?: string | null; // String
    title_starts_with?: string | null; // String
    website?: string | null; // String
    website_contains?: string | null; // String
    website_ends_with?: string | null; // String
    website_gt?: string | null; // String
    website_gte?: string | null; // String
    website_in?: string[] | null; // [String!]
    website_lt?: string | null; // String
    website_lte?: string | null; // String
    website_not?: string | null; // String
    website_not_contains?: string | null; // String
    website_not_ends_with?: string | null; // String
    website_not_in?: string[] | null; // [String!]
    website_not_starts_with?: string | null; // String
    website_starts_with?: string | null; // String
  }
  GameWhereUniqueInput: { // input type
    id?: string | null; // ID
  }
}

export interface NexusGenEnums {
  BookOrderByInput: "author_ASC" | "author_DESC" | "id_ASC" | "id_DESC" | "pages_ASC" | "pages_DESC" | "publicationDate_ASC" | "publicationDate_DESC" | "publisher_ASC" | "publisher_DESC" | "title_ASC" | "title_DESC" | "type_ASC" | "type_DESC"
  CharacterOrderByInput: "affiliations_ASC" | "affiliations_DESC" | "id_ASC" | "id_DESC" | "name_ASC" | "name_DESC" | "profession_ASC" | "profession_DESC" | "race_ASC" | "race_DESC" | "region_ASC" | "region_DESC"
  GameOrderByInput: "developer_ASC" | "developer_DESC" | "id_ASC" | "id_DESC" | "publisher_ASC" | "publisher_DESC" | "releaseDate_ASC" | "releaseDate_DESC" | "title_ASC" | "title_DESC" | "website_ASC" | "website_DESC"
}

export interface NexusGenRootTypes {
  Book: { // root type
    author: string; // String!
    id: string; // ID!
    pages: number; // Int!
    publicationDate: string; // String!
    publisher: string; // String!
    title: string; // String!
    type: string; // String!
  }
  Character: { // root type
    affiliations: string; // String!
    id: string; // ID!
    name: string; // String!
    profession: string; // String!
    race: string; // String!
    region: string; // String!
  }
  Game: { // root type
    developer: string; // String!
    genres: string[]; // [String!]!
    id: string; // ID!
    platforms: string[]; // [String!]!
    publisher: string; // String!
    releaseDate: string; // String!
    title: string; // String!
    website: string; // String!
  }
  Mutation: {};
  Query: {};
  String: string;
  Int: number;
  Float: number;
  Boolean: boolean;
  ID: string;
}

export interface NexusGenAllTypes extends NexusGenRootTypes {
  BookCreateInput: NexusGenInputs['BookCreateInput'];
  BookCreateManyInput: NexusGenInputs['BookCreateManyInput'];
  BookWhereInput: NexusGenInputs['BookWhereInput'];
  BookWhereUniqueInput: NexusGenInputs['BookWhereUniqueInput'];
  CharacterCreateInput: NexusGenInputs['CharacterCreateInput'];
  CharacterWhereInput: NexusGenInputs['CharacterWhereInput'];
  CharacterWhereUniqueInput: NexusGenInputs['CharacterWhereUniqueInput'];
  GameCreateInput: NexusGenInputs['GameCreateInput'];
  GameCreateManyInput: NexusGenInputs['GameCreateManyInput'];
  GameCreategenresInput: NexusGenInputs['GameCreategenresInput'];
  GameCreateplatformsInput: NexusGenInputs['GameCreateplatformsInput'];
  GameWhereInput: NexusGenInputs['GameWhereInput'];
  GameWhereUniqueInput: NexusGenInputs['GameWhereUniqueInput'];
  BookOrderByInput: NexusGenEnums['BookOrderByInput'];
  CharacterOrderByInput: NexusGenEnums['CharacterOrderByInput'];
  GameOrderByInput: NexusGenEnums['GameOrderByInput'];
}

export interface NexusGenFieldTypes {
  Book: { // field return type
    author: string; // String!
    id: string; // ID!
    pages: number; // Int!
    publicationDate: string; // String!
    publisher: string; // String!
    title: string; // String!
    type: string; // String!
  }
  Character: { // field return type
    affiliations: string; // String!
    bookAppearences: NexusGenRootTypes['Book'][] | null; // [Book!]
    gameAppearences: NexusGenRootTypes['Game'][] | null; // [Game!]
    id: string; // ID!
    name: string; // String!
    profession: string; // String!
    race: string; // String!
    region: string; // String!
  }
  Game: { // field return type
    developer: string; // String!
    genres: string[]; // [String!]!
    id: string; // ID!
    platforms: string[]; // [String!]!
    publisher: string; // String!
    releaseDate: string; // String!
    title: string; // String!
    website: string; // String!
  }
  Mutation: { // field return type
    createBook: NexusGenRootTypes['Book']; // Book!
    createCharacter: NexusGenRootTypes['Character']; // Character!
    createGame: NexusGenRootTypes['Game']; // Game!
  }
  Query: { // field return type
    book: NexusGenRootTypes['Book'] | null; // Book
    books: NexusGenRootTypes['Book'][]; // [Book!]!
    character: NexusGenRootTypes['Character'] | null; // Character
    characters: NexusGenRootTypes['Character'][]; // [Character!]!
    game: NexusGenRootTypes['Game'] | null; // Game
    games: NexusGenRootTypes['Game'][]; // [Game!]!
  }
}

export interface NexusGenArgTypes {
  Character: {
    bookAppearences: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
      orderBy?: NexusGenEnums['BookOrderByInput'] | null; // BookOrderByInput
      skip?: number | null; // Int
      where?: NexusGenInputs['BookWhereInput'] | null; // BookWhereInput
    }
    gameAppearences: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
      orderBy?: NexusGenEnums['GameOrderByInput'] | null; // GameOrderByInput
      skip?: number | null; // Int
      where?: NexusGenInputs['GameWhereInput'] | null; // GameWhereInput
    }
  }
  Mutation: {
    createBook: { // args
      data: NexusGenInputs['BookCreateInput']; // BookCreateInput!
    }
    createCharacter: { // args
      data: NexusGenInputs['CharacterCreateInput']; // CharacterCreateInput!
    }
    createGame: { // args
      data: NexusGenInputs['GameCreateInput']; // GameCreateInput!
    }
  }
  Query: {
    book: { // args
      where: NexusGenInputs['BookWhereUniqueInput']; // BookWhereUniqueInput!
    }
    books: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
      orderBy?: NexusGenEnums['BookOrderByInput'] | null; // BookOrderByInput
      skip?: number | null; // Int
      where?: NexusGenInputs['BookWhereInput'] | null; // BookWhereInput
    }
    character: { // args
      where: NexusGenInputs['CharacterWhereUniqueInput']; // CharacterWhereUniqueInput!
    }
    characters: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
      orderBy?: NexusGenEnums['CharacterOrderByInput'] | null; // CharacterOrderByInput
      skip?: number | null; // Int
      where?: NexusGenInputs['CharacterWhereInput'] | null; // CharacterWhereInput
    }
    game: { // args
      where: NexusGenInputs['GameWhereUniqueInput']; // GameWhereUniqueInput!
    }
    games: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
      orderBy?: NexusGenEnums['GameOrderByInput'] | null; // GameOrderByInput
      skip?: number | null; // Int
      where?: NexusGenInputs['GameWhereInput'] | null; // GameWhereInput
    }
  }
}

export interface NexusGenAbstractResolveReturnTypes {
}

export interface NexusGenInheritedFields {}

export type NexusGenObjectNames = "Book" | "Character" | "Game" | "Mutation" | "Query";

export type NexusGenInputNames = "BookCreateInput" | "BookCreateManyInput" | "BookWhereInput" | "BookWhereUniqueInput" | "CharacterCreateInput" | "CharacterWhereInput" | "CharacterWhereUniqueInput" | "GameCreateInput" | "GameCreateManyInput" | "GameCreategenresInput" | "GameCreateplatformsInput" | "GameWhereInput" | "GameWhereUniqueInput";

export type NexusGenEnumNames = "BookOrderByInput" | "CharacterOrderByInput" | "GameOrderByInput";

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = "Boolean" | "Float" | "ID" | "Int" | "String";

export type NexusGenUnionNames = never;

export interface NexusGenTypes {
  context: any;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  allTypes: NexusGenAllTypes;
  inheritedFields: NexusGenInheritedFields;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractResolveReturn: NexusGenAbstractResolveReturnTypes;
}