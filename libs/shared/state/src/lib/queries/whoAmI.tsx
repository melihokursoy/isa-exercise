import { graphql } from '../../../gql/gql';

export const WHOAMI = graphql(`
  query whoAmI {
    whoAmI {
      id
      fullName
      email
    }
  }
`);
