const triggerDeepClick = (element) => {
    // 1. Highlight the element so you know the script is firing
    element.style.outline = "3px solid yellow";

    // 2. Comprehensive event list to wake up Angular
    const eventOptions = { bubbles: true, cancelable: true, view: window };
    const eventTypes = [
        'pointerdown', 'mousedown', 'pointerup', 'mouseup', 
        'click', 'input', 'change', 'blur'
    ];

    eventTypes.forEach(type => {
        let ev;
        if (type.includes('mouse') || type.includes('click')) {
            ev = new MouseEvent(type, eventOptions);
        } else if (type.includes('pointer')) {
            ev = new PointerEvent(type, eventOptions);
        } else {
            ev = new Event(type, { bubbles: true });
        }
        element.dispatchEvent(ev);
    });

    console.log("Auto-Max: Dispatched all events to", element.innerText);
};

const autoClickMax = () => {
    const allLinks = document.querySelectorAll('a');

    allLinks.forEach(link => {
        if (link.innerText.includes("Max Risk:")) {
            const amountSpan = link.querySelector('.amount');

            // Only proceed if we haven't touched this specific element yet
            if (amountSpan && !amountSpan.dataset.extensionProcessed) {
                // Mark as processed immediately so we don't trigger the delay twice
                amountSpan.dataset.extensionProcessed = "true";

                console.log("Auto-Max: Found element, waiting 0.25s...");

                // 3. The 0.5 second delay you requested
                setTimeout(() => {
                    triggerDeepClick(amountSpan);
                }, 250);
            }
        }
    });
};

// High-speed observer to catch new bet boxes
const observer = new MutationObserver(() => autoClickMax());
observer.observe(document.body, { childList: true, subtree: true });

autoClickMax();