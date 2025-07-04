/*
 * =====================================================================================
 *
 * Filename:  sn-expand-and-select-premium.js
 *
 * Description:  A two-in-one script for LinkedIn Sales Navigator. It first expands
 * all "...see more" descriptions and then, after a brief delay,
 * selects all leads with a gold Premium icon.
 *
 * How to Use:   Copy and paste this script into your browser's developer console
 * on a Sales Navigator lead search results page and press Enter.
 *
 * =====================================================================================
 */

function expandAndSelect() {
  // --- Step 1: Expand all descriptions ---
  console.log("Step 1: Expanding all '…see more' descriptions...");
  const allButtons = document.querySelectorAll('button');
  let expandedCount = 0;

  allButtons.forEach(button => {
    if (button.textContent.trim() === '…see more') {
      button.click();
      expandedCount++;
    }
  });
  console.log(`   > Expanded ${expandedCount} descriptions.`);

  // --- Step 2: Wait, then select premium leads ---
  // We wait for 2 seconds (2000 milliseconds) to ensure the page has
  // finished updating after all the clicks from Step 1.
  const delayInMilliseconds = 2000;
  console.log(`Step 2: Waiting ${delayInMilliseconds / 1000} seconds for content to load...`);

  setTimeout(() => {
    console.log("Step 3: Selecting premium leads...");
    const profileListItems = document.querySelectorAll('li.artdeco-list__item');
    let newlySelectedCount = 0;

    profileListItems.forEach(item => {
      const premiumIcon = item.querySelector('li-icon[type="linkedin-premium-gold-icon"]');
      if (premiumIcon) {
        const checkbox = item.querySelector('input[type="checkbox"]');
        if (checkbox && !checkbox.checked) {
          checkbox.click();
          newlySelectedCount++;
        }
      }
    });
    console.log(`   > Selected ${newlySelectedCount} new premium leads.`);
    console.log("Script finished!");
  }, delayInMilliseconds);
}

// Execute the combined function.
expandAndSelect();