module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    setupFilesAfterEnv: ['./src/setupTests.ts'],
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
    },
};
