# Browser Automation Scripts ⚙️

A collection of useful JavaScript snippets to automate repetitive tasks directly in your browser's developer console.

---

## How to Use

1.  Navigate to the relevant page in your browser (e.g., a LinkedIn Sales Navigator search results page).
2.  Open your browser's developer console (usually by pressing `F12` or `Ctrl+Shift+I` / `Cmd+Option+I`).
3.  Navigate to the "Console" tab.
4.  Copy and paste the entire script you want to use into the console.
5.  Press `Enter` to run it.

---

## Scripts

### 🚀 `sales-nav-expand-and-select.js` (Recommended)

* **What it does:** This is an all-in-one script. It first expands all collapsed "About" descriptions on the page and then automatically selects any leads who have a gold "Premium" icon.
* **Use Case:** The most efficient way to process a search results page. It prepares all profiles for review and simultaneously builds a target list of premium members in one step.

### 📄 `sales-nav-select-premium-leads.js`

* **What it does:** On a LinkedIn Sales Navigator search results page, this script automatically selects any leads who have a gold "Premium" icon next to their name. It will only tick the checkbox for premium members who are not already selected.
* **Use Case:** Quickly build a list of premium members from search results without manually checking each person.

### 📄 `sales-nav-expand-descriptions.js`

* **What it does:** When you're on a LinkedIn Sales Navigator search results page, this script finds and clicks every "...see more" button for the listed accounts or leads. This allows you to see the full "About" description for all results on the page at once.
* **Use Case:** Review all profile summaries on a page without having to click to expand each one individually.