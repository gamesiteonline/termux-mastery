# Custom Completions

## Why Write Custom Completions?

- Your own scripts/tools get autocomplete
- Shell aliases and functions get enhanced
- Third-party tools without built-in completions
- Team-specific workflows and commands

## Zsh Custom Completions

### Completion Function Template

```zsh
# Place in $ZSH_CUSTOM/completions/_mycommand
# File must start with underscore

#compdef mycommand
# Description: Completion for mycommand

_mycommand() {
  local context state state_descr line
  typeset -A opt_args

  _arguments -C \
    "1: :->cmds" \
    "*::arg:->args"

  case $state in
    cmds)
      _values "command" \
        "init[Initialize a project]" \
        "build[Build the project]" \
        "deploy[Deploy to environment]" \
        "test[Run tests]" \
        "clean[Clean build artifacts]"
      ;;
    args)
      case $line[1] in
        init)
          _arguments \
            "--name=[Project name]:name:" \
            "--template[Template type]:(default minimal full)"
          ;;
        build)
          _arguments \
            "--target[Build target]:(android ios web)" \
            "--arch[Architecture]:(arm64 x86_64)" \
            "--debug[Build with debug symbols]"
          ;;
        deploy)
          _arguments \
            "--env[Environment]:(staging production)" \
            "--branch=[Git branch]:branch:" \
            "--dry-run[Preview changes]" \
            "--force[Skip confirmation]"
          ;;
      esac
      ;;
  esac
}

_mycommand "$@"
```

### Installing Zsh Completions

```zsh
# Place completion file in correct location
cp _mycommand ~/.oh-my-zsh/custom/completions/

# Or any directory in your fpath
echo $fpath
# Add directory to fpath
fpath=(~/.zsh/completions $fpath)

# Regenerate completion
rm -f ~/.zcompdump && compinit
```

## Fish Custom Completions

Place in `~/.config/fish/completions/<command>.fish`:

```fish
# ~/.config/fish/completions/mycli.fish
complete -c mycli -f -a "init build deploy test clean" -d "Commands"

# Dynamic completions
function __fish_complete_git_branches
  command git branch --format '%(refname:short)' 2>/dev/null
end

function __fish_complete_containers
  docker ps --format '{{.Names}}' 2>/dev/null
end

# Subcommand-specific
complete -c mycli -n "__fish_seen_subcommand_from deploy" \
  -l branch -f -a "(__fish_complete_git_branches)" -d "Git branch"
complete -c mycli -n "__fish_seen_subcommand_from run" \
  -l container -f -a "(__fish_complete_containers)" -d "Container"
```

## Bash Custom Completions

Place in `/etc/bash_completion.d/` or source manually:

```bash
# ~/.bash_completion.d/mycli
_mycli() {
  local cur prev opts
  COMPREPLY=()
  cur="${COMP_WORDS[COMP_CWORD]}"
  prev="${COMP_WORDS[COMP_CWORD-1]}"
  opts="init build deploy test clean"

  if [[ $COMP_CWORD -eq 1 ]]; then
    COMPREPLY=($(compgen -W "${opts}" -- ${cur}))
    return 0
  fi

  case "${COMP_WORDS[1]}" in
    init)
      COMPREPLY=($(compgen -W "--name --template" -- ${cur}))
      ;;
    build)
      COMPREPLY=($(compgen -W "--target --arch --debug" -- ${cur}))
      ;;
    deploy)
      COMPREPLY=($(compgen -W "--env --branch --dry-run --force" -- ${cur}))
      ;;
  esac
}
complete -F _mycli mycli
```

## Advanced Dynamic Completions

### Git Branch Completion (Universal)

```zsh
# Zsh
__git_branches() {
  compadd -- $(git branch --format '%(refname:short)' 2>/dev/null)
}
compdef __git_branches my-git-command
```

```fish
# Fish
complete -c mycommand -l branch -f -a "(command git branch --format '%(refname:short)' 2>/dev/null)"
```

### Docker Container Completion

```zsh
# Zsh
__docker_containers() {
  compadd -- $(docker ps --format '{{.Names}}' 2>/dev/null)
}
compdef __docker_containers my-docker-command
```

```fish
# Fish
complete -c mydocker -l container -f -a "(docker ps --format '{{.Names}}' 2>/dev/null)"
```

### NPM Script Completion

```zsh
# Zsh
__npm_scripts() {
  compadd -- $(npm run 2>/dev/null | grep -o '^[a-zA-Z_-][^ ]*')
}
compdef __npm_scripts npm-run
```

## Testing Custom Completions

```bash
# Zsh: reload compinit
rm -f ~/.zcompdump && compinit

# Zsh: test completion
mycommand <TAB>

# Fish: reload
complete -c mycommand -e
source ~/.config/fish/completions/mycommand.fish

# Bash: reload
complete -r mycommand
. ~/.bash_completion/mycommand
```

## Best Practices

1. **Name files correctly** — `_command` for Zsh, `command.fish` for Fish
2. **Always provide descriptions** — `-d "description"`
3. **Use dynamic completions** — Functions > hardcoded lists
4. **Cache expensive operations** — Avoid hitting API on every tab
5. **Test incrementally** — Test simple completions before complex
6. **Handle errors gracefully** — 2>/dev/null on external commands