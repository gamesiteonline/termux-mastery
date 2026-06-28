# Starship Prompt

Starship is the fastest, most customizable prompt that works across all shells.

## Installation

```bash
# Install in Termux
pkg install starship

# Or using the official installer
curl -sS https://starship.rs/install.sh | sh
```

## Shell Integration

Add to your shell config:

=== "Bash (~/.bashrc)"
    ```bash
    eval "$(starship init bash)"
    ```

=== "Zsh (~/.zshrc)"
    ```bash
    eval "$(starship init zsh)"
    ```

=== "Fish (~/.config/fish/config.fish)"
    ```fish
    starship init fish | source
    ```

## Configuration

Starship uses a single TOML file: `~/.config/starship.toml`

```bash
mkdir -p ~/.config
nano ~/.config/starship.toml
```

### Basic Config

```toml
# ~/.config/starship.toml
format = """
[](#9A348E)\
$os\
$username\
[](bg:#DA627D fg:#9A348E)\
$directory\
[](fg:#DA627D bg:#FCA17D)\
$git_branch\
$git_status\
[](fg:#FCA17D bg:#86BBD8)\
$cargo\
$nodejs\
$python\
$rust\
[](fg:#86BBD8 bg:#06969A)\
$docker_context\
$kubernetes\
[](fg:#06969A bg:#33658A)\
$time\
[ ](fg:#33658A)\
"""

# Disable default modules
add_newline = true
scan_for_sofiles = false
```

### Directory Module

```toml
[directory]
truncation_length = 3
truncate_to_repo = true
style = "bold cyan"
read_only = " 🔒"
disabled = false
```

### Git Module

```toml
[git_branch]
format = " [$symbol$branch]($style)"
style = "bold purple"
symbol = " "
truncation_length = 15
truncation_symbol = "…/"

[git_status]
conflicted = "🏳"
ahead = "🏎💨"
behind = "😰"
diverged = "😵"
up_to_date = "✅"
untracked = "🤷‍"
stashed = "📦"
modified = "📝"
staged = '++$count'
renamed = "〰"
deleted = "🗑"
```

### Language Modules

```toml
[nodejs]
format = " via [⬢ $version](bold green)"
symbol = " "
style = "bold green"
disabled = false

[python]
format = " via [🐍 $version]($style)"
style = "bold yellow"
pyenv_version_name = true
disabled = false

[cargo]
format = " via [🦀 $version]($style)"
style = "bold red"
disabled = false

[golang]
format = " via [🐹 $version]($style)"
style = "bold cyan"
disabled = false

[rust]
format = " via [🦀 $version]($style)"
style = "bold red"
disabled = false
```

### Time Module

```toml
[time]
format = '🕙 $time'
use_12hr = true
time_format = "%I:%M %p"
style = "bright white bg:#33658A"
disabled = false
```

### Custom Module Example

```toml
[custom.termux]
command = "echo '📱'"
when = true
style = "bold green"
format = "[$output]($style)"
```

## Preset Themes

### Tokyo Night

```toml
# Tokyo Night theme
palette = "tokyo_night"

[palettes.tokyo_night]
blue = "#7dcfff"
cyan = "#b4f9f8"
green = "#73daca"
magenta = "#bb9af7"
orange = "#ff9e64"
pink = "#f7768e"
purple = "#9d7cd8"
red = "#f7768e"
teal = "#1abc9c"
yellow = "#e0af68"
white = "#c0caf5"
```

### Gruvbox Rainbow

```toml
# Gruvbox Rainbow
[directory]
style = "bold fg:#83a598"

[git_branch]
style = "bold fg:#b8bb26"

[nodejs]
style = "bold fg:#8ec07c"

[python]
style = "bold fg:#fabd2f"

[time]
style = "fg:#a89984"
```

## Performance Notes

Starship renders in under 10ms. If you experience slowness:

```toml
# Reduce git operations
[git_status]
disabled = true

# Scan only specific directories
scan_for_sofiles = false
```

## See More

- [Starship Themes](../theming/05-starship-themes.md) - More preset themes
- [Starship Docs](https://starship.rs/config/) - Official documentation