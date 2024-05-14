import { graphql } from '@isa-exercise/state'

export const CREATEISA = graphql(`
    mutation createIsa($createIsaInput:CreateIsaInput!){
  createIsa(createIsaInput:$createIsaInput) {
    userId
    savings
    isaOptionId
  }
}
`)