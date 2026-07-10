# Bash Completions

![Shell Comparison](../../../assets/images/screenshots/shell-comparison.svg)
*Bash completion system*

## Installation

```bash
# Install bash-completion
pkg install bash-completion

# Enable in ~/.bashrc
if [ -f "$PREFIX/share/bash-completion/bash_completion" ]; then
  . "$PREFIX/share/bash-completion/bash_completion"
fi

# Enable programmable completion
shopt -s progcomp
```

## Basic Usage

```bash
# System commands
systemctl <TAB><TAB>  # List all units
apt-get in<TAB>       # Complete to install
ssh <TAB><TAB>        # List SSH hosts

# File paths
ls ~/Do<TAB>  →  ~/Documents/

# Variables
echo $HO<TAB>  →  $HOME $HOSTNAME $HOSTTYPE
```

## Writing Bash Completions

### Simple Completion

```bash
# Complete with fixed list
complete -W "start stop restart status" mycli

# Complete with dynamic list from command
complete -C '/usr/bin/mycli-complete' mycli
```

### Advanced Completion Function

```bash
# /etc/bash_completion.d/mycli

_mycli() {
    local cur prev opts
    COMPREPLY=()
    cur="${COMP_WORDS[COMP_CWORD]}"
    prev="${COMP_WORDS[COMP_CWORD-1]}"
    opts="init build run deploy clean"

    # Complete subcommands if no subcommand yet
    if [[ $COMP_CWORD -eq 1 ]]; then
        COMPREPLY=( $(compgen -W "${opts}" -- ${cur}) )
        return 0
    fi

    # Complete based on subcommand
    case "${COMP_WORDS[1]}" in
        init)
            COMPREPLY=( $(compgen -W "--name --template" -- ${cur}) )
            ;;
        build)
            COMPREPLY=( $(compgen -W "--target --arch" -- ${cur}) )
            ;;
        run)
            COMPREPLY=( $(compgen -W "--port --host --env" -- ${cur}) )
            ;;
        deploy)
            COMPREPLY=( $(compgen -W "--env --branch --dry-run --force" -- ${cur}) )
            ;;
    esac
}
complete -F _mycli mycli
```

## Git Completion

```bash
# Git completion is usually installed with bash-completion
# If not, source it explicitly
if [ -f "$PREFIX/share/bash-completion/completions/git" ]; then
  . "$PREFIX/share/bash-completion/completions/git"
fi

# Custom git aliases completion
__git_complete gco _git_checkout
__git_complete gbr _git_branch
__git_complete gst _git_status
__git_complete gd _git_diff
__git_complete gcam _git_commit
```

## Docker Completion

```bash
# Docker completion
if [ -f "$PREFIX/share/bash-completion/completions/docker" ]; then
  source "$PREFIX/share/bash-completion/completions/docker"
fi

# Or generate
source <(docker completion bash)
```

## Kubectl Completion

```bash
source <(kubectl completion bash)

# Make permanent
echo 'source <(kubectl completion bash)' >> ~/.bashrc
```

## NPM Completion

```bash
# NPM completion
npm completion >> ~/.bashrc
source ~/.bashrc

# Or for specific commands
complete -W "$(npm run 2>/dev/null | grep -o '^[a-z_-]*')" npm-run
```

## SSH Completion

```bash
# SSH hosts from config
_complete_ssh_hosts() {
    COMPREPLY=()
    local cur="${COMP_WORDS[COMP_CWORD]}"
    COMPREPLY=( $(compgen -W "$(grep -i '^Host ' ~/.ssh/config 2>/dev/null | cut -d ' ' -f2-)" -- ${cur}) )
    return 0
}
complete -F _complete_ssh_hosts ssh scp sftp
```

## Bash Completion in Zsh

```bash
# If using Zsh, load bash completion compatibility
autoload -Uz bashcompinit && bashcompinit

# Now source bash completion files
source <(kubectl completion bash)  # Works in Zsh too!
```

## Debugging

```bash
# List loaded completions
complete -p | head -20

# Debug a specific completion
complete -p git

# Reload a completion
complete -r mycli
. /etc/bash_completion.d/mycli

# Test completion without running the command
_mycli mycli init --
```

## See 100 Examples

For 100 practical Bash completion examples: [100 Bash Autocomplete Examples](../examples-bash/)