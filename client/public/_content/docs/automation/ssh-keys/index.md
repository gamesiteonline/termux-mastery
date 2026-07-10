# SSH Keys

![SSH Keys](../../../assets/images/screenshots/ssh-keys.svg)
*SSH key authentication*

Passwordless SSH access using key pairs.

## Generate SSH Key Pair

```bash
# Generate ed25519 key (recommended)
ssh-keygen -t ed25519 -C "termux@myphone"

# Or RSA (more compatible)
ssh-keygen -t rsa -b 4096 -C "termux@myphone"

# Default location: ~/.ssh/id_ed25519
```

## Copy Public Key to Remote Server

### Using ssh-copy-id
```bash
ssh-copy-id -i ~/.ssh/id_ed25519.pub user@server.com
```

### Manual Copy
```bash
# View public key
cat ~/.ssh/id_ed25519.pub

# On the remote server, add to ~/.ssh/authorized_keys
echo "your-public-key-here" >> ~/.ssh/authorized_keys
chmod 600 ~/.ssh/authorized_keys
```

## SSH Config for Convenience

```bash
# ~/.ssh/config

# Home server
Host homeserver
  HostName 192.168.1.100
  User pi
  Port 22
  IdentityFile ~/.ssh/id_ed25519

# VPS
Host myserver
  HostName example.com
  User root
  Port 2222
  IdentityFile ~/.ssh/id_ed25519

# GitHub (use different key for GitHub)
Host github.com
  HostName github.com
  User git
  IdentityFile ~/.ssh/id_github
```

Now you can just type:

```bash
ssh homeserver   # Instead of ssh pi@192.168.1.100
ssh myserver     # Instead of ssh root@example.com -p 2222
```

## Using SSH Keys in Scripts

```bash
# Non-interactive SSH commands
ssh myserver "ls -la /var/log"

# SCP with SSH config
scp ~/backup.tar.gz myserver:~/backups/

# Rsync over SSH
rsync -avz ~/projects/ myserver:~/backups/
```

## SSH Agent

```bash
# Start agent
eval "$(ssh-agent -s)"

# Add key
ssh-add ~/.ssh/id_ed25519

# Add to ~/.bashrc for auto-start
if [ -z "$SSH_AUTH_SOCK" ]; then
  eval "$(ssh-agent -s)" > /dev/null
  ssh-add ~/.ssh/id_ed25519 2>/dev/null
fi
```

## Multiple Keys

```bash
# Different keys for different servers
ssh-keygen -t ed25519 -f ~/.ssh/id_github -C "github"
ssh-keygen -t ed25519 -f ~/.ssh/id_work -C "work-server"

# Add to config
Host github.com
  IdentityFile ~/.ssh/id_github

Host work-server
  IdentityFile ~/.ssh/id_work
```

## Key Security

```bash
# Set correct permissions
chmod 700 ~/.ssh
chmod 600 ~/.ssh/id_ed25519       # Private key
chmod 644 ~/.ssh/id_ed25519.pub   # Public key
chmod 600 ~/.ssh/config
chmod 600 ~/.ssh/authorized_keys
```

## Troubleshooting

```bash
# Test connection with verbose output
ssh -v myserver

# Test which key would be used
ssh -T git@github.com

# Permission errors
chmod 700 ~/.ssh
chmod 600 ~/.ssh/id_ed25519
```