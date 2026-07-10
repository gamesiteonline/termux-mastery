# Powerlevel10k

![Powerlevel10k Wizard](../../../assets/images/screenshots/powerlevel10k-wizard.svg)
*Powerlevel10k configuration wizard*

Powerlevel10k is the fastest and most customizable Zsh theme.

## Installation

```bash
# Clone the repo
git clone --depth=1 https://github.com/romkatv/powerlevel10k.git \
  ${ZSH_CUSTOM:-$HOME/.oh-my-zsh/custom}/themes/powerlevel10k

# Set theme in ~/.zshrc
ZSH_THEME="powerlevel10k/powerlevel10k"

# Reload to launch config wizard
source ~/.zshrc
```

## Configuration Wizard

When you first load P10k, the configuration wizard will ask you questions:

1. **Diamond symbols** — Test font rendering
2. **Prompt style** — Lean, Classic, Rainbow, Pure
3. **Prompt height** — One-line or two-line
4. **Connection** — Connected or disconnected lines
5. **Prompt frame** — No frame, left, or full
6. **Spacing** — Sparse or compact
7. **Icons** — Many, few, or no icons
8. **Time** — Show or hide
9. **Git status** — Detailed or minimal

If wizard doesn't start:

```bash
p10k configure
```

## Manual Configuration

Your choices are saved to `~/.p10k.zsh`. Key settings:

```bash
# ~/.p10k.zsh

# Prompt style
POWERLEVEL9K_MODE=nerdfont-complete
POWERLEVEL9K_LEGACY_ICON_SPACING=true

# Left prompt segments
POWERLEVEL9K_LEFT_PROMPT_ELEMENTS=(os_icon context dir vcs)

# Right prompt segments
POWERLEVEL9K_RIGHT_PROMPT_ELEMENTS=(status root_indicator background_jobs time)

# Directory settings
POWERLEVEL9K_SHORTEN_DIR_LENGTH=2
POWERLEVEL9K_SHORTEN_STRATEGY=truncate_to_unique
POWERLEVEL9K_DIR_MAX_LENGTH=30

# Git settings
POWERLEVEL9K_VCS_SHOW_SUBMODULE_DIRTY=true
POWERLEVEL9K_VCS_UNTRACKED_ICON='?'

# Colors
POWERLEVEL9K_DIR_BACKGROUND=blue
POWERLEVEL9K_DIR_FOREGROUND=black
POWERLEVEL9K_VCS_CLEAN_BACKGROUND=green
POWERLEVEL9K_VCS_CLEAN_FOREGROUND=black
```

## Instant Prompt

For the fastest possible startup:

```bash
# At the top of ~/.zshrc (before anything else)
if [[ -r "${XDG_CACHE_HOME:-$HOME/.cache}/p10k-instant-prompt-${(%):-%n}.zsh" ]]; then
  source "${XDG_CACHE_HOME:-$HOME/.cache}/p10k-instant-prompt-${(%):-%n}.zsh"
fi

# Your normal config goes here
# ...

# Source pure prompt at the end
[[ ! -f ~/.p10k.zsh ]] || source ~/.p10k.zsh
```

## Prompt Examples

### Lean Style
```
❯ ~/projects/myapp on ☁️ (us-east-1) on ⑂ main ❯
```

### Classic Style
```
╭─user@host ~/projects/myapp on ☁️ (us-east-1) on ⑂ main
╰─❯
```

### Rainbow Style
```
╭─🌈 user@host 🌈 ~/projects/myapp 🌈 on ☁️ (us-east-1) 🌈 on ⑂ main 🌈
╰─❯
```

### Pure Style
```
user@host ~/projects/myapp
❯
```

## Troubleshooting

| Issue | Fix |
|-------|-----|
| Symbols show as boxes | Install [Nerd Font](../../theming/nerd-fonts/) |
| Slow prompt | Enable instant prompt (above) |
| Wizard won't start | Run `p10k configure` |
| Wrong colors | Edit `~/.p10k.zsh` color values |