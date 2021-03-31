module.exports = {
	collectCoverage: true,
	collectCoverageFrom: [
		'**/*.{js,jsx}',
		'!**/node_modules/**',
		'!**/.next/**',
		'!**/coverage/**',
		'!**/pages/**',
		'!**/themes/**',
		'!./*.js',
	],
	setupFilesAfterEnv: ['./jest.setup.js'],
	moduleNameMapper: {
		'^@components(.*)$': '<rootDir>/components$1',
		'^@themes(.*)$': '<rootDir>/themes$1',
	},
}
