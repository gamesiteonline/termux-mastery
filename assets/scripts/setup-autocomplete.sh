#!/data/data/com.termux/files/usr/bin/bash

# Autocomplete Setup Script
# Installs and configures zsh-autocomplete, autosuggestions, syntax highlighting, fzf-tab

set -e

echo "🔮 Setting up Zsh Autocomplete..."
echo "================================"

ZSH_CUSTOM="${ZSH_CUSTOM:-$HOME/.oh-my-zsh/custom}"

echo "📦 Installing plugins..."
git clone --depth=1 https://github.com/marlonrichert/zsh-autocomplete.git "$ZSH_CUSTOM/plugins/zsh-autocomplete" 2>/dev/null && echo "  ✓ zsh-autocomplete"
git clone --depth=1 https://github.com/zsh-users/zsh-autosuggestions.git "$ZSH_CUSTOM/plugins/zsh-autosuggestions" 2>/dev/null && echo "  ✓ zsh-autosuggestions"
git clone --depth=1 https://github.com/zsh-users/zsh-syntax-highlighting.git "$ZSH_CUSTOM/plugins/zsh-syntax-highlighting" 2>/dev/null && echo "  ✓ zsh-syntax-highlighting"
git clone --depth=1 https://github.com/zsh-users/zsh-completions.git "$ZSH_CUSTOM/plugins/zsh-completions" 2>/dev/null && echo "  ✓ zsh-completions"
git clone --depth=1 https://github.com/Aloxaf/fzf-tab.git "$ZSH_CUSTOM/plugins/fzf-tab" 2>/dev/null && echo "  ✓ fzf-tab"

echo ""
echo "✅ All plugins installed!"
echo ""
echo "Add this to your ~/.zshrc:"
echo ""
echo '  plugins=(git zsh-autocomplete zsh-autosuggestions zsh-syntax-highlighting zsh-completions fzf-tab)'
echo ""
echo "Then: source ~/.zshrc"