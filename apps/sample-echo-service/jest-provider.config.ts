export default {
  displayName: 'sample-echo-service',
  preset: '../../jest.preset.js',
  coverageDirectory: '../../coverage/apps/sample-echo-service',
  testRegex: '.provider.spec.ts$',
  passWithNoTests: true,
  testEnvironment: 'node',
};
