/*
 * =====================================================================================
 *
 * Filename:  sales-nav-select-premium-leads.js
 *
 * Description:  On a LinkedIn Sales Navigator search results page, this script finds
 * all leads with a gold LinkedIn Premium icon and selects their
 * corresponding checkbox if it is not already checked.
 *
 * How to Use:   Copy and paste this script into your browser's developer console
 * on a Sales Navigator lead search results page and press Enter.
 *
 * =====================================================================================
 */

function selectPremiumLeads() {
  // Select all the main list items, as each one represents a single person's profile.
  const profileListItems = document.querySelectorAll('li.artdeco-list__item');

  console.log(`Processing ${profileListItems.length} profiles found on the page...`);
  let newlySelectedCount = 0;

  // Loop through each profile list item.
  profileListItems.forEach(item => {
    // Within each person's list item, look for the specific gold premium icon.
    const premiumIcon = item.querySelector('li-icon[type="linkedin-premium-gold-icon"]');

    // If a premium icon exists within this item, proceed.
    if (premiumIcon) {
      // Find the checkbox associated with this specific profile.
      const checkbox = item.querySelector('input[type="checkbox"]');

      // Check if the checkbox exists and is NOT already checked.
      if (checkbox && !checkbox.checked) {
        // If it's not checked, click it to select the lead.
        checkbox.click();
        newlySelectedCount++;
      }
    }
  });

  // Provide a summary of the script's actions in the console for user feedback.
  console.log(`Successfully selected ${newlySelectedCount} new premium leads.`);
}

// Execute the main function.
selectPremiumLeads();