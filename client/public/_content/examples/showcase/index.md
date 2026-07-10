# Showcase

Real Termux setups from the community.

---

## 🧑‍💻 Developer Workstation

**User**: gamesiteonline  
**Purpose**: Full-stack development on phone

```
Shell:          Zsh + Powerlevel10k (Tokyo Night)
Font:           JetBrains Mono Nerd Font
Editor:         Neovim + LSP + Telescope + Treesitter
Terminal:       Tmux + TPM + Resurrect + Continuum
Git:            Custom aliases + pre-commit hooks
Autocomplete:   zsh-autocomplete + fzf-tab + autosuggestions
Automation:     Tasker → Termux:API + Cron jobs
Python:         pyenv + pipx + Poetry
Node:           nvm + pnpm
Cloud:          Starship shows K8s context + AWS profile
```

**Key configs**: `~/.zshrc`, `~/.config/nvim/init.vim`, `~/.tmux.conf`

![Developer Workstation](../../../assets/images/screenshots/tmux-session.svg)

---

## 🐟 Minimal Power User

**User**: fish_lover  
**Purpose**: Maximum productivity, minimum config

```
Shell:          Fish (built-in autosuggestions + highlighting)
Font:           Hack Nerd Font
Editor:         Vim + vim-plug
Terminal:       Fish web config (`fish_config`)
Git:            Fish abbreviation `gs → git status`
Autocomplete:   Built-in fish completions (best out of box)
Automation:     Cron jobs for backup + updates
Prompt:         Starship with minimal config
```

**Why Fish**: No plugins needed — everything works immediately.

```
# Entire fish config (config.fish):
starship init fish | source
abbr --add gs 'git status'
abbr --add gp 'git push'
```

---

## 🕵️ Privacy/Hacker Setup

**User**: security_pro  
**Purpose**: CTF, penetration testing, secure communication

```
Shell:          Bash (custom PS1, no framework)
Font:           Monospace (no Nerd Fonts for simplicity)
Editor:         Vim (minimal .vimrc)
Terminal:       Screen (lighter than tmux)
Git:            GPG-signed commits + SSH keys
SSH:            Multiple jump hosts + tunnels
Tools:          nmap, sqlmap, metasploit, hydra, wireshark-cli
VPN:            WireGuard in Termux
Automation:     SSH tunnel keepalive + log monitoring
```

**Security practices**:
- All SSH keys have passphrases
- GPG signing on all commits
- No aliases (muscle memory for raw commands)
- Cron monitors for unauthorized SSH attempts

---

## 📱 Daily Driver (All-Rounder)

**User**: termux_power  
**Purpose**: Every day use — communication, coding, media

```
Shell:          Zsh + Oh My Zsh + Starship
Font:           FiraCode Nerd Font
Editor:         Neovim (minimal LSP)
Terminal:       Tmux (2 sessions: work/personal)
Git:            Default OMZ git plugin
Autocomplete:   zsh-autosuggestions + zsh-completions
Automation:     Tasker SMS auto-reply + WiFi auto-connect
Media:          mpv, yt-dlp, ffmpeg
Notes:          Vimwiki
```

---

## 🎨 Theme Collector

**User**: theme_hopper  
**Purpose**: Tries new themes weekly

```
Shell:          Zsh + Powerlevel10k
Font:           Changes monthly (currently Cascadia Code Nerd)
Prompt:         Changes weekly via `p10k configure`
Termux colors:  Switches daily via cron (random scheme)
Starship:       Used on Fish shell for contrast
```

**Theme rotation script**:
```bash
#!/bin/bash
# ~/scripts/random_theme.sh
themes=("catppuccin" "dracula" "nord" "tokyo-night" "gruvbox")
theme=${themes[$RANDOM % ${#themes[@]}]}
cp ~/.termux/colors.$theme ~/.termux/colors.properties
termux-reload-settings
```

---

## Submit Your Setup

Want to showcase your Termux setup? Open a PR or issue on our GitHub repository!

Include:
- Your shell/font/editor/tools
- What you use Termux for
- Key config files or dotfiles link
- A screenshot!