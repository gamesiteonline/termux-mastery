# Zsh Completions — Deep Dive

![Zsh Autocomplete](../../../assets/images/screenshots/zsh-autocomplete.svg)
*Zsh completion system*

## Understanding compinit

```bash
# Initialize completion system
autoload -Uz compinit && compinit

# If you get security warnings, fix permissions
compinit -u  # Skip security check
compaudit | xargs chmod g-w  # Fix insecure directories
```

## Completion Styles

```bash
# Case-insensitive completion
zstyle ':completion:*' matcher-list 'm:{a-zA-Z}={A-Za-z}'

# Fuzzy matching
zstyle ':completion:*' completer _complete _match _approximate
zstyle ':completion:*:match:*' original only
zstyle ':completion:*:approximate:*' max-errors 1 numeric

# Menu selection
zstyle ':completion:*' menu select=2  # Show menu after 2 tabs
zstyle ':completion:*' menu select=long-list

# Group results
zstyle ':completion:*' group-name ''
zstyle ':completion:*:descriptions' format '%F{green}-- %d --%f'

# Colors
zstyle ':completion:*' list-colors "${(s.:.)LS_COLORS}"

# Cache
zstyle ':completion:*' use-cache on
zstyle ':completion:*' cache-path ~/.zsh/cache

# Wait for dynamic completions
zstyle ':completion:*' accept-exact '*(N)'
zstyle ':completion:*' use-compctl false
```

## Directory Completion

```bash
# Show dot files
zstyle ':completion:*' file-sort modification

# List directories first
zstyle ':completion:*' list-dirs-first yes

# Expand paths
zstyle ':completion:*' expand prefix
zstyle ':completion:*' keep-prefix yes
```

## Process Completion

```bash
# Better kill completion
zstyle ':completion:*:*:*:*:processes' command "ps -u $USER -o pid,user,comm -w -w"
zstyle ':completion:*:*:kill:*:processes' list-colors '=(#b) #([0-9]#) ([0-9a-z-]#)*=01;34=0=01'
```

## SSH Host Completion

```bash
# Complete from ~/.ssh/config and ~/.ssh/known_hosts
zstyle ':completion:*:ssh:*' tag-order 'hosts:-host:host hosts:-domain:domain hosts:-ipaddr:ip\ address *'
zstyle ':completion:*:ssh:*' group-order hosts-domain hosts-host users hosts-ipaddr

# Parse SSH config
zstyle -e ':completion:*:hosts' hosts 'reply=(
  ${=${=${:-"$(cat {/etc/hosts,~/.ssh/known_hosts} 2>/dev/null)"}%%[# ]*}//,/ }
  ${=${(f)"$(cat ~/.ssh/config 2>/dev/null | grep -i '^Host ' | cut -d ' ' -f2-)"}} 
)'
```

## Command-Specific Completions

### Git

```bash
# Enable git completion
source <(git --completion=zsh)

# Or use OMZ plugin
plugins=(git)

# Custom git completions
zstyle ':completion:*:*:git:*' user-commands \
  mycommand:'description of my custom git command'
```

### Docker

```bash
# Docker completion
source <(docker completion zsh)

# Or install via Zinit
zinit light docker/docker
```

### Kubernetes

```bash
# Kubectl completion
source <(kubectl completion zsh)

# Helm completion
source <(helm completion zsh)
```

### NPM/Yarn

```bash
# OMZ npm plugin
plugins=(npm)

# Custom npm script completion
__npm_complete_scripts() {
  local cur="${words[CURRENT]}"
  compadd -- $(npm run 2>/dev/null | grep -o '^[a-zA-Z_-][^ ]*')
}
compdef __npm_complete_scripts npm run
```

### Python/Pip

```bash
# Python virtualenv completion
plugins=(python pip)

# Show virtualenv names
zstyle ':completion:*:*:virtualenvwrapper_*:*' sort false
```

## Cache Completions

```bash
# Enable caching for faster completion
zstyle ':completion:*' use-cache true
zstyle ':completion:*' cache-path ~/.cache/zsh

# Clear cache
rm -rf ~/.cache/zsh
```

## Debugging Completions

```bash
# Debug a specific completion
zsh -f
autoload -Uz compinit && compinit
src <(git --completion=zsh)
git <TAB>

# See what completions are loaded
typeset -f | grep 'compdef' | head -20

# List all completion functions
print -l ${(ok)_comps}
```

## See 100 Examples

For 100 practical Zsh autocomplete examples: [100 Zsh Autocomplete Examples](../examples-zsh/)