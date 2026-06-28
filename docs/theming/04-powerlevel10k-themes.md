# Powerlevel10k Themes

## Prompt Styles

Powerlevel10k has several built-in prompt styles you can choose via the configuration wizard.

### Lean Style
```
❯ ~/projects/myapp on ☁️ (us-east-1) on ⑂ main ❯
```
- Minimal whitespace
- Git info inline
- One-line prompt
- Great for small screens

### Classic Style
```
╭─user@host ~/projects/myapp on ☁️ (us-east-1) on ⑂ main
╰─❯
```
- Traditional two-line layout
- Full user and hostname
- Clear visual separation

### Rainbow Style
```
╭─🌈 user@host 🌈 ~/projects/myapp 🌈 on ☁️ (us-east-1) 🌈 on ⑂ main 🌈
╰─❯
```
- Colorful separators
- Fun and expressive
- Best with Nerd Fonts

### Pure Style
```
user@host ~/projects/myapp
❯
```
- Minimalist
- No decorations
- Maximum screen space

## Custom Segments Configuration

### Add Custom Segments

Edit `~/.p10k.zsh` to add or remove segments:

```zsh
# Left prompt segments
POWERLEVEL9K_LEFT_PROMPT_ELEMENTS=(
  os_icon
  context
  dir
  vcs
)

# Right prompt segments
POWERLEVEL9K_RIGHT_PROMPT_ELEMENTS=(
  status
  command_execution_time
  background_jobs
  time
)
```

### Available Segment Icons

| Segment | Description | Icon |
|---------|-------------|------|
| `os_icon` | OS indicator |  |
| `context` | User@hostname | user@host |
| `dir` | Current directory | ~/path |
| `vcs` | Git status | main |
| `status` | Last command status | ✔ ✘ |
| `command_execution_time` | Command duration | 1.2s |
| `background_jobs` | Background jobs | ⚙ |
| `time` | Current time | 14:30 |
| `disk_usage` | Disk usage warning | |
| `ram` | Memory usage | |
| `load` | CPU load | |
| `battery` | Battery status | |
| `todo` | Pending tasks | |
| `newline` | Insert line break | |

## Color Customization

```zsh
# Directory colors
POWERLEVEL9K_DIR_BACKGROUND=blue
POWERLEVEL9K_DIR_FOREGROUND=black
POWERLEVEL9K_SHORTEN_STRATEGY=truncate_to_unique
POWERLEVEL9K_SHORTEN_DELIMITER=..
POWERLEVEL9K_DIR_MAX_LENGTH=30

# Git status colors
POWERLEVEL9K_VCS_CLEAN_BACKGROUND=green
POWERLEVEL9K_VCS_CLEAN_FOREGROUND=black
POWERLEVEL9K_VCS_MODIFIED_BACKGROUND=yellow
POWERLEVEL9K_VCS_MODIFIED_FOREGROUND=black
POWERLEVEL9K_VCS_UNTRACKED_BACKGROUND=red
POWERLEVEL9K_VCS_UNTRACKED_FOREGROUND=black

# Status colors
POWERLEVEL9K_STATUS_OK=true
POWERLEVEL9K_STATUS_OK_FOREGROUND=green
POWERLEVEL9K_STATUS_ERROR_FOREGROUND=red
```

## Instant Prompt Configuration

For fastest startup, enable instant prompt:

```zsh
# Place at VERY TOP of ~/.zshrc
if [[ -r "${XDG_CACHE_HOME:-$HOME/.cache}/p10k-instant-prompt-${(%):-%n}.zsh" ]]; then
  source "${XDG_CACHE_HOME:-$HOME/.cache}/p10k-instant-prompt-${(%):-%n}.zsh"
fi

# ... rest of your config ...

# Place at VERY END of ~/.zshrc
[[ ! -f ~/.p10k.zsh ]] || source ~/.p10k.zsh
```

## Theme Examples Gallery

### Developer Setup
```zsh
POWERLEVEL9K_LEFT_PROMPT_ELEMENTS=(
  os_icon dir vcs
)
POWERLEVEL9K_RIGHT_PROMPT_ELEMENTS=(
  status background_jobs time
)
```

### Minimal Setup
```zsh
POWERLEVEL9K_LEFT_PROMPT_ELEMENTS=(
  dir vcs
)
POWERLEVEL9K_RIGHT_PROMPT_ELEMENTS=(
  status
)
```

### Full Info Setup
```zsh
POWERLEVEL9K_LEFT_PROMPT_ELEMENTS=(
  os_icon context dir vcs
)
POWERLEVEL9K_RIGHT_PROMPT_ELEMENTS=(
  status command_execution_time background_jobs ram time
)
```

## Troubleshooting

| Issue | Fix |
|-------|-----|
| Icons not showing | Install [Nerd Fonts](02-nerd-fonts.md) |
| Slow prompt | Enable instant prompt |
| Wrong colors | Edit `~/.p10k.zsh` |
| Wizard won't run | `p10k configure` |