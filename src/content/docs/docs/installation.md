---
title: "Installation"
description: "How to install tokentop on macOS, Linux, and Windows."
---

tokentop is distributed as a single binary for most platforms. You can install it using your favorite package manager or with a quick install script.

## macOS (Homebrew)

The recommended way to install tokentop on macOS is through Homebrew:

```bash
brew install tokentopapp/tap/tokentop
```

## Linux and macOS (Install Script)

For a platform-independent installation, use the following curl command:

```bash
curl -fsSL https://raw.githubusercontent.com/tokentopapp/tokentop/main/scripts/install.sh | sh
```

This script will detect your operating system and architecture, download the correct binary, and place it in your path.

## Windows (Scoop)

Windows users can install tokentop using the Scoop package manager:

```bash
scoop bucket add tokentop https://github.com/tokentopapp/scoop-tokentop
scoop install tokentop
```

## npm / Bun (Cross-platform)

If you have Node.js or Bun installed, you can use the package manager directly:

```bash
# Using Bun (Recommended)
bunx @tokentop/ttop

# Using npm
npx @tokentop/ttop
```

To install it globally:

```bash
npm install -g @tokentop/ttop
```

## Manual Downloads

You can also download pre-compiled binaries for all supported platforms directly from our [GitHub Releases](https://github.com/tokentopapp/tokentop/releases). Each release includes binaries for macOS (Apple Silicon), Linux (x86/ARM), and Windows. Intel-based Macs are not supported for binary downloads — use the [npm/Bun method](#npm--bun-cross-platform) instead.

After downloading, make sure to grant the binary execution permissions on Unix-like systems:

```bash
chmod +x ttop
mv ttop /usr/local/bin/
```
