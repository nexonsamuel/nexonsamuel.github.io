# 📂 JavaScript Animations

All animation scripts for the portfolio are organized here.

## Files in This Folder

### number-counter.js

**Purpose:**  
Animates numbers in the stats section counting from 0 to their final value when user scrolls into view.

**How it works:**
1. Detects when user scrolls to stats section
2. Extracts numeric values from .stat-number elements (100, 500, 60, 10)
3. Counts smoothly from 0 to final number over 2 seconds
4. Formats with comma separators during counting
5. Shows original format (100+, $500K+, 60%, 10+) when complete

**Elements it targets:**
- `.stats` - Container for stats section
- `.stat-number` - Individual stat numbers

**How to load in HTML:**
```html
<script src="scripts/animations/number-counter.js"></script>
```

**Customization:**

Edit line 48 to change animation duration:
```javascript
const duration = 2000; // milliseconds
```

Options:
- `1000` = 1 second (fast)
- `2000` = 2 seconds (recommended)
- `3000` = 3 seconds (slow)
- `4000` = 4 seconds (very slow)

**Browser Support:**
- ✅ Chrome 51+
- ✅ Firefox 55+
- ✅ Safari 12.1+
- ✅ Edge 16+
- ✅ All mobile browsers
- ❌ IE 11 (graceful fallback - shows numbers)

**Performance:**
- Uses IntersectionObserver (very efficient)
- Only animates when visible
- No external dependencies
- Mobile optimized
- Smooth 60fps animation

---

## Folder Structure