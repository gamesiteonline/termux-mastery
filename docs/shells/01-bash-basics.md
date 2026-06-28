# Bash Basics

## Configuring Bash

Your Bash config lives in `~/.bashrc`. Edit it with:

```bash
nano ~/.bashrc
```

## Essential Bash Configuration

### 1. Custom Prompt (PS1)

```bash
# Simple prompt with user, host, and path
PS1='\u@\h:\w\$ '

# Color prompt
PS1='\[\e[32m\]\u@\h\[\e[0m\]:\[\e[34m\]\w\[\e[0m\]\$ '

# Multi-line prompt with git info
PS1='\n\[\e[32m\]\u@\h\[\e[0m\]:\[\e[34m\]\w\[\e[0m\]$(__git_ps1 " (%s)")\n\$ '
```

### 2. History Settings

```bash
# Increase history size
HISTSIZE=10000
HISTFILESIZE=20000

# Don't record duplicate commands
HISTCONTROL=ignoredups:erasedups

# Append to history instead of overwriting
shopt -s histappend

# Share history across sessions
set -o histappend
PROMPT_COMMAND="history -a; $PROMPT_COMMAND"
```

### 3. Useful Aliases

```bash
# File management
alias ll='ls -lh'
alias la='ls -lAh'
alias lt='ls -lth'
alias l='ls -CF'
alias ..='cd ..'
alias ...='cd ../..'

# Safety
alias cp='cp -i'
alias mv='mv -i'
alias rm='rm -i'
alias ln='ln -i'

# Package management
alias update='pkg update && pkg upgrade'
alias search='pkg search'
alias install='pkg install'
alias remove='pkg uninstall'

# Navigation
alias home='cd ~'
alias root='cd /'
alias docs='cd ~/storage/shared/Documents'
alias downloads='cd ~/storage/shared/Download'

# Git
alias gs='git status'
alias ga='git add'
alias gc='git commit'
alias gp='git push'
alias gl='git pull'
alias gd='git diff'
alias gco='git checkout'
alias gb='git branch'
```

### 4. Custom Functions

```bash
# Create directory and cd into it
mkcd() {
  mkdir -p "$1" && cd "$1"
}

# Extract various archive types
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

# Quick search in files
f() {
  find . -iname "*$1*" 2>/dev/null
}

# Grep in files
gr() {
  grep -rn "$1" . 2>/dev/null
}
```

### 5. Enable Bash Completion

```bash
# Enable bash completion
if [ -f "$PREFIX/share/bash-completion/bash_completion" ]; then
  . "$PREFIX/share/bash-completion/bash_completion"
fi

# Enable programmable completion
shopt -s progcomp

# Git completion (if installed)
if [ -f "$PREFIX/share/bash-completion/completions/git" ]; then
  . "$PREFIX/share/bash-completion/completions/git"
fi
```

### 6. Navigation Shortcuts

```bash
# Directory stack
pushd /path/to/dir
popd
dirs -v

# Quick cd with autocorrect
shopt -s cdspell
shopt -s autocd  # type path, no cd needed

# cd by typing partial directory name
shopt -s dirspell
```

## Full Example .bashrc

```bash
# ~/.bashrc

# Prompt
PS1='\[\e[32m\]\u\[\e[0m\]@\[\e[34m\]\h\[\e[0m\]:\[\e[35m\]\w\[\e[0m\]\$ '

# History
HISTSIZE=10000
HISTFILESIZE=20000
HISTCONTROL=ignoredups:erasedups
shopt -s histappend

# Aliases
alias ll='ls -lh'
alias la='ls -A'
alias ..='cd ..'
alias ...='cd ../..'
alias update='pkg update && pkg upgrade'
alias cls='clear'

# Functions
mkcd() { mkdir -p "$1" && cd "$1"; }

# Completion
if [ -f "$PREFIX/share/bash-completion/bash_completion" ]; then
  . "$PREFIX/share/bash-completion/bash_completion"
fi

# Path
export PATH=$HOME/.local/bin:$PATH
```

Reload with `source ~/.bashrc`.