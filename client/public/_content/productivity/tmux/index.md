# Tmux

![Tmux Session](../../../assets/images/screenshots/tmux-session.svg)
*Tmux terminal multiplexer*

Terminal multiplexer for managing multiple terminal sessions.

## Installation

```bash
pkg install tmux
```

## Basic Usage

```bash
# Start tmux
tmux

# Create named session
tmux new-session -s myproject

# Detach: Ctrl+B, d
# Reattach: tmux attach -t myproject
```

## Key Bindings

### Session Management
| Key | Action |
|-----|--------|
| `Ctrl+B d` | Detach session |
| `Ctrl+B s` | List sessions |
| `Ctrl+B $` | Rename session |
| `Ctrl+B w` | List windows |
| `Ctrl+B :new` | New session |

### Window Management
| Key | Action |
|-----|--------|
| `Ctrl+B c` | Create window |
| `Ctrl+B ,` | Rename window |
| `Ctrl+B n` | Next window |
| `Ctrl+B p` | Previous window |
| `Ctrl+B 0-9` | Switch to window N |
| `Ctrl+B &` | Kill window |

### Pane Management
| Key | Action |
|-----|--------|
| `Ctrl+B %` | Split vertically |
| `Ctrl+B "` | Split horizontally |
| `Ctrl+B arrow` | Navigate panes |
| `Ctrl+B x` | Kill pane |
| `Ctrl+B space` | Rearrange layout |
| `Ctrl+B z` | Toggle pane zoom |
| `Ctrl+B {` | Move pane left |
| `Ctrl+B }` | Move pane right |
| `Ctrl+B !` | Break pane to window |

### Copy Mode
| Key | Action |
|-----|--------|
| `Ctrl+B [` | Enter copy mode |
| `Space` | Start selection |
| `Enter` | Copy selection |
| `Ctrl+B ]` | Paste buffer |

## Configuration

```tmux
# ~/.tmux.conf

# Set prefix to Ctrl+A (easier)
set -g prefix C-a
unbind C-b
bind C-a send-prefix

# Use mouse
set -g mouse on

# Increase scrollback
set -g history-limit 50000

# Better colors
set -g default-terminal "screen-256color"

# Start numbering at 1
set -g base-index 1
setw -g pane-base-index 1

# Split keys
bind | split-window -h
bind - split-window -v

# Reload config
bind r source-file ~/.tmux.conf \; display "Config reloaded"

# Vim-like navigation
bind h select-pane -L
bind j select-pane -D
bind k select-pane -U
bind l select-pane -R

# Resize panes
bind -r H resize-pane -L 5
bind -r J resize-pane -D 5
bind -r K resize-pane -U 5
bind -r L resize-pane -R 5

# Status bar
set -g status-style bg=default,fg=white
set -g status-left '#[fg=green]#S '
set -g status-right '#[fg=yellow]%Y-%m-%d %H:%M'
set -g status-interval 5
```

## Tmux Plugin Manager (TPM)

```bash
# Install TPM
git clone https://github.com/tmux-plugins/tpm ~/.tmux/plugins/tpm

# Add to ~/.tmux.conf
set -g @plugin 'tmux-plugins/tpm'
set -g @plugin 'tmux-plugins/tmux-sensible'
set -g @plugin 'tmux-plugins/tmux-resurrect'
set -g @plugin 'tmux-plugins/tmux-continuum'
set -g @plugin 'tmux-plugins/tmux-yank'
run '~/.tmux/plugins/tpm/tpm'

# Install plugins: Prefix + I
```

## Tmux Resurrect (Save/Restore)

```tmux
# In .tmux.conf
set -g @resurrect-capture-pane-contents 'on'
set -g @resurrect-strategy-vim 'session'
```

- `Prefix Ctrl+s` — Save session
- `Prefix Ctrl+r` — Restore session