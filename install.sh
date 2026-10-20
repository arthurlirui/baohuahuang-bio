#!/bin/bash
# Install Go so Vercel's Hugo runtime can fetch Hugo Modules.
# Vercel's Hugo builder does not ship Go, and this project uses
# Hugo Modules (blox-plugin-netlify, blox-tailwind), so we need it.
set -e

GO_VERSION="1.23.0"
GO_TARBALL="go${GO_VERSION}.linux-amd64.tar.gz"

echo "==> Downloading Go ${GO_VERSION}"
curl -fsSL "https://go.dev/dl/${GO_TARBALL}" -o "/tmp/${GO_TARBALL}"

echo "==> Extracting Go to /tmp/go"
tar -C /tmp -xzf "/tmp/${GO_TARBALL}"

export PATH="${PATH}:/tmp/go/bin"
export GOPATH="${HOME}/go"
export PATH="${PATH}:${GOPATH}/bin"

echo "==> Go version:"
go version

echo "==> Fetching Hugo Modules"
hugo mod get

echo "==> Install step complete"
