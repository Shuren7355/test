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
        // Redirect to Wolfram Alpha with the search query as a parameter
        window.location.href = `https://www.wolframalpha.com/input/?i=${encodeURIComponent(searchQuery)}`;
    }
}