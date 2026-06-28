# Dotfiles Management

## Why Manage Dotfiles?

- **Sync** configs across devices
- **Backup** your customizations
- **Restore** quickly after reset
- **Share** your setup with others

## GNU Stow (Symlink Manager)

```bash
pkg install stow

# Create dotfiles directory
mkdir -p ~/dotfiles

# Move configs into organized structure
mkdir -p ~/dotfiles/zsh
mv ~/.zshrc ~/dotfiles/zsh/
mkdir -p ~/dotfiles/git
mv ~/.gitconfig ~/dotfiles/git/
mkdir -p ~/dotfiles/termux
mv ~/.termux/termux.properties ~/dotfiles/termux/

# Restore with stow (creates symlinks)
cd ~/dotfiles
stow zsh      # ~/.zshrc -> ~/dotfiles/zsh/.zshrc
stow git      # ~/.gitconfig -> ~/dotfiles/git/.gitconfig
stow termux   # ~/.termux/termux.properties -> ~/dotfiles/termux/termux.properties
```

## Recommended Structure

```
dotfiles/
├── zsh/
│   ├── .zshrc
│   ├── .zsh_aliases
│   └── .p10k.zsh
├── bash/
│   └── .bashrc
├── fish/
│   └── .config/
│       └── fish/
│           └── config.fish
├── git/
│   ├── .gitconfig
│   └── .gitignore_global
├── nvim/
│   └── .config/
│       └── nvim/
│           └── init.vim
├── tmux/
│   └── .tmux.conf
├── starship/
│   └── .config/
│       └── starship.toml
├── termux/
│   └── .termux/
│       ├── termux.properties
│       ├── colors.properties
│       └── font.ttf
└── scripts/
    └── .local/
        └── bin/
            ├── bootstrap.sh
            └── tmux-sessionizer.sh
```

## Setup Script

```bash
#!/bin/bash
# ~/dotfiles/setup.sh - Bootstrap dotfiles on new device

echo "Setting up dotfiles..."
cd ~/dotfiles

# Install stow if not present
pkg install stow -y

# Stow all packages
for dir in */; do
  if [ -d "$dir" ]; then
    echo "Stowing $dir..."
    stow -R "$dir" 2>/dev/null || stow "$dir"
  fi
done

echo "Done! Reload your shell."
```

## Git Sync

```bash
cd ~/dotfiles
git init
git remote add origin https://github.com/gamesiteonline/dotfiles.git
git add .
git commit -m "Initial dotfiles"
git push -u origin main
```