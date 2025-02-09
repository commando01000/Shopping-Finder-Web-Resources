function initializeDataTable(selector) {
  if (!$.fn.DataTable) {
    console.error("DataTable plugin is not loaded");
    return;
  }
  // Custom sorting for DD/MM/YYYY format

  $(selector).DataTable({
    paging: true,
    searching: false,
    info: true,
    responsive: true,
    ordering: true,
    // scroll
    scrollX: true,
    columnDefs: [
      { type: "date-dd-mm-yyyy", targets: 3 }, // Enable custom date sorting for "Birthdate" column (index 3)
      { orderable: false, targets: [1, 2] }, // Disable ordering for "Phone Number" (index 1) and "ID Number" (index 2)
    ],
    language: {
      search: "Filter records:",
      emptyTable: "No shoppers found",
      paginate: {
        previous: "&lt;",
        next: "&gt;",
      },
    },
  });
}


