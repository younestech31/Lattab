import { JsonLdScript } from '@/components/schema';

export async function SchemaScriptLoader({ schemas = [] }: { schemas?: Record<string, unknown>[] }) {
  return (
    <>
      {schemas.map((schema, index) => (
        <JsonLdScript key={index} schema={schema} />
      ))}
    </>
  );
}
