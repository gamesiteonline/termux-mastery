# Python & Node.js on Termux

![Neovim Editor](../../../assets/images/screenshots/neovim-editor.svg)
*Python and Node.js development*

## Python Setup

```bash
# Install Python
pkg install python

# Verify
python --version  # Python 3.11+
pip --version

# Install common packages
pip install requests click rich rich typer flask fastapi
```

## Python Virtual Environments

```bash
# Create venv
python -m venv .venv

# Activate
source .venv/bin/activate

# Install packages in venv
pip install flask requests

# Deactivate
deactivate
```

## Node.js Setup

```bash
# Install Node.js
pkg install nodejs

# Verify
node --version
npm --version

# Install global tools
npm install -g yarn pnpm typescript eslint prettier
```

## Version Managers

### nvm (Node Version Manager)
```bash
# Install nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash

# Use nvm
nvm install 18     # Install Node 18
nvm install 20     # Install Node 20
nvm use 18         # Switch to Node 18
nvm alias default 20  # Set default
```

### pyenv (Python Version Manager)
```bash
# Install pyenv
git clone https://github.com/pyenv/pyenv.git ~/.pyenv

# Add to your shell config
export PYENV_ROOT="$HOME/.pyenv"
export PATH="$PYENV_ROOT/bin:$PATH"
eval "$(pyenv init -)"

# Use pyenv
pyenv install 3.10
pyenv install 3.12
pyenv global 3.12
```

## Package Managers

### pipx (Install Python CLI Tools)
```bash
pip install pipx
pipx ensurepath

# Install tools in isolated environments
pipx install black
pipx install ruff
pipx install poetry
pipx install httpie
```

### pnpm (Fast Node Package Manager)
```bash
npm install -g pnpm
pnpm add -g typescript
```

## Project Templates

### Python CLI
```bash
# Create CLI with Click
mkdir mycli && cd mycli
python -m venv .venv
source .venv/bin/activate
pip install click
```

### Python Web App
```bash
# FastAPI
pip install fastapi uvicorn
echo 'from fastapi import FastAPI
app = FastAPI()
@app.get("/")
def read_root():
    return {"Hello": "World"}' > main.py
uvicorn main:app --reload --host 0.0.0.0 --port 8080
```

### Node.js Web App
```bash
mkdir myapp && cd myapp
npm init -y
npm install express
echo 'const express = require("express")
const app = express()
app.get("/", (req, res) => res.send("Hello"))
app.listen(3000)' > index.js
node index.js
```

## Performance Tips for Termux

```bash
# Node.js memory limit (if needed)
export NODE_OPTIONS="--max-old-space-size=512"

# Python won't compile C extensions well
# Prefer pure-Python packages or use pkg pre-built

# Use --no-cache-dir to save space
pip install --no-cache-dir flask

# Clean npm cache periodically
npm cache clean --force
```