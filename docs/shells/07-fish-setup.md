# Fish Shell Setup

Fish (Friendly Interactive Shell) comes with autosuggestions and syntax highlighting built-in.

## Installation

```bash
# Install fish
pkg install fish

# Start fish
fish

# Set as default shell (optional)
chsh -s fish
```

## Configuration

Fish config lives at `~/.config/fish/config.fish`:

```bash
# Create config directory
mkdir -p ~/.config/fish

# Edit config
nano ~/.config/fish/config.fish
```

### Basic Config

```fish
# ~/.config/fish/config.fish

# Greeting
set fish_greeting "🐟 Welcome to Fish Shell"

# Environment variables
set -x EDITOR nano
set -x BROWSER termux-open-url
set -gx PATH $HOME/.local/bin $PATH

# Prompt
function fish_prompt
  set_color green
  echo -n (whoami)
  set_color normal
  echo -n "@"
  set_color blue
  echo -n (hostname -s 2>/dev/null)
  set_color normal
  echo -n ":"
  set_color magenta
  echo -n (prompt_pwd)
  set_color normal
  echo -n "\$ "
end
```

## Abbreviations (Fish's Smarter Aliases)

```fish
# Abbreviations expand when you press Space/Enter

# File operations
abbr --add ll 'ls -lh'
abbr --add la 'ls -lAh'
abbr --add .. 'cd ..'
abbr --add ... 'cd ../..'
abbr --add md 'mkdir -p'
abbr --add rd 'rm -rf'

# Package management
abbr --add upd 'pkg update && pkg upgrade'
abbr --add inst 'pkg install'
abbr --add uninst 'pkg uninstall'
abbr --add searchpkg 'pkg search'

# Git
abbr --add gs 'git status'
abbr --add ga 'git add'
abbr --add gc 'git commit -m'
abbr --add gp 'git push'
abbr --add gl 'git pull'
abbr --add gco 'git checkout'
abbr --add gb 'git branch'

# Navigation
abbr --add home 'cd ~'
abbr --add docs 'cd ~/storage/shared/Documents'
abbr --add down 'cd ~/storage/shared/Download'
abbr --add dev 'cd ~/storage/shared/Development'
```

## Built-in Features

### Autosuggestions (Built-in)
Fish shows ghost-text suggestions automatically. Press `→` to accept, `Ctrl+F` to accept one word.

### Syntax Highlighting (Built-in)
Commands are colored as you type: green=valid, red=invalid, blue=directory, cyan=executable.

### Web-Based Config
```bash
fish_config  # Opens browser-based config UI
```

## Functions

```fish
# Create dir and cd
function mkcd
  mkdir -p $argv && cd $argv
end

# Quick extract
function extract
  if test -f "$argv[1]"
    switch "$argv[1]"
      case '*.tar.gz' '*.tgz'
        tar -xzf "$argv[1]"
      case '*.tar.bz2' '*.tbz2'
        tar -xjf "$argv[1]"
      case '*.tar.xz' '*.txz'
        tar -xJf "$argv[1]"
      case '*.tar'
        tar -xf "$argv[1]"
      case '*.zip'
        unzip "$argv[1]"
      case '*.rar'
        unrar x "$argv[1]"
      case '*.7z'
        7z x "$argv[1]"
      case '*'
        echo "Unknown format: $argv[1]"
    end
  else
    echo "File not found: $argv[1]"
  end
end

# Quick find files
function ff
  find . -iname "*$argv[1]*" 2>/dev/null
end

# Git log pretty
function glog
  git log --oneline --graph --all --decorate $argv
end
```

## Plugin Managers

### Fisher (Plugin Manager)

```bash
# Install Fisher
curl -sL https://git.io/fisher | source && fisher install jorgebucaran/fisher

# Install plugins
fisher install jorgebucaran/nvm.fish
fisher install edc/bass  # Run bash commands
fisher install meaningful-ooo/sponge  # Auto-clean fish config
fisher install PatrickF1/fzf.fish  # fzf integration
```

### Creating a Fish Function

```fish
# ~/.config/fish/functions/myfunc.fish
function myfunc --description 'My custom function'
  echo "Hello from fish function!"
end
```

## Next Steps

- [Fish Autocomplete](08-fish-autocomplete.md) - Fish's built-in completion system
- [Autocomplete Examples](../autocomplete/100-examples-fish.md) - 100 Fish completion examples