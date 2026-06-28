# Tmux Sessions

Automate tmux session creation for development environments.

## Why Session Scripts?

- **One command** → full dev environment ready
- **Consistent layout** — same panes/windows every time
- **Automatic** — start services, open files, run watchers

## Basic Session Script

```bash
#!/data/data/com.termux/files/usr/bin/bash
# ~/scripts/tmux-dev.sh

SESSION="myproject"

# Check if session already exists
tmux has-session -t $SESSION 2>/dev/null
if [ $? -eq 0 ]; then
  echo "Session $SESSION already exists. Attaching..."
  tmux attach -t $SESSION
  exit 0
fi

# Create new session (detached)
tmux new-session -d -s $SESSION -n "editor"

# Window 1: Editor
tmux send-keys -t $SESSION:1 "cd ~/projects/myproject && nvim" C-m

# Window 2: Terminal
tmux new-window -t $SESSION -n "terminal"
tmux send-keys -t $SESSION:2 "cd ~/projects/myproject" C-m

# Window 3: Server
tmux new-window -t $SESSION -n "server"
tmux send-keys -t $SESSION:3 "cd ~/projects/myproject && npm run dev" C-m

# Window 4: Git
tmux new-window -t $SESSION -n "git"
tmux send-keys -t $SESSION:4 "cd ~/projects/myproject && git status" C-m

# Select window 1 and attach
tmux select-window -t $SESSION:1
tmux attach -t $SESSION
```

## Session with Split Panes

```bash
#!/data/data/com.termux/files/usr/bin/bash
SESSION="server-dev"

tmux has-session -t $SESSION 2>/dev/null
if [ $? -eq 0 ]; then
  tmux attach -t $SESSION
  exit 0
fi

# Create session
tmux new-session -d -s $SESSION -n "dev"

# Split into 3 panes
tmux split-window -h -t $SESSION:1    # Left-right split
tmux split-window -v -t $SESSION:1.1  # Top-left split
tmux split-window -v -t $SESSION:1.2  # Bottom-left split

# Assign commands
tmux send-keys -t $SESSION:1.1 "cd ~/project && nvim" C-m
tmux send-keys -t $SESSION:1.2 "cd ~/project && npm run dev" C-m
tmux send-keys -t $SESSION:1.3 "cd ~/project && git log --oneline --graph" C-m

# Make first pane active
tmux select-pane -t $SESSION:1.1
tmux attach -t $SESSION
```

## Tmux Sessionizer (Interactive)

```bash
# ~/scripts/tmux-sessionizer.sh
#!/data/data/com.termux/files/usr/bin/bash

# List project directories
PROJECTS_DIR=~/projects
selected=$(ls $PROJECTS_DIR | fzf --preview "ls -la $PROJECTS_DIR/{}" --header "Select project:")

if [ -z "$selected" ]; then
  exit 0
fi

SESSION_NAME=$(basename "$selected" | tr . _)
DIR="$PROJECTS_DIR/$selected"

# Create or attach session
tmux has-session -t $SESSION_NAME 2>/dev/null
if [ $? -eq 0 ]; then
  tmux attach -t $SESSION_NAME
else
  tmux new-session -s $SESSION_NAME -c $DIR -d
  tmux attach -t $SESSION_NAME
fi
```

## Auto-Start Services

```bash
SESSION="services"

tmux has-session -t $SESSION 2>/dev/null
if [ $? -eq 0 ]; then
  exit 0
fi

tmux new-session -d -s $SESSION -n "services"

# Start services in background panes
tmux new-window -t $SESSION -n "db"
tmux send-keys -t $SESSION:2 "mongod --dbpath ~/data/db" C-m

tmux new-window -t $SESSION -n "redis"
tmux send-keys -t $SESSION:3 "redis-server" C-m

# Log output
tmux new-window -t $SESSION -n "logs"
tmux send-keys -t $SESSION:4 "tail -f ~/logs/app.log" C-m

# Detach (keep running in background)
tmux detach -s $SESSION
```

## Kill All Sessions

```bash
# Kill a specific session
tmux kill-session -t myproject

# Kill all sessions except current
tmux kill-session -a

# Kill all sessions completely
tmux kill-server
```

## Tips

- **Name sessions** meaningfully for easy switching
- **Use `-d` flag** to create without attaching
- **Use shell variables** for paths and projects
- **Combine with aliases**: `alias dev='~/scripts/tmux-dev.sh'`
- **Add to PATH** and call from anywhere