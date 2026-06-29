# Troubleshooting

## Common Issues & Solutions

### packages
| Issue | Solution |
|-------|----------|
| `pkg update` fails | Check internet, try different mirror |
| Package not found | `pkg search` first, or build from source |
| Broken packages | `pkg reinstall <pkg>` |
| "Repository not found" | `pkg update` first |

### Shell
| Issue | Solution |
|-------|----------|
| Zsh not loading | Check `~/.zshrc` for errors, `zsh -f` to test |
| Oh My Zsh broken | `omz update` or reinstall |
| Powerlevel10k missing | Clone repo, set `ZSH_THEME` |
| Shell prompt slow | Disable unused plugins, enable instant prompt |
| Permission errors | `compaudit \| xargs chmod g-w` |

### Autocomplete
| Issue | Solution |
|-------|----------|
| Completions not showing | Check `compinit` is loaded |
| Missing tool completions | Install tool completions or plugins |
| fzf-tab not working | Install fzf first |
| Slow completions | Enable cache: `zstyle ':completion:*' use-cache on` |
| "command not found" in completion | Use full path in completions |

### Network
| Issue | Solution |
|-------|----------|
| SSH connection refused | Check server, port, firewall |
| SSH key not working | Check permissions: `chmod 600 ~/.ssh/id_*` |
| `curl` timeout | Check internet, try `curl -v` for debug |
| DNS not resolving | `echo "nameserver 8.8.8.8" > $PREFIX/etc/resolv.conf` |

### Cron
| Issue | Solution |
|-------|----------|
| Cron not running | `crond` or `crond -b` to start |
| Script not executing | Use full paths, check permissions |
| No output | Redirect to log file: `>> /path/to/log 2>&1` |

### Termux-Specific
| Issue | Solution |
|-------|----------|
| Storage permission denied | `termux-setup-storage` |
| Termux crashes | Clear data (backup first!) |
| Extra keys not showing | Check `termux.properties`, `termux-reload-settings` |
| Font not applying | Check `font.ttf` exists in `~/.termux/` |

## Debugging Commands

```bash
# Test shell
zsh -f                     # Zsh without config
bash --noprofile --norc    # Bash without config
fish --private             # Fish without config

# Test script syntax
bash -n script.sh
zsh -n script.sh

# Verbose SSH
ssh -vvv hostname

# Check PATH
echo $PATH | tr ':' '\n'

# Check if service is running
ps aux | grep crond
pgrep sshd

# Test completion
complete -C "git "  # Bash/Zsh
complete -C "grep " # Fish: complete -C 'git '

# Debug shell startup
zsh -xv  # Trace Zsh startup
```

## Recovery Mode

Create a minimal `~/.zshrc` when everything breaks:

```bash
# Minimal .zshrc for recovery
mv ~/.zshrc ~/.zshrc.broken
echo 'PROMPT="[RECOVERY] %~ $ "' > ~/.zshrc
source ~/.zshrc
```

Then fix your main config file and restore it.