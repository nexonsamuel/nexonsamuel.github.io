/**
 * Number Counter Animation
 * 
 * File: scripts/animations/number-counter.js
 * 
 * Counts numbers in stats section from 0 to their final value
 * when user scrolls into view.
 * 
 * Targets: .stat-number elements in .stats section
 * Duration: 2 seconds (configurable on line 48)
 * Trigger: Scroll into view (IntersectionObserver)
 * 
 * Browser Support:
 * - Chrome 51+
 * - Firefox 55+
 * - Safari 12.1+
 * - Edge 16+
 * - All mobile browsers
 */

document.addEventListener('DOMContentLoaded', function() {
    // Get all stat number elements
    const stats = document.querySelectorAll('.stat-number');
    let hasAnimated = false;

    /**
     * Animate the numbers from 0 to their final value
     */
    function animateNumbers() {
        // Prevent running multiple times
        if (hasAnimated) return;
        
        // Animate each stat number
        stats.forEach((stat) => {
            // Get the original text (e.g., "100+", "$500K+", "60%", "10+")
            const finalValue = stat.textContent;
            
            // Extract just the numeric part (e.g., 100 from "100+")
            const numberMatch = finalValue.match(/\d+/);
            if (!numberMatch) return; // Skip if no number found
            
            // Parse the final number
            const finalNumber = parseInt(numberMatch[0]);
            let currentNumber = 0;
            
            // CUSTOMIZATION: Animation duration in milliseconds
            // 1000 = 1 second (fast)
            // 2000 = 2 seconds (default - recommended)
            // 3000 = 3 seconds (slow)
            // 4000 = 4 seconds (very slow)
            const duration = 2000;
            
            // Calculate how much to increment per update
            const increment = finalNumber / (duration / 50);
            
            // Update number every 50 milliseconds
            const counter = setInterval(() => {
                currentNumber += increment;
                
                // Check if we've reached the final number
                if (currentNumber >= finalNumber) {
                    // Animation complete
                    currentNumber = finalNumber;
                    clearInterval(counter);
                    // Show original value with formatting (100+, $500K+, etc)
                    stat.textContent = finalValue;
                } else {
                    // While counting - show number with comma separators
                    // Example: 1,000 instead of 1000
                    stat.textContent = Math.floor(currentNumber).toLocaleString();
                }
            }, 50);
        });
        
        // Mark as animated so we don't run again
        hasAnimated = true;
    }

    /**
     * Use IntersectionObserver to trigger animation when stats section comes into view
     * This is more performant than scroll event listeners
     */
    const statsSection = document.querySelector('.stats');
    
    if (statsSection) {
        // Create observer to detect when stats section is visible
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                // When stats section comes into view
                if (entry.isIntersecting) {
                    // Start the animation
                    animateNumbers();
                    // Stop observing (only animate once)
                    observer.unobserve(statsSection);
                }
            });
        });
        
        // Start observing the stats section
        observer.observe(statsSection);
    }
});