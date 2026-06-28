# 100 Fish Autocomplete Examples

<div class="example-counter" data-total="100"></div>
<div class="progress-bar"><div class="fill" data-target="100"></div></div>

---

## 📦 Git (25 examples)

### 1. Branch Autocomplete
```fish
git checkout <TAB>
# Fish shows all branches with metadata:
# main  (default)
# develop
# feature/login  (HEAD)
```

### 2. Remote Tracking
```fish
git checkout -t <TAB>
# Shows remote tracking branches
# origin/main  origin/develop
```

### 3. Cherry-pick
```fish
git cherry-pick <TAB>
# Fish shows recent commits with messages:
# a1b2c3d  Fix login bug
# e4f5g6h  Add dark mode
```

### 4. Log Pretty
```fish
git log --<TAB>
# Fish groups options by category:
# Format: --oneline --graph --pretty
# Diff: --patch --stat
# Limit: --since --until --author
```

### 5. Diff Options
```fish
git diff --<TAB>
# Fish shows descriptions:
# --cached  Show staged changes
# --stat    Show diffstat
# --compact-summary
```

### 6. Stash Operations
```fish
git stash <TAB>
# push pop apply list show drop clear create
```

### 7. Reset Modes
```fish
git reset --<TAB>
# --soft  Keep changes staged
# --mixed Keep changes unstaged (default)
# --hard  Discard all changes
```

### 8. Remote Commands
```fish
git remote <TAB>
# add rename remove set-url show prune update
```

### 9. Branch Flags
```fish
git branch -<TAB>
# -d Delete -D Force delete -m Move -M Force move
# -a All -r Remote --merged --no-merged
```

### 10. Tag Operations
```fish
git tag -<TAB>
# -l List -d Delete -a Annotated -s Signed -v Verify
```

### 11. Submodule
```fish
git submodule <TAB>
# add status init update deinit summary
```

### 12. Bisect
```fish
git bisect <TAB>
# start bad good skip reset visualize replay log run
```

### 13. Worktree
```fish
git worktree <TAB>
# add list lock prune remove unlock
```

### 14. Notes
```fish
git notes <TAB>
# add append copy edit get-ref list merge prune remove show
```

### 15. Clean Options
```fish
git clean -<TAB>
# -d -f -i -n -q -x -X
# -d Directories  -f Force  -i Interactive  -n Dry run
```

### 16. Archive Formats
```fish
git archive --format=<TAB>
# tar tgz tar.gz zip
```

### 17. Blame
```fish
git blame -<TAB>
# -l Long revision -t Raw timestamp -e Show email
# -w Ignore whitespace
```

### 18. Describe
```fish
git describe --<TAB>
# --all --tags --contains --abbrev= --candidates=
```

### 19. Push Options
```fish
git push --<TAB>
# --force --dry-run --tags --all --follow-tags --atomic
```

### 20. Pull Modes
```fish
git pull --<TAB>
# --rebase --ff-only --squash --no-commit --autostash
```

### 21. Config Keys
```fish
git config --global <TAB>
# user.name  user.email  core.editor  init.defaultBranch  color.ui  alias.*
```

### 22. Rebase Interactive
```fish
git rebase -i <TAB>
# Shows commits to rebase with fish descriptions
```

### 23. Merge Options
```fish
git merge --<TAB>
# --no-ff --squash --edit --no-commit --ff-only --abort --continue
```

### 24. Add Interactive
```fish
git add -<TAB>
# -i Interactive -p Patch -e Edit -u Update -A All
```

### 25. Status Short
```fish
git status --<TAB>
# --short --branch --porcelain --ignored
```

---

## 🐳 Docker (20 examples)

### 26. Container Commands
```fish
docker container <TAB>
# create  start   stop    restart  rm
# prune   rename  pause   unpause  update
# inspect logs    stats   top      ls
```

### 27. Image Commands
```fish
docker image <TAB>
# build   pull   push   ls     rm     prune
# tag     save   load   import export inspect history
```

### 28. Volume Commands
```fish
docker volume <TAB>
# create  inspect  ls  prune  rm
```

### 29. Network Commands
```fish
docker network <TAB>
# create  connect  disconnect  inspect  ls  prune  rm
```

### 30. Compose Options
```fish
docker compose <TAB>
# up  down  start  stop  restart  pause  unpause  ps  logs  build  pull  push
```

### 31. Run Options
```fish
docker run -<TAB>
# -d Detach  -it Interactive  --name  -v Volume  -p Port  -e Env
# --rm Remove  --restart  --network
```

### 32. Exec Containers
```fish
docker exec -it <TAB>
# Fish shows running containers with status:
# my_app      Up 2 hours
# redis_db    Up 5 hours
# postgres    Up 3 hours
```

### 33. Logs Options
```fish
docker logs -<TAB>
# -f Follow  --tail=N  --since  --until  -t Timestamps  --details
```

### 34. Build Options
```fish
docker build -<TAB>
# -t Tag  -f File  --build-arg  --no-cache  --target  --pull
```

### 35. Copy Operations
```fish
docker cp <TAB>
# Fish shows containers first, then paths
# my_app:/app/config.json  ./config.json
```

### 36. Stats
```fish
docker stats <TAB>
# Shows running containers with CPU/Memory usage
```

### 37. Prune
```fish
docker system prune -<TAB>
# -a All  -f Force  --volumes
```

### 38. Save/Load
```fish
docker save -o backup.tar <TAB>
# Shows images with repository:tag format
docker load -i <TAB>
# Shows .tar files in directory
```

### 39. Search
```fish
docker search <TAB>
# Shows available images on Docker Hub
```

### 40. Events
```fish
docker events --filter '<TAB>
# container=  image=  event=  type=  label=
```

### 41. Context
```fish
docker context <TAB>
# create  export  import  inspect  ls  rm  update  use
```

### 42. System DF
```fish
docker system df <TAB>
# Shows disk usage for images/containers/volumes
```

### 43. History
```fish
docker history <TAB>
# Shows images with their layer history
```

### 44. Export/Import
```fish
docker export <TAB>
# Shows running containers
docker import <TAB>
# Shows .tar files
```

### 45. Swarm Commands
```fish
docker swarm <TAB>
# init  join  leave  unlock  unlock-key  update
```

---

## 📦 Package Managers (15 examples)

### 46. NPM Scripts
```fish
npm run <TAB>
# Fish shows package.json scripts:
# dev       Start dev server
# build     Build for production
# test      Run tests
# lint      Lint code
```

### 47. NPM Install
```fish
npm install <TAB>
# Shows packages from npm registry
# -S Save  -D Dev  -g Global
```

### 48. NPM Publish
```fish
npm publish <TAB>
# --tag  --access  --dry-run  --otp
```

### 49. Yarn
```fish
yarn <TAB>
# add  remove  upgrade  install  run  build  start  test  publish
```

### 50. PNPM
```fish
pnpm <TAB>
# add  install  update  remove  run  build  start  test  publish  link
```

### 51. Pip Install
```fish
pip install <TAB>
# Shows packages from PyPI
# -U Upgrade  --user  -r Requirements
```

### 52. Pip Freeze
```fish
pip freeze <TAB>
# Shows installed packages with versions
# --all  --local  -r
```

### 53. Cargo
```fish
cargo <TAB>
# build  run  test  check  clippy  fmt  doc  publish  add  remove  update
```

### 54. Cargo Build
```fish
cargo build --<TAB>
# --release  --target  --features  --workspace
```

### 55. Go
```fish
go <TAB>
# build  run  test  mod  get  install  env  doc  fmt  vet
```

### 56. Go Mod
```fish
go mod <TAB>
# init  tidy  download  vendor  verify  why  edit  graph
```

### 57. Gem
```fish
gem <TAB>
# install  uninstall  list  build  push  pull  query  search  cleanup
```

### 58. Pkg
```fish
pkg <TAB>
# install  uninstall  update  upgrade  search  show
```

### 59. Apt
```fish
apt <TAB>
# update  upgrade  install  remove  purge  autoremove  clean  autoclean
```

### 60. Brew
```fish
brew <TAB>
# install  uninstall  update  upgrade  list  search  info  doctor  cleanup
```

---

## 🐍 Python (10 examples)

### 61. Python Run
```fish
python <TAB>
# Shows .py files, -c for code, -m for modules
```

### 62. Python Module
```fish
python -m <TAB>
# pip  venv  http.server  json.tool  pdb  unittest
```

### 63. Venv Create
```fish
python -m venv <TAB>
# Shows directory suggestions
```

### 64. Activate Venv
```fish
source .venv/bin/activate.fish
# Fish script for activation
```

### 65. Pip List
```fish
pip list <TAB>
# --outdated  --uptodate  --format=columns
```

### 66. Pip Show
```fish
pip show <TAB>
# Shows installed package names
```

### 67. UV
```fish
uv <TAB>
# pip  venv  tool  run  init  add  remove  sync  lock  build  publish
```

### 68. Conda
```fish
conda <TAB>
# create  activate  deactivate  install  remove  list  update  search  clean
```

### 69. Pipenv
```fish
pipenv <TAB>
# install  uninstall  lock  run  shell  check  graph  sync  update
```

### 70. Poetry
```fish
poetry <TAB>
# new  init  install  add  remove  update  build  publish  run  shell
```

---

## ⚙️ Custom (10 examples)

### 71. Abbreviations
```fish
# Fish abbreviations expand on Space/Enter
gs<TAB>  →  git status (expands)
ga<TAB>  →  git add (expands)
gp<TAB>  →  git push (expands)
```

### 72. SSH Hosts
```fish
ssh <TAB>
# Shows hosts from config with descriptions:
# server1  Web server (192.168.1.100)
# nas      Network storage
# pi       Raspberry Pi
```

### 73. SCP
```fish
scp myfile.txt <TAB>
# Shows hosts, then remote paths
```

### 74. Make Targets
```fish
make <TAB>
# Shows targets with descriptions from Makefile:
# build    Build the project
# test     Run tests
# clean    Clean artifacts
```

### 75. Systemctl
```fish
systemctl <TAB>
# start  stop  restart  status  enable  disable  reload
# daemon-reload  is-active  is-enabled  list-units
```

### 76. Journalctl
```fish
journalctl <TAB>
# -u Unit  --since  --until  -f Follow  -n Lines  -p Priority
```

### 77. Tmux
```fish
tmux <TAB>
# new-session  attach  detach  kill-session  list-sessions
# send-keys  source  display-message
```

### 78. Kill Processes
```fish
kill <TAB>
# Shows running processes with PIDs
# Fish has built-in process completion
```

### 79. Rsync
```fish
rsync -<TAB>
# -a Archive  -v Verbose  -z Compress  -P Progress
# --delete  --exclude  --dry-run
```

### 80. Curl
```fish
curl <TAB>
# -X Method  -H Header  -d Data  -o Output  -s Silent  -L Follow
```

---

## 🖥️ System (20 examples)

### 81. Find
```fish
find . -name "<TAB>
# Shows file patterns
```

### 82. Grep
```fish
grep -<TAB>
# -r Recursive  -i Ignore case  -n Line numbers  -l Files only
# -c Count  -v Invert  -w Words  -x Lines
```

### 83. Chmod
```fish
chmod <TAB>
# u+x  g+w  o+r  a+x  755  644  600  700
```

### 84. Tar
```fish
tar -<TAB>
# -c Create  -x Extract  -z Gzip  -j Bzip2  -f File  -v Verbose
```

### 85. Unzip
```fish
unzip <TAB>
# Shows .zip files in directory
```

### 86. LS Colors
```fish
ls -<TAB>
# -l Long  -a All  -h Human  -S Sort size  -t Sort time  -r Reverse
```

### 87. CP Options
```fish
cp -<TAB>
# -r Recursive  -i Interactive  -u Update  -v Verbose  -p Preserve
```

### 88. MV Options
```fish
mv -<TAB>
# -i Interactive  -u Update  -v Verbose  -n No clobber  -b Backup
```

### 89. SSH Options
```fish
ssh -<TAB>
# -p Port  -i Key  -J Jump  -A Agent  -X X11  -N No cmd  -f Background
# -L Local  -R Remote  -D Dynamic
```

### 90. PS
```fish
ps <TAB>
# aux  -ef  -eo  axu  --forest  --sort
```

### 91. Top
```fish
top -<TAB>
# -b Batch  -n Iterations  -d Delay  -u User  -p PID
```

### 92. DF
```fish
df -<TAB>
# -h Human  -T Type  -i Inodes  -a All  -l Local
```

### 93. DU
```fish
du -<TAB>
# -h Human  -s Summary  -a All  -c Total  --max-depth  --exclude
```

### 94. Date
```fish
date +<TAB>
# %Y Year  %m Month  %d Day  %H Hour  %M Minute  %S Second
# %A Weekday  %B Month name
```

### 95. Watch
```fish
watch -<TAB>
# -n Interval  -d Differences  -t No title  -g Exit on change
```

### 96. Wget
```fish
wget <TAB>
# -O Output  -c Continue  -q Quiet  -r Recursive  --limit-rate
```

### 97. Sort
```fish
sort -<TAB>
# -n Numeric  -r Reverse  -u Unique  -k Key  -t Separator  -h Human
```

### 98. Head
```fish
head -<TAB>
# -n Lines  -c Bytes  -q Quiet  -v Verbose
```

### 99. Tail
```fish
tail -<TAB>
# -n Lines  -f Follow  -c Bytes  -q Quiet  -v Verbose  --pid
```

### 100. WC
```fish
wc -<TAB>
# -l Lines  -w Words  -c Bytes  -m Characters  -L Max line length
```

---

<div class="cta-section">
  <p>🎉 <strong>100 Fish examples complete!</strong></p>
  <p>Next: <a href="../theming/01-termux-styling/">Customize Your Theme</a> or <a href="100-examples-zsh.md">See Zsh Examples</a></p>
</div>

[← Back to Autocomplete](../autocomplete/01-completion-basics/) | [Zsh 100 Examples →](100-examples-zsh.md)