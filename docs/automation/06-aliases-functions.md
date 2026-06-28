# Aliases & Functions

Boost productivity with custom shortcuts.

## Aliases vs Functions

| | Aliases | Functions |
|--|---------|-----------|
| **Use case** | Simple command replacement | Complex logic |
| **Arguments** | Appended to end | Full argument control |
| **Syntax** | `alias ll='ls -lh'` | `ll() { ls -lh "$@"; }` |

## Essential Aliases

### File Management

```bash
alias ll='ls -lh'
alias la='ls -lAh'
alias l='ls -CF'
alias lt='ls -lth'
alias ..='cd ..'
alias ...='cd ../..'
alias ....='cd ../../..'
alias md='mkdir -p'
alias rd='rm -rf'
alias cp='cp -iv'
alias mv='mv -iv'
```

### Package Management

```bash
alias upd='pkg update && pkg upgrade'
alias inst='pkg install'
alias uninst='pkg uninstall'
alias se='pkg search'
alias show='pkg show'
alias clean='apt clean && apt autoclean'
```

### Git

```bash
alias g='git'
alias gs='git status'
alias ga='git add'
alias gaa='git add --all'
alias gc='git commit -m'
alias gca='git commit --amend'
alias gp='git push'
alias gpf='git push --force-with-lease'
alias gl='git pull'
alias gco='git checkout'
alias gb='git branch'
alias gd='git diff'
alias gds='git diff --staged'
alias glog='git log --oneline --graph --all --decorate'
alias gst='git stash'
alias gsta='git stash apply'
alias gcl='git clone'
```

### Navigation

```bash
alias home='cd ~'
alias docs='cd ~/storage/shared/Documents'
alias down='cd ~/storage/shared/Download'
alias dev='cd ~/storage/shared/Development'
alias dc='cd ~ && clear'
```

### Network

```bash
alias myip='curl -s ifconfig.me'
alias localip='hostname -I'
alias ports='netstat -tulanp'
alias ping='ping -c 4'
alias speedtest='curl -s https://raw.githubusercontent.com/sivel/speedtest-cli/master/speedtest.py | python3 -'
```

## Essential Functions

### Create and Enter Directory
```bash
mkcd() {
  mkdir -p "$1" && cd "$1"
}
```

### Extract Archives
```bash
extract() {
  if [ -f "$1" ]; then
    case "$1" in
      *.tar.bz2) tar xjf "$1" ;;
      *.tar.gz)  tar xzf "$1" ;;
      *.bz2)     bunzip2 "$1" ;;
      *.rar)     unrar x "$1" ;;
      *.gz)      gunzip "$1" ;;
      *.tar)     tar xf "$1" ;;
      *.tbz2)    tar xjf "$1" ;;
      *.tgz)     tar xzf "$1" ;;
      *.zip)     unzip "$1" ;;
      *.Z)       uncompress "$1" ;;
      *.7z)      7z x "$1" ;;
      *)         echo "'$1' cannot be extracted" ;;
    esac
  else
    echo "'$1' is not a valid file"
  fi
}
```

### Quick Search
```bash
# Find files by name
f() {
  find . -iname "*$1*" 2>/dev/null
}

# Find files by content
gr() {
  grep -rn "$1" . 2>/dev/null
}

# Find and open in editor
fe() {
  find . -iname "*$1*" 2>/dev/null | head -1 | xargs -o nano
}
```

### Weather
```bash
weather() {
  local city="${1:-London}"
  curl -s "wttr.in/$city?m1&lang=en" | head -7
}
```

### Calculator
```bash
calc() {
  echo "$*" | bc -l
}
```

### Backup File
```bash
bu() {
  cp "$1" "${1}.bak"
}
```

### Quick HTTP Server
```bash
serve() {
  local port="${1:-8000}"
  python3 -m http.server "$port"
}
```

### Kill Process by Name
```bash
killp() {
  pkill -f "$1"
}
```

## Shell-Specific Features

### Fish Abbreviations
```fish
# In Fish, abbreviations expand in-place
abbr --add gco 'git checkout'
# Type: gco<Space> → expands to: git checkout
```

### Zsh Aliases with Auto-complete
```zsh
# In Zsh, aliases get auto-completion
alias gc='git commit'
# gc <TAB> will complete git commit options
```

## Where to Put These

=== "Bash"
    ```bash
    # Add to ~/.bashrc
    source ~/.bash_aliases  # Or put directly in .bashrc
    ```

=== "Zsh"
    ```bash
    # Add to ~/.zshrc
    source ~/.zsh_aliases  # Or put directly in .zshrc
    ```

=== "Fish"
    ```fish
    # Add to ~/.config/fish/config.fish
    # Or create ~/.config/fish/aliases.fish and source it
    ```