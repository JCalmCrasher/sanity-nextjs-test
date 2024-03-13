import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
// import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemaTypes";

export default defineConfig({
 name: "default",
 title: "Sanity Next.js Studio",

 projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID as string,
 dataset: "production",
 basePath: "/studio",

 plugins: [structureTool()],

 schema: {
  types: schemaTypes
 }
});
