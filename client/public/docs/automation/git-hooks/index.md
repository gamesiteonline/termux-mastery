# Git Hooks

Automate actions on Git events.

## What are Git Hooks?

Scripts that run automatically before or after Git operations:

- `pre-commit` — Before each commit
- `post-commit` — After each commit
- `pre-push` — Before push
- `post-merge` — After merge
- `post-checkout` — After checkout
- `pre-receive` — On server before receive

## Setting Up Hooks

```bash
# Hooks live in .git/hooks/
ls .git/hooks/
# applypatch-msg.sample  pre-applypatch.sample  pre-commit.sample ...

# Create a hook
nano .git/hooks/pre-commit
chmod +x .git/hooks/pre-commit
```

## Essential Hooks

### Pre-commit: Lint Check
```bash
#!/data/data/com.termux/files/usr/bin/bash
# .git/hooks/pre-commit

# Check JavaScript files with ESLint
FILES=$(git diff --cached --name-only --diff-filter=ACM | grep '\.js$')
if [ -n "$FILES" ]; then
  npx eslint $FILES
  if [ $? -ne 0 ]; then
    echo "❌ ESLint failed. Commit aborted."
    exit 1
  fi
fi

# Check for debug statements
if git diff --cached | grep -E "(console\.log|debugger|TODO)" > /dev/null; then
  echo "⚠️ Warning: Found console.log, debugger, or TODO in staged changes"
  echo "Review before committing!"
fi
```

### Pre-commit: Version Check
```bash
#!/data/data/com.termux/files/usr/bin/bash
# .git/hooks/pre-commit

# Ensure version is bumped
CURRENT=$(git describe --tags --abbrev=0 2>/dev/null || echo "0.0.0")
echo "Current version: $CURRENT"
echo "Edit version file if needed"
```

### Pre-commit: Secrets Detection
```bash
#!/data/data/com.termux/files/usr/bin/bash
# .git/hooks/pre-commit

# Check for potential secrets
if git diff --cached | grep -iP "(password|secret|api_key|token|credential)" > /dev/null; then
  echo "❌ Potential secret detected in commit!"
  git diff --cached | grep -n -iP "(password|secret|api_key|token|credential)"
  echo "Please remove before committing"
  exit 1
fi
```

### Post-commit: Notification
```bash
#!/data/data/com.termux/files/usr/bin/bash
# .git/hooks/post-commit

COMMIT_MSG=$(git log -1 --pretty=%B)
termux-notification \
  --title "✅ Commit Successful" \
  --content "$COMMIT_MSG" \
  --id git-commit
```

### Pre-push: Run Tests
```bash
#!/data/data/com.termux/files/usr/bin/bash
# .git/hooks/pre-push

echo "🧪 Running tests before push..."
npm test || { echo "❌ Tests failed. Push aborted."; exit 1; }
```

### Post-merge: Install Dependencies
```bash
#!/data/data/com.termux/files/usr/bin/bash
# .git/hooks/post-merge

# Check if package.json changed
CHANGED=$(git diff HEAD@{1} --name-only | grep "package.json")
if [ -n "$CHANGED" ]; then
  echo "📦 package.json changed, updating dependencies..."
  npm install
fi
```

## Global Hooks (All Repos)

```bash
# Set a global hooks directory
git config --global core.hooksPath ~/.git-hooks

# Create global hooks
mkdir -p ~/.git-hooks
nano ~/.git-hooks/pre-commit
chmod +x ~/.git-hooks/pre-commit

# Now hooks run for ALL your repos
```

## Using Husky (Node.js)

```bash
# Install husky in your project
npx husky install

# Create a hook
npx husky add .husky/pre-commit "npm test"
npx husky add .husky/commit-msg "npx --no-install commitlint --edit $1"

# Commit the hooks
git add .husky/
git commit -m "chore: add husky hooks"
```

## Skip Hooks

```bash
# Bypass hooks temporarily
git commit --no-verify -m "Emergency fix"
git push --no-verify

# Or with environment variable
GIT_ALLOW_UNSAFE=true git commit -m "message"
```

## Hook Templates

```bash
# Create a template directory
mkdir -p ~/.git-templates/hooks

# Add hooks to template
cat > ~/.git-templates/hooks/pre-commit << 'EOF'
#!/bin/bash
echo "Running pre-commit checks..."
EOF
chmod +x ~/.git-templates/hooks/*

# Use template for new repos
git config --global init.templateDir ~/.git-templates
```