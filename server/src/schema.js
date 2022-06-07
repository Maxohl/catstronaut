const {gql} = require('apollo-server');

const typeDefs = gql`
    # Schema definitions go here

    type Query {
        "Get tracks array for homepage grid"
        tracksForHome: [Track!]!
        "Fetch a specific track, provided a track's ID"
        track(id: ID!): Track
    }

    "A track is a group of Modules that teaches about a specific topic"
    type Track {
        #Fields go here
        id: ID!
        title: String!
        author: Author!
        thumbnail: String
        length: Int
        modulesCount: Int
        description: String
        numberOfViews: Int
        modules: [Module!]!
    }

    "A module is a single unit of teaching. Multiple modules compose a track"
    type Module {
        id: ID!
        title: String!
        length: Int
    }

    "Author of a complete Track or a Module"
    type Author {
        #Fields go here
        id: ID!
        name: String!
        photo: String
    }

    "Here starts mutations"

    type Mutation {
        incrementTrackViews(id: ID!) : IncrementTrackViewsResponse!
    }

    type IncrementTrackViewsResponse {
        "Similar to HTTP status code, represents the status of the mutation"
        code: Int!

        "Indicates whether the mutation was successful"
        success: Boolean!

        "human-readable message for the UI"
        message: String!

        "Newly updated track after a successful mutation"
        track: Track
    }
`;

module.exports = typeDefs;