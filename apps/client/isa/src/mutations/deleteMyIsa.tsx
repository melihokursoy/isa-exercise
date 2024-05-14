import { graphql } from '@isa-exercise/state'

export const DELETEMYISA = graphql(`
    mutation deleteMyIsa{
  deleteMyIsa {
		userId
        savings
        isaOptionId
  }
}
`)