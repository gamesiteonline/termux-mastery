# Shell Basics

## Understanding Your Shell

The shell is your command-line interface. Termux uses **Bash** by default, but you can switch to **Zsh** or **Fish** for more features.

## Essential Commands

### File Operations

```bash
# List files (long format, human-readable)
ls -lh

# List all files including hidden
ls -la

# Change directory
cd /path/to/dir

# Print working directory
pwd

# Create directory
mkdir myfolder

# Create nested directories
mkdir -p parent/child/grandchild

# Copy file
cp source.txt dest.txt

# Copy directory
cp -r sourcedir destdir

# Move/rename
mv oldname.txt newname.txt

# Delete file
rm file.txt

# Delete directory
rm -rf dirname
```

### File Viewing

```bash
# View file contents
cat file.txt

# View with pagination
less file.txt

# View first 10 lines
head file.txt

# View last 10 lines
tail file.txt

# Follow file as it grows
tail -f log.txt
```

### Permissions

```bash
# Make script executable
chmod +x script.sh

# Set permissions (rwxr-xr-x)
chmod 755 script.sh

# Change owner
chown user:group file
```

### Process Management

```bash
# List processes
ps aux

# Find process
pgrep firefox

# Kill process
kill PID
kill -9 PID  # Force kill

# Show system info
uname -a
free -h
df -h
```

## Shell Configuration Files

- **Bash**: `~/.bashrc`, `~/.bash_profile`
- **Zsh**: `~/.zshrc`
- **Fish**: `~/.config/fish/config.fish`

## Next Steps

- Learn about [Package Management](../package-management/)
- Or skip to [Shell Customization](../../shells/bash-basics/)