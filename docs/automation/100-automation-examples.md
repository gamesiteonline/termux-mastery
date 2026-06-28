# 100 Automation Examples

<div class="example-counter" data-total="100"></div>
<div class="progress-bar"><div class="fill" data-target="100"></div></div>

---

## ⏰ Cron Jobs (20)

### 1. Daily Backup at 3 AM
```bash
0 3 * * * ~/scripts/backup.sh
```

### 2. System Cleanup Weekly
```bash
0 4 * * 0 ~/scripts/cleanup.sh
```

### 3. Battery Check Every 10 Min
```bash
*/10 * * * * ~/scripts/check_battery.sh
```

### 4. News Notification at 7 AM
```bash
0 7 * * * ~/scripts/daily_news.sh
```

### 5. Git Auto-Commit at Midnight
```bash
0 0 * * * ~/scripts/auto_commit.sh
```

### 6. Weather Report Morning
```bash
30 6 * * * ~/scripts/weather_notify.sh
```

### 7. Package Update Check Weekly
```bash
0 10 * * 1 ~/scripts/check_updates.sh
```

### 8. Log Rotation Daily
```bash
0 2 * * * ~/scripts/rotate_logs.sh
```

### 9. Network Status Every 5 Min
```bash
*/5 * * * * ~/scripts/ping_test.sh
```

### 10. Free Memory Monitor
```bash
*/30 * * * * ~/scripts/memory_check.sh
```

### 11. Sync Downloads to Cloud
```bash
0 22 * * * ~/scripts/sync_downloads.sh
```

### 12. Export Notes Daily
```bash
0 20 * * * ~/scripts/export_notes.sh
```

### 13. Clean Cache Files
```bash
0 5 * * 0 ~/scripts/clean_cache.sh
```

### 14. Temperature Monitor
```bash
*/15 * * * * ~/scripts/check_temp.sh
```

### 15. SSH Tunnel Keep-Alive
```bash
*/5 * * * * ~/scripts/keep_tunnel.sh
```

### 16. Download Mirror Sync
```bash
0 6 * * * ~/scripts/mirror_sync.sh
```

### 17. Bookmark Backup
```bash
0 1 * * 0 ~/scripts/backup_bookmarks.sh
```

### 18. Database Dump
```bash
0 4 * * 0 ~/scripts/db_dump.sh
```

### 19. Generate SSH Key Monthly
```bash
0 0 1 */3 * ~/scripts/rotate_keys.sh
```

### 20. Health Check Report
```bash
0 9 * * 1 ~/scripts/health_report.sh
```

---

## 🎯 Shell Aliases (20)

### 21. Git Quick Commands
```bash
alias gco='git checkout'
alias gst='git status'
alias glog='git log --oneline --graph'
```

### 22. Docker Shortcuts
```bash
alias dps='docker ps'
alias di='docker images'
alias dexec='docker exec -it'
```

### 23. Navigation
```bash
alias home='cd ~'
alias docs='cd ~/storage/shared/Documents'
alias down='cd ~/storage/shared/Download'
```

### 24. System Info
```bash
alias myip='curl -s ifconfig.me'
alias space='df -h'
alias mem='free -h'
```

### 25. Package Management
```bash
alias upd='pkg update && pkg upgrade'
alias inst='pkg install'
alias search='pkg search'
```

### 26. File Operations
```bash
alias ll='ls -lh'
alias la='ls -lAh'
alias lt='ls -lth'
alias ..='cd ..'
alias md='mkdir -p'
```

### 27. Network Tools
```bash
alias ports='netstat -tulanp'
alias ping='ping -c 4'
```

### 28. Python Shortcuts
```bash
alias py='python3'
alias venv='python3 -m venv'
alias pipi='pip install'
```

### 29. Editor Shortcuts
```bash
alias nv='nvim'
alias v='vim'
alias nano='nano -c'
```

