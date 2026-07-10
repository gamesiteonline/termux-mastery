# Getting Started with Termux

## Installation

Termux is a terminal emulator and Linux environment for Android. Install it from the recommended source:

=== "F-Droid (Recommended)"
    ```bash
    # Download from F-Droid
    # https://f-droid.org/packages/com.termux
    #
    # F-Droid version has:
    # - Better background execution
    # - More frequent updates
    # - No Play Store restrictions
    ```

=== "Google Play"
    ```bash
    # Available on Google Play Store
    # Note: Some features may be restricted
    # due to Play Store policies on background
    # processes
    ```

=== "GitHub Releases"
    ```bash
    # Download APK directly:
    # https://github.com/termux/termux-app/releases
    #
    # Choose the correct architecture:
    # - arm64-v8a (most modern devices)
    # - armeabi-v7a (older devices)
    # - x86_64 (Chromebooks/tablets)
    # - x86 (older Chromebooks)
    ```

## Initial Setup

After installing Termux, run these commands:

```bash
# Grant storage access (required for sharing files)
termux-setup-storage

# Update package lists and upgrade all packages
pkg update && pkg upgrade -y

# Install essential tools
pkg install -y git curl wget tree vim nano tmux htop
```

![Termux Styling](../../../assets/images/screenshots/termux-styling.svg)
*Termux after installation with styling applied*

## Verify Installation

```bash
# Check Termux version
pkg list-installed | grep termux

# Check storage access
ls ~/storage/

# Test basic commands
echo "Termux is ready!"
uname -a
```

## Next Steps

Proceed to [Basic Configuration](../basic-config/) to customize your Termux setup.

---

## Troubleshooting

| Issue | Solution |
|-------|----------|
| "Repository not found" | Run `pkg update` first |
| Storage permission denied | Run `termux-setup-storage` and accept |
| Command not found | Install with `pkg install <package>` |
| Slow package download | Try `pkg update` again or change mirror |