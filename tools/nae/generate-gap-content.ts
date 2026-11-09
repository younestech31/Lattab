/**
 * @deprecated The former generator wrote unsafe code-keyed descriptions that
 * could be attached to unrelated French source records.
 *
 * No translations are generated or written here anymore. The command is
 * retained as a read-only compatibility entry point and delegates to the
 * source-bound translation audit.
 */
import "./audit-translations";

console.warn(
  "Deprecated: this command is read-only. Use `bun run nae:audit-translations`.",
);
