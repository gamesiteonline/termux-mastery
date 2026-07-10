# Termux API

![Tasker Automation](../../../assets/images/screenshots/tasker-automation.svg)
*Termux:API commands*

Termux:API gives access to Android hardware features from the command line.

## Installation

```bash
# Install the API package
pkg install termux-api

# Also install the companion app from F-Droid
# https://f-droid.org/packages/com.termux.api
```

## Basic Commands

### Battery Status
```bash
termux-battery-status
# {"health": "GOOD", "percentage": 85, "plugged": "UNPLUGGED", "status": "DISCHARGING", "temperature": 28.5}
```

### Camera
```bash
# Take photo
termux-camera-photo output.jpg
termux-camera-photo -c 1 output.jpg  # Front camera

# Record video
termux-camera-record output.mp4
```

### Clipboard
```bash
# Copy to clipboard
echo "Hello from Termux" | termux-clipboard-set

# Get clipboard content
termux-clipboard-get
```

### Device Info
```bash
# Device details
termux-device-info
# {"os_version": "14", "build_id": "UP1A", "brand": "Google", "model": "Pixel 8"}

# Display info
termux-display-info
# Get screen resolution, density, refresh rate
```

### Location
```bash
# GPS location
termux-location
# {"latitude": 37.7749, "longitude": -122.4194, "altitude": 0, "accuracy": 10}

# With update interval
termux-location -p passive -p gps -r last
```

### Microphone
```bash
# Record audio
termux-microphone-record output.wav

# Stop recording
termux-microphone-record -q
```

### Notification
```bash
# Send notification
termux-notification \
  --title "Backup Complete" \
  --content "Files synced successfully" \
  --id backup \
  --button1 "Open" --button1-action "termux-open ~/backup.log"

# Persistent notification with action
termux-notification \
  --id running \
  --title "Script Running" \
  --content "Processing..." \
  --ongoing \
  --action "termux-open-url https://example.com"
```

### Sensors
```bash
# List sensors
termux-sensor -l
# Accelerometer, Gyroscope, Light, Proximity, etc.

# Read sensor data
termux-sensor -s "Accelerometer" -n 5
```

### SMS
```bash
# Send SMS
termux-sms-send -n "+1234567890" "Hello from Termux!"

# List SMS inbox
termux-sms-list -l 10
```

### Speech-to-Text
```bash
# Record speech
termux-speech-to-text
```

### Text-to-Speech
```bash
# Speak text
termux-tts-speak "Hello from Termux"
```

### Torch (Flashlight)
```bash
# Turn on flashlight
termux-torch on

# Turn off flashlight
termux-torch off
```

### Vibrate
```bash
# Vibrate for 1 second
termux-vibrate -d 1000
```

### Volume
```bash
# Get current volume
termux-volume

# Set media volume
termux-volume media 10
```

### WiFi
```bash
# WiFi info
termux-wifi-scaninfo  # Scan networks
termux-wifi-connectioninfo  # Current connection
```

## Integration with Scripts

```bash
#!/data/data/com.termux/files/usr/bin/bash
# battery-notify.sh - Warn when battery is low

get_battery_percentage() {
  termux-battery-status | python3 -c "import sys,json; print(json.load(sys.stdin)['percentage'])"
}

get_plugged_status() {
  termux-battery-status | python3 -c "import sys,json; print(json.load(sys.stdin)['plugged'])"
}

while true; do
  battery=$(get_battery_percentage)
  plugged=$(get_plugged_status)

  if [ "$battery" -lt 20 ] && [ "$plugged" = "UNPLUGGED" ]; then
    termux-notification \
      --title "⚠️ Battery Low" \
      --content "Battery at ${battery}%. Plug in your charger!" \
      --priority high
  fi

  sleep 300  # Check every 5 minutes
done
```

## See More

- [Termux:Tasker](../termux-tasker/) — Combine with Tasker for advanced automation
- [Cron Jobs](../cron-jobs/) — Schedule API commands