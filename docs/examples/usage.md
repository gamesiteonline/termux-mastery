# Bootstrap and Setup Scripts

Ready-to-run scripts for automating Termux setup.

## Available Scripts

| Script | Description |
|--------|-------------|
| `bootstrap.sh` | Complete setup: Zsh + OMZ + P10k + plugins + Starship + tmux |
| `install-zsh.sh` | Zsh + Oh My Zsh + essential plugins only |
| `install-fish.sh` | Fish shell + config + Fisher |
| `install-starship.sh` | Starship prompt for any shell |
| `setup-autocomplete.sh` | Zsh completions, autosuggestions, fzf-tab |

## Usage

```bash
# Download and run any script
curl -fsSL https://raw.githubusercontent.com/gamesiteonline/termux-mastery/main/assets/scripts/bootstrap.sh | bash

# Or save and inspect first
curl -O https://raw.githubusercontent.com/gamesiteonline/termux-mastery/main/assets/scripts/bootstrap.sh
chmod +x bootstrap.sh
./bootstrap.sh
```