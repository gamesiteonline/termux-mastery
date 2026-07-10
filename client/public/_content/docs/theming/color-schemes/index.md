# Color Schemes

![Color Schemes](../../../assets/images/screenshots/color-schemes.svg)
*Termux color scheme preview*

## Custom Color Properties

Termux uses `~/.termux/colors.properties` for custom schemes.

### Catppuccin Mocha
```properties
background=#1e1e2e
foreground=#cdd6f4
cursor=#f5e0dc
color0=#45475a
color1=#f38ba8
color2=#a6e3a1
color3=#f9e2af
color4=#89b4fa
color5=#f5c2e7
color6=#94e2d5
color7=#bac2de
color8=#585b70
color9=#f38ba8
color10=#a6e3a1
color11=#f9e2af
color12=#89b4fa
color13=#f5c2e7
color14=#94e2d5
color15=#a6adc8
```

### Dracula
```properties
background=#282a36
foreground=#f8f8f2
cursor=#f8f8f2
color0=#21222c
color1=#ff5555
color2=#50fa7b
color3=#f1fa8c
color4=#bd93f9
color5=#ff79c6
color6=#8be9fd
color7=#f8f8f2
color8=#6272a4
color9=#ff6e6e
color10=#69ff94
color11=#ffffa5
color12=#d6acff
color13=#ff92d0
color14=#a4ffff
color15=#ffffff
```

### Nord
```properties
background=#2e3440
foreground=#d8dee9
cursor=#81a1c1
color0=#3b4252
color1=#bf616a
color2=#a3be8c
color3=#ebcb8b
color4=#81a1c1
color5=#b48ead
color6=#88c0d0
color7=#e5e9f0
color8=#4c566a
color9=#bf616a
color10=#a3be8c
color11=#ebcb8b
color12=#81a1c1
color13=#b48ead
color14=#8fbcbb
color15=#eceff4
```

### Tokyo Night
```properties
background=#1a1b26
foreground=#a9b1d6
cursor=#c0caf5
color0=#32344a
color1=#f7768e
color2=#9ece6a
color3=#e0af68
color4=#7aa2f7
color5=#bb9af7
color6=#7dcfff
color7=#a9b1d6
color8=#444b6a
color9=#ff9e64
color10=#73daca
color11=#ff9e64
color12=#7aa2f7
color13=#bb9af7
color14=#b4f9f8
color15=#c0caf5
```

### Gruvbox Dark
```properties
background=#282828
foreground=#ebdbb2
cursor=#ebdbb2
color0=#282828
color1=#cc241d
color2=#98971a
color3=#d79921
color4=#458588
color5=#b16286
color6=#689d6a
color7=#a89984
color8=#928374
color9=#fb4934
color10=#b8bb26
color11=#fabd2f
color12=#83a598
color13=#d3869b
color14=#8ec07c
color15=#ebdbb2
```

### One Dark
```properties
background=#282c34
foreground=#abb2bf
cursor=#528bff
color0=#1e222a
color1=#e06c75
color2=#98c379
color3=#e5c07b
color4=#61afef
color5=#c678dd
color6=#56b6c2
color7=#abb2bf
color8=#5c6370
color9=#e06c75
color10=#98c379
color11=#e5c07b
color12=#61afef
color13=#c678dd
color14=#56b6c2
color15=#ffffff
```

### Solarized Dark
```properties
background=#002b36
foreground=#839496
cursor=#839496
color0=#073642
color1=#dc322f
color2=#859900
color3=#b58900
color4=#268bd2
color5=#d33682
color6=#2aa198
color7=#eee8d5
color8=#002b36
color9=#cb4b16
color10=#586e75
color11=#657b83
color12=#839496
color13=#6c71c4
color14=#93a1a1
color15=#fdf6e3
```

### Apply a Scheme
```bash
# Write to colors.properties
cat > ~/.termux/colors.properties << 'EOF'
# Paste scheme here
EOF

# Reload
termux-reload-settings
```

### Switch Schemes Quickly
```bash
# Save schemes as files
mv ~/.termux/colors.properties ~/.termux/colors.properties.bak

# Copy desired scheme
cp ~/.termux/colors.dracula ~/.termux/colors.properties

# Reload
termux-reload-settings
```