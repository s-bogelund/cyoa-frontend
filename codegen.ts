import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
	overwrite: true,
	schema: 'http://localhost:5186/graphql/',
	documents: 'src/api/**/*.ts', // Adjusted to a more specific path
	generates: {
		'src/gql/': {
			preset: 'client',
			plugins: ['typescript', 'typescript-operations', 'typescript-react-apollo'],
			config: {
				withHooks: true,
				withHOC: false,
				withComponent: false,
			},
		},
		'./graphql.schema.json': {
			plugins: ['introspection'],
		},
	},
};

export default config;
