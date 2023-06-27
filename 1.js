// Select relevant HTML elements
const cards = document.querySelectorAll('.card');
const links = ['1.html','1.html', '1.html', '1.html', '1.html', '1.html','1.html','1.html','1.html', '1.html','1.html','1.html','1.html','1.html','1.html',];

// Add event listeners to each card
cards.forEach((card, index) => {
  card.addEventListener('click', () => {
    window.open(links[index], '_blank');
  });
});
// Находим поле для поиска и все изображения в блоке с id="filterable-cards"
const searchBox = document.querySelector('.search-box input');
const images = document.querySelectorAll('#filterable-cards img');

// Добавляем обработчик событий на поле для поиска
searchBox.addEventListener('input', function() {
  // Получаем строку поиска
  const query = this.value.toLowerCase();
  
  // Перебираем все изображения
  images.forEach(function(image) {
    // Получаем атрибут alt у изображения и приводим его к нижнему регистру
    const alt = image.getAttribute('alt').toLowerCase();
    // Если атрибут alt содержит строку поиска либо строка поиска равна 'одежда' или равна 'брюки', то показываем изображение; в противном случае скрываем его
if (alt.includes(query) || query === 'одежда' || query === 'брюки' || query === 'пиджак' || query === 'dress') {
  image.parentElement.style.display = 'block';
} else {
  image.parentElement.style.display = 'none';
}
  });
});
//


