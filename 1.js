// Select relevant HTML elements
const cards = document.querySelectorAll('.card');
const links = ['1.html','1.html', '1.html', '1.html', '1.html', '1.html','1.html','1.html','1.html', '1.html','1.html','1.html','1.html','1.html','1.html',];

// Add event listeners to each card
cards.forEach((card, index) => {
  card.addEventListener('click', () => {
    window.open(links[index], '_blank');
  });
});

// Get the search box and all the images
const searchBox = document.querySelector('.search-box input');
const images = document.querySelectorAll('#filterable-cards img');

// Add an event listener to the search box
searchBox.addEventListener('input', function() {
  // Get the search query
  const query = this.value.toLowerCase();
  
  // Loop through all the images
  images.forEach(function(image) {
    // Get the alt text of the image
    const alt = image.getAttribute('alt').toLowerCase();
    
    // If the alt text contains the search query, show the image, otherwise hide it
    if (alt.includes(query) || query === 'fff') {
      image.parentElement.style.display = 'block';
    } else {
      image.parentElement.style.display = 'none';
    }
  });
});
//
//