### 30. Tmux
```bash
alias t='tmux'
alias ta='tmux attach'
alias tls='tmux list-sessions'
```

---

## 🛠️ Shell Functions (20)

### 31. MKCD - Make Dir & Enter
```bash
mkcd() { mkdir -p "$1" && cd "$1"; }
```

### 32. Extract - Unpack Anything
```bash
extract() {
  case "$1" in *.tar.gz) tar xzf "$1" ;; *.zip) unzip "$1" ;; *.rar) unrar x "$1" ;; esac
}
```

### 33. Weather
```bash
weather() { curl -s "wttr.in/${1:-London}?m1" | head -7; }
```

### 34. Calc - CLI Calculator
```bash
calc() { echo "$*" | bc -l; }
```

### 35. Find by Name
```bash
f() { find . -iname "*$1*" 2>/dev/null; }
```

### 36. Grep Recursive
```bash
gr() { grep -rn "$1" . 2>/dev/null; }
```

### 37. Backup File
```bash
bu() { cp "$1" "${1}.bak"; }
```

### 38. Quick HTTP Server
```bash
serve() { python3 -m http.server "${1:-8000}"; }
```

### 39. Kill by Name
```bash
killp() { pkill -f "$1"; }
```

### 40. Encode/Decode
```bash
urlencode() { python3 -c "import sys,urllib.parse; print(urllib.parse.quote(sys.argv[1]))" "$1"; }
urldecode() { python3 -c "import sys,urllib.parse; print(urllib.parse.unquote(sys.argv[1]))" "$1"; }
```

---

## 🔄 Tmux Session Templates (15)

### 41. Dev Session
```bash
tmux new-session -s dev -d
tmux send-keys -t dev "nvim" C-m
tmux split-window -h
tmux send-keys -t dev "npm run dev" C-m
tmux attach -t dev
```

### 42. Git Dashboard
```bash
tmux new-session -s git -d
tmux send-keys -t git "git log --oneline --graph --all" C-m
tmux split-window -v
tmux send-keys -t git "git status" C-m
tmux attach -t git
```

### 43. Server Monitor
```bash
tmux new-session -s monitor -d
tmux send-keys -t monitor "htop" C-m
tmux split-window -h
tmux send-keys -t monitor "nload" C-m
tmux attach -t monitor
```

---

## 📝 Scripts (15)

### 44. Backup Script
```bash
#!/bin/bash
tar -czf ~/backup-$(date +%Y%m%d).tar.gz ~/projects/
```

### 45. Deploy Script
```bash
#!/bin/bash
git pull && npm install && npm run build && pm2 restart app
```

### 46. Auto-Update Script
```bash
#!/bin/bash
pkg update -y && pkg upgrade -y
```

### 47. WiFi Scanner
```bash
#!/bin/bash
termux-wifi-scaninfo | python3 -c "import sys,json; [print(s['ssid']) for s in json.load(sys.stdin)]"
```

### 48. Battery Monitor
```bash
#!/bin/bash
watch -n 60 "termux-battery-status | python3 -c 'import sys,json; d=json.load(sys.stdin); print(f\"Battery: {d[chr(34)+chr(112)+chr(101)+chr(114)+chr(99)+chr(101)+chr(110)+chr(116)+chr(97)+chr(103)+chr(101)+chr(34)]}%\")'"
```

---

## 🔗 Git Hooks (10)

### 60. Pre-commit Lint
```bash
#!/bin/bash
npx eslint $(git diff --cached --name-only | grep '\.js$') || exit 1
```

### 61. Pre-push Tests
```bash
#!/bin/bash
npm test || exit 1
```

### 62. Post-commit Notify
```bash
#!/bin/bash
termux-notification --title "Commit" --content "$(git log -1 --pretty=%B)"
```

---

<div class="cta-section">
  <p>⚡ Explore <a href="100-tasker-recipes.md">100 Tasker Recipes</a> for Android automation</p>
</div>

[← Back to Automation](01-termux-api/)