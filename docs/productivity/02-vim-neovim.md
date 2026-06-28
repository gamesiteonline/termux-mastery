# Vim & Neovim

## Installation

```bash
# Install Neovim
pkg install neovim

# Or Vim
pkg install vim
```

## Basic Vim

### Modes
| Mode | Key to Enter |
|------|-------------|
| Normal | `Esc` |
| Insert | `i`, `a`, `o` |
| Visual | `v` |
| Command | `:` |

### Essential Commands
```vim
:q       " Quit
:w       " Save
:wq      " Save and quit
:q!      " Quit without saving
:e file  " Open file
:help    " Open help
```

### Navigation
```vim
h j k l    " Left, Down, Up, Right
w b        " Word forward/backward
0 $        " Start/End of line
gg G       " Start/End of file
Ctrl+d Ctrl+u  " Page down/up
```

### Editing
```vim
x          " Delete character
dd         " Delete line
yy         " Yank (copy) line
p P        " Paste after/before
u Ctrl+r   " Undo/Redo
/pattern   " Search
:%s/old/new/g  " Replace all
```

## Neovim Configuration

```vim
" ~/.config/nvim/init.vim

" Settings
set number
set relativenumber
set tabstop=2
set shiftwidth=2
set expandtab
set smartindent
set hlsearch
set ignorecase
set smartcase
set mouse=a
set clipboard+=unnamedplus

" Key mappings
let mapleader = " "
nnoremap <leader>w :w<CR>
nnoremap <leader>q :q<CR>
nnoremap <leader>f :find<Space>
nnoremap <leader>e :Explore<CR>

" Plugins (vim-plug)
call plug#begin()
  Plug 'nvim-lua/plenary.nvim'
  Plug 'nvim-telescope/telescope.nvim'
  Plug 'nvim-treesitter/nvim-treesitter'
  Plug 'neovim/nvim-lspconfig'
  Plug 'hrsh7th/nvim-cmp'
  Plug 'hrsh7th/cmp-nvim-lsp'
  Plug 'williamboman/mason.nvim'
  Plug 'williamboman/mason-lspconfig.nvim'
  Plug 'folke/tokyonight.nvim'
call plug#end()

" Theme
colorscheme tokyonight
```

## Plugin Manager (vim-plug)

```bash
# Install vim-plug
sh -c 'curl -fLo "${XDG_DATA_HOME:-$HOME/.local/share}"/nvim/site/autoload/plug.vim --create-dirs \
  https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim'

# In Neovim
:PlugInstall    " Install plugins
:PlugUpdate    " Update plugins
:PlugClean     " Remove unused
```

## LSP Setup (Autocomplete for Code)

```vim
" In init.vim
lua << EOF
require('mason').setup()
require('mason-lspconfig').setup({
  ensure_installed = { 'pyright', 'tsserver', 'rust_analyzer' }
})

local lspconfig = require('lspconfig')
lspconfig.pyright.setup({})
lspconfig.tsserver.setup({})
EOF
```

## Telescope (Fuzzy Finder)

```vim
" Find files
nnoremap <leader>ff <cmd>Telescope find_files<CR>
nnoremap <leader>fg <cmd>Telescope live_grep<CR>
nnoremap <leader>fb <cmd>Telescope buffers<CR>
nnoremap <leader>fh <cmd>Telescope help_tags<CR>
```