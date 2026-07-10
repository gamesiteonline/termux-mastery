# Zsh Plugins

![Zsh Autocomplete](../../../assets/images/screenshots/zsh-autocomplete.svg)
*Zsh plugin configuration*

## Plugin Managers

### Oh My Zsh (Built-in)

```bash
# Edit ~/.zshrc
plugins=(git z zsh-autosuggestions zsh-syntax-highlighting)

# Custom plugins location
echo $ZSH_CUSTOM  # ~/.oh-my-zsh/custom/plugins/
```

### Zinit (Fast plugin manager)

```bash
# Install Zinit
bash -c "$(curl --fail --show-error --silent \
  --location https://raw.githubusercontent.com/zdharma-continuum/zinit/main/scripts/install.sh)"

# Use in ~/.zshrc
zinit light zsh-users/zsh-autosuggestions
zinit light zsh-users/zsh-syntax-highlighting
zinit light zsh-users/zsh-completions
zinit light marlonrichert/zsh-autocomplete
zinit light Aloxaf/fzf-tab
zinit light zdharma-continuum/fast-syntax-highlighting
```

### Antidote (Legacy of zplug)

```bash
# Install antidote
git clone --depth=1 https://github.com/mattmc3/antidote.git ~/.antidote

# Create ~/.zsh_plugins.txt
cat > ~/.zsh_plugins.txt << 'EOF'
ohmyzsh/ohmyzsh
zsh-users/zsh-autosuggestions
zsh-users/zsh-syntax-highlighting
zsh-users/zsh-completions
marlonrichert/zsh-autocomplete
romkatv/powerlevel10k
EOF

# In ~/.zshrc
source ~/.antidote/antidote.zsh
antidote load
```

## Essential Plugins

### Syntax Highlighting

| Plugin | Description |
|--------|-------------|
| `zsh-users/zsh-syntax-highlighting` | Standard (stable) |
| `zdharma-continuum/fast-syntax-highlighting` | Faster, more features |
| `zdharma-continuum/history-search-multi-word` | Multi-word history search |

### Completion

| Plugin | Description |
|--------|-------------|
| `zsh-users/zsh-completions` | Extra completion definitions |
| `marlonrichert/zsh-autocomplete` | Real-time autocomplete |
| `Aloxaf/fzf-tab` | fzf-powered tab completion |
| `agkozak/zsh-z` | Directory jumping (like z) |

### Productivity

| Plugin | Description |
|--------|-------------|
| `ohmyzsh/ohmyzsh` plugin:git | Git aliases |
| `ohmyzsh/ohmyzsh` plugin:docker | Docker completion |
| `ohmyzsh/ohmyzsh` plugin:python | Python virtualenv |
| `ohmyzsh/ohmyzsh` plugin:node | Node.js npm completion |
| `ohmyzsh/ohmyzsh` plugin:cargo | Rust cargo completion |
| `ohmyzsh/ohmyzsh` plugin:ssh | SSH hosts completion |

### Visual

| Plugin | Description |
|--------|-------------|
| `romkatv/powerlevel10k` | Fast customizable prompt |
| `starship/starship` | Cross-shell prompt |
| `agkozak/agkozak-zsh-prompt` | Async git prompt |
| `spaceship-prompt/spaceship-prompt` | Feature-rich prompt |

## Plugin Configurations

### Git Plugin Config

```bash
# Disable specific aliases
zstyle ':omz:plugins:git' aliases no
zstyle ':omz:plugins:git' aliases-custom 'my-custom-aliases'
```

### z Plugin Config

```bash
# Data file location
ZSH_Z_DATA="$HOME/.z/data"

# Scoring
ZSH_Z_SCORE=5.0
```

### fzf-tab Config

```bash
# Disable fzf-tab for specific commands
zstyle ':fzf-tab:complete:*:options' fzf-preview \
  'less $realpath'

# Preview with bat
zstyle ':fzf-tab:complete:*' fzf-preview \
  'bat --color=always $realpath 2>/dev/null || ls -la $realpath'

# Preview for git
zstyle ':fzf-tab:complete:git-*:*' fzf-preview \
  'git log --oneline --graph --color=always $word'
```

## Full Plugin Setup

```bash
# Minimal productive setup
plugins=(
  git
  z
  zsh-autosuggestions
  zsh-syntax-highlighting
  zsh-completions
  fzf-tab
)

# Power user setup
plugins=(
  git
  docker docker-compose
  python pip
  node npm
  cargo
  ssh
  z
  zsh-autosuggestions
  zsh-syntax-highlighting
  zsh-completions
  fzf-tab
  1password
  vscode
  history-substring-search
  colored-man-pages
  sudo  # double-tap Esc to add sudo
  web-search  # web-search query
)
```