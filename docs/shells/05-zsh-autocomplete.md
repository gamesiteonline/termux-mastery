# Zsh Autocomplete

Zsh has the most powerful completion system among shells. This guide covers setup from basic to advanced.

## Basic Completion Setup

```bash
# In ~/.zshrc
autoload -Uz compinit && compinit

# Case-insensitive completion
zstyle ':completion:*' matcher-list 'm:{a-zA-Z}={A-Za-z}'

# Menu selection
zstyle ':completion:*' menu select

# Group results by type
zstyle ':completion:*' group-name ''

# Colors for completions
zstyle ':completion:*' list-colors "${(s.:.)LS_COLORS}"

# Show descriptions
zstyle ':completion:*' verbose yes

# Cache completion results
zstyle ':completion:*' use-cache on
zstyle ':completion:*' cache-path ~/.zsh/cache
```

## Advanced Completion Options

```bash
# Fuzzy matching
zstyle ':completion:*' completer _complete _match _approximate
zstyle ':completion:*:match:*' original only
zstyle ':completion:*:approximate:*' max-errors 1 numeric

# Separate man page sections
zstyle ':completion:*:manuals' separate-sections true

# Kill completion menu
zstyle ':completion:*:*:*:*:processes' command "ps -u $USER -o pid,user,comm -w -w"
zstyle ':completion:*:*:kill:*:processes' list-colors '=(#b) #([0-9]#) ([0-9a-z-]#)*=01;34=0=01'

# SSH completion
zstyle ':completion:*:ssh:*' tag-order 'hosts:-host:host hosts:-domain:domain hosts:-ipaddr:ip\ address *'
zstyle ':completion:*:ssh:*' group-order hosts-domain hosts-host users hosts-ipaddr
```

## Installing Completion Plugins

### zsh-autocomplete (Real-time suggestions)

```bash
# The most powerful autocomplete plugin
git clone --depth 1 https://github.com/marlonrichert/zsh-autocomplete.git \
  ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autocomplete

# Add to plugins
plugins=(git zsh-autocomplete)
```

### fzf-tab (Replace menu with fzf)

```bash
# Install fzf first
pkg install fzf

# Clone fzf-tab
git clone https://github.com/Aloxaf/fzf-tab \
  ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/fzf-tab

# Add to plugins (after completion)
plugins=(git fzf-tab)
```

### zsh-autosuggestions (Fish-like suggestions)

```bash
git clone https://github.com/zsh-users/zsh-autosuggestions \
  ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions

plugins=(git zsh-autosuggestions)
```

## Key Bindings

```bash
# Tab completion (default)
bindkey '^I' complete-word

# Menu navigation
bindkey '^[[Z' reverse-menu-complete  # Shift+Tab

# History search
bindkey '^R' history-incremental-search-backward
bindkey '^S' history-incremental-search-forward

# Autosuggestion accept
bindkey '^ ' autosuggest-accept  # Ctrl+Space
bindkey '^F' autosuggest-accept  # Ctrl+F
bindkey '^E' autosuggest-accept  # Ctrl+E

# Expand glob
bindkey '^X*' expand-word
```

## Completion per Tool

```bash
# Git
source <(git --completion=zsh)  # or use OMZ git plugin

# Docker
source <(docker completion zsh)

# Kubectl
source <(kubectl completion zsh)

# NPM
source <(npm completion)

# Cargo
source "$HOME/.cargo/env"

# Pip
eval "$(pip completion --zsh)"
```

## See 100 Examples

For 100 practical autocomplete examples: [100 Zsh Autocomplete Examples](../autocomplete/100-examples-zsh.md)