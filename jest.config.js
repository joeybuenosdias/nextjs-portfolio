module.exports = {
	collectCoverage: true,
	collectCoverageFrom: [
		'**/*.{js,jsx}',
		'!**/node_modules/**',
		'!**/.next/**',
	],
	setupFilesAfterEnv: ['./jest.setup.js'],
	moduleNameMapper: {
		'^@components(.*)$': '<rootDir>/components$1',
		'^@themes(.*)$': '<rootDir>/themes$1',
	},
}
