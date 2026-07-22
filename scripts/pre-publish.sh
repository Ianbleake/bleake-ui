#!/bin/bash
# Pre-publish: replace workspace:* with real version numbers
# This runs before changeset publish to ensure the tarball has real versions

set -e

ROOT_DIR="$(cd "$(dirname "$0")/.." && pwd)"

# Get current versions from each package
CORE_VERSION=$(node -p "require('$ROOT_DIR/packages/core/package.json').version")
COMPONENTS_VERSION=$(node -p "require('$ROOT_DIR/packages/components/package.json').version")
STYLES_VERSION=$(node -p "require('$ROOT_DIR/packages/styles/package.json').version")
UI_VERSION=$(node -p "require('$ROOT_DIR/packages/bleake-ui/package.json').version")

echo "Replacing workspace:* with real versions:"
echo "  core@${CORE_VERSION}, components@${COMPONENTS_VERSION}, styles@${STYLES_VERSION}"

# Replace workspace:* with real versions in each package.json
# Use sed to replace in-place

# bleake-ui depends on core, components, styles
sed -i '' "s|\"@bleakedev/bleake-core\": \"workspace:\*\"|\"@bleakedev/bleake-core\": \"^${CORE_VERSION}\"|g" "$ROOT_DIR/packages/bleake-ui/package.json"
sed -i '' "s|\"@bleakedev/bleake-components\": \"workspace:\*\"|\"@bleakedev/bleake-components\": \"^${COMPONENTS_VERSION}\"|g" "$ROOT_DIR/packages/bleake-ui/package.json"
sed -i '' "s|\"@bleakedev/bleake-styles\": \"workspace:\*\"|\"@bleakedev/bleake-styles\": \"^${STYLES_VERSION}\"|g" "$ROOT_DIR/packages/bleake-ui/package.json"

# components depends on core
sed -i '' "s|\"@bleakedev/bleake-core\": \"workspace:\*\"|\"@bleakedev/bleake-core\": \"^${CORE_VERSION}\"|g" "$ROOT_DIR/packages/components/package.json"

# styles depends on core and components
sed -i '' "s|\"@bleakedev/bleake-core\": \"workspace:\*\"|\"@bleakedev/bleake-core\": \"^${CORE_VERSION}\"|g" "$ROOT_DIR/packages/styles/package.json"
sed -i '' "s|\"@bleakedev/bleake-components\": \"workspace:\*\"|\"@bleakedev/bleake-components\": \"^${COMPONENTS_VERSION}\"|g" "$ROOT_DIR/packages/styles/package.json"

echo "Done replacing workspace:* with real versions"