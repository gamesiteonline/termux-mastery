# Fish Configuration
# ~/.config/fish/config.fish

# Greeting
set fish_greeting ""

# Environment
set -x EDITOR nvim
set -gx PATH $HOME/.local/bin $PATH

# Abbreviations (expand on Space/Enter)
abbr --add ll 'ls -lh'
abbr --add la 'ls -lAh'
abbr --add .. 'cd ..'
abbr --add ... 'cd ../..'
abbr --add md 'mkdir -p'
abbr --add update 'pkg update && pkg upgrade'

# Git abbreviations
abbr --add gs 'git status'
abbr --add ga 'git add'
abbr --add gc 'git commit -m'
abbr --add gp 'git push'
abbr --add gl 'git pull'
abbr --add gco 'git checkout'
abbr --add gb 'git branch'
abbr --add gd 'git diff'
abbr --add glog 'git log --oneline --graph --all --decorate'

# Functions
function mkcd
  mkdir -p $argv && cd $argv
end

function extract
  if test -f "$argv[1]"
    switch "$argv[1]"
      case '*.tar.gz' '*.tgz'
        tar -xzf "$argv[1]"
      case '*.zip'
        unzip "$argv[1]"
      case '*.rar'
        unrar x "$argv[1]"
    end
  end
end

function ff
  find . -iname "*$argv[1]*" 2>/dev/null
end

# Starship prompt
starship init fish | source