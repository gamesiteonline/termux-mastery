# Termux:Tasker Integration

![Tasker Automation](../../../assets/images/screenshots/tasker-automation.svg)
*Tasker automation setup*

Bridge Termux scripts with Android automation via Tasker.

## Setup

```bash
# Install prerequisites
# 1. Tasker (Play Store - paid app)
# 2. Termux:Tasker (F-Droid)
#    https://f-droid.org/packages/com.termux.tasker

# Create tasker scripts directory
mkdir -p ~/.termux/tasker
```

## Your First Tasker Script

```bash
# ~/.termux/tasker/hello.sh
#!/data/data/com.termux/files/usr/bin/bash
echo "Hello from Termux at $(date)"
echo "Task: $1"
```

```bash
chmod +x ~/.termux/tasker/hello.sh
```

## Tasker Configuration

1. Open Tasker → **Tasks** tab → **+** (bottom right)
2. Name your task (e.g., "Termux Hello")
3. **+** → **Plugin** → **Termux:Task**
4. Tap the pencil icon → Select executable (`hello.sh`)
5. Add arguments if needed
6. Back → The task is ready

## Triggering Scripts

### Profile: Wi-Fi Connected
1. **Profiles** tab → **+** → **State** → **Net** → **Wi-Fi Connected**
2. Select your home SSID
3. Attach the "Termux Hello" task

### Profile: Time of Day
1. **Profiles** tab → **+** → **Time**
2. Set your desired time
3. Attach the task

### Profile: Battery Low
1. **Profiles** tab → **+** → **State** → **Power** → **Battery Level**
2. Set to 0-20
3. Attach a notification task

## Passing Arguments

```bash
# In Tasker: Arguments field
backup,/sdcard/Documents
```

```bash
# ~/.termux/tasker/backup.sh
#!/data/data/com.termux/files/usr/bin/bash
ACTION=$1     # "backup"
TARGET=$2     # "/sdcard/Documents"
echo "Performing $ACTION on $TARGET"
```

## Advanced Script Example

```bash
# ~/.termux/tasker/battery-alert.sh
#!/data/data/com.termux/files/usr/bin/bash

# Get battery info
BATTERY=$(termux-battery-status)
PERCENTAGE=$(echo "$BATTERY" | python3 -c "import sys,json; print(json.load(sys.stdin)['percentage'])")
PLUGGED=$(echo "$BATTERY" | python3 -c "import sys,json; print(json.load(sys.stdin)['plugged'])")

if [ "$PERCENTAGE" -lt 20 ] && [ "$PLUGGED" = "UNPLUGGED" ]; then
  termux-notification \
    --title "🔋 Low Battery" \
    --content "Battery at ${PERCENTAGE}% - plug in soon!" \
    --priority high \
    --action "termux-open settings"
fi
```

## Capturing Output

```bash
# Script output is captured in Tasker variables
# %stdout - Standard output
# %stderr - Error output
# %exit_code - Exit code

# Use in Tasker:
# 1. Termux:Task action
# 2. Variable Set: %output = %stdout
# 3. Flash: %output (shows in a popup)
```

## Error Handling in Tasker

1. Run Termux:Tasker action
2. Add **If** → **%exit_code = 0**
   - Success actions (notification, etc.)
3. Add **Else**
   - Error actions (error notification)

## Security Considerations

- Scripts in `~/.termux/tasker/` are accessible by any app with Tasker access
- Don't store passwords in script files
- Use `termux-notification` for sensitive operations
- Use `--button1-action` carefully

## See More

- [100 Tasker Recipes](../tasker-recipes/) — Ready-to-use automation ideas