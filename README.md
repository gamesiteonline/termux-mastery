# Termux Mastery 🚀

[![MkDocs](https://img.shields.io/badge/MkDocs-Material-teal)](https://squidfunk.github.io/mkdocs-material/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Stars](https://img.shields.io/github/stars/gamesiteonline/termux-mastery?style=social)](https://github.com/gamesiteonline/termux-mastery)

> **The definitive guide to transforming Termux from a plain terminal into a powerhouse development environment on Android.**

---

## 📚 What You'll Learn

- **Shell Mastery** — Zsh, Fish, Bash autocomplete with 100+ real-world examples
- **Instant Autocomplete** — Tab completion that reads your mind (git, docker, npm, python, and more)
- **Stunning Themes** — Powerlevel10k, Starship, Nerd Fonts, color schemes
- **Android Automation** — Tasker integration, Termux:API, cron jobs, SSH
- **Productivity Workflows** — Tmux, Neovim, Git, SSH tunnels, dotfiles
- **Advanced Configs** — Bootstrap scripts, proot-distro, kernel modules

---

## 🚦 Quick Start

```bash
# Install Termux (use F-Droid for best experience)
# https://f-droid.org/packages/com.termux

# Run the master bootstrap script (installs everything)
pkg install -y curl git
curl -fsSL https://raw.githubusercontent.com/gamesiteonline/termux-mastery/main/assets/scripts/bootstrap.sh | bash
```

---

## 🌐 Read Online

Visit the full guide: **https://gamesiteonline.github.io/termux-mastery**

---

## 📖 What's Inside

| Section | Files | Examples |
|---------|-------|----------|
| Getting Started | 4 | Installation, config, basics |
| Shells | 10 | Bash, Zsh, Fish, Starship |
| Autocomplete | 9 | **300 completion examples** |
| Theming | 6 | **100 theme gallery** |
| Automation | 9 | **200 automation recipes** |
| Productivity | 6 | **100 productivity tips** |
| Advanced | 5 | Dotfiles, proot, packages |
| Reference | 4 | Cheatsheet, troubleshooting |

---

## 🎯 100 Examples Philosophy

Every major topic includes **100 practical, copy-paste examples** organized by category:

```
shells/
  └── 100-examples-zsh.md    ← 25 git + 20 docker + 15 npm + 10 python + 10 custom + 20 system
autocomplete/
  ├── 100-examples-zsh.md
  ├── 100-examples-fish.md
  └── 100-examples-bash.md
automation/
  ├── 100-automation-examples.md
  └── 100-tasker-recipes.md
theming/
  └── 100-theme-examples.md
```

---

## 🤝 Contributing

We welcome contributions! See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

- Add examples to the 100-examples files
- Fix typos or improve explanations
- Share your Termux config/screenshots
- Report issues or suggest topics

---

## 📦 Project Structure

```
termux-mastery/
├── docs/                    # All documentation (MkDocs source)
│   ├── getting-started/     # Termux setup & basics
│   ├── shells/              # Zsh, Fish, Bash, Starship
│   ├── autocomplete/        # Deep dive + 100 examples per shell
│   ├── theming/             # Visual customization
│   ├── automation/          # Tasker, API, cron, SSH, git hooks
│   ├── productivity/        # Tmux, Neovim, Git workflows
│   ├── advanced/            # Dotfiles, proot, building packages
│   ├── examples/            # Showcase & gallery
│   └── reference/           # Cheatsheet & troubleshooting
├── assets/
│   ├── scripts/             # Bootstrap & setup scripts
│   └── configs/             # Ready-to-use config files
├── scripts/                 # Build & dev tools
├── mkdocs.yml               # Site configuration
└── README.md                # This file
```

---

## 📝 License

MIT - see [LICENSE](LICENSE) for details.

---

<p align="center">
  <sub>Built with ❤️ for the Termux community</sub>
  <br>
  <sub>⭐ Star this repo if you find it useful!</sub>
</p>