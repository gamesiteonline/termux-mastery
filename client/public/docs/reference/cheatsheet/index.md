# Cheatsheet

## Package Management
| Command | Description |
|---------|-------------|
| `pkg update && pkg upgrade` | Update all packages |
| `pkg install <pkg>` | Install package |
| `pkg uninstall <pkg>` | Remove package |
| `pkg search <term>` | Search packages |
| `pkg list-installed` | List installed |
| `apt clean` | Clean package cache |

## File Operations
| Command | Description |
|---------|-------------|
| `ls -lh` | List files with sizes |
| `ls -la` | List all files (including hidden) |
| `cd <dir>` | Change directory |
| `cp -r <src> <dst>` | Copy recursively |
| `mv <src> <dst>` | Move/rename |
| `rm -rf <dir>` | Remove directory forcefully |
| `chmod +x <file>` | Make executable |

## Git Quick Reference
| Command | Description |
|---------|-------------|
| `git status` | Show changes |
| `git add <file>` | Stage file |
| `git commit -m "msg"` | Commit |
| `git push` | Push to remote |
| `git pull` | Pull from remote |
| `git checkout -b <branch>` | Create and switch branch |
| `git log --oneline --graph` | Pretty history |
| `git stash` | Save changes temporarily |
| `git diff` | Show unstaged changes |

## Zsh Shortcuts
| Key | Action |
|-----|--------|
| `Tab` | Complete |
| `Ctrl+R` | History search |
| `Ctrl+E` | End of line |
| `Ctrl+A` | Start of line |
| `Alt+.` | Last argument |
| `Ctrl+U` | Delete to start |
| `Ctrl+K` | Delete to end |
| `Ctrl+W` | Delete word back |

## Tmux Shortcuts
| Key | Action |
|-----|--------|
| `Ctrl+B c` | New window |
| `Ctrl+B n/p` | Next/previous window |
| `Ctrl+B "` | Split horizontal |
| `Ctrl+B %` | Split vertical |
| `Ctrl+B arrow` | Navigate panes |
| `Ctrl+B d` | Detach |
| `Ctrl+B [` | Copy mode |

## Neovim Basics
| Command | Description |
|---------|-------------|
| `:w` | Save |
| `:q` | Quit |
| `:wq` | Save and quit |
| `dd` | Delete line |
| `yy` | Copy line |
| `p` | Paste |
| `u` | Undo |
| `/text` | Search |
| `:%s/old/new/g` | Replace all |

## Termux API
| Command | Description |
|---------|-------------|
| `termux-battery-status` | Battery info |
| `termux-clipboard-get/set` | Clipboard |
| `termux-notification` | Send notification |
| `termux-tts-speak <text>` | Text to speech |
| `termux-sms-send -n <num> <msg>` | Send SMS |
| `termux-location` | GPS location |
| `termux-camera-photo <file>` | Take photo |
| `termux-torch on/off` | Flashlight |
| `termux-vibrate -d <ms>` | Vibrate |
| `termux-wifi-scaninfo` | WiFi scan |