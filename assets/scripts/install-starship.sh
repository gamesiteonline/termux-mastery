#!/data/data/com.termux/files/usr/bin/bash

# Install Starship prompt for the current shell

set -e

echo "🚀 Installing Starship Prompt..."
echo "================================"

pkg install starship

SHELL_NAME=$(basename "$SHELL")

case "$SHELL_NAME" in
  zsh)
    echo "eval \"\$(starship init zsh)\"" >> ~/.zshrc
    echo "✓ Added to ~/.zshrc"
    ;;
  bash)
    echo "eval \"\$(starship init bash)\"" >> ~/.bashrc
    echo "✓ Added to ~/.bashrc"
    ;;
  fish)
    echo "starship init fish | source" >> ~/.config/fish/config.fish
    echo "✓ Added to ~/.config/fish/config.fish"
    ;;
  *)
    echo "⚠️  Unknown shell. Add manually:"
    echo "   eval \"\$(starship init $SHELL_NAME)\""
    ;;
esac

echo ""
echo "✅ Starship installed!"
echo "   Config file: ~/.config/starship.toml"
echo "   Restart your shell or source your config."