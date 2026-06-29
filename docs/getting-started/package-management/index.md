# Package Management

## Using pkg (Recommended)

```bash
# Update package lists
pkg update

# Upgrade all packages
pkg upgrade

# Install a package
pkg install python

# Search for packages
pkg search database

# Show package info
pkg show python

# List installed packages
pkg list-installed

# Remove a package
pkg uninstall python

# Remove packages and dependencies
pkg autoremove
```

## Using apt (Alternative)

```bash
# Update
apt update

# Upgrade
apt upgrade

# Install
apt install python

# Search
apt search python

# Remove
apt remove python
apt purge python  # Remove configs too
```

## Common Packages

### Development Tools

```bash
# Programming languages
pkg install python
pkg install nodejs
pkg install clang
pkg install rust
pkg install go
pkg install php
pkg install ruby
pkg install perl
pkg install lua
pkg install openjdk-17
```

### Command Line Utilities

```bash
# Text editors
pkg install vim
pkg install nano
pkg install emacs
pkg install neovim

# File management
pkg install ranger
pkg install mc
pkg install tree
pkg install fd
pkg install ripgrep
pkg install bat
pkg install exa
pkg install fzf

# Networking
pkg install curl
pkg install wget
pkg install openssh
pkg install nmap
pkg install net-tools
pkg install traceroute

# System tools
pkg install tmux
pkg install screen
pkg install htop
pkg install glances
pkg install neofetch
pkg install which
pkg install man
```

## Package Sources

```bash
# View configured repositories
cat $PREFIX/etc/apt/sources.list

# Add a custom repository (if available)
# pkg add-repo <name> <url>
```

## Tips

```bash
# Install without prompts
pkg install -y python

# Reinstall corrupted package
pkg reinstall python

# Clean package cache
apt clean
apt autoclean

# Check for held packages
apt-mark showhold
```