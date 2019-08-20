# Witcher API

The Witcher API is a GraphQL API based on the Witcher Universe created by Andrezj Sapkowski and made popular world-wide by game developers CD Projekt Red.

### Character Schema 

| Key             |    Type       | Description                                         |
| --------------- | ------------- | --------------------------------------------------- |
| id              | id            | Unique ID pertaining to a specific Character        |
| name            | string        | Name of a given Character                           |
| race            | string        | The race of a Character (Human/Dwarf/Elf/etc)       |
| profession      | string        | The profession of a Character                       |
| affiliation     | string        | Any organization affiliated with a Character        |
| region          | string        | The region a Character was born, or can be found in |
| gameAppearences | array of Games| The Games that a Character can be found in          |
| bookAppearences | array of Books| The Books that a Character can be found in          | 

### Game Schema 

| Key             |    Type         | Description                                                        |
| --------------- | --------------- | ------------------------------------------------------------------ |
| id              | id              | Unique ID pertaining to a specific Game                            |
| title           | string          | Title of a given Game                                              |
| platforms       | array of strings| An array containing strings denoting which platforms offer a game  |
| genres          | array of strings| An array containing strings denoting which genres a game belongs to|
| releaseDate     | string          | Year a game was released by the publisher                          |
| publisher       | string          | The company responsible for a publishing the game                  |
| developer       | string          | The company responsible for developing the game                    |
| website         | string          | The website link affiliated with the game                          |

### Book Schema 

| Key             |    Type         | Description                                                        |
| --------------- | --------------- | ------------------------------------------------------------------ |
| id              | id              | Unique ID pertaining to a specific Book                            |
| title           | string          | Title of a given Book                                              |
| author          | string          | Author of a given Book                                             |
| publisher       | string          | The company responsible for a publishing the book                  |
| publicationDate | string          | Year a book was released by the publisher                          |
| type            | string          | Denotes the type of book (Novel/Story Collection/Reference)        |
| pages           | int             | The number of pages of a given book                                |

### Data Models

```
type Character {
  id: ID! @id
  name: String!
  race: String!
  profession: String!
  affiliations: String!
  region: String!
  gameAppearences: [Game!]! @relation(link: INLINE)
  bookAppearences: [Book!]! @relation(link: INLINE)
}

type Game {
    id: ID! @id
    title: String!
    platforms: [String!]!
    genres: [String!]!
    releaseDate: String!
    publisher: String!
    developer: String!
    website: String!
}

type Book {
    id: ID! @id
    title: String!
    author: String!
    publisher: String!
    publicationDate: String!
    type: String!
    pages: Int!
}
```



