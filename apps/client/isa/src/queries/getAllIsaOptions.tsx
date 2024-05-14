import { graphql } from '@isa-exercise/state'

export const GETALLISAOPTIONS = graphql(`
    query getAllIsaOptions {
  getAllIsaOptions {
    id
    name
  }
}
`)