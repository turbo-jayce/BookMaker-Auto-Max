# BookMaker Auto-Maxer ⚡️

A high-performance Chrome Extension built to automate "Max Risk" betting on **BookMaker.eu**. This tool is designed for bettors who need to lock in maximum limits the millisecond a line opens, bypassing the manual clicking process.

## 🚀 Key Features

- **Automated Max Selection:** Instantly identifies the "Max Risk" dollar amount and triggers a selection event.
- **Angular-Compatible Engine:** Uses a `MutationObserver` to track the site's dynamic DOM, ensuring the extension works even as games and odds update without page refreshes.
- **Precision 0.5s Delay:** Implements a strategic 500ms pause to ensure the site's underlying Angular event listeners are fully initialized before the click is fired.
- **Deep Event Mimicry:** Dispatches a comprehensive sequence of events (`pointerdown`, `mousedown`, `click`, `input`, and `change`) to ensure the site registers the action as a trusted user input.
- **Visual Feedback:** Provides a temporary yellow outline on targeted elements so you can verify the extension is firing in real-time.

## 📂 Project Structure

```text
.
├── manifest.json   # Extension configuration and permissions
└── content.js      # Core logic for DOM monitoring and automated clicking
```

##🛠 Installation
Download or clone this repository to your Mac.

Open Google Chrome and navigate to chrome://extensions/.

Enable Developer mode using the toggle in the top-right corner.

Click the Load unpacked button.

Select the folder containing this project.

Important: Refresh your BookMaker.eu tabs to inject the script.

##⚙️ How it Works
BookMaker.eu is a Single Page Application (SPA) built with Angular. This means buttons aren't always present when the page "loads."

Monitor: The extension uses a MutationObserver to watch for any changes to the betting slip container.

Identify: It searches for the specific <a> tag containing the string "Max Risk:".

Delay: Once found, it waits 0.5 seconds to allow the site's internal state to catch up.

Trigger: It bypasses standard JavaScript .click() blocks by firing a "Deep Click" sequence, forcing the bet slip to populate the maximum risk amount.

##⚠️ Disclaimer
This tool is for personal productivity purposes. Use responsibly and ensure compliance with the terms of service of the platform you are interacting with.
