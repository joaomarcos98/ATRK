module.exports = {
    testEnvironment: "jsdom",
    testPathIgnorePatterns: ["/node_modules/", "/.next/"],
    collectCoverage: true,
    collectCoverageFrom: ["src/**/*.ts(x)?", "!src/**/*.stories.ts(x)"],
    modulePaths: ['<rootDir>/src/'],
    setupFilesAfterEnv: ["<rootDir>/test/setup.ts"]
};
