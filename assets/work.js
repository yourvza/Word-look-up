$("#searchBtn").click(function () {
  const word = $("#wordInput").val().trim();

  // Hide previous results
  $("#resultCard").addClass("d-none");
  $("#errorMsg").addClass("d-none");

  // Don't continue if input is empty
  if (!word) return;

  const apiURL = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;

  $.ajax({
    url: apiURL,
    method: "GET",
    success: function (data) {
      const definition = data[0].meanings[0].definitions[0].definition;
      const wordText = data[0].word;

      // Update and show the result card
      $("#wordTitle").text(wordText);
      $("#wordDefinition").text(definition);
      $("#resultCard").removeClass("d-none");
    },
    error: function () {
      // Show error message
      $("#errorMsg").removeClass("d-none");
    },
  });
});
