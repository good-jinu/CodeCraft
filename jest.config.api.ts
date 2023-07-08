export default {
  rootDir: ".",
  roots: ["<rootDir>"],
  testMatch: ["**/api/**/*.test.ts"],
  transform: {
    "^.+\\.tsx?$": "babel-jest",
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  setupFiles: ["dotenv/config"],
  moduleNameMapper: {
    "@/(.*)$": "<rootDir>/src/$1",
  },
};
