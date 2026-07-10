# Bootstrap Script

![Bootstrap Before/After](../../../assets/images/screenshots/bootstrap-before-after.svg)
*Before and after bootstrap*

One-command setup script for new Termux installations.

## The Master Bootstrap

Create `~/setup-termux.sh`:

```bash
#!/data/data/com.termux/files/usr/bin/bash

set -e

echo "🚀 Termux Mastery Bootstrap"
echo "=========================="

# Update packages
echo "📦 Updating packages..."
pkg update -y && pkg upgrade -y

# Install core tools
echo "🔧 Installing core tools..."
pkg install -y \
  git curl wget \
  zsh fish \
  tmux neovim \
  fzf ripgrep bat \
  python nodejs \
  openssh \
  starship \
  termux-api

# Install Oh My Zsh
echo "🐚 Installing Oh My Zsh..."
if [ ! -d "$HOME/.oh-my-zsh" ]; then
  sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)" "" --unattended
fi

# Install Zsh plugins
ZSH_CUSTOM="$HOME/.oh-my-zsh/custom"
echo "🔌 Installing Zsh plugins..."
git clone --depth=1 https://github.com/zsh-users/zsh-autosuggestions $ZSH_CUSTOM/plugins/zsh-autosuggestions 2>/dev/null || true
git clone --depth=1 https://github.com/zsh-users/zsh-syntax-highlighting $ZSH_CUSTOM/plugins/zsh-syntax-highlighting 2>/dev/null || true
git clone --depth=1 https://github.com/zsh-users/zsh-completions $ZSH_CUSTOM/plugins/zsh-completions 2>/dev/null || true
git clone --depth=1 https://github.com/marlonrichert/zsh-autocomplete $ZSH_CUSTOM/plugins/zsh-autocomplete 2>/dev/null || true
git clone --depth=1 https://github.com/Aloxaf/fzf-tab $ZSH_CUSTOM/plugins/fzf-tab 2>/dev/null || true

# Install Powerlevel10k
echo "🎨 Installing Powerlevel10k..."
git clone --depth=1 https://github.com/romkatv/powerlevel10k.git $ZSH_CUSTOM/themes/powerlevel10k 2>/dev/null || true

# Configure .zshrc
cat > ~/.zshrc << 'ZSHRC'
# Path to Oh My Zsh
export ZSH="$HOME/.oh-my-zsh"

# Theme
ZSH_THEME="powerlevel10k/powerlevel10k"

# Plugins
plugins=(
  git
  z
  zsh-autosuggestions
  zsh-syntax-highlighting
  zsh-completions
  fzf-tab
)

source $ZSH/oh-my-zsh.sh

# Completion
autoload -Uz compinit && compinit

# Starship prompt
eval "$(starship init zsh)"

# Aliases
alias ll='ls -lh'
alias la='ls -lAh'
alias ..='cd ..'
alias update='pkg update && pkg upgrade'
alias gs='git status'
alias gc='git commit -m'
alias gp='git push'
alias gl='git pull'
alias gco='git checkout'
alias gb='git branch'

# History
HISTSIZE=10000
SAVEHIST=10000
setopt SHARE_HISTORY

# Path
export PATH="$HOME/.local/bin:$PATH"

# P10k instant prompt
if [[ -r "${XDG_CACHE_HOME:-$HOME/.cache}/p10k-instant-prompt-${(%):-%n}.zsh" ]]; then
  source "${XDG_CACHE_HOME:-$HOME/.cache}/p10k-instant-prompt-${(%):-%n}.zsh"
fi

# Source p10k config
[[ ! -f ~/.p10k.zsh ]] || source ~/.p10k.zsh
ZSHRC

# Configure Starship
mkdir -p ~/.config
cat > ~/.config/starship.toml << 'STARSHIP'
format = """
[](#f7768e)\
$os\
$username\
[](bg:#9d7cd8 fg:#f7768e)\
$directory\
[](fg:#9d7cd8 bg:#bb9af7)\
$git_branch\
$git_status\
[](fg:#bb9af7 bg:#7dcfff)\
$nodejs\
$python\
$rust\
[](fg:#7dcfff bg:#1abc9c)\
$time\
[ ](fg:#1abc9c)\
"""

[directory]
style = "bold fg:#c0caf5"
truncation_length = 3

[git_branch]
style = "bold fg:#c0caf5"

[nodejs]
style = "bold fg:#7dcfff"

[python]
style = "bold fg:#bb9af7"

[time]
style = "bold fg:#1abc9c"
time_format = "%I:%M %p"
STARSHIP

# Configure tmux
cat > ~/.tmux.conf << 'TMUX'
set -g mouse on
set -g history-limit 50000
set -g default-terminal "screen-256color"
set -g base-index 1
setw -g pane-base-index 1
bind | split-window -h
bind - split-window -v
bind r source-file ~/.tmux.conf \; display "Config reloaded"
TMUX

# Set Zsh as default shell
echo "🔄 Setting Zsh as default..."
chsh -s zsh

# Termux extra keys
mkdir -p ~/.termux
cat > ~/.termux/termux.properties << 'TERMUX'
extra-keys = [['ESC','/','-','HOME','UP','END','PGUP'],['TAB','CTRL','ALT','LEFT','DOWN','RIGHT','PGDN']]
bell-character = ignore
TERMUX
termux-reload-settings

# Final message
echo ""
echo "✅ Bootstrap complete!"
echo ""
echo "📋 What was installed:"
echo "   - Zsh + Oh My Zsh + Powerlevel10k"
echo "   - Essential plugins (autosuggest, syntax highlight, completions)"
echo "   - Fish shell"
echo "   - Starship prompt"
echo "   - Tmux + Neovim"
echo "   - fzf + ripgrep + bat"
echo "   - Python + Node.js"
echo ""
echo "🔧 Next steps:"
echo "   1. Run 'p10k configure' to set up Powerlevel10k"
echo "   2. Restart Termux to load Zsh"
echo "   3. Explore the guide at: https://gamesiteonline.github.io/termux-mastery"
echo ""
```

## Minimal Bootstrap

```bash
# One-liner to install just the essentials
pkg install -y git curl zsh starship && \
  sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)" && \
  chsh -s zsh
```

## Idempotent Script

The bootstrap script above is **idempotent** — running it multiple times won't break anything. It
uses `2>/dev/null || true` to skip already-installed components.