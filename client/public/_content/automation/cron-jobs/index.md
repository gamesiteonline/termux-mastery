# Cron Jobs

![Cron Job](../../../assets/images/screenshots/cron-job.svg)
*Scheduled cron jobs*

Schedule scripts to run automatically at specific times.

## Installation

```bash
# Install cronie or busybox cron
pkg install cronie termux-services

# Or use the built-in crond
pkg install busybox
```

## Basic Usage

```bash
# Edit crontab
crontab -e

# List cron jobs
crontab -l

# Remove all cron jobs
crontab -r
```

## Cron Syntax

```
* * * * * command
│ │ │ │ │
│ │ │ │ └── Day of week (0-7, 0/7=Sunday)
│ │ │ └──── Month (1-12)
│ │ └────── Day of month (1-31)
│ └──────── Hour (0-23)
└────────── Minute (0-59)
```

## Useful Examples

```bash
# Every minute
* * * * * /path/to/script.sh

# Every 5 minutes
*/5 * * * * /path/to/script.sh

# Every hour at minute 0
0 * * * * /path/to/script.sh

# Daily at 2:30 AM
30 2 * * * /path/to/script.sh

# Every weekday at 9 AM
0 9 * * 1-5 /path/to/script.sh

# Every Sunday at midnight
0 0 * * 0 /path/to/script.sh

# Twice daily (8 AM and 6 PM)
0 8,18 * * * /path/to/script.sh

# First of every month
0 0 1 * * /path/to/script.sh

# Every hour during work hours (9-5)
0 9-17 * * 1-5 /path/to/script.sh
```

## Practical Cron Jobs

### Auto Backup
```bash
# ~/scripts/backup.sh
#!/data/data/com.termux/files/usr/bin/bash
tar -czf ~/storage/shared/backup-$(date +%Y%m%d).tar.gz ~/projects/
```

```crontab
# Run daily at 3 AM
0 3 * * * ~/scripts/backup.sh
```

### Battery Notifier
```bash
# ~/scripts/check_battery.sh
#!/data/data/com.termux/files/usr/bin/bash
BATTERY=$(termux-battery-status)
PERCENT=$(echo "$BATTERY" | python3 -c "import sys,json; print(json.load(sys.stdin)['percentage'])")
PLUGGED=$(echo "$BATTERY" | python3 -c "import sys,json; print(json.load(sys.stdin)['plugged'])")

if [ "$PERCENT" -lt 20 ] && [ "$PLUGGED" = "UNPLUGGED" ]; then
  termux-notification --id bat --title "Low Battery" --content "Battery at ${PERCENT}%"
fi
```

```crontab
*/10 * * * * ~/scripts/check_battery.sh
```

### System Cleanup
```bash
# ~/scripts/cleanup.sh
#!/data/data/com.termux/files/usr/bin/bash
apt clean
apt autoclean
rm -rf ~/.cache/*
```

```crontab
# Every Saturday at 4 AM
0 4 * * 6 ~/scripts/cleanup.sh
```

### News Headlines (Notification)
```bash
# ~/scripts/daily_news.sh
#!/data/data/com.termux/files/usr/bin/bash
curl -s "https://newsapi.org/v2/top-headlines?country=us" | \
  python3 -c "import sys,json; articles=json.load(sys.stdin)['articles'][:5]; [print(a['title']) for a in articles]" | \
  termux-notification --id news --title "Daily News" --content -
```

```crontab
0 7 * * * ~/scripts/daily_news.sh
```

## Cron Environment

Cron runs with a minimal environment. Always use full paths:

```bash
# ❌ Bad (may fail)
* * * * * python script.py

# ✅ Good (use full paths)
* * * * * /data/data/com.termux/files/usr/bin/python ~/scripts/task.py
```

## Logging Cron Output

```bash
# Redirect output to log
* * * * * ~/script.sh >> ~/cron.log 2>&1

# Different log per day
* * * * * ~/script.sh >> ~/logs/$(date +\%Y\%m\%d).log 2>&1
```

## Troubleshooting

```bash
# Check if cron daemon is running
pgrep crond

# Start cron
crond

# Test the script manually first
bash ~/scripts/task.sh

# Check cron log
cat $PREFIX/var/log/cron.log 2>/dev/null || echo "No cron log"