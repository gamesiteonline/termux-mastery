# 100 Theme Gallery

<div class="example-counter" data-total="100"></div>
<div class="progress-bar"><div class="fill" data-target="100"></div></div>

---

![Color Schemes](../../../assets/images/screenshots/color-schemes.svg)
*Theme gallery overview*

## 🎨 Termux Color Schemes (30)

| # | Scheme | Type | Vibe |
|---|--------|------|------|
| 1 | Default Dark | Dark | Classic terminal |
| 2 | Default Light | Light | High contrast |
| 3 | Solarized Dark | Dark | Easy on eyes |
| 4 | Solarized Light | Light | Warm |
| 5 | Dracula | Dark | Popular purple |
| 6 | Nord | Dark | Arctic blue |
| 7 | Catppuccin Mocha | Dark | Soft pastel |
| 8 | Catppuccin Latte | Light | Soft light |
| 9 | Tokyo Night | Dark | Vibrant |
| 10 | Tokyo Day | Light | Bright |
| 11 | Gruvbox Dark | Dark | Retro warm |
| 12 | Gruvbox Light | Light | Retro light |
| 13 | One Dark | Dark | Atom-style |
| 14 | One Light | Light | Atom light |
| 15 | Monokai | Dark | Code-friendly |
| 16 | Monokai Pro | Dark | Modern code |
| 17 | Material Dark | Dark | Material design |
| 18 | Material Ocean | Dark | Ocean colors |
| 19 | Ayu Dark | Dark | Calm dark |
| 20 | Ayu Light | Light | Clean light |
| 21 | Everforest | Dark | Green forest |
| 22 | Rose Pine | Dark | Soft rose |
| 23 | Kanagawa | Dark | Japanese ink |
| 24 | Horizon | Dark | Night sky |
| 25 | Synthwave | Dark | 80s retro |
| 26 | Cyberpunk | Dark | Neon |
| 27 | Night Owlish | Dark | Owl theme |
| 28 | Pale Night | Dark | Subtle dark |
| 29 | Snazzy | Dark | Elegant |
| 30 | VSCode Dark | Dark | VS Code style |

---

## 🐚 Powerlevel10k Styles (20)

| # | Style | Description |
|---|-------|-------------|
| 31 | Lean | Minimal, one-line |
| 32 | Classic | Two-line with borders |
| 33 | Rainbow | Colorful separators |
| 34 | Pure | Ultra minimal |
| 35 | Lean with time | Lean + clock |
| 36 | Classic with git | Two-line + full git |
| 37 | Developer | Dir + git + time |
| 38 | Full info | Everything shown |
| 39 | Minimal | Only dir and prompt |
| 40 | Powerline | Traditional arrows |
| 41 | Asymmetric | Different left/right |
| 42 | Transparent | No backgrounds |
| 43 | Compact | Tight spacing |
| 44 | Sparse | Extra spacing |
| 45 | Icons only | No text labels |
| 46 | Text only | No icons |
| 47 | Nerd Font | Full icon set |
| 48 | No Nerd Font | ASCII only |
| 49 | Colorful | Bright segments |
| 50 | Monochrome | Single color |

---

## ⭐ Starship Presets (20)

| # | Theme | Shell |
|---|-------|-------|
| 51 | Tokyo Night | All |
| 52 | Gruvbox Rainbow | All |
| 53 | Pastel Powerline | All |
| 54 | Minimal | All |
| 55 | No Nerd Fonts | All |
| 56 | Material | All |
| 57 | Memory Usage | All |
| 58 | Battery Status | All |
| 59 | Kubernetes | All |
| 60 | Docker Context | All |
| 61 | Full Git | All |
| 62 | Language Detect | All |
| 63 | Time Based | All |
| 64 | Vacation Mode | All |
| 65 | Custom Emoji | All |
| 66 | Plain Text | All |
| 67 | Minimal Git | All |
| 68 | Full Info | All |
| 69 | Debug Mode | All |
| 70 | ASCII Only | All |

---

## 🖌️ Font Combinations (15)

| # | Font | Style | Nerd Font |
|---|------|-------|-----------|
| 71 | JetBrains Mono | Ligatures | ✅ |
| 72 | FiraCode | Coding | ✅ |
| 73 | Meslo LG | P10k default | ✅ |
| 74 | Hack | Clean | ✅ |
| 75 | Source Code Pro | Adobe | ✅ |
| 76 | Ubuntu Mono | Linux | ✅ |
| 77 | Cascadia Code | Windows | ✅ |
| 78 | Iosevka | Narrow | ✅ |
| 79 | DejaVu Sans Mono | Default | ✅ |
| 80 | Liberation Mono | Generic | ✅ |
| 81 | Noto Mono | Unicode | ✅ |
| 82 | Droid Sans Mono | Old | ✅ |
| 83 | Fantasque Sans Mono | Fun | ✅ |
| 84 | Mononoki | Clean | ✅ |
| 85 | Victor Mono | Cursive italic | ✅ |

---

## 🎯 Complete Setup Presets (15)

| # | Name | Shell | Theme | Prompt |
|---|------|-------|-------|--------|
| 86 | Power Dev | Zsh | Dracula | Powerlevel10k |
| 87 | Fish Starter | Fish | Nord | Starship |
| 88 | Minimalist | Zsh | Solarized | None |
| 89 | Full Stack | Zsh | Tokyo Night | Powerlevel10k |
| 90 | Retro | Bash | Gruvbox | Starship |
| 91 | Arctic | Zsh | Nord | Starship |
| 92 | Cloud Native | Zsh | Catppuccin | Starship + K8s |
| 93 | Python Dev | Fish | Material | Starship |
| 94 | JS/TS Dev | Zsh | One Dark | Powerlevel10k |
| 95 | Hacker | Bash | Green/Black | Minimal |
| 96 | Cyberpunk | Zsh | Synthwave | Powerlevel10k |
| 97 | Clean & Simple | Fish | Ayu Light | Starship |
| 98 | Portable | Zsh | Default | Starship |
| 99 | Lightweight | Bash | Default | None |
| 100 | Super Custom | Zsh | Custom | Powerlevel10k |

---

## Quick Apply

```bash
# Apply a colorscheme
cat > ~/.termux/colors.properties << 'EOF'
# Paste scheme here
EOF

# Apply Starship theme
cat > ~/.config/starship.toml << 'EOF'
# Paste Starship config here
EOF

# Reload
termux-reload-settings
```

<div class="cta-section">
  <p>🎨 All 100 themes ready to use!</p>
  <p>Go to <a href="../termux-styling/">Termux Styling</a> to get started</p>
</div>

[← Back to Theming](../termux-styling/)