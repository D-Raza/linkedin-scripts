/*
 * =====================================================================================
 *
 * Filename:  sales-nav-expand-descriptions.js
 *
 * Description:  Finds and clicks all the "...see more" buttons within the "About"
 * section of company profiles on a LinkedIn Sales Navigator search
 * results page. This is useful for expanding all company
 * descriptions at once.
 *
 * How to Use:  Copy and paste this script into your browser's developer console
 * on a Sales Navigator search results page and press Enter.
 *
 * =====================================================================================
 */

function expandAllDescriptions() {
  // Get a list of all button elements on the page. This is a broad selection,
  // which we will filter in the next step.
  const allButtons = document.querySelectorAll('button');

  console.log(`Found ${allButtons.length} total buttons on the page.`);
  let clickedCount = 0;

  // Iterate over every button found.
  allButtons.forEach(button => {
    // Check the button's visible text. .trim() removes any leading/trailing whitespace.
    // We're looking for the specific text that indicates a collapsed description.
    if (button.textContent.trim() === '…see more') {
      // If the text matches, simulate a click on the button.
      button.click();
      clickedCount++;
    }
  });

  // Log a summary to the console for user feedback.
  console.log(`Successfully clicked ${clickedCount} "…see more" buttons.`);
}

// Execute the main function.
expandAllDescriptions();