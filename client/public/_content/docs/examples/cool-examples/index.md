# 100 Cool Examples

A curated selection of the 100 coolest, most practical examples from the complete guide.

---

## 🔮 Autocomplete (20)

| # | Topic | Example | Tool |
|---|-------|---------|------|
| 1 | [Zsh fzf-tab](https://github.com/Aloxaf/fzf-tab) | `git checkout <TAB>` shows interactive fzf menu | Git |
| 2 | [Zsh autosuggestions](https://github.com/zsh-users/zsh-autosuggestions) | Ghost-text from history — press → to accept | Shell |
| 3 | [Zsh completions](https://github.com/zsh-users/zsh-completions) | `docker run --<TAB>` shows all options with descriptions | Docker |
| 4 | [Zsh autocomplete](https://github.com/marlonrichert/zsh-autocomplete) | Real-time dropdown as you type — no Tab needed | Shell |
| 5 | Fish built-in autosuggestions | Type `git pu<TAB>`, fish suggests `git push` | Git |
| 6 | Fish abbreviation expansion | Type `gs<Space>` → expands to `git status` | Git |
| 7 | Fish web config | `fish_config` opens browser UI for themes/completions | Shell |
| 8 | Fish kill completion | `kill <TAB>` shows running processes with PIDs | System |
| 9 | Bash programmable completion | `ssh <TAB><TAB>` shows hosts from `~/.ssh/config` | SSH |
| 10 | Custom Zsh completion | Write `_mycommand` file for your own CLI tool | Custom |
| 11 | Custom Fish completion | `complete -c mycli -f -a "init build deploy"` | Custom |
| 12 | fzf everywhere | `Ctrl+T` to fuzzy-find files, `Ctrl+R` for history | All |
| 13 | NPM script completion | `npm run <TAB>` shows package.json scripts | Node |
| 14 | Git branch completion in Zsh | `git checkout <TAB>` with branch descriptions | Git |
| 15 | Docker container names | `docker exec -it <TAB>` shows running container names | Docker |
| 16 | Systemctl services | `systemctl start <TAB>` shows all systemd units | System |
| 17 | SSH host completion | `ssh <TAB>` lists hosts from config + known_hosts | SSH |
| 18 | Case-insensitive Zsh | `zstyle ':completion:*' matcher-list` for smart case | Zsh |
| 19 | Cache completions | `zstyle ':completion:*' use-cache on` for speed | Zsh |
| 20 | Menu selection | `zstyle ':completion:*' menu select=2` (menu after 2 Tabs) | Zsh |

---

## 🎨 Theming & Visuals (20)

| # | Topic | What It Does |
|---|-------|--------------|
| 21 | [Powerlevel10k Lean](https://github.com/romkatv/powerlevel10k) | Minimal one-line prompt with git status |
| 22 | Powerlevel10k Classic | Two-line prompt with borders and full context |
| 23 | Powerlevel10k Rainbow | Colorful separators between prompt segments |
| 24 | Powerlevel10k Pure | Ultra minimal — just path and prompt char |
| 25 | Powerlevel10k Instant Prompt | Shell loads in 150ms instead of 600ms |
| 26 | [Starship Tokyo Night](https://starship.rs) | Beautiful blue/pink/cyan prompt for any shell |
| 27 | Starship Gruvbox Rainbow | Retro warm colors for the prompt |
| 28 | Starship Python virtualenv | Shows 🐍 and venv name when Python is active |
| 29 | Starship custom module | Display your own emoji or command output |
| 30 | [Catppuccin Mocha](https://github.com/catppuccin/catppuccin) | Soft purple/teal color scheme for Termux |
| 31 | Dracula color scheme | Popular dark purple/pink terminal colors |
| 32 | Nord color scheme | Arctic blue-tinted terminal theme |
| 33 | Tokyo Night colors | Vibrant dark blue/cyan scheme |
| 34 | Nerd Fonts icons | Developer icons in prompt (git, folder, docker) |
| 35 | JetBrains Mono Nerd Font | Ligatures + icons, best for coding |
| 36 | Meslo LG Nerd Font | Powerlevel10k default — works perfectly |
| 37 | Termux extra keys row | Function keys on top row (ESC, TAB, arrows) |
| 38 | Custom font-size in Termux | `font-size = 16` in termux.properties |
| 39 | Cursor style bar | `cursor-style = bar` for modern cursor |
| 40 | Transparent background | Terminal transparency via `use-black-ui = true` |

---

## 🤖 Automation (20)

| # | Topic | What It Does |
|---|-------|--------------|
| 41 | [Battery monitor](https://wiki.termux.com/wiki/Termux-api) | `termux-battery-status` → notification if < 20% |
| 42 | Send SMS from CLI | `termux-sms-send -n "+1234" "Hello"` |
| 43 | Text-to-speech alerts | `termux-tts-speak "Backup complete"` |
| 44 | Clipboard sharing | `cat file \| termux-clipboard-set` |
| 45 | Notification with actions | `termux-notification --button1 "Open" --button1-action ...` |
| 46 | Camera from terminal | `termux-camera-photo output.jpg` |
| 47 | GPS location logging | `termux-location` logged to file every 30 min |
| 48 | Flashlight toggle | `termux-torch on` / `termux-torch off` |
| 49 | WiFi scanning | `termux-wifi-scaninfo` → lists all networks |
| 50 | [Tasker + Termux](https://github.com/termux/termux-tasker) | Tasker triggers Termux scripts on events |
| 51 | Auto-reply to SMS | Tasker profile → Termux sends reply |
| 52 | Low battery Tasker alert | Battery < 20% → tasker runs `termux-tts-speak` |
| 53 | WiFi → launch Termux | Connect to home Wi-Fi → auto-open Termux |
| 54 | Morning alarm → weather | Alarm → `curl wttr.in` → TTS the weather |
| 55 | Night mode cron job | `0 23 * * *` script sets silent mode |
| 56 | Daily backup cron | `0 3 * * * tar -czf ~/backup-$(date +%Y%m%d).tar.gz` |
| 57 | Auto-update cron | `0 6 * * * pkg update -y && pkg upgrade -y` |
| 58 | SSH tunnel keepalive | `*/5 * * * *` script checks and reconnects tunnel |
| 59 | Git hooks pre-commit | Lint check before every commit |
| 60 | Git hooks post-commit | Slack/notification after successful push |

---

## 💻 Productivity (20)

| # | Topic | What It Does |
|---|-------|--------------|
| 61 | [Tmux sessionizer](https://github.com/ThePrimeagen/.dotfiles) | fzf + tmux for instant project switching |
| 62 | Tmux resurrect | `Prefix+Ctrl+S` saves, `Prefix+Ctrl+R` restores sessions |
| 63 | Tmux pane zoom | `Prefix+z` zooms pane to full screen |
| 64 | Tmux vim navigation | `Ctrl+h/j/k/l` to move between panes |
| 65 | [Neovim + LSP](https://github.com/neovim/nvim-lspconfig) | Go-to-definition, autocomplete, hover docs |
| 66 | Neovim Telescope | `:Telescope find_files` fuzzy file search |
| 67 | Neovim Treesitter | Better syntax highlighting and code navigation |
| 68 | [Git bisect](https://git-scm.com/docs/git-bisect) | Binary search to find which commit broke everything |
| 69 | Git interactive rebase | `git rebase -i HEAD~3` to squash/fixup commits |
| 70 | Git worktrees | Work on multiple branches simultaneously |
| 71 | Git reflog | Recover lost commits after bad reset |
| 72 | Pretty git log | `git log --oneline --graph --all --decorate` |
| 73 | SSH dynamic proxy | `ssh -D 1080 myserver` → SOCKS5 proxy |
| 74 | SSH jump host | `ssh -J jump@host target@server` |
| 75 | Python CLI with Click | `import click` → `@click.command()` |
| 76 | FastAPI server on phone | `pip install fastapi uvicorn` → run on port 8080 |
| 77 | nvm for Node versions | `nvm install 20` → switch Node versions |
| 78 | fzf file search | `find . -name "*$1*" \| fzf` interactive find |
| 79 | Batch rename with sed | `rename 's/.jpeg$/.jpg/' *.jpeg` |
| 80 | Monitor logs in real-time | `tail -f app.log \| grep ERROR` |

---

## ⚡ System & Terminal (20)

| # | Topic | Command |
|---|-------|---------|
| 81 | Process substitution | `diff <(ls dir1) <(ls dir2)` |
| 82 | Watch command output | `watch -n 2 'ls -lh'` |
| 83 | Background with disown | `cmd &` then `disown` |
| 84 | Reuse last argument | `!$` or `Alt+.` |
| 85 | Dir stack | `pushd /path`, `popd`, `dirs -v` |
| 86 | Quick HTTP server | `python3 -m http.server 8080` |
| 87 | Pipe to clipboard | `cat file \| termux-clipboard-set` |
| 88 | URL encode/decode | `python3 -c "import urllib.parse; print(urllib.parse.quote('text'))"` |
| 89 | JSON formatting | `echo '{"a":1}' \| python3 -m json.tool` |
| 90 | Columnar output | `column -t -s, data.csv` |
| 91 | Find large files | `find . -type f -size +10M -exec ls -lh {} \;` |
| 92 | Recursive search/replace | `find . -name '*.py' -exec sed -i 's/old/new/g' {} +` |
| 93 | Network speed test | `curl -o /dev/null -s -w "%{speed_download}" URL` |
| 94 | Port checking | `nc -zv hostname 80` |
| 95 | DNS lookup | `dig example.com` / `nslookup example.com` |
| 96 | HTTPS redirect follow | `curl -Ls -o /dev/null -w "%{url_effective}" URL` |
| 97 | Random password | `openssl rand -base64 16` |
| 98 | File type detection | `file document.pdf` |
| 99 | Diff with colors | `diff -u file1 file2 \| delta` (if delta installed) |
| 100 | Compress with progress | `tar czf archive.tar.gz folder/ \| pv` |

---

## 📦 Ready-to-Run: Quick Examples

```bash
# Autocomplete test
git checkout <TAB>  # See branches

# Battery status
termux-battery-status | python3 -c "import sys,json;print(json.load(sys.stdin)['percentage'])"

# Pretty git log
git log --oneline --graph --all --decorate

# Tmux dev session
tmux new-session -s dev -d && tmux split-window -h && tmux attach

# Quick server
python3 -m http.server 8000

# Watch directory
watch -n 1 'ls -lh --color=auto'

# Cron syntax
echo "0 3 * * * ~/scripts/backup.sh" > cron.txt && crontab cron.txt
```

---

## 📎 Links to All 100-Example Sections

| Section | Examples | Link |
|---------|----------|------|
| Zsh Autocomplete | 100 | [View](../autocomplete/examples-zsh/) |
| Fish Autocomplete | 100 | [View](../autocomplete/examples-fish/) |
| Bash Autocomplete | 100 | [View](../autocomplete/examples-bash/) |
| Theme Gallery | 100 | [View](../theming/theme-examples/) |
| Automation | 100 | [View](../automation/automation-examples/) |
| Tasker Recipes | 100 | [View](../automation/tasker-recipes/) |
| Productivity Tips | 100 | [View](../productivity/productivity-examples/) |

**Total: 700+ examples across the entire guide!**