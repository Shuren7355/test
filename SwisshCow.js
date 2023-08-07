<!-- Assuming you have the following elements in your HTML code -->
<input type="text" id="searchInput">
<button id="searchButton">Search</button>

<script>
  document.getElementById('searchInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
      performSearch();
    }
  });

  document.getElementById('searchButton').addEventListener('click', function() {
    performSearch();
  });

  function performSearch() {
    const searchQuery = document.getElementById('searchInput').value;
    if (searchQuery.trim() !== '') {
      // Redirect to SwissCows Search Engine with the search query as a parameter
      window.location.href = `https://www.swisscows.com/web?query=${encodeURIComponent(searchQuery)}`;
    }
  }
</script>
