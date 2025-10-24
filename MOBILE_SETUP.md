# Mobile Fullscreen Setup Guide

This app is optimized for fullscreen mobile browsing. Here's how to get the best experience:

## For iOS (Safari)

### Option 1: Add to Home Screen (Best Experience)
1. Open the app in Safari
2. Tap the Share button (box with arrow pointing up)
3. Scroll down and tap "Add to Home Screen"
4. Tap "Add"
5. Open the app from your home screen - it will run in fullscreen mode without browser chrome!

### What This Provides:
- ✅ No address bar or browser UI
- ✅ Full screen experience
- ✅ App-like behavior
- ✅ Works offline (with PWA capabilities)

### In Regular Safari:
- The address bar will auto-hide when you scroll down
- Browser chrome minimizes when you interact with content
- Swipe gestures work perfectly

## For Android (Chrome)

### Option 1: Install as App (Best Experience)
1. Open the app in Chrome
2. Tap the menu (three dots)
3. Tap "Install app" or "Add to Home Screen"
4. Confirm installation
5. Open from your app drawer - runs in fullscreen!

### Option 2: Request Desktop Site
1. Tap menu (three dots)
2. Check "Desktop site"
3. Refresh the page

## Features Implemented

### 1. Enhanced Viewport
- Prevents pinch-to-zoom
- Covers full viewport including notches
- Uses `viewport-fit=cover` for edge-to-edge display

### 2. PWA Manifest
- Enables "Add to Home Screen" functionality
- Configures standalone display mode
- Sets theme colors for app switcher

### 3. CSS Optimizations
- Prevents pull-to-refresh
- Disables overscroll bounce
- Handles safe areas for notches (iPhone X+)
- Uses `100dvh` (dynamic viewport height)

### 4. JavaScript Enhancements
- Auto-hides address bar on load
- Prevents pull-to-refresh gesture
- Handles orientation changes
- Optimizes touch interactions

### 5. Swipe Gestures
- Swipe left to skip/reject jobs
- Swipe right to like jobs
- Smooth animations and feedback

## Troubleshooting

### Browser Menu Still Appears
- **Solution**: Add the app to your home screen using the instructions above
- The installed PWA version runs in standalone mode without browser UI

### Vertical Scrolling Issues
- The app is designed to prevent accidental scrolling
- Job cards are swipeable horizontally only
- Main content scrolls normally when needed

### Safe Area Not Working (Notched Devices)
- Ensure you've added the app to home screen
- The app automatically detects and adapts to safe areas
- Works on iPhone X, 11, 12, 13, 14, 15 series

## Testing Mobile Features

### Desktop Browser (for development)
1. Open Chrome DevTools (F12)
2. Click device toolbar icon (Ctrl+Shift+M)
3. Select a mobile device
4. Test touch gestures with mouse drag

### On Actual Device
1. Deploy to a server or use `npm run dev -- --host`
2. Access via your phone's IP address
3. Test all gestures and fullscreen behavior

## Technical Details

### Meta Tags Added
```html
- viewport with viewport-fit=cover
- apple-mobile-web-app-capable
- mobile-web-app-capable
- theme-color
- apple-mobile-web-app-status-bar-style
```

### CSS Features
```css
- overscroll-behavior: none
- position: fixed (body)
- 100dvh (dynamic viewport)
- touch-action classes
- safe-area-inset-* handling
```

### JavaScript Handlers
```javascript
- Window scroll management
- Touch event prevention
- Orientation change handling
- Pull-to-refresh blocking
```

## Performance Tips

1. **Use HTTPS**: PWA features require secure context
2. **Test on Real Device**: Emulators don't perfectly replicate touch behavior
3. **Check Orientation**: App is optimized for portrait mode
4. **Clear Cache**: After updates, clear browser cache or reinstall PWA

## Browser Support

- ✅ iOS Safari 11.3+
- ✅ Android Chrome 80+
- ✅ Samsung Internet 12+
- ⚠️ Firefox Mobile (limited PWA support)
- ❌ IE Mobile (not supported)

---

Need help? The app works best when installed as a PWA from your mobile browser!

