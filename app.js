console.log("Hellow");

let viz;

/* To do list

1. Select container in html

2. Give the viz options (height and width)

3. Variable for dashboard urs

*/

const vizContainer = document.getElementById("vizContainer");

const vizUrl =
  "https://public.tableau.com/views/LearnEmbeddedAnalytics/SalesOverviewDashboard?:language=en-US&:display_count=n&:origin=viz_share_link";

const vizOptions = {
  height: 800,
  width: 1000,
  hideToolbar: true,
  Category: ["Technology", "Furniture"],
  onFirstInteractive: function () {
    console.log("Yo, the viz is interactive! Disabling the button!");
    document.getElementById("exportPdf").disabled = false;
    console.log(document.querySelectorAll("button"));
  },

  //does not work with tableau public
};

function initViz() {
  viz = new tableau.Viz(vizContainer, vizUrl, vizOptions);
}

// wait until page has fully loaded, then show dashboards

document.addEventListener("DOMContentLoaded", initViz);

// Export pdf button
// button element in your html
// Link the button to the JS
// Create the tableau function
// Add a listener to carr out the function when clicking the button

const exportPdf = document.getElementById("exportPdf");
function loadPdf() {
  viz.showExportPDFDialog();
  console.log("PDF export window loaded");
}

exportPdf.addEventListener("click", loadPdf);

//Export PPT

const exportPowerpoint = document.getElementById("exportPpt");
function loadPpt() {
  viz.showExportPowerPointDialog();
  console.log("Powerpoint not today sir");
}

exportPowerpoint.addEventListener("click", loadPpt);
