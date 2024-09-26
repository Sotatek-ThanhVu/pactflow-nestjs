const { Publisher } = require('@pact-foundation/pact-cli');

const GIT_COMMIT = 'develop';
const opts = {
  pactBroker: process.env.PACT_BROKER_BASE_URL,
  pactBrokerToken: process.env.PACT_BROKER_TOKEN,
  branch: GIT_COMMIT,
  consumerVersion: `${GIT_COMMIT}-${new Date().toISOString()}`,
  pactFilesOrDirs: ['apps/sample-nx-project/pacts'],
};
new Publisher(opts).publish();
