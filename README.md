# Termux Mastery 🚀

[![MkDocs](https://img.shields.io/badge/MkDocs-Material-teal)](https://squidfunk.github.io/mkdocs-material/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Stars](https://img.shields.io/github/stars/gamesiteonline/termux-mastery?style=social)](https://github.com/gamesiteonline/termux-mastery)

> **The complete guide to transforming Termux on Android into a development powerhouse.**  
> Each topic is in its own folder — open what you need.

---

## 🚀 Quick Start

```bash
pkg install -y curl git
curl -fsSL https://raw.githubusercontent.com/gamesiteonline/termux-mastery/main/assets/scripts/bootstrap.sh | bash
```

---

## 📚 Complete Guide Directory

### 🐣 Getting Started
| Topic | Description |
|-------|-------------|
| [📱 Installation](docs/getting-started/installation/index.md) | Install Termux (F-Droid vs Play Store), storage setup |
| [⚙️ Basic Configuration](docs/getting-started/basic-config/index.md) | termux.properties, extra-keys, colors, font size |
| [🐚 Shell Basics](docs/getting-started/shell-basics/index.md) | Essential commands, navigation, file operations |
| [📦 Package Management](docs/getting-started/package-management/index.md) | pkg/apt install, upgrade, search, popular packages |

### 🐚 Shells
| Topic | Description |
|-------|-------------|
| [Bash Basics](docs/shells/bash-basics/index.md) | PS1 prompt, aliases, history, bash completion |
| [Zsh Setup](docs/shells/zsh-setup/index.md) | Install zsh, chsh, basic .zshrc config |
| [Oh My Zsh](docs/shells/oh-my-zsh/index.md) | Framework install, themes list, plugins guide |
| [Powerlevel10k](docs/shells/powerlevel10k/index.md) | Fastest Zsh theme, wizard, instant prompt |
| [Zsh Autocomplete](docs/shells/zsh-autocomplete/index.md) | compinit, completions styles, key bindings |
| [Zsh Plugins](docs/shells/zsh-plugins/index.md) | Plugin managers (Zinit, Antidote), essential plugins |
| [Fish Setup](docs/shells/fish-setup/index.md) | Install fish, config.fish, abbreviations |
| [Fish Autocomplete](docs/shells/fish-autocomplete/index.md) | Built-in fish completions, writing custom |
| [Starship Prompt](docs/shells/starship-prompt/index.md) | Cross-shell Rust prompt, TOML config |
| [Shell Comparison](docs/shells/shell-comparison/index.md) | Bash vs Zsh vs Fish — when to choose what |

### 🔮 Autocomplete (300+ Examples)
| Topic | Description |
|-------|-------------|
| [Completion Basics](docs/autocomplete/completion-basics/index.md) | How tab completion works across shells |
| [Zsh Completions Deep Dive](docs/autocomplete/zsh-completions/index.md) | Advanced compinit styles, fzf-tab, caching |
| [Fish Completions Deep Dive](docs/autocomplete/fish-completions/index.md) | Fish completion files, dynamic completions |
| [Bash Completions](docs/autocomplete/bash-completions/index.md) | bash-completion, programmable completion |
| [Custom Completions](docs/autocomplete/custom-completions/index.md) | Write your own for all 3 shells |
| [Tool Completions](docs/autocomplete/tool-completions/index.md) | Git, Docker, Kubectl, NPM, Python setup |
| [🌟 100 Zsh Autocomplete Examples](docs/autocomplete/examples-zsh/index.md) | 25 git + 20 docker + 15 npm + 10 python + 10 custom + 20 system |
| [🌟 100 Fish Autocomplete Examples](docs/autocomplete/examples-fish/index.md) | 25 git + 20 docker + 15 npm + 10 python + 10 custom + 20 system |
| [🌟 100 Bash Autocomplete Examples](docs/autocomplete/examples-bash/index.md) | 20 git + 15 docker + 10 npm + 10 python + 15 custom + 30 system |

### 🎨 Theming (100+ Themes)
| Topic | Description |
|-------|-------------|
| [Termux Styling](docs/theming/termux-styling/index.md) | Colors, fonts, Termux:Styling app |
| [Nerd Fonts](docs/theming/nerd-fonts/index.md) | Install Nerd Fonts with developer icons |
| [Color Schemes](docs/theming/color-schemes/index.md) | Catppuccin, Dracula, Nord, Tokyo Night, Gruvbox — 30+ schemes |
| [Powerlevel10k Themes](docs/theming/powerlevel10k-themes/index.md) | Lean, Classic, Rainbow, Pure — 20 styles |
| [Starship Themes](docs/theming/starship-themes/index.md) | Tokyo Night, Gruvbox Rainbow, Pastel presets |
| [🌟 100 Theme Gallery](docs/theming/theme-examples/index.md) | 30 colors + 20 P10k + 20 Starship + 15 fonts + 15 full setups |

### 🤖 Automation (200+ Recipes)
| Topic | Description |
|-------|-------------|
| [Termux API](docs/automation/termux-api/index.md) | Battery, camera, SMS, clipboard, notifications, sensors |
| [Termux + Tasker](docs/automation/termux-tasker/index.md) | Bridge Termux with Android automation |
| [Cron Jobs](docs/automation/cron-jobs/index.md) | Auto-backup, battery monitor, system cleanup |
| [SSH Keys](docs/automation/ssh-keys/index.md) | Passwordless auth, ssh-agent, config |
| [Git Hooks](docs/automation/git-hooks/index.md) | Pre-commit lint, pre-push tests, post-commit notify |
| [Aliases & Functions](docs/automation/aliases-functions/index.md) | 50+ essential aliases for git, docker, nav |
| [Tmux Sessions](docs/automation/tmux-sessions/index.md) | Dev session templates, auto-start services |
| [🌟 100 Automation Examples](docs/automation/automation-examples/index.md) | 20 cron + 20 aliases + 20 functions + 15 tmux + 15 scripts + 10 hooks |
| [🌟 100 Tasker Recipes](docs/automation/tasker-recipes/index.md) | 20 phone + 15 location + 20 time + 15 app + 10 battery + 10 network + 10 system |

### 💻 Productivity (100+ Tips)
| Topic | Description |
|-------|-------------|
| [Tmux](docs/productivity/tmux/index.md) | Sessions, windows, panes, TPM, resurrect |
| [Vim & Neovim](docs/productivity/vim-neovim/index.md) | LSP, treesitter, Telescope, config |
| [Git Workflow](docs/productivity/git-workflow/index.md) | Bisect, worktree, reflog, interactive rebase |
| [SSH Tunnels](docs/productivity/ssh-tunnels/index.md) | Local/remote/dynamic forwarding, jump hosts |
| [Python & Node.js](docs/productivity/python-node/index.md) | Venv, nvm, pipx, project templates |
| [🌟 100 Productivity Examples](docs/productivity/productivity-examples/index.md) | 30 terminal + 20 shell + 20 git + 15 file + 15 network |

### 🧠 Advanced
| Topic | Description |
|-------|-------------|
| [Dotfiles Management](docs/advanced/dotfiles/index.md) | GNU Stow, sync with git |
| [Bootstrap Script](docs/advanced/bootstrap-script/index.md) | One-command full Termux setup |
| [Building Packages](docs/advanced/termux-packages/index.md) | Compile from source, termux-packages |
| [Proot Distro](docs/advanced/proot-distro/index.md) | Run Ubuntu/Debian/Arch in Termux |

### 📚 Reference
| Topic | Description |
|-------|-------------|
| [📋 Cheatsheet](docs/reference/cheatsheet/index.md) | Quick commands for git, tmux, vim, pkg, API |
| [🔧 Troubleshooting](docs/reference/troubleshooting/index.md) | Solutions for common issues |
| [📎 Resources](docs/reference/resources/index.md) | Official links, tools, communities |
| [📖 Glossary](docs/reference/glossary/index.md) | All terms defined |

### 🖼️ Examples & Gallery
| Topic | Description |
|-------|-------------|
| [🌟 100 Cool Examples](docs/examples/cool-examples/index.md) | Top picks from all sections |
| [📸 Gallery](docs/examples/gallery/index.md) | Terminal screenshots showcase |
| [🏆 Showcase](docs/examples/showcase/index.md) | Real Termux setups |
| [📜 Usage](docs/examples/usage/index.md) | How to use the bootstrap scripts |

---

## 📦 Project Structure

```
termux-mastery/
├── docs/                    # All docs — each topic has its own folder
│   ├── index.md            # Home page
│   ├── getting-started/     # 4 topics
│   ├── shells/              # 10 topics
│   ├── autocomplete/        # 9 topics (3 with 100 examples)
│   ├── theming/             # 6 topics (1 with 100 gallery)
│   ├── automation/          # 9 topics (2 with 100 recipes)
│   ├── productivity/        # 6 topics (1 with 100 tips)
│   ├── advanced/            # 4 topics
│   ├── examples/            # 4 topics
│   └── reference/           # 4 topics
├── assets/
│   ├── scripts/             # Bootstrap & setup scripts
│   ├── configs/             # Ready-to-use config files
│   └── images/              # Screenshots, diagrams
├── mkdocs.yml               # Site config (MkDocs Material)
└── README.md                # This file
```

---

## 🤝 Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) — PRs welcome!

---

<p align="center">
  <sub>Built with ❤️ for the Termux community</sub><br>
  <sub>⭐ Star this repo if you find it useful!</sub>
</p>