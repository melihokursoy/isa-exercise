import { graphql } from '../../../gql/gql'

export const LOGIN = graphql(`
    query login($email:String!, $password:String!) {
    login(email:$email, password: $password ) {
        access_token
    }
    }
`)