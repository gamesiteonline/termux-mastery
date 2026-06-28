# 100 Bash Autocomplete Examples

<div class="example-counter" data-total="100"></div>
<div class="progress-bar"><div class="fill" data-target="100"></div></div>

---

## 📦 Git (20 examples)

### 1. Basic Git Commands
```bash
git <TAB><TAB>
# add bisect branch checkout clone commit diff fetch grep init log merge
# pull push rebase reset restore revert show stash status switch tag
```

### 2. Branch Names
```bash
git checkout <TAB><TAB>
# main develop feature/login hotfix/security release/v2.0
```

### 3. Remote Branches
```bash
git fetch origin <TAB><TAB>
# origin/main origin/develop origin/feature/*
```

### 4. Commit Objects
```bash
git show <TAB><TAB>
# HEAD HEAD~1 HEAD~2 main~3 a1b2c3d
```

### 5. Stash List
```bash
git stash list
git stash apply <TAB><TAB>
# stash@{0}: On main: fix typo
# stash@{1}: On develop: WIP
```

### 6. Log Options
```bash
git log --<TAB><TAB>
# --all --graph --oneline --decorate --stat --name-only
```

### 7. Diff Options
```bash
git diff --<TAB><TAB>
# --cached --staged --stat --name-only --ignore-space-change
```

### 8. Reset Options
```bash
git reset --<TAB><TAB>
# --soft --mixed --hard --merge --keep
```

### 9. Tag Names
```bash
git tag -l
git checkout <TAB><TAB>
# v1.0.0 v1.1.0 v2.0.0-beta
```

### 10. Remote Names
```bash
git remote <TAB><TAB>
# add rename remove set-url show prune update
```

### 11. Submodule
```bash
git submodule <TAB><TAB>
# add status init update deinit summary foreach sync
```

### 12. Clean Options
```bash
git clean -<TAB><TAB>
# -d -f -i -n -q -x -X
```

### 13. Commit Options
```bash
git commit -<TAB><TAB>
# -a -m -v --amend --no-edit --fixup --squash --allow-empty
```

### 14. Push Options
```bash
git push --<TAB><TAB>
# --force --dry-run --tags --all --follow-tags --atomic --delete
```

### 15. Pull Options
```bash
git pull --<TAB><TAB>
# --rebase --ff-only --squash --no-commit --autostash --all
```

### 16. Rebase Options
```bash
git rebase -<TAB><TAB>
# -i --interactive --continue --skip --abort --onto --ignore-whitespace
```

### 17. Merge Options
```bash
git merge --<TAB><TAB>
# --no-ff --squash --edit --no-commit --ff-only --abort --continue
```

### 18. Worktree
```bash
git worktree <TAB><TAB>
# add list lock prune remove unlock
```

### 19. Bisect
```bash
git bisect <TAB><TAB>
# start bad good skip reset visualize replay log run
```

### 20. Config Keys
```bash
git config --global <TAB><TAB>
# user.name user.email core.editor init.defaultBranch color.ui
```

---

## 🐳 Docker (15 examples)

### 21. Docker Commands
```bash
docker <TAB><TAB>
# attach build commit cp create diff events exec export history
# images import info inspect kill load login logout logs
# network node pause plugin port ps pull push rename restart rm
# rmi run save search service stack start stats stop swarm system tag
# top trust unpause update version volume wait
```

### 22. Running Containers
```bash
docker exec -it <TAB><TAB>
# my_app_1 redis_db postgres_server
```

### 23. Image Names
```bash
docker run <TAB><TAB>
# ubuntu:latest nginx:alpine python:3.11 node:18
```

### 24. Run Options
```bash
docker run --<TAB><TAB>
# --name --volume --env --publish --restart --rm --detach --interactive
```

### 25. Compose Commands
```bash
docker compose <TAB><TAB>
# up down start stop restart pause unpause ps logs build pull push
```

### 26. Container Operations
```bash
docker container <TAB><TAB>
# create start stop restart rm prune rename pause unpause update
```

### 27. Image Operations
```bash
docker image <TAB><TAB>
# build pull push ls rm prune inspect history tag save load
```

### 28. Volume Operations
```bash
docker volume <TAB><TAB>
# create inspect ls prune rm
```

### 29. Network Operations
```bash
docker network <TAB><TAB>
# create connect disconnect inspect ls prune rm
```

### 30. Logs Options
```bash
docker logs --<TAB><TAB>
# --follow --tail --since --until --timestamps --details
```

### 31. Build Options
```bash
docker build --<TAB><TAB>
# --tag --file --build-arg --no-cache --target --pull --compress
```

### 32. Copy
```bash
docker cp <TAB><TAB>
# Shows containers as possible first argument
```

