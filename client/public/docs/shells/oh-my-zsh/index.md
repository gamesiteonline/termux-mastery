# Oh My Zsh

![Shell Comparison](../../../assets/images/screenshots/shell-comparison.svg)
*Oh My Zsh terminal*

Oh My Zsh is a framework that simplifies Zsh configuration with themes and plugins.

## Installation

```bash
# Install prerequisites
pkg install git curl

# Install Oh My Zsh
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

## Configuration

All configuration goes in `~/.zshrc`:

```bash
# ~/.zshrc

# Theme
ZSH_THEME="robbyrussell"

# Plugins
plugins=(git z zsh-autosuggestions zsh-syntax-highlighting)
```

## Popular Themes

| Theme | Preview | Style |
|-------|---------|-------|
| `robbyrussell` | Default | Simple, minimal |
| `agnoster` | Popular | Powerline-style |
| `ys` | Clean | Informative |
| `bira` | Colorful | User-focused |
| `avit` | Minimal | Git-aware |
| `geoffrey` | Customizable | Modern |
| `pygmalion` | Clean | Python-friendly |
| `sporty_256` | Colorful | 256-colors |

Change theme:

```bash
# Edit ~/.zshrc and change ZSH_THEME
ZSH_THEME="agnoster"

# Reload
source ~/.zshrc
```

## Essential Plugins

### Git Plugin

Built-in, enabled by default. Adds aliases:

```bash
gst        # git status
ga         # git add
gcmsg      # git commit -m
gp         # git push
gl         # git pull
glog       # pretty git log
gd         # git diff
gco        # git checkout
gb         # git branch
```

### z Plugin

Jump to frequently used directories:

```bash
z doc           # cd ~/Documents
z down          # cd ~/storage/shared/Download
z proj          # cd ~/projects
```

### Zsh Autosuggestions

Shows ghost-text suggestions based on history:

```bash
# Install
git clone https://github.com/zsh-users/zsh-autosuggestions \
  ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions

# Add to plugins in ~/.zshrc
plugins=(git zsh-autosuggestions)
```

### Syntax Highlighting

Colors commands as you type (green=valid, red=invalid):

```bash
# Install (MUST be last plugin)
git clone https://github.com/zsh-users/zsh-syntax-highlighting \
  ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting

# Add to plugins (LAST position)
plugins=(git zsh-autosuggestions zsh-syntax-highlighting)
```

### Zsh Completions

Additional completion definitions:

```bash
# Install
git clone https://github.com/zsh-users/zsh-completions \
  ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-completions

# Add to plugins
plugins=(git zsh-completions zsh-autosuggestions zsh-syntax-highlighting)

# Enable compinit
autoload -Uz compinit && compinit
```

## Managing Plugins

```bash
# List installed plugins
ls ~/.oh-my-zsh/custom/plugins/

# Update Oh My Zsh
omz update

# Update custom plugins
cd ~/.oh-my-zsh/custom/plugins/zsh-autosuggestions && git pull
```