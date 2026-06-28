# Termux Styling

Termux:Styling is an add-on app that customizes colors and fonts.

## Installation

```bash
# Install from F-Droid (recommended)
# https://f-droid.org/packages/com.termux.styling

# Or Google Play
# Search "Termux:Styling" in Play Store
```

## Using Termux:Styling

After installing, long-press on the Termux screen → **More...** → **Style**:

- **Choose Color Scheme** — Pick from 20+ presets (Dark, Light, Solarized, Gruvbox, etc.)
- **Choose Font** — Pick from 15+ fonts (Fira Code, JetBrains Mono, Hack, etc.)

## Popular Color Schemes

| Scheme | Description |
|--------|-------------|
| **Default Dark** | Classic black/green terminal |
| **Solarized Dark** | Easy on the eyes, widely used |
| **Gruvbox Dark** | Retro warm colors |
| **Dracula** | Popular dark purple/pink |
| **Nord** | Arctic blue tones |
| **Catppuccin** | Soft pastel colors |
| **Tokyo Night** | Vibrant night theme |
| **One Dark** | Atom editor inspired |

## Custom Color Schemes

Colors are defined in `~/.termux/colors.properties`:

```properties
# ~/.termux/colors.properties
# Catppuccin Mocha

background=#1e1e2e
foreground=#cdd6f4
cursor=#f5e0dc

# Black
color0=#45475a
color8=#585b70

# Red
color1=#f38ba8
color9=#f38ba8

# Green
color2=#a6e3a1
color10=#a6e3a1

# Yellow
color3=#f9e2af
color11=#f9e2af

# Blue
color4=#89b4fa
color12=#89b4fa

# Magenta
color5=#f5c2e7
color13=#f5c2e7

# Cyan
color6=#94e2d5
color14=#94e2d5

# White
color7=#bac2de
color15=#a6adc8
```

## Custom Fonts

Place `.ttf` files in `~/.termux/font.ttf`:

```bash
# Download a Nerd Font
curl -L "https://github.com/ryanoasis/nerd-fonts/releases/download/v3.0.2/JetBrainsMono.zip" -o jetbrains.zip
unzip -o jetbrains.zip -d ~/.termux/font/
cp ~/.termux/font/JetBrainsMonoNerdFont-Regular.ttf ~/.termux/font.ttf

# Reload
termux-reload-settings
```

## See More

- [Nerd Fonts Guide](02-nerd-fonts.md) — Install Nerd Fonts with icons
- [Color Schemes Gallery](03-color-schemes.md) — 30+ curated schemes