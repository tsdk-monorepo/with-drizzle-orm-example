/** @type {import('tsdk').TSDKConfig} */
module.exports = {
  packageDir: "../",
  packageName: "fe-sdk",
  baseDir: "./src",
  entityLibName: "DrizzleORM",
  dataHookLib: "ReactQuery",
  entityExt: "entity",
  apiconfExt: "apiconf",
  shareExt: "shared",
  sharedDirs: ["./src/shared"],
  removeFields: [],
  monorepoRoot: "../",
  dependencies: {
    "drizzle-orm": "^0.29.1",
  },
  devDependencies: {
    "@types/better-sqlite3": "^7.6.8",
  },
};
