# 100 Productivity Examples

<div class="example-counter" data-total="100"></div>
<div class="progress-bar"><div class="fill" data-target="100"></div></div>

---

![Shell Comparison](../../../assets/images/screenshots/shell-comparison.svg)
*Productivity examples*

## 🖥️ Terminal Productivity (30)

### 1. Fuzzy Find Files
```bash
fzf  # Interactive file finder, press Ctrl+T anywhere
```

### 2. Search Command History
```bash
Ctrl+R  # Reverse search through history
```

### 3. Reuse Last Argument
```bash
Alt+.  # Insert last argument of previous command
```

### 4. Directory Stack
```bash
pushd /path       # Add to stack
popd              # Pop back
dirs -v           # List stack
```

### 5. Last Command in Script
```bash
!!               # Repeat last command
sudo !!          # Repeat with sudo
!$               # Last argument of last command
```

### 6. Quick Calculation
```bash
echo $(( 2 + 2 ))  # 4
echo $(( 1024 * 1024 ))  # 1048576
```

### 7. Process Substitution
```bash
diff <(ls dir1) <(ls dir2)  # Compare directories
```

### 8. Background & Disown
```bash
command &        # Background
Ctrl+Z           # Suspend
bg               # Resume in background
disown           # Keep after terminal close
```

### 9. Watch Command Repeatedly
```bash
watch -n 1 'ls -lh'     # Watch directory changes
watch -d 'free -h'     # Highlight changes
```

### 10. Multiple Commands
```bash
cmd1 && cmd2     # Run cmd2 if cmd1 succeeds
cmd1 || cmd2     # Run cmd2 if cmd1 fails
cmd1 ; cmd2      # Run both regardless
```

---

## 🐚 Shell Productivity (20)

### 11. Pipe to Clipboard
```bash
cat file | termux-clipboard-set
```

### 12. Compress with Progress
```bash
tar czf archive.tar.gz folder/ | pv
```

### 13. Monitor Logs
```bash
tail -f app.log  # Follow log
tail -f app.log | grep ERROR  # Filter log
```

### 14. URL Encoding
```bash
# Python one-liner
python3 -c "import urllib.parse; print(urllib.parse.quote('hello world'))"
```

### 15. JSON Formatting
```bash
echo '{"a":1}' | python3 -m json.tool
curl -s api.example.com | jq .  # With jq installed
```

### 16. Columnar Output
```bash
column -t -s, data.csv  # Format CSV as table
```

### 17. Quick Rename
```bash
rename 's/\.txt$/.md/' *.txt
```

### 18. Batch Image Processing
```bash
for f in *.jpg; do convert "$f" -resize 50% "small_$f"; done
```

### 19. Find Large Files
```bash
find . -type f -size +10M -exec ls -lh {} \; | sort -k5 -h
```

### 20. Recursive Search and Replace
```bash
find . -name '*.py' -exec sed -i 's/old/new/g' {} +
```

---

## 🐙 Git Productivity (20)

### 21. Pretty Git Log
```bash
git log --oneline --graph --all --decorate
```

### 22. Search Commits
```bash
git log --all --oneline --grep="fix"
git log -S "function_name" --source --all
```

### 23. Show Staged Diff
```bash
git diff --cached  # or --staged
```

### 24. Last Commit Summary
```bash
git show --stat HEAD
```

### 25. Who Changed a Line
```bash
git blame file.py
git blame -L 10,20 file.py  # Specific lines
```

### 26. Find Deleted File
```bash
git log --all --full-history -- "deleted_file.py"
```

### 27. Ignore Whitespace Diff
```bash
git diff -w
```

### 28. List Changed Files
```bash
git log --name-only --oneline HEAD~5..
```

### 29. Unstage Files
```bash
git restore --staged file.txt
```

### 30. Undo Last Commit
```bash
git reset --soft HEAD~1  # Keep changes staged
git reset HEAD~1         # Keep changes unstaged
```

---

## 📝 File & Text (15)

### 31. Count Lines in Python Files
```bash
find . -name '*.py' | xargs wc -l | tail -1
```

### 32. Random Password
```bash
openssl rand -base64 16
```

### 33. Check Spelling
```bash
echo "helo" | aspell list
```

### 34. Download YouTube Audio
```bash
yt-dlp -x --audio-format mp3 URL
```

### 35. Check File Type
```bash
file document.pdf
```

### 36. Compare Two Files
```bash
diff -u file1 file2
vimdiff file1 file2
```

### 37. Find Duplicate Files
```bash
fdupes -r .
```

### 38. Split Large File
```bash
split -l 1000 large.csv small_
```

### 39. Merge PDFs
```bash
pdfunite input1.pdf input2.pdf output.pdf
```

### 40. Extract Pages from PDF
```bash
pdftk input.pdf cat 1-5 output first5.pdf
```

---

## 🌐 Network & Remote (15)

### 41. Share File via HTTP
```bash
python3 -m http.server 8080  # Serves current dir
```

### 42. Quick Curl API Call
```bash
curl -s https://api.github.com/users/gamesiteonline | jq .
```

### 43. Download Resume
```bash
wget -c https://example.com/largefile.zip
```

### 44. Measure Download Speed
```bash
curl -o /dev/null -s -w "Speed: %{speed_download}\n" URL
```

### 45. Check if Port is Open
```bash
nc -zv hostname 80
```

### 46. Follow Redirects
```bash
curl -Ls -o /dev/null -w "%{url_effective}" URL
```

### 47. TCP Connection Test
```bash
timeout 2 bash -c 'echo > /dev/tcp/google.com/80 && echo open' || echo closed
```

### 48. DNS Lookup
```bash
nslookup example.com
dig example.com
host example.com
```

### 49. Network Interface Info
```bash
ip addr show
ip route show
```

### 50. Scan Local Network
```bash
nmap -sn 192.168.1.0/24
```

---

<div class="cta-section">
  <p>💡 100 productivity tips to supercharge your Termux workflow!</p>
</div>

[← Back to Productivity](../tmux/)