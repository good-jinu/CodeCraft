export default {
  rootDir: '.',
  roots: ['<rootDir>'],
  testMatch: ['**/*.test.ts(x)?'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  setupFiles: ['dotenv/config'],
  moduleNameMapper: {
    '@/(.*)$': '<rootDir>/src/$1',
  }
};
