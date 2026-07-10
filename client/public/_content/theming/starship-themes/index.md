# Starship Themes

![Starship Prompt](../../../assets/images/screenshots/starship-prompt.svg)
*Starship theme presets*

## Official Presets

### Tokyo Night
```toml
# ~/.config/starship.toml
format = """
[](#f7768e)\
$os\
$username\
[](bg:#9d7cd8 fg:#f7768e)\
$directory\
[](fg:#9d7cd8 bg:#bb9af7)\
$git_branch\
$git_status\
[](fg:#bb9af7 bg:#7dcfff)\
$nodejs\
$python\
$rust\
[](fg:#7dcfff bg:#1abc9c)\
$time\
[ ](fg:#1abc9c)\
"""

[directory]
style = "bold fg:#c0caf5"
truncation_length = 3

[git_branch]
style = "bold fg:#c0caf5"

[git_status]
conflicted = "🏳"
ahead = "🏎💨"
behind = "😰"
diverged = "😵"
staged = "++$count"
modified = "📝"

[nodejs]
style = "bold fg:#7dcfff"

[python]
style = "bold fg:#bb9af7"

[rust]
style = "bold fg:#f7768e"

[time]
style = "bold fg:#1abc9c"
time_format = "%I:%M %p"
```

### Gruvbox Rainbow
```toml
format = """
[](#cc241d)\
$os\
$username\
[](bg:#98971a fg:#cc241d)\
$directory\
[](fg:#98971a bg:#458588)\
$git_branch\
$git_status\
[](fg:#458588 bg:#b16286)\
$nodejs\
$python\
$rust\
[](fg:#b16286 bg:#689d6a)\
$time\
[ ](fg:#689d6a)\
"""

[directory]
style = "bold fg:#ebdbb2"

[git_branch]
style = "bold fg:#b8bb26"

[git_status]
style = "fg:#a89984"

[nodejs]
style = "bold fg:#8ec07c"

[python]
style = "bold fg:#fabd2f"

[rust]
style = "bold fg:#fb4934"

[time]
style = "fg:#a89984"
time_format = "%H:%M"
```

### Pastel Powerline
```toml
format = """
[](#ffb5ba)\
$os\
$username\
[](bg:#b5deff fg:#ffb5ba)\
$directory\
[](fg:#b5deff bg:#b5ffb5)\
$git_branch\
$git_status\
[](fg:#b5ffb5 bg:#ffb5ff)\
$nodejs\
$python\
$rust\
[](fg:#ffb5ff bg:#ffffb5)\
$time\
[ ](fg:#ffffb5)\
"""

[directory]
style = "bold fg:#555555"

[git_branch]
style = "bold fg:#555555"

[nodejs]
style = "bold fg:#555555"

[python]
style = "bold fg:#555555"

[time]
time_format = "%H:%M"
style = "bold fg:#555555"
```

## Custom Module Examples

### Time-Based Greeting
```toml
[custom.greeting]
command = "echo $(( $(date +%H) < 12 )) && echo '🌅' || echo $(( $(date +%H) < 18 )) && echo '☀️' || echo '🌙'"
when = true
style = "bold"
format = "[$output]($style)"
```

### Python Virtualenv
```toml
[python]
format = "via [🐍 $version]($style) [\($virtualenv\)]($style)"
style = "bold yellow"
```

### Kubernetes Context
```toml
[kubernetes]
format = "on [☸ $context( \(`namespace`\))]($style)"
style = "bold cyan"
disabled = false
```

### Battery Status
```toml
[battery]
full_symbol = ""
charging_symbol = ""
discharging_symbol = ""
display = [
  {threshold = 20, style = "bold red"},
  {threshold = 50, style = "bold yellow"},
]
```

## Applying Themes

```bash
# Backup current config
cp ~/.config/starship.toml ~/.config/starship.toml.bak

# Write new config
cat > ~/.config/starship.toml << 'EOF'
# Paste theme here
EOF

# Changes apply immediately in new terminals
```

## See More

- Official [Starship Presets](https://starship.rs/presets/)
- Community themes on [GitHub](https://github.com/starship/starship/discussions/categories/themes)