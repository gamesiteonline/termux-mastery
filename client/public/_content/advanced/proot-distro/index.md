# Proot Distro

![Shell Comparison](../../../assets/images/screenshots/shell-comparison.svg)
*Proot-distro Linux environments*

Run full Linux distributions inside Termux using proot.

## Installation

```bash
# Install proot-distro
pkg install proot-distro

# List available distributions
proot-distro list
# Alpine, Arch, Debian, Fedora, Manjaro, Ubuntu, Void, etc.
```

## Install a Distribution

```bash
# Install Ubuntu
proot-distro install ubuntu

# Install Debian
proot-distro install debian

# Install Arch Linux
proot-distro install archlinux
```

## Usage

```bash
# Login to Ubuntu
proot-distro login ubuntu

# Run a single command
proot-distro login ubuntu -- apt update

# Login as specific user
proot-distro login ubuntu --user myuser

# Login with custom home
proot-distro login ubuntu --termux-home

# List installed distros
proot-distro list
```

## Installing GUI Apps (X11)

```bash
# Install Termux:X11 from F-Droid
# https://f-droid.org/packages/com.termux.x11

# In Termux
pkg install x11-repo
pkg install termux-x11

# In proot
proot-distro login ubuntu
apt install xfce4 firefox

# Run GUI
# In Termux: termux-x11 &
# In proot: DISPLAY=:0 startxfce4 &
```

## Installing Development Tools

```bash
# Inside Ubuntu/Debian proot
apt update
apt install build-essential
apt install python3 python3-pip
apt install nodejs npm
apt install git curl wget
apt install vim neovim
apt install tmux
```

## Backup and Restore

```bash
# Backup a distribution
tar -czf ubuntu-backup.tar.gz -C ~/../usr/var/lib/proot-distro/installed-rootfs/ubuntu .

# Restore
proot-distro remove ubuntu
tar -xzf ubuntu-backup.tar.gz -C ~/../usr/var/lib/proot-distro/installed-rootfs/ubuntu/
```

## Troubleshooting

| Issue | Fix |
|-------|-----|
| "No such file or directory" | Reinstall: `proot-distro reset <distro>` |
| Permission denied | Login as root: `proot-distro login <distro> --user root` |
| Out of space | Clean apt cache inside proot: `apt clean` |
| Slow performance | Limit is inherent to proot (not a full VM) |

## Tips

```bash
# Share Termux home directory
# Files in ~/ are accessible from proot at /root/termux-home/

# Install compilers that need 32-bit support
proot-distro login ubuntu
apt install gcc-multilib g++-multilib
```