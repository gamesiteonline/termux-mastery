# 100 Zsh Autocomplete Examples

<div class="example-counter" data-total="100"></div>
<div class="progress-bar"><div class="fill" data-target="100"></div></div>

---

![Zsh Autocomplete](../../../assets/images/screenshots/zsh-autocomplete.svg)
*Zsh autocomplete examples*

## 📦 Git (25 examples)

### 1. Checkout Branch
```bash
git checkout <TAB>
# → Shows all local branches: main develop feature/login
```

### 2. Checkout Remote Branch
```bash
git checkout origin/<TAB>
# → Shows remote branches: origin/main origin/develop origin/feature/*
```

### 3. Cherry-pick Commits
```bash
git cherry-pick <TAB>
# → Shows recent commit hashes: a1b2c3d Fix bug e4f5g6h Add feature
```

### 4. Diff with Staged
```bash
git diff --cached <TAB>
# → Shows staged file names
```

### 5. Stash Apply
```bash
git stash apply <TAB>
# → Shows stashes: stash@{0}: WIP on main stash@{1}: Fix on develop
```

### 6. Rebase Interactive
```bash
git rebase -i <TAB>
# → Shows branch names and commit hashes
```

### 7. Reset Modes
```bash
git reset --<TAB>
# → --soft --mixed --hard --merge --keep
```

### 8. Log Formats
```bash
git log --<TAB>
# → --oneline --graph --all --decorate --stat --pretty=
```

### 9. Remote Management
```bash
git remote <TAB>
# → add remove rename set-url show prune update
```

### 10. Branch Operations
```bash
git branch --<TAB>
# → --delete --move --list --show-current --merged --no-merged
```

### 11. Tag Completion
```bash
git tag --<TAB>
# → --list --delete --verify --annotate --sign
```

### 12. Worktree Add
```bash
git worktree add <TAB>
# → Shows existing branches to create worktree from
```

### 13. Bisect States
```bash
git bisect <TAB>
# → start bad good skip reset visualize replay log run
```

### 14. Submodule Commands
```bash
git submodule <TAB>
# → add status init update deinit summary foreach sync absorbgitdirs
```

### 15. Notes Operations
```bash
git notes <TAB>
# → add remove edit show merge remove prune get-ref
```

### 16. Clean Options
```bash
git clean -<TAB>
# → -d -f -i -n -q -x -X
```

### 17. Commit Fixup
```bash
git commit --fixup=<TAB>
# → Shows recent commits for fixup
```

### 18. Revert
```bash
git revert <TAB>
# → Shows commits to revert
```

### 19. Archive Format
```bash
git archive --format=<TAB>
# → tar tgz tar.gz zip
```

### 20. Diff Filters
```bash
git diff --diff-filter=<TAB>
# → A (added) C (copied) D (deleted) M (modified) R (renamed)
```

### 21. Blame Options
```bash
git blame --<TAB>
# → --date --file --author --line-porcelain --show-email
```

### 22. Describe
```bash
git describe --<TAB>
# → --all --tags --contains --abbrev --candidates
```

### 23. Push Options
```bash
git push --<TAB>
# → --force --dry-run --tags --all --follow-tags --atomic
```

### 24. Pull Strategy
```bash
git pull --<TAB>
# → --rebase --ff-only --squash --no-commit --autostash
```

### 25. Config Keys
```bash
git config --global <TAB>
# → user.name user.email core.editor init.defaultBranch color.ui
```

---

## 🐳 Docker (20 examples)

### 26. Run Container
```bash
docker run <TAB>
# → Shows available images: ubuntu:latest nginx:alpine python:3.11
```

### 27. Run Options
```bash
docker run --<TAB>
# → --name --volume --env --publish --restart --rm --detach --interactive --tty
```

### 28. Exec into Container
```bash
docker exec -it <TAB>
# → Shows running containers: my_app database cache_redis
```

### 29. Container Commands
```bash
docker container <TAB>
# → create start stop restart rm prune rename pause unpause
```

### 30. Image Operations
```bash
docker image <TAB>
# → build pull push ls rm prune inspect history tag save load
```

### 31. Volume Commands
```bash
docker volume <TAB>
# → create inspect ls prune rm
```

### 32. Network Commands
```bash
docker network <TAB>
# → create connect disconnect inspect ls prune rm
```

### 33. Compose Options
```bash
docker compose <TAB>
# → up down start stop restart pause unpause ps logs build pull push
```

### 34. Compose Up
```bash
docker compose up --<TAB>
# → --detach --build --force-recreate --no-cache --scale --wait
```

### 35. Logs Options
```bash
docker logs --<TAB>
# → --follow --tail --since --until --timestamps --details
```

### 36. Build Options
```bash
docker build --<TAB>
# → --tag --file --build-arg --no-cache --target --pull --compress
```

### 37. Copy to Container
```bash
docker cp <TAB>
# → Shows running containers as destination
```

### 38. Stats Options
```bash
docker stats --<TAB>
# → --all --no-stream --no-trunc --format
```

### 39. Prune Options
```bash
docker system prune --<TAB>
# → --all --force --volumes
```

### 40. Save/Load Images
```bash
docker save <TAB>
# → Shows images available to save
docker load -i <TAB>
# → Shows .tar files in directory
```

### 41. Context Management
```bash
docker context <TAB>
# → create export import inspect ls rm update use
```

### 42. Scan Options
```bash
docker scan <TAB>
# → Shows images to scan for vulnerabilities
```

### 43. Search Options
```bash
docker search --<TAB>
# → --limit --stars --filter --format
```

### 44. Events Filter
```bash
docker events --filter '<TAB>
# → container=<name> image=<name> event=<action> type=<type>
```

### 45. Plugin Management
```bash
docker plugin <TAB>
# → create disable enable inspect install ls push rm set upgrade
```

---

## 📦 Package Managers (15 examples)

### 46. NPM Scripts
```bash
npm run <TAB>
# → dev build start test lint format deploy typecheck clean
```

### 47. NPM Install
```bash
npm install <TAB>
# → Shows available packages or --save --save-dev --global
```

### 48. NPM Publish
```bash
npm publish --<TAB>
# → --tag --access --dry-run --otp
```

### 49. Yarn Commands
```bash
yarn <TAB>
# → add remove upgrade install run build start test publish
```

### 50. Yarn Add Options
```bash
yarn add --<TAB>
# → --dev --peer --optional --exact --tilde
```

### 51. PNPM Commands
```bash
pnpm <TAB>
# → add install update remove run build start test publish link unlink
```

### 52. Pip Install
```bash
pip install <TAB>
# → Shows available packages or -U --user --requirement
```

### 53. Pip Options
```bash
pip --<TAB>
# → install uninstall freeze list show check download
```

### 54. Cargo Commands
```bash
cargo <TAB>
# → build run test check clippy fmt doc publish add remove update
```

### 55. Cargo Build
```bash
cargo build --<TAB>
# → --release --debug --target --features --workspace
```

### 56. Go Commands
```bash
go <TAB>
# → build run test mod get install env doc fmt vet
```

### 57. Go Get
```bash
go get <TAB>
# → Shows available packages or -u -d -t -v
```

### 58. Gem Commands
```bash
gem <TAB>
# → install uninstall list build push pull query search
```

### 59. APT/Pkg
```bash
pkg <TAB>
# → install uninstall update upgrade search show list-files files-for
```

### 60. APT Options
```bash
apt <TAB>
# → update upgrade install remove purge autoremove clean autoclean
```

---

## 🐍 Python & Virtual Environments (10 examples)

### 61. Python Scripts
```bash
python <TAB>
# → Shows .py files in current directory
```

### 62. Python Options
```bash
python -<TAB>
# → -m -c -i -O -B -S -v -V -W -x
```

### 63. Python Module Run
```bash
python -m <TAB>
# → pip venv http.server json.tool pdb unittest
```

### 64. Pip Install Options
```bash
pip install -<TAB>
# → -r --requirement -U --upgrade --user --no-deps --quiet
```

### 65. Virtualenv Creation
```bash
python -m venv <TAB>
# → Shows directory suggestions for new environment
```

### 66. Activate Venv
```bash
source .venv/bin/act<TAB>
# → .venv/bin/activate
```

### 67. Pip Freeze
```bash
pip freeze <TAB>
# → Shows installed packages, or --all --local --requirement
```

### 68. Pipenv Commands
```bash
pipenv <TAB>
# → install uninstall lock run shell check graph sync update
```

### 69. Conda Commands
```bash
conda <TAB>
# → create activate deactivate install remove list update search clean
```

### 70. UV Commands
```bash
uv <TAB>
# → pip venv tool run init add remove sync lock build publish
```

