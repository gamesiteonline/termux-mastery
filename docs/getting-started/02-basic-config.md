# Basic Configuration

## Termux Properties

The `~/.termux/termux.properties` file controls Termux's appearance and behavior.

```bash
# Open config file in editor
nano ~/.termux/termux.properties

# Reload configuration
termux-reload-settings
```

## Essential Configuration Examples

### 1. Extra Keys Row

```properties
# Add a top row of function keys
extra-keys = [['ESC','/','-','HOME','UP','END','PGUP'],['TAB','CTRL','ALT','LEFT','DOWN','RIGHT','PGDN']]
```

### 2. Bell and Vibration

```properties
# Disable the annoying bell sound
bell-character = ignore

# Disable vibration on key press
vibrate-key = ignore
```

### 3. Font Size and Cursor

```properties
# Font size (default: 14)
font-size = 16

# Cursor style: block, underline, bar
cursor-style = bar

# Cursor blink rate in ms (0 = no blink)
cursor-blink-rate = 500
```

### 4. Terminal Colors

```properties
# Background color (hex)
background-color = #1e1e2e

# Foreground color (hex)
foreground-color = #cdd6f4

# Cursor color
cursor-color = #f5e0dc
```

### 5. Back Key Behavior

```properties
# What back key does: quit, minimize, none
back-key = quit
```

## Full Example Config

```properties
# ~/.termux/termux.properties

# Appearance
use-black-ui = true
font-size = 16
cursor-style = bar
cursor-blink-rate = 500

# Extra keys
extra-keys = [['ESC','/','-','HOME','UP','END','PGUP'],['TAB','CTRL','ALT','LEFT','DOWN','RIGHT','PGDN']]

# Behavior
bell-character = ignore
vibrate-key = ignore
back-key = quit
terminal-transcript-hidden = true

# Colors
background-color = #1e1e2e
foreground-color = #cdd6f4
cursor-color = #f5e0dc
```

## Reload Settings

After editing, apply changes:

```bash
termux-reload-settings
```

Or restart Termux completely.