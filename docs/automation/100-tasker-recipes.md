# 100 Tasker Recipes

<div class="example-counter" data-total="100"></div>
<div class="progress-bar"><div class="fill" data-target="100"></div></div>

---

## 📱 Phone Automation (20)

### 1. Silence at Night
```
Profile: 11PM-7AM → Task: Silent mode, disable WiFi
```
```bash
# Termux script: ~/.termux/tasker/night_mode.sh
termux-volume notification 0
termux-volume alarm 0
```

### 2. WiFi Connected → Open Termux
```
Profile: WiFi Connected (Home) → Task: Launch Termux
```

### 3. Battery Low → Warning
```
Profile: Battery Level 1-15% → Task: Flash alert + Sound
```
```bash
# ~/.termux/tasker/battery_low.sh
termux-tts-speak "Battery low, plug in charger"
termux-notification --priority high --title "🔋 LOW" --content "Battery below 15%!"
```

### 4. Headphones Plugged → Open Music
```
Profile: Headset Plugged → Task: Launch Spotify/Poweramp
```

### 5. SMS Received → Auto Reply
```
Profile: SMS Received → Task: If work hours, auto-reply
```
```bash
# ~/.termux/tasker/auto_reply.sh
termux-sms-send -n "$1" "I'll respond shortly. Sent via Termux automation."
```

### 6. Morning Alarm → Read Weather
```
Profile: Alarm Clock → Task: TTS weather
```
```bash
# ~/.termux/tasker/morning_routine.sh
curl -s "wttr.in/?format=%t+%w+%h" | termux-tts-speak
termux-notification --title "☀️ Good Morning" --content "$(date '+%A, %B %d')"
```

### 7. SMS from Unknown → Log it
```
Profile: SMS from not in contacts → Task: Log number + message
```

### 8. Call from Spam → Auto Hangup
```
Profile: Call from known spam → Task: End call
```

### 9. Low Storage → Clean Cache
```
Profile: Storage < 500MB → Task: Run cleanup script
```
```bash
# ~/.termux/tasker/cleanup.sh
rm -rf ~/.cache/* ~/storage/shared/Download/*.tmp
termux-notification --title "🧹 Cleaned" --content "Cache cleared"
```

### 10. Data Saver at Work
```
Profile: Connect to Work WiFi → Task: Disable mobile data
```

---

## 🌍 Location-Based (15)

### 11. Arrive Home → Turn on WiFi
```
Profile: Location → Home geofence → Task: WiFi On
```

### 12. Leave Home → Turn off WiFi
```
Profile: Location → Exit Home geofence → Task: WiFi Off
```

### 13. Arrive Work → Silent Mode
```
Profile: Location → Work geofence → Task: Vibrate only
```

### 14. Track Daily Distance
```
Profile: Location Log → Task: Save to file daily
```
```bash
# ~/.termux/tasker/log_location.sh
termux-location -p passive >> ~/location.log
```

### 15. Near Store → Shopping List
```
Profile: Location → Near Grocery Store → Task: Show shopping list notification
```

---

## ⏰ Time-Based (20)

### 16. Every Hour → Stretch Reminder
```
Profile: Every hour, 9-5 → Task: TTS "Time to stretch!"
```

### 17. Daily Standup Reminder
```
Profile: 9:30 AM weekdays → Task: Notification + TTS
```

### 18. Lunch Break
```
Profile: 12-1 PM → Task: Silent mode off, set ringer normal
```

### 19. End of Work Day
```
Profile: 5 PM weekdays → Task: Summary notification
```
```bash
# ~/.termux/tasker/eod_summary.sh
echo "Today's git commits: $(git log --since=06:00 --oneline 2>/dev/null | wc -l)"
```

### 20. Weekly Report
```
Profile: Friday 4 PM → Task: Generate and send report
```

---

## 📲 App-Based (15)

### 21. Open YouTube → Auto Landscape
```
Profile: App → YouTube opened → Task: Set auto-rotate on
```

### 22. Close YouTube → Portrait
```
Profile: App → YouTube closed → Task: Set auto-rotate off
```

### 23. Open Camera → Max Brightness
```
Profile: App → Camera opened → Task: Set brightness 100%
```

### 24. Open Maps → GPS On
```
Profile: App → Maps opened → Task: GPS high accuracy
```

### 25. Open Browser → Private Mode
```
Profile: App → Chrome opened → Task: Incognito if privacy time
```

---

## 🔋 Battery & Power (10)

### 26. Plugged In → Keep Screen On
```
Profile: Power → Connected → Task: Stay awake while charging
```

### 27. Fully Charged → Notification
```
Profile: Battery Level 100% → Task: Sound + notification
```
```bash
# ~/.termux/tasker/full_battery.sh
termux-tts-speak "Full charge reached. Unplug now for battery health."
```

### 28. Battery 30% → Power Saver
```
Profile: Battery Level 30% → Task: Reduce brightness, turn off sync
```

### 29. Battery 5% → Ultra Saver
```
Profile: Battery Level 5% → Task: Kill background, minimal display
```

### 30. Temperature High → Alert
```
Profile: Battery Temp > 40C → Task: Warning + cool down
```

---

## 📡 Network & Connectivity (10)

### 31. WiFi Disconnected → Mobile Data
```
Profile: WiFi Disconnected → Task: Enable mobile data
```

### 32. Roaming → Data Off
```
Profile: Roaming detected → Task: Turn off data
```

### 33. VPN Connected → Work Mode
```
Profile: VPN Connected → Task: Start work apps
```

### 34. Bluetooth Connected → Open App
```
Profile: Bluetooth → Connected to car → Task: Open maps, music
```

### 35. Daily Speed Test
```
Profile: 8 AM daily → Task: Run and log speed test
```
```bash
# ~/.termux/tasker/speedtest.sh
curl -s -o /dev/null -w "Ping: %{time_total}s\n" https://google.com >> ~/speed.log
```

---

## ⚙️ System Maintenance (10)

### 36. Weekly Cache Clear
```
Profile: Sunday 3 AM → Task: Clear app caches
```

### 37. Logcat Dump on Issue
```
Profile: App crash detected → Task: Save logcat to file
```

### 38. Auto App Updates
```
Profile: Daily 2 AM (charging) → Task: Update all apps
```

### 39. Sync Downloads Backup
```
Profile: Daily 11 PM → Task: Backup Downloads folder
```

### 40. Device Health Check
```
Profile: Weekly → Task: Check storage, memory, battery health
```

---

<div class="cta-section">
  <p>🤖 Ready to automate? Start with <a href="02-termux-tasker/">Termux:Tasker Guide</a></p>
</div>

[← Back to Tasker Guide](02-termux-tasker/)