# Tool Completions

## Git

```bash
# Zsh (OMZ)
plugins=(git)

# Zsh (manual)
source <(git --completion=zsh)

# Fish (automatic with git install)
# Already included

# Bash
[ -f "$PREFIX/share/bash-completion/completions/git" ] && \
  . "$PREFIX/share/bash-completion/completions/git"

# Custom git aliases with completion
__git_complete gco _git_checkout
__git_complete gbr _git_branch
__git_complete gst _git_status
```

## Docker

```bash
# Zsh
source <(docker completion zsh)

# Fish (automatic when docker is installed)
complete -c docker -f -a "(docker help 2>/dev/null | grep -o '^  [a-z][a-z-]*')"

# Bash
source <(docker completion bash)
```

## Kubernetes (kubectl)

```bash
# Zsh
source <(kubectl completion zsh)

# Fish
kubectl completion fish | source

# Bash
source <(kubectl completion bash)

# Helm (optional)
source <(helm completion zsh)
```

## NPM / Yarn / PNPM

```bash
# Zsh
plugins=(npm yarn)

# Fish (automatic with install)
npm completion >> ~/.config/fish/config.fish

# Bash
npm completion >> ~/.bashrc
```

## Python

```bash
# Zsh
plugins=(python pip)

# Virtualenv completion
source <(virtualenvwrapper completion zsh)

# Pip completions for Zsh
compctl -K _pip_completion pip
```

## Rust / Cargo

```bash
# Zsh
source "$HOME/.cargo/env"
# OMZ cargo plugin
plugins=(cargo)

# Fish
# Rustup adds completions automatically
source "$HOME/.cargo/env.fish"
```

## SSH

```bash
# All shells: hosts from config
# /etc/ssh/ssh_config and ~/.ssh/config
```

## System Tools

### pkg/apt

```bash
# Zsh
source "$PREFIX/share/zsh/site-functions/_pkg"
source "$PREFIX/share/zsh/site-functions/_apt"

# Fish (automatic)
# Bash (automatic with bash-completion)
```

### Tmux

```bash
# Zsh
source "$PREFIX/share/zsh/site-functions/_tmux"

# Fish (automatic)
# Bash (automatic with bash-completion)
```

## Disabling Specific Completions

```zsh
# Zsh: disable a specific completion
compdef -d docker-compose

# Fish: erase
complete -c somecommand -e

# Bash: remove
complete -r somecommand
```

## Troubleshooting

| Symptom | Fix |
|---------|-----|
| Completions not showing | Check the tool is installed |
| Wrong completions | Update the tool |
| Slow completion | Cache it: `zstyle ':completion:*' use-cache on` |
| Zsh security warnings | `compaudit \| xargs chmod g-w` |
| Fish completions not loading | Check file name matches command |