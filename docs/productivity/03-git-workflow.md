# Git Workflow

## Daily Git Commands

```bash
# Start work
git checkout -b feature/my-feature  # New branch
git pull origin main                 # Get latest

# Make changes
git status                           # See what changed
git add file.txt                     # Stage file
git add -p                           # Stage interactively
git commit -m "feat: add login"      # Commit

# Share changes
git push -u origin feature/my-feature  # Push branch
```

## Advanced Git Techniques

### Interactive Rebase
```bash
# Squash last 3 commits into 1
git rebase -i HEAD~3

# Fix commit message
git commit --amend

# Edit older commit
git rebase -i HEAD~5
# Change 'pick' to 'edit' for the commit
git commit --amend
git rebase --continue
```

### Bisect (Find Bug)
```bash
# Start bisect
git bisect start
git bisect bad      # Current version is broken
git bisect good v1.0  # v1.0 was good

# Git will checkout commits for you to test
# Mark each as good/bad
git bisect good
git bisect bad

# When done
git bisect reset
```

### Worktrees (Work on Multiple Branches)
```bash
# Create worktree for another branch
git worktree add ../project-release release/v2

# List worktrees
git worktree list

# Remove worktree
git worktree remove ../project-release
```

### Stash Advanced
```bash
# Stash with message
git stash push -m "WIP: login feature"

# Stash specific files
git stash push -m "only config" -- config.yml

# Interactive stash
git stash -p

# List stashes with details
git stash list
git stash show -p stash@{0}

# Branch from stash
git stash branch new-feature stash@{0}
```

### Reflog (Recover Lost Commits)
```bash
# See all HEAD movements
git reflog

# Recover after bad reset
git reflog
git reset --hard HEAD@{2}

# Find lost commit
git fsck --lost-found
```

## Git Aliases

```bash
git config --global alias.co checkout
git config --global alias.br branch
git config --global alias.ci commit
git config --global alias.st status
git config --global alias.lg "log --oneline --graph --all --decorate"
git config --global alias.undo "reset --soft HEAD~1"
git config --global alias.last "log -1 HEAD"
git config --global alias.visual "!gitk"
```

## Git Hooks

See [Git Hooks](../automation/05-git-hooks.md) for automation examples.

## Termux-Specific Tips

```bash
# SSH agent for push
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_ed25519

# Credential caching
git config --global credential.helper store

# Avoid large files eating device storage
git config --global core.bigFileThreshold 10m
```