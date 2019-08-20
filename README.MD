# Witcher API

> The Witcher API is a GraphQL API based on the Witcher Universe created by Andrezj Sapkowski and made popular world-wide by game developers CD Projekt Red.

<https://www.witcherapi.com/graphql>

> You can get a little...

```
query geralt {
  characters(where: {name: "Geralt of Rivia"}) {
    id
    name
  }
}
```

> returns...

```
{
  "data": {
    "characters": {
      "id": "5d5ae34a799ab50008ba95a0",
      "name": "Geralt of Rivia"
    }
  }
}
```

> or a lot

```
query {
  characters(where: {name: "Geralt of Rivia"}) {
    id
    name
    race
    profession
    affiliations
    region
    gameAppearences {
      id
      title
      platforms
      genres
      releaseDate
      publisher
      developer
      website
    }
    bookAppearences {
      id
      title
      author
      publisher
      publicationDate
      type
      pages
    }
  }
}
```

> returns

```
{
  "data": {
    "characters": [
      {
        "id": "5d5ae34a799ab50008ba95a0",
        "name": "Geralt of Rivia",
        "race": "Human Witcher",
        "profession": "Witcher",
        "affiliations": "School of the Wolf",
        "region": "Rivia",
        "gameAppearences": [
          {
            "id": "5d5ae197799ab50008ba959d",
            "title": "The Witcher",
            "platforms": [
              "Microsoft Windows",
              "OS X"
            ],
            "genres": [
              "Action-RPG"
            ],
            "releaseDate": "2007",
            "publisher": "Atari",
            "developer": "CD Projekt Red",
            "website": "https://thewitcher.com/en/witcher1"
          },
          {
            "id": "5d5ae1fd799ab50008ba959e",
            "title": "The Witcher II: Assassins of Kings",
            "platforms": [
              "Microsoft Windows",
              "OS X",
              "Linux",
              "XBOX 360"
            ],
            "genres": [
              "Action-RPG"
            ],
            "releaseDate": "2011",
            "publisher": "CD Projekt",
            "developer": "CD Projekt Red",
            "website": "https://thewitcher.com/en/witcher2"
          },
          {
            "id": "5d5ae230799ab50008ba959f",
            "title": "The Witcher III: Wild Hunt",
            "platforms": [
              "Microsoft Windows",
              "OS X",
              "Linux",
              "XBOX ONE",
              "PS4",
              "Switch"
            ],
            "genres": [
              "Action-RPG"
            ],
            "releaseDate": "2015",
            "publisher": "CD Projekt",
            "developer": "CD Projekt Red",
            "website": "https://thewitcher.com/en/witcher2"
          }
        ],
        "bookAppearences": [
          {
            "id": "5d5ad7e9799ab50008ba958c",
            "title": "The Last Wish",
            "author": "Andrzej Sapkowski",
            "publisher": "superNOWA",
            "publicationDate": "1993",
            "type": "Story Collection",
            "pages": 288
          },
          {
            "id": "5d5ad81f799ab50008ba958d",
            "title": "Sword of Destiny",
            "author": "Andrzej Sapkowski",
            "publisher": "superNOWA",
            "publicationDate": "1992",
            "type": "Story Collection",
            "pages": 384
          },
          {
            "id": "5d5ad84b799ab50008ba958e",
            "title": "Blood of Elves",
            "author": "Andrzej Sapkowski",
            "publisher": "superNOWA",
            "publicationDate": "1994",
            "type": "Novel",
            "pages": 320
          },
          {
            "id": "5d5ad871799ab50008ba958f",
            "title": "Time of Contempt",
            "author": "Andrzej Sapkowski",
            "publisher": "superNOWA",
            "publicationDate": "1995",
            "type": "Novel",
            "pages": 352
          },
          {
            "id": "5d5ad8a8799ab50008ba9590",
            "title": "Baptism of Fire",
            "author": "Andrzej Sapkowski",
            "publisher": "superNOWA",
            "publicationDate": "1996",
            "type": "Novel",
            "pages": 352
          },
          {
            "id": "5d5ad950799ab50008ba9591",
            "title": "The Tower of the Swallow",
            "author": "Andrzej Sapkowski",
            "publisher": "superNOWA",
            "publicationDate": "1997",
            "type": "Novel",
            "pages": 464
          },
          {
            "id": "5d5ad96e799ab50008ba9592",
            "title": "The Lady of the Lake",
            "author": "Andrzej Sapkowski",
            "publisher": "superNOWA",
            "publicationDate": "1999",
            "type": "Novel",
            "pages": 544
          },
          {
            "id": "5d5ad992799ab50008ba9593",
            "title": "Season of Storms",
            "author": "Andrzej Sapkowski",
            "publisher": "superNOWA",
            "publicationDate": "2013",
            "type": "Novel",
            "pages": 384
          },
          {
            "id": "5d5ada1d799ab50008ba9594",
            "title": "The World of the Witcher",
            "author": "Marcin Batylda",
            "publisher": "Dark Horse Comics",
            "publicationDate": "2015",
            "type": "Reference",
            "pages": 184
          }
        ]
      }
    ]
  }
}
```

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
```
```
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
```
```
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



