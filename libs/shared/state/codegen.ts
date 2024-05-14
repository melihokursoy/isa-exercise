import { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
    schema: 'http://localhost:3000/graphql',
    config: {
        exposeDocument: true,
        exposeQueryKeys: true,
    },
    generates: {
        './libs/shared/state/gql/': {
            documents: ['**/src/**/*.tsx'],
            preset: 'client',
            plugins: []
        },
    },
}

export default config
