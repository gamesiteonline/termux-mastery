# Fish Autocomplete

![Fish Autocomplete](../../../assets/images/screenshots/fish-autocomplete.svg)
*Fish autocomplete suggestions*

Fish has the best built-in autocomplete of any shell. No plugins needed.

## How Fish Autocomplete Works

- **Type and it suggests** — Ghost text appears based on history
- **Press → to accept** — Or Ctrl+F to accept one word
- **Tab to see all** — Lists all possible completions
- **It learns** — Remembers which completions you use most

## Basic Usage

```bash
# Type part of a command, see ghost text
git ch<TAB>  # Shows: checkout, cherry-pick, cherry
docker ex<TAB>  # Shows: exec, export
npm ru<TAB>  # Shows: run, run-script

# Navigate completions
<TAB>       # Show completions menu
↑ / ↓       # Navigate
→           # Accept suggestion
Ctrl+F      # Accept one word
Alt+→       # Accept next word
```

## Custom Completions

Fish completions are files in `~/.config/fish/completions/`.

### Basic Completion File

```fish
# ~/.config/fish/completions/mycli.fish

# Complete with subcommands
complete -c mycli -f -a "init build deploy clean" -d "Commands"

# Complete with options
complete -c mycli -l name -d "Project name" -r
complete -c mycli -l verbose -d "Enable verbose output" -f
complete -c mycli -s v -d "Verbose mode" -f
complete -c mycli -l config -d "Config file" -r -F
complete -c mycli -s o -l output -d "Output directory" -r -F
```

### Advanced Completion

```fish
# Complete with dynamic values
complete -c mycli -l mode -f -a "
  development\t'Development mode'
  production\t'Production mode'
  testing\t'Testing mode'
"

# Complete with command output
complete -c mycli -l user -f -a "(cat ~/.config/mycli/users.txt)"

# Conditional completions
complete -c mycli -n "__fish_seen_subcommand_from deploy" -l env -f -a "staging production"
complete -c mycli -n "__fish_seen_subcommand_from build" -l target -f -a "android ios web"
```

## Writing Completions for Common Tools

### Docker Completions

```fish
# ~/.config/fish/completions/docker.fish

# Docker commands
set -l docker_commands "attach build commit cp create diff events exec export history images import info inspect kill load login logout logs network node pause plugin port ps pull push rename restart rm rmi run save search service stack start stats stop swarm system tag top trust unpause update version volume wait"

complete -c docker -f -a "$docker_commands"

# Docker images (dynamic)
complete -c docker -n "__fish_seen_subcommand_from run start" -a "(docker images --format '{{.Repository}}:{{.Tag}}')"
```

### Custom Completion with Functions

```fish
# ~/.config/fish/completions/myfunction.fish

# Complete git branches
function __fish_complete_git_branches
  command git branch --format '%(refname:short)' 2>/dev/null
end

# Complete running Docker containers
function __fish_complete_running_containers
  docker ps --format '{{.Names}}' 2>/dev/null
end

# Use in completions
complete -c mydeploy -l branch -f -a "(__fish_complete_git_branches)"
complete -c mydeploy -l container -f -a "(__fish_complete_running_containers)"
```

## Built-in Tool Completions

Fish ships with completions for hundreds of tools. Enable them:

```fish
# Most are automatic when you install the tool

# For additional completions, install via Fisher
fisher install meaningful-ooo/sponge  # More fish completions
```

## Managing Completions

```fish
# List all loaded completions
complete -C . 2>/dev/null | head -20

# Reload completions for a command
complete -c docker -e  # Erase existing
# Source the completion file again
source ~/.config/fish/completions/docker.fish

# Find where a completion comes from
type -t docker
```

## See 100 Examples

For 100 practical fish completion examples: [100 Fish Autocomplete Examples](../../autocomplete/examples-fish/)