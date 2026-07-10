# Fish Completions — Deep Dive

![Fish Autocomplete](../../../assets/images/screenshots/fish-autocomplete.svg)
*Fish completion system*

## How Fish Completion Files Work

Fish looks for completion files in `~/.config/fish/completions/`. Files are named `<command>.fish`.

```fish
# Files are loaded automatically when the command is used
~/.config/fish/completions/
├── docker.fish
├── git.fish
├── npm.fish
└── mycli.fish
```

## Writing Basic Completions

### Simple Options

```fish
complete -c mycli -s v -l verbose -d "Enable verbose output"
complete -c mycli -s h -l help -d "Show help message"
complete -c mycli -l version -d "Show version"
```

### Subcommands

```fish
complete -c mycli -f -a "init build deploy clean test" -d "Commands"
complete -c mycli -n "__fish_seen_subcommand_from init" -l name -d "Project name" -r
complete -c mycli -n "__fish_seen_subcommand_from build" -l target -f -a "android ios web"
complete -c mycli -n "__fish_seen_subcommand_from deploy" -l env -f -a "staging production"
complete -c mycli -n "__fish_seen_subcommand_from clean" -l all -d "Clean everything"
```

### File and Path Arguments

```fish
# Complete files
complete -c mycli -l config -r -F  # -F for files
complete -c mycli -l dir -r -f -a "(__fish_complete_directories)"
complete -c mycli -l input -r -f -a "(__fish_complete_pipes)"
```

## Dynamic Completions

When a completion depends on current state:

```fish
# Complete git branches as arguments
complete -c deploy -l branch -f -a "(command git branch --format '%(refname:short)' 2>/dev/null)"

# Complete running Docker containers
complete -c myapp -l container -f -a "(docker ps --format '{{.Names}}' 2>/dev/null)"

# Complete with availability check
complete -c mycli -l theme -f -a "(ls ~/.config/mycli/themes/ 2>/dev/null | sed 's/\.conf$//')"
```

## Conditional Completions

### Using `__fish_seen_subcommand_from`

```fish
# Only after a specific subcommand
complete -c mycli -n "__fish_seen_subcommand_from run" -l port -r
complete -c mycli -n "__fish_seen_subcommand_from run" -l host -r
complete -c mycli -n "__fish_seen_subcommand_from server" -l workers -r
```

### Using `__fish_not_seen_subcommand_from`

```fish
# Only before any subcommand
complete -c mycli -n "not __fish_seen_subcommand_from run build deploy" -l global
```

### Using `__fish_contains_opt`

```fish
# Only after a specific option
complete -c mycli -n "__fish_contains_opt verbose" -l log-file -r -F

# Complex condition: subcommand + option
complete -c mycli -n "__fish_seen_subcommand_from build; and __fish_contains_opt config" -l env -f -a "production staging"
```

## Helper Functions

```fish
# A helper function for reusable logic
function __fish_complete_git_files
  set -l file (command git rev-parse --show-toplevel 2>/dev/null)
  if test -n "$file"
    command git ls-files 2>/dev/null
  end
end

complete -c myapp -l git-file -f -a "(__fish_complete_git_files)"
```

## Wrapping Existing Completions

### Extend Without Overwriting

```fish
# Add a global flag to git
complete -c git -f -l my-flag -d "My custom git flag"

# Add extra actions to systemctl
complete -c systemctl -f -a "my-service-start my-service-stop" \
  -d "Custom service actions"
```

## Complete Example

```fish
# ~/.config/fish/completions/mycli.fish

# Subcommands
complete -c mycli -f -a "init build run deploy clean" -d "Commands"

# Global options
complete -c mycli -l config -r -F -d "Config file path"
complete -c mycli -s v -l verbose -d "Verbose output"
complete -c mycli -s q -l quiet -d "Quiet mode"
complete -c mycli -l debug -d "Debug mode"

# Init subcommand
complete -c mycli -n "__fish_seen_subcommand_from init" -l name -r -d "Project name"
complete -c mycli -n "__fish_seen_subcommand_from init" -l template -f -a "default minimal full" -d "Template type"

# Build subcommand
complete -c mycli -n "__fish_seen_subcommand_from build" -l target -f -a "android ios web desktop" -d "Build target"
complete -c mycli -n "__fish_seen_subcommand_from build" -l arch -f -a "arm64 x86_64" -d "Architecture"

# Run subcommand
complete -c mycli -n "__fish_seen_subcommand_from run" -l port -r -d "Port number"
complete -c mycli -n "__fish_seen_subcommand_from run" -l host -r -d "Host address"
complete -c mycli -n "__fish_seen_subcommand_from run" -l env -f -a "development staging production"

# Deploy subcommand
complete -c mycli -n "__fish_seen_subcommand_from deploy" -l env -f -a "staging production" -d "Environment"
complete -c mycli -n "__fish_seen_subcommand_from deploy" -l branch -f -a "(__fish_complete_git_branches)" -d "Git branch"
complete -c mycli -n "__fish_seen_subcommand_from deploy" -l dry-run -d "Preview changes"
complete -c mycli -n "__fish_seen_subcommand_from deploy" -l force -d "Skip confirmation"
```

## Debugging Fish Completions

```fish
# List all completions for a command
complete -C "mycli "

# Debug fish completion
fish --debug-level=3 -c "complete -C 'mycli '"

# Reload a specific completion
complete -c mycli -e  # Erase all completions for mycli
source ~/.config/fish/completions/mycli.fish  # Reload
```

## See 100 Examples

For 100 practical Fish completion examples: [100 Fish Autocomplete Examples](../examples-fish/)