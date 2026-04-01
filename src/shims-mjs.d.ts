// Allow importing .mjs modules (temporary workaround for TS/Vite resolution differences)
declare module "*.mjs" {
  const value: any
  export default value
}
