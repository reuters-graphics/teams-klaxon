---
'@reuters-graphics/teams-klaxon': major
---

Breaking changes for v2.0.0:

- **Breaking**: Library now exclusively uses the attachments format for all Teams Workflows webhooks
- **Breaking**: Removed automatic webhook type detection logic for deprecated Incoming Webhooks
- **Breaking**: Updated all dependencies to latest versions, dropping support for older Node versions (now requires Node >= 18.0.0)

New features and improvements:

- Migrated test suite from Mocha to vitest for better ESM support
- Added GitHub Actions workflows for automated CI/CD
- Added changesets for version management
- Added VSCode workspace settings for automatic code formatting
- Updated to use @reuters-graphics/yaks-* packages for linting, formatting, and TypeScript configuration
- Removed generated docs from git tracking (now built in CI)
- Added comprehensive test coverage including Teams webhook posting tests
