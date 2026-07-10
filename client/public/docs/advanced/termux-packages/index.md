# Building Packages

## Using pkg (Pre-built)

```bash
# Search available packages
pkg search python
pkg search web

# Install from Termux repository
pkg install python nodejs git
```

## Compiling from Source

```bash
# Install build tools
pkg install build-essential
pkg install clang make cmake

# Typical build process
git clone https://github.com/user/project.git
cd project
./configure --prefix=$PREFIX
make
make install
```

## Termux-Packages Repository

The official Termux package repository:

```bash
# View package build scripts
git clone https://github.com/termux/termux-packages.git
cd termux-packages

# Package structure
packages/
├── python/
│   ├── build.sh
│   └── patches/
├── nodejs/
│   ├── build.sh
│   └── patches/
└── git/
    └── build.sh
```

## Creating Custom Packages

```bash
# Create package directory structure
mkdir -p ~/termux-packages/packages/mytool

# Create build.sh
cat > ~/termux-packages/packages/mytool/build.sh << 'EOF'
TERMUX_PKG_HOMEPAGE=https://example.com
TERMUX_PKG_DESCRIPTION="My custom tool"
TERMUX_PKG_LICENSE="MIT"
TERMUX_PKG_VERSION=1.0.0
TERMUX_PKG_SRCURL=https://github.com/user/mytool/archive/v${TERMUX_PKG_VERSION}.tar.gz
TERMUX_PKG_DEPENDS="libandroid-support"
TERMUX_PKG_BUILD_IN_SRC=true

termux_step_make() {
    make PREFIX=$TERMUX_PREFIX
}
EOF
```

## Patching Packages

```bash
# Apply patches during build
mkdir -p packages/mytool/patches

# Create a patch
cat > packages/mytool/patches/fix-android.patch << 'EOF'
--- a/Makefile
+++ b/Makefile
@@ -1,5 +1,5 @@
-CC=gcc
+CC=clang
 PREFIX=/usr/local
-PREFIX?=/usr/local
+PREFIX?=/data/data/com.termux/files/usr
EOF
```

## Useful Build Tips

```bash
# Set compiler flags for Termux
export CFLAGS="-O2 -fPIE"
export LDFLAGS="-pie"

# Use Termux's prefix
./configure --prefix=$PREFIX

# For Python packages with C extensions
CFLAGS="-O2" pip install numpy

# Build static binaries
export CFLAGS="-static"
```