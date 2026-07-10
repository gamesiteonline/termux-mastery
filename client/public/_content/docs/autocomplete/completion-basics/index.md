# Completion Basics

## What is Tab Completion?

Tab completion (or command completion) suggests possible commands, arguments, file paths, and options when you press the Tab key.

## Why It Matters

- **Speed** — Type less, do more
- **Accuracy** — Avoid typos in arguments
- **Discovery** — Learn available options naturally
- **Memory** — Stop memorizing flags

## How It Works

All shells support these completion types:

### 1. Command Completion
```bash
# Type partial command, press Tab
doc<TAB>  →  docker dockerd
```

### 2. File Path Completion
```bash
# Path to file/directory
ls ~/Do<TAB>  →  ~/Documents/
```

### 3. Argument Completion
```bash
# Command arguments
git --<TAB>  →  --help --version --paginate
```

### 4. Option Completion
```bash
# Command options
docker run --<TAB>  →  --name --volume --env --rm
```

## Completion Systems by Shell

| Shell | System | Init Command |
|-------|--------|--------------|
| Bash | `bash-completion` | `. /path/to/bash_completion` |
| Zsh | `compinit` + `bashcompinit` | `autoload -Uz compinit && compinit` |
| Fish | Built-in | Automatic |

## Universal Tips

```bash
# Press Tab twice to see all options
git <TAB><TAB>

# Type partial and Tab to complete
git cher<TAB>  →  git cherry-pick

# Use Tab for paths inside completed commands
docker run -v /ho<TAB>  →  docker run -v /home/
```

## Next Steps

- [Zsh Completions](../zsh-completions/) — Deep dive into Zsh
- [Fish Completions](../fish-completions/) — Deep dive into Fish
- [Bash Completions](../bash-completions/) — Deep dive into Bash
- [Custom Completions](../custom-completions/) — Write your own
- [Tool Completions](../tool-completions/) — Per-tool setup

## See 100 Examples

- [100 Zsh Examples](../examples-zsh/)
- [100 Fish Examples](../examples-fish/)
- [100 Bash Examples](../examples-bash/)