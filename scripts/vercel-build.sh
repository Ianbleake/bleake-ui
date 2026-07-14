#!/bin/bash
# Build script for Vercel — builds all packages then Storybook
# Turbo is temporarily removed to prevent Vercel from detecting it

set -e

# Temporarily move turbo.json so Vercel doesn't detect Turbo
if [ -f turbo.json ]; then
	cp turbo.json turbo.json.bak
	rm turbo.json
fi

# Restore turbo.json on exit
trap 'if [ -f turbo.json.bak ]; then mv turbo.json.bak turbo.json; fi' EXIT

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