### 33. Prune
```bash
docker system prune --<TAB><TAB>
# --all --force --volumes
```

### 34. Stats
```bash
docker stats --<TAB><TAB>
# --all --no-stream --no-trunc --format
```

### 35. Search
```bash
docker search --<TAB><TAB>
# --limit --stars --filter --format
```

---

## 📦 Package Managers (10 examples)

### 36. NPM Commands
```bash
npm <TAB><TAB>
# access adduser audit bin bugs cache ci completion config
# dedupe deprecate dist-tag docs doctor edit explore fund get help
# hook init install link login logout ls org outdated owner pack
# ping prefix profile prune publish rebuild repo restart root
# run-script search set shrinkwrap star stars start stop team test
# token uninstall unpublish unstar update version view whoami
```

### 37. NPM Scripts
```bash
npm run <TAB><TAB>
# dev build start test lint format deploy typecheck
```

### 38. Pip Commands
```bash
pip <TAB><TAB>
# install uninstall freeze list show check download
# wheel hash search help debug
```

### 39. Cargo Commands
```bash
cargo <TAB><TAB>
# build run test check clippy fmt doc publish add remove update
# init new bench clean verify package
```

### 40. Go Commands
```bash
go <TAB><TAB>
# build run test mod get install env doc fmt vet generate
# tool version fix clean list bug work
```

### 41. Pkg Commands
```bash
pkg <TAB><TAB>
# install uninstall update upgrade search show list-files files-for
```

### 42. Apt Commands
```bash
apt <TAB><TAB>
# update upgrade install remove purge autoremove clean autoclean
# full-upgrade edit-sources policy
```

### 43. Yarn Commands
```bash
yarn <TAB><TAB>
# add remove upgrade install run build start test publish
# link unlink info config workspace
```

### 44. PNPM
```bash
pnpm <TAB><TAB>
# add install update remove run build start test publish link unlink
# store prune recursive audit
```

### 45. Gem
```bash
gem <TAB><TAB>
# install uninstall list build push pull query search cleanup
# which pristine rdoc server sources specification update
```

---

## 🐍 Python (10 examples)

### 46. Python Options
```bash
python -<TAB><TAB>
# -c -m -i -O -B -S -v -V -W -x -u -E
```

### 47. Python Modules
```bash
python -m <TAB><TAB>
# pip venv http.server json.tool pdb unittest ensurepip
```

### 48. Virtual Environments
```bash
python -m venv --<TAB><TAB>
# --system-site-packages --symlinks --copies --without-pip
```

### 49. Pip Install
```bash
pip install -<TAB><TAB>
# -r --requirement -U --upgrade --user --no-deps --quiet -e --editable
```

### 50. UV
```bash
uv <TAB><TAB>
# pip venv tool run init add remove sync lock build publish
```

### 51. Conda
```bash
conda <TAB><TAB>
# create activate deactivate install remove list update search clean
# info config env init run
```

### 52. Pipenv
```bash
pipenv <TAB><TAB>
# install uninstall lock run shell check graph sync update
# open where requirements
```

### 53. Poetry
```bash
poetry <TAB><TAB>
# new init install add remove update build publish run shell
# check config export lock about
```

### 54. Jupyter
```bash
jupyter <TAB><TAB>
# notebook lab console kernel kernelspec migrate nbconvert trust
```

### 55. Black Formatter
```bash
black <TAB><TAB>
# Shows .py files, --check --diff --quiet --verbose --version
```

---

## ⚙️ Custom (15 examples)

### 56. SSH Hosts
```bash
ssh <TAB><TAB>
# server1.example.com my-vps production-server nas raspberry-pi
```

### 57. Systemctl
```bash
systemctl <TAB><TAB>
# start stop restart status enable disable reload daemon-reload
# is-active is-enabled list-units mask unmask
```

### 58. Journalctl
```bash
journalctl -u <TAB><TAB>
# ssh.service docker.service nginx.service cron.service
```

### 59. Tmux
```bash
tmux <TAB><TAB>
# new-session attach detach kill-session list-sessions send-keys
# rename-session source display-message set-option
```

### 60. Screen
```bash
screen -<TAB><TAB>
# -S -r -ls -d -m -x -X -c -D -R
```

### 61. Curl
```bash
curl --<TAB><TAB>
# --request --header --data --output --silent --follow --location
# --connect-timeout --max-time --user --cookie --referer --user-agent
```

### 62. Wget
```bash
wget --<TAB><TAB>
# --output-document --continue --quiet --recursive --limit-rate
# --user --password --header --timeout --tries
```

### 63. Rsync
```bash
rsync -<TAB><TAB>
# -a -v -z -P --delete --exclude --dry-run --progress --partial
# -r -l -p -t -g -o -D -H -A -X
```

