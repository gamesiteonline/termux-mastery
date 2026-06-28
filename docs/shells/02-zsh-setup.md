# Zsh Setup

## Install Zsh

```bash
# Install Zsh
pkg install zsh

# Set Zsh as default shell
chsh -s zsh

# Restart Termux for changes to take effect
# (or just type 'zsh' to start it immediately)
```

## Basic Zsh Configuration

Create `~/.zshrc` with essential settings:

```bash
# ~/.zshrc

# Prompt with colors
PROMPT='%F{green}%n%f@%F{blue}%m%f:%F{magenta}%~%f$ '

# History
HISTSIZE=10000
SAVEHIST=10000
HISTFILE=~/.zsh_history

# History options
setopt SHARE_HISTORY
setopt APPEND_HISTORY
setopt INC_APPEND_HISTORY
setopt HIST_IGNORE_DUPS
setopt HIST_IGNORE_SPACE
setopt HIST_REDUCE_BLANKS

# Completion
autoload -Uz compinit && compinit

# Change directory without 'cd'
setopt AUTO_CD

# Correction
setopt CORRECT

# Globbing
setopt EXTENDED_GLOB

# Useful aliases
alias ll='ls -lh'
alias la='ls -lAh'
alias ..='cd ..'
alias update='pkg update && pkg upgrade'

# Key bindings
bindkey -e  # Emacs key bindings (default)
bindkey '^R' history-incremental-search-backward
bindkey '^P' up-line-or-history
bindkey '^N' down-line-or-history
```

## Enable Syntax Highlighting (built-in)

```bash
# Add to ~/.zshrc
source $PREFIX/share/zsh-syntax-highlighting/zsh-syntax-highlighting.zsh
```

## Reload Configuration

```bash
source ~/.zshrc
```

## Next Steps

Now proceed to [Oh My Zsh](03-oh-my-zsh.md) for a framework that makes Zsh customization effortless.