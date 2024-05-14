import { graphql } from '@isa-exercise/state'

export const GETMYISA = graphql(`
    query getMyIsa {
  getMyIsa {
    savings
    isaOptionId
  }
}
`)