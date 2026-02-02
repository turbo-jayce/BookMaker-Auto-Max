# BookMaker Auto-Maxer ⚡️

A specialized Chrome extension designed for high-frequency sports bettors on BookMaker.eu. This tool automates the population of "Max Risk" amounts, saving critical seconds when lines are moving fast.

## 🚀 Key Features

- **Automated Max Bet Selection:** Instantly identifies the "Max Risk" value in the bet slip and selects it.
- **Angular-Ready Logic:** Specifically engineered to work with BookMaker's Angular framework using a `MutationObserver` for dynamic element detection.
- **Smart 0.5s Delay:** Includes a built-in half-second pause after the bet box appears to ensure site event listeners are fully active before firing.
- **Deep-Event Mimicry:** Dispatches a full sequence of Pointer, Mouse, and Input events to ensure the site registers the click as a trusted user action.

## 📂 Project Structure

```text
.
├── manifest.json   # Extension metadata & permissions
└── content.js      # The "Brain" that monitors and clicks the DOM
```

Since you’re only pushing the Auto-Maxer, we’ll focus the documentation entirely on that tool's specific strengths: its speed, its ability to handle Angular's dynamic UI, and the 0.5s safety delay you requested.

1. README.md
   Create a file named README.md and paste this content:

Markdown

# BookMaker Auto-Maxer ⚡️

A specialized Chrome extension designed for high-frequency sports bettors on BookMaker.eu. This tool automates the population of "Max Risk" amounts, saving critical seconds when lines are moving fast.

## 🚀 Key Features

- **Automated Max Bet Selection:** Instantly identifies the "Max Risk" value in the bet slip and selects it.
- **Angular-Ready Logic:** Specifically engineered to work with BookMaker's Angular framework using a `MutationObserver` for dynamic element detection.
- **Smart 0.5s Delay:** Includes a built-in half-second pause after the bet box appears to ensure site event listeners are fully active before firing.
- **Deep-Event Mimicry:** Dispatches a full sequence of Pointer, Mouse, and Input events to ensure the site registers the click as a trusted user action.

## 📂 Project Structure

```text
.
├── manifest.json   # Extension metadata & permissions
└── content.js      # The "Brain" that monitors and clicks the DOM


## 🛠 Installation
Download or clone this repository to your Mac.

Open Chrome and navigate to chrome://extensions/.

Enable Developer mode (top-right toggle).

Click Load unpacked and select this project folder.

Note: Refresh any open BookMaker tabs for the extension to take effect.

##⚙️ How it Works (For Devs)
The extension uses a MutationObserver to watch for changes in the bet-limits class. Once a "Max Risk" label is detected, it marks the element as processed and waits 500ms before dispatching a complex event sequence (pointerdown → mousedown → click → input) to force the bet slip to update its state.
```