### 64. SCP
```bash
scp <TAB><TAB>
# Shows files, then remote hosts and paths
```

### 65. Make
```bash
make <TAB><TAB>
# build test clean install deploy lint format venv docs
```

### 66. Kill
```bash
kill -<TAB><TAB>
# 1 SIGHUP 2 SIGINT 3 SIGQUIT 9 SIGKILL 15 SIGTERM
```

### 67. Chmod
```bash
chmod <TAB><TAB>
# 644 755 777 600 700 u+x g+w o-r a+x go-w
```

### 68. Chown
```bash
chown <TAB><TAB>
# Shows users, then files
```

### 69. Type
```bash
type -<TAB><TAB>
# -a -t -p -P -f -F
```

### 70. Which
```bash
which <TAB><TAB>
# Shows commands in PATH
```

---

## 🖥️ System (30 examples)

### 71. Find
```bash
find . -<TAB><TAB>
# -name -type -size -mtime -exec -delete -print -maxdepth
# -mindepth -user -group -perm -newer
```

### 72. Grep
```bash
grep -<TAB><TAB>
# -r -R -i -n -l -c -v -w -x -E -F -P -o -q -s
```

### 73. Sed
```bash
sed -<TAB><TAB>
# -i -n -e -f -r -E -u
```

### 74. Awk
```bash
awk <TAB><TAB>
# Shows script files, or '{print $0}' usage
```

### 75. Tar
```bash
tar -<TAB><TAB>
# -c -x -z -j -J -f -v -t -r -u --exclude --strip-components
```

### 76. LS
```bash
ls -<TAB><TAB>
# -l -a -h -S -t -r -R -1 -A -d -i -s -F -C -X
```

### 77. CP
```bash
cp -<TAB><TAB>
# -r -i -u -v -p -a -n -f -l -s -d -R
```

### 78. MV
```bash
mv -<TAB><TAB>
# -i -u -v -n -f -b -t -T -S
```

### 79. RM
```bash
rm -<TAB><TAB>
# -r -f -i -v -d --no-preserve-root
```

### 80. Mkdir
```bash
mkdir -<TAB><TAB>
# -p -v -m
```

### 81. PS
```bash
ps <TAB><TAB>
# aux -ef axu -eo --sort --forest
```

### 82. Top
```bash
top -<TAB><TAB>
# -b -n -d -u -p -H -i -U
```

### 83. Htop
```bash
htop -<TAB><TAB>
# -d --delay -C --no-color -u --user -p --pid
```

### 84. DF
```bash
df -<TAB><TAB>
# -h -T -i -a -l -t -x -H -P
```

### 85. DU
```bash
du -<TAB><TAB>
# -h -s -a -c --max-depth --exclude --time -k -m -B
```

### 86. Free
```bash
free -<TAB><TAB>
# -h -m -g -t -s -w -l
```

### 87. Uname
```bash
uname -<TAB><TAB>
# -a -s -n -r -v -m -p -i -o
```

### 88. Date
```bash
date -<TAB><TAB>
# -u -R -r -I -d --date
```

### 89. Cal
```bash
cal -<TAB><TAB>
# -m -y -3 -j -A -B -w
```

### 90. BC
```bash
bc -<TAB><TAB>
# -l -q -s -w
```

### 91. Echo
```bash
echo -<TAB><TAB>
# -n -e -E
```

### 92. Cat
```bash
cat -<TAB><TAB>
# -n -b -s -E -T -A -v
```

### 93. Head
```bash
head -<TAB><TAB>
# -n -c -q -v
```

### 94. Tail
```bash
tail -<TAB><TAB>
# -n -f -c -q -v --pid --retry -F
```

### 95. Sort
```bash
sort -<TAB><TAB>
# -n -r -u -k -t -h -M -V -b -f -i
```

### 96. WC
```bash
wc -<TAB><TAB>
# -l -w -c -m -L
```

### 97. Cut
```bash
cut -<TAB><TAB>
# -d -f -c -s --complement
```

### 98. Tr
```bash
tr -<TAB><TAB>
# -d -s -c -t
```

### 99. Xargs
```bash
xargs -<TAB><TAB>
# -I -n -d -P -0 -r -t -p -a
```

### 100. Watch
```bash
watch -<TAB><TAB>
# -n -d -t -g -c -e -x
```

---

<div class="cta-section">
  <p>🎉 <strong>100 Bash examples complete!</strong></p>
  <p>Next: <a href="../shells/02-zsh-setup/">Upgrade to Zsh</a> or <a href="../theming/01-termux-styling/">Customize Your Theme</a></p>
</div>

[← Back to Autocomplete](../autocomplete/01-completion-basics/) | [Zsh 100 Examples →](100-examples-zsh.md)