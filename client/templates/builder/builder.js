Template.builder.rendered( function() {
  // Initialize drag and drop session variable for builder page
  Session.setDefault("action", "");
  Session.setDefault("dragElement", document.createDocumentFragment());
  Session.setDefault("data", "");
  Session.setDefault("dropElement", document.createDocumentFragment());
});