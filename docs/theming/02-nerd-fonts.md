# Nerd Fonts

Nerd Fonts add hundreds of icons (glyphs) to your terminal for better visual prompts.

## Why Nerd Fonts?

- Powerlevel10k icons display correctly
- Starship prompt icons render properly
- File type icons in ls/terminal
- Git status icons (branches, modifications)
- Status icons for languages, tools, clouds

## Installation

```bash
# Option 1: Download JetBrains Mono Nerd Font
pkg install wget unzip -y
mkdir -p ~/.termux/font
wget https://github.com/ryanoasis/nerd-fonts/releases/download/v3.2.1/JetBrainsMono.zip
unzip JetBrainsMono.zip -d ~/.termux/font/

# Set as active font
cp ~/.termux/font/JetBrainsMonoNerdFont-Regular.ttf ~/.termux/font.ttf

# Reload Termux
termux-reload-settings
```

## Popular Nerd Fonts

| Font | Best For |
|------|----------|
| **JetBrains Mono** | Coding, ligatures |
| **FiraCode** | Coding, popular |
| **Meslo LG** | Powerlevel10k default |
| **Hack** | Clean, readable |
| **Source Code Pro** | Adobe original |
| **Ubuntu Mono** | Ubuntu/Linux feel |
| **Cascadia Code** | Windows Terminal style |

## Install Specific Fonts

```bash
# FiraCode
wget https://github.com/ryanoasis/nerd-fonts/releases/download/v3.2.1/FiraCode.zip
unzip FiraCode.zip -d ~/.termux/font/

# Meslo LG (recommended for Powerlevel10k)
wget https://github.com/ryanoasis/nerd-fonts/releases/download/v3.2.1/Meslo.zip
unzip Meslo.zip -d ~/.termux/font/

# Verify fonts
ls ~/.termux/font/ | head -10
```

## Setting Font in Termux

```bash
# Copy desired .ttf to font.ttf
cp ~/.termux/font/JetBrainsMonoNerdFont-Regular.ttf ~/.termux/font.ttf

# Or use Termux:Styling app
# Long press → More... → Style → Font
```

## Verify Icons Work

Run this command to test if icons display:

```bash
echo -e "\uf0e7 \uf085 \ueb95 \uf120 \uea60 \uf0c3"
# Should show: rocket gear fire branch folder
```

## Troubleshooting

| Issue | Fix |
|-------|-----|
| Icons show as boxes | Font not installed or not set |
| Partial icons | Wrong font variant (need Nerd Font) |
| Powerlevel10k symbols | Install Meslo Nerd Font |
| Starship symbols | Install any Nerd Font |