const nxPreset = require('@nx/jest/preset').default;
delete nxPreset.testMatch;

module.exports = { ...nxPreset };