---

## ⚙️ Custom Completions (10 examples)

### 71. Alias Completion
```bash
# Zsh automatically completes aliases if you use OMZ
# Ensure aliases are in the hash table
hash -d docs=~/storage/shared/Documents
cd ~docs/<TAB>  # → Navigates into Documents
```

### 72. Function Arguments
```bash
# Custom function with compdef
compdef _my_func myfunc
myfunc <TAB>
# → Shows custom completions defined by _my_func
```

### 73. SSH Hosts
```bash
ssh <TAB>
# → Shows hosts from ~/.ssh/config: server1.example.com my-vps production
```

### 74. SCP Paths
```bash
scp myfile.txt myserver:<TAB>
# → Shows remote filesystem paths
```

### 75. RSYNC Options
```bash
rsync -<TAB>
# → -a -v -z -P --delete --exclude --progress --dry-run
```

### 76. Make Targets
```bash
make <TAB>
# → Shows targets from Makefile: build test deploy clean install
```

### 77. Systemctl Services
```bash
systemctl <TAB>
# → start stop restart status enable disable reload daemon-reload
```

### 78. Journalctl Options
```bash
journalctl --<TAB>
# → --since --until --unit --follow --lines --output --priority
```

### 79. Tmux Commands
```bash
tmux <TAB>
# → new-session attach detach kill-session list-sessions send-keys
```

### 80. Curl Options
```bash
curl --<TAB>
# → --request --header --data --output --silent --follow --connect-timeout
```

---

## 🖥️ System Commands (20 examples)

### 81. LS Options
```bash
ls --<TAB>
# → --all --long --human-readable --recursive --sort --color
```

### 82. Find Options
```bash
find . --<TAB>
# → -name -type -size -mtime -exec -delete -print
```

### 83. Grep Options
```bash
grep --<TAB>
# → --recursive --ignore-case --line-number --word-regexp --color
```

### 84. Chmod Modes
```bash
chmod <TAB>
# → 644 755 777 600 700 u+x g+w o-r a+x
```

### 85. Tar Operations
```bash
tar -<TAB>
# → -c -x -z -j -f -v -t --exclude --strip-components
```

### 86. Kill Signals
```bash
kill -<TAB>
# → -9 SIGKILL -15 SIGTERM -2 SIGINT -1 SIGHUP -3 SIGQUIT
```

### 87. Screen Commands
```bash
screen -<TAB>
# → -S -r -ls -d -m -x -X
```

### 88. SSH Options
```bash
ssh -<TAB>
# → -p -i -J -A -X -Y -o -N -f -L -R -D
```

### 89. SCP Options
```bash
scp -<TAB>
# → -r -P -i -C -v -q -3 -l
```

### 90. PS Options
```bash
ps <TAB>
# → aux -ef -eo axu --sort --forest
```

### 91. Netstat Options
```bash
netstat -<TAB>
# → -t -u -l -n -p -a -r -i -s
```

### 92. Top Options
```bash
top -<TAB>
# → -b -n -d -u -p -H -i
```

### 93. DF Options
```bash
df -<TAB>
# → -h -T -i -a -l -t -x
```

### 94. DU Options
```bash
du -<TAB>
# → -h -s -a -c --max-depth --exclude --time
```

### 95. Uname Options
```bash
uname -<TAB>
# → -a -s -n -r -v -m -p -i -o
```

### 96. Date Format
```bash
date +<TAB>*2
# → %Y-%m-%d %H:%M:%S %A %B %s
```

### 97. Watch Options
```bash
watch --<TAB>
# → --interval --difference --no-title --exec --color
```

### 98. Wget Options
```bash
wget --<TAB>
# → --output-document --continue --quiet --recursive --limit-rate
```

### 99. Cat Options
```bash
cat --<TAB>
# → --number --show-ends --show-tabs --squeeze-blank --show-all
```

### 100. Echo Options
```bash
echo <TAB>
# → Shows files in directory, or -n -e -E flags
```

---

<div class="cta-section">
  <p>🎉 <strong>100 examples complete!</strong></p>
  <p>Next: <a href="../../shells/fish-setup/">Try Fish Shell</a> or <a href="../../theming/termux-styling/">Customize Your Theme</a></p>
</div>

[← Back to Autocomplete](../completion-basics/) | [Fish 100 Examples →](../examples-fish/)