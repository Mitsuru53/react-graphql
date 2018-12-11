import gql from "graphql-tag";

export const ME = gql`
    query me {
        user(login: "Mitsuru53") {
            name
            avatarUrl
        }
    }
`;
