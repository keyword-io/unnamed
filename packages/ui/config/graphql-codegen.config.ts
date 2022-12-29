import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "../server/src/generated/schema.graphql",
  documents: ["src/graphql/*.graphql"],
  generates: {
    "src/generated/react-hooks.ts": {
      plugins: ['typescript', 'typescript-operations', 'typescript-react-apollo'],
      config: {
        withHooks: true,
      }
    }
  }
};

export default config;
