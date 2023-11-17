import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "./sanity/schemas";

const config = defineConfig({
  projectId: "kh93woee",
  dataset: "production",
  title: "Personal Website",
  apiVersion: "2023-09-10",
  useCdn: true,
  basePath: "/admin",
  plugins: [deskTool()],
  schema: { types: schemas },
});

export default config;
