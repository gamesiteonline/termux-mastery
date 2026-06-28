# SSH Tunnels

## Local Port Forwarding

Access remote services as if they were local:

```bash
# Forward remote port 3000 to local port 3000
ssh -L 3000:localhost:3000 myserver

# Now access: http://localhost:3000
```

## Remote Port Forwarding

Expose local services to remote server:

```bash
# Forward local port 80 to remote port 8080
ssh -R 8080:localhost:80 myserver

# Remote server can now access: http://localhost:8080
```

## Dynamic Port Forwarding (SOCKS Proxy)

Route traffic through remote server:

```bash
# Create SOCKS proxy on local port 1080
ssh -D 1080 myserver

# Configure browser/app to use SOCKS5 proxy
# Host: localhost, Port: 1080
```

## Jump Host (Bastion)

Connect through an intermediary server:

```bash
# Through jump host to target
ssh -J jumpuser@jumphost targetuser@targetserver

# SSH config version
Host target
  HostName targetserver
  User targetuser
  ProxyJump jumpuser@jumphost
```

## Persistent Tunnel with Auto-Connect

```bash
# Auto-reconnect tunnel script
#!/bin/bash
while true; do
  ssh -o ServerAliveInterval=60 \
      -o ServerAliveCountMax=3 \
      -N \
      -L 3000:localhost:3000 \
      myserver
  sleep 10
done
```

## SSH Config for Tunnels

```bash
# ~/.ssh/config

# Database tunnel
Host db-tunnel
  HostName dbserver.example.com
  User tunnel
  LocalForward 5432 localhost:5432
  ServerAliveInterval 60
  ServerAliveCountMax 3

# Web app tunnel
Host web-tunnel
  HostName webserver.example.com
  User tunnel
  LocalForward 8080 localhost:8080
  LocalForward 9090 localhost:9090
```

## Use Cases

| Use Case | Command |
|----------|---------|
| Access remote database | `ssh -L 5432:localhost:5432 dbserver` |
| Browse through office network | `ssh -D 1080 office-server` |
| Expose local dev server | `ssh -R 9000:localhost:9000 public-server` |
| Multi-hop connection | `ssh -J jump1,jump2 target` |
| Tunnel through firewall | `ssh -L 8080:internal-web:80 bastion` |