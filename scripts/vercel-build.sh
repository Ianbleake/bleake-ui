#!/bin/bash
# Build script for Vercel — builds all packages then Storybook
# Turbo is removed to prevent Vercel from detecting it and changing cwd

set -e

# Remove turbo.json so Vercel doesn't detect Turbo and change cwd
rm -rf turbo.json

# Build packages in dependency order
echo "Building @bleakedev/bleake-core..."
cd packages/core && bun run build && cd ../..

echo "Building @bleakedev/bleake-components..."
cd packages/components && bun run build && cd ../..

echo "Building @bleakedev/bleake-styles..."
cd packages/styles && bun run build && cd ../..

echo "Building @bleakedev/bleake-ui (umbrella)..."
cd packages/bleake-ui && bun run build && cd ../..

echo "Building Storybook..."
bunx storybook build --config-dir .storybook