#!/data/data/com.termux/files/usr/bin/bash

# Termux Mastery Bootstrap
# Complete setup: Zsh + Oh My Zsh + Powerlevel10k + plugins + Starship + tmux + tools

set -e

GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m'

log() { echo -e "${GREEN}[✓]${NC} $1"; }
info() { echo -e "${BLUE}[i]${NC} $1"; }
warn() { echo -e "${YELLOW}[!]${NC} $1"; }

echo ""
echo -e "${GREEN}┌──────────────────────────────────────────┐${NC}"
echo -e "${GREEN}│      Termux Mastery Bootstrap            │${NC}"
echo -e "${GREEN}└──────────────────────────────────────────┘${NC}"
echo ""

info "Updating packages..."
pkg update -y && pkg upgrade -y
log "Packages updated"

info "Installing core tools..."
pkg install -y git curl wget zsh fish tmux neovim fzf ripgrep bat python nodejs openssh starship termux-api
log "Core tools installed"

info "Setting up Oh My Zsh..."
if [ ! -d "$HOME/.oh-my-zsh" ]; then
  sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)" "" --unattended
  log "Oh My Zsh installed"
else
  info "Oh My Zsh already installed"
fi

ZSH_CUSTOM="$HOME/.oh-my-zsh/custom"
mkdir -p "$ZSH_CUSTOM/plugins" "$ZSH_CUSTOM/themes"

info "Installing Zsh plugins..."
plugins=(
  "zsh-users/zsh-autosuggestions"
  "zsh-users/zsh-syntax-highlighting"
  "zsh-users/zsh-completions"
  "marlonrichert/zsh-autocomplete"
  "Aloxaf/fzf-tab"
)
for plugin in "${plugins[@]}"; do
  dir="$ZSH_CUSTOM/plugins/$(basename $plugin)"
  if [ ! -d "$dir" ]; then
    git clone --depth=1 "https://github.com/$plugin.git" "$dir" 2>/dev/null
    log "Plugin: $(basename $plugin) installed"
  fi
done

info "Installing Powerlevel10k..."
if [ ! -d "$ZSH_CUSTOM/themes/powerlevel10k" ]; then
  git clone --depth=1 https://github.com/romkatv/powerlevel10k.git "$ZSH_CUSTOM/themes/powerlevel10k"
  log "Powerlevel10k installed"
fi

info "Writing ~/.zshrc..."
cat > ~/.zshrc << 'ZSHRC'
export ZSH="$HOME/.oh-my-zsh"
ZSH_THEME="powerlevel10k/powerlevel10k"

plugins=(
  git z zsh-autosuggestions zsh-syntax-highlighting
  zsh-completions fzf-tab
)

source $ZSH/oh-my-zsh.sh
autoload -Uz compinit && compinit
eval "$(starship init zsh)"

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

HISTSIZE=10000
SAVEHIST=10000
setopt SHARE_HISTORY
export PATH="$HOME/.local/bin:$PATH"

if [[ -r "${XDG_CACHE_HOME:-$HOME/.cache}/p10k-instant-prompt-${(%):-%n}.zsh" ]]; then
  source "${XDG_CACHE_HOME:-$HOME/.cache}/p10k-instant-prompt-${(%):-%n}.zsh"
fi
[[ ! -f ~/.p10k.zsh ]] || source ~/.p10k.zsh
ZSHRC
log "~/.zshrc written"

info "Configuring Starship..."
mkdir -p ~/.config
cat > ~/.config/starship.toml << 'STARSHIP'
format = """[](#f7768e)$os$username[](bg:#9d7cd8 fg:#f7768e)$directory[](fg:#9d7cd8 bg:#bb9af7)$git_branch$git_status[](fg:#bb9af7 bg:#7dcfff)$nodejs$python$rust[](fg:#7dcfff bg:#1abc9c)$time[ ](fg:#1abc9c)"""
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
log "Starship configured"

info "Writing tmux config..."
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
log "Tmux configured"

info "Configuring Termux extra keys..."
mkdir -p ~/.termux
cat > ~/.termux/termux.properties << 'TERMUX'
extra-keys = [['ESC','/','-','HOME','UP','END','PGUP'],['TAB','CTRL','ALT','LEFT','DOWN','RIGHT','PGDN']]
bell-character = ignore
TERMUX
termux-reload-settings 2>/dev/null || true
log "Termux configured"

info "Setting Zsh as default..."
chsh -s zsh 2>/dev/null || true
log "Default shell set to Zsh"

echo ""
echo -e "${GREEN}┌──────────────────────────────────────────┐${NC}"
echo -e "${GREEN}│     Bootstrap Complete!                  │${NC}"
echo -e "${GREEN}└──────────────────────────────────────────┘${NC}"
echo ""
info "Next steps:"
info "  1. Run: p10k configure  (set up Powerlevel10k)"  
info "  2. Restart Termux to load Zsh"
info "  3. Visit: https://gamesiteonline.github.io/termux-mastery"
echo ""