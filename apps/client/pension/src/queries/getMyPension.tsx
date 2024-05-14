import { graphql } from '@isa-exercise/state'

export const GETMYPENSION = graphql(`
    query getMyPension {
  getMyPension {
    employer
    savings
  }
}
`)