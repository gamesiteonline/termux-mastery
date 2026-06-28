# Shell Comparison

## Bash vs Zsh vs Fish at a Glance

| Feature | Bash | Zsh | Fish |
|---------|------|-----|------|
| **Default in Termux** | ✅ Yes | ❌ No | ❌ No |
| **Script compatibility** | ⭐⭐⭐ Excellent | ⭐⭐⭐ Excellent | ⭐⭐ Limited |
| **Interactive features** | ⭐ Basic | ⭐⭐⭐ Excellent | ⭐⭐⭐ Excellent |
| **Autosuggestions** | ❌ Plugin | ✅ Plugin | ✅ Built-in |
| **Syntax highlighting** | ❌ Plugin | ✅ Plugin | ✅ Built-in |
| **Plugin ecosystem** | ⭐ Limited | ⭐⭐⭐ Massive | ⭐⭐ Growing |
| **Configuration** | `~/.bashrc` | `~/.zshrc` | `~/.config/fish/config.fish` |
| **Learning curve** | ⭐ Easy | ⭐⭐ Moderate | ⭐⭐ Moderate |
| **Startup speed** | ⭐⭐⭐ Fast | ⭐⭐ With OMZ | ⭐⭐⭐ Fast |
| **Completion system** | ⭐ Basic | ⭐⭐⭐ Advanced | ⭐⭐⭐ Advanced |

## When to Choose Each

### Choose Bash if...
- You want minimal setup
- You write portable shell scripts
- You're a beginner learning Linux
- You need maximum compatibility

### Choose Zsh if...
- You want maximum customization
- You need the largest plugin ecosystem
- You love frameworks like Oh My Zsh
- You want Powerlevel10k or Starship prompts
- You need advanced completion and globbing

### Choose Fish if...
- You want best out-of-box experience
- You want built-in autosuggestions
- You prefer cleaner scripting syntax
- You want web-based configuration
- You don't need POSIX compatibility

## Startup Time Comparison

| Configuration | Startup Time |
|---------------|--------------|
| Bash (bare) | ~50ms |
| Zsh (bare) | ~100ms |
| Zsh + OMZ | ~300-500ms |
| Zsh + OMZ + P10k | ~400-600ms |
| Zsh + OMZ + P10k + instant prompt | ~150ms |
| Fish (bare) | ~80ms |
| Fish + Fisher | ~150ms |
| Starship (any shell) | +10ms |

## Scripting Syntax Comparison

### Variables
```bash
# Bash
name="John"
echo "$name's house"

# Zsh
name="John"
echo "$name's house"

# Fish
set name "John"
echo "$name's house"
```

### Conditionals
```bash
# Bash
if [ -f "$file" ]; then
  echo "File exists"
fi

# Zsh (same as Bash, plus [[ ]] extensions)
if [[ -f $file ]]; then
  echo "File exists"
fi

# Fish
if test -f "$file"
  echo "File exists"
end
```

### Functions
```bash
# Bash
function hello() {
  echo "Hello, $1!"
}

# Zsh (same, plus anonymous functions)
hello() {
  echo "Hello, $1!"
}

# Fish
function hello
  echo "Hello, $argv[1]!"
end
```

### Arrays
```bash
# Bash
arr=("a" "b" "c")
echo ${arr[0]}

# Zsh
arr=("a" "b" "c")
echo $arr[1]  # 1-indexed!

# Fish
set arr "a" "b" "c"
echo $arr[1]
```

## Migration Paths

### Bash to Zsh
```bash
# Bash is mostly valid Zsh
# Main differences:
# - Zsh uses 1-indexed arrays
# - Zsh has more globbing flags
# - [[ ]] is preferred over [ ]
```

### Bash to Fish
```fish
# Use bass plugin to run bash scripts
fisher install edc/bass

# Run bash commands in fish
bass "source ~/.bashrc"
```

### Dual Shell Setup
```bash
# Use Bash for scripting, Fish for interactive
# Set fish as default interactive shell
# Write scripts in Bash for portability
```

## Recommendations

| Use Case | Recommended Shell |
|----------|-------------------|
| Termux beginner | Bash (default) |
| Developer on phone | Zsh + OMZ + P10k |
| Quick setup | Fish |
| Maximum customization | Zsh + Zinit |
| Learning Linux | Bash first, then switch |
| All-rounder | Zsh + Starship |