export default {
  rootDir: ".",
  roots: ["<rootDir>"],
  testMatch: ["**/*.test.ts(x)?", "!**/api/**/*.test.ts"],
  transform: {
    "^.+\\.tsx?$": "babel-jest",
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  setupFiles: ["dotenv/config"],
  moduleNameMapper: {
    "@/(.*)$": "<rootDir>/src/$1",
  },
  testEnvironment: "jsdom",
};
