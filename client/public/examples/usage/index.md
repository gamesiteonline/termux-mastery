# Bootstrap and Setup Scripts

Ready-to-run scripts for automating Termux setup.

---

## Quick Start

```bash
# Full bootstrap (Zsh + P10k + plugins + Starship + tmux + tools)
curl -fsSL https://raw.githubusercontent.com/gamesiteonline/termux-mastery/main/assets/scripts/bootstrap.sh | bash
```

This single command installs and configures everything below.

---

## Available Scripts

| Script | Description | Size |
|--------|-------------|------|
| [`bootstrap.sh`](../../assets/scripts/bootstrap.sh) | Complete setup: Zsh + OMZ + P10k + plugins + Starship + tmux | Full |
| [`setup-autocomplete.sh`](../../assets/scripts/setup-autocomplete.sh) | Zsh autocomplete + autosuggestions + syntax highlight + fzf-tab | Autocomplete |
| [`install-starship.sh`](../../assets/scripts/install-starship.sh) | Starship prompt for any shell (bash/zsh/fish) | Prompt |

### bootstrap.sh

Installs and configures:
- **Shells**: Zsh (set as default), Oh My Zsh, Powerlevel10k theme
- **Plugins**: zsh-autosuggestions, zsh-syntax-highlighting, zsh-completions, zsh-autocomplete, fzf-tab
- **Prompt**: Starship with Tokyo Night preset
- **Tools**: git, curl, wget, tmux, neovim, fzf, ripgrep, bat, python, nodejs, openssh
- **Configs**: Custom `.zshrc`, `.tmux.conf`, `starship.toml`, `termux.properties`

### setup-autocomplete.sh

Installs and configures Zsh autocomplete plugins:
- `zsh-autocomplete` (marlonrichert) — real-time suggestions
- `zsh-autosuggestions` — fish-like ghost text
- `zsh-syntax-highlighting` — command coloring
- `zsh-completions` — extra completion definitions
- `fzf-tab` — fzf-powered tab menu

---

## Advanced Usage

```bash
# Save and inspect before running
curl -O https://raw.githubusercontent.com/gamesiteonline/termux-mastery/main/assets/scripts/bootstrap.sh
chmod +x bootstrap.sh
less bootstrap.sh  # Review what it does
./bootstrap.sh     # Run it

# Install only autocomplete
curl -fsSL https://raw.githubusercontent.com/gamesiteonline/termux-mastery/main/assets/scripts/setup-autocomplete.sh | bash

# Install Starship
curl -fsSL https://raw.githubusercontent.com/gamesiteonline/termux-mastery/main/assets/scripts/install-starship.sh | bash
```

---

## Manual Setup (Step by Step)

If you prefer to install components individually:

```bash
# 1. Update packages
pkg update && pkg upgrade -y

# 2. Install Zsh and set as default
pkg install zsh
chsh -s zsh

# 3. Install Oh My Zsh
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"

# 4. Install Powerlevel10k
git clone --depth=1 https://github.com/romkatv/powerlevel10k.git \
  ${ZSH_CUSTOM:-$HOME/.oh-my-zsh/custom}/themes/powerlevel10k

# 5. Install plugins
git clone https://github.com/zsh-users/zsh-autosuggestions ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions
git clone https://github.com/zsh-users/zsh-syntax-highlighting ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting
git clone https://github.com/marlonrichert/zsh-autocomplete ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autocomplete
git clone https://github.com/Aloxaf/fzf-tab ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/fzf-tab

# 6. Install Starship
pkg install starship

# 7. Install tools
pkg install fzf ripgrep bat tmux neovim
```

---

## Post-Installation

After running the bootstrap:

1. **Run Powerlevel10k wizard**: `p10k configure` (answer the questions)
2. **Restart Termux** to load Zsh as default
3. **Explore** the [100 Zsh Autocomplete Examples](../autocomplete/examples-zsh/)
4. **Customize** your [Starship prompt](../theming/starship-themes/)
5. **Add** [automation recipes](../automation/tasker-recipes/) with Tasker