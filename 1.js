// Select relevant HTML elements
const cards = document.querySelectorAll('.card');
const links = ['1.html','1.html', '1.html', '1.html', '1.html', '1.html','1.html','1.html','1.html', '1.html','1.html','1.html','1.html','1.html','1.html',];

// Add event listeners to each card
cards.forEach((card, index) => {
  card.addEventListener('click', () => {
    window.open(links[index], '_blank');
  });
});


$(document).ready(function() {
  // обработка ввода поискового запроса
  $("#filter-buttons input[type='text']").on("keyup", function() {
    var query = $(this).val().toLowerCase(); // получение запроса и приведение к нижнему регистру
    
    // выбор всех карточек
    var cards = document.querySelectorAll("#filterable-cards .card");

    // перебор всех карточек, соответствующих запросу пользователя
    cards.forEach(function(card) {
      var title = card.querySelector(".card-text").textContent.toLowerCase(); // получение названия товара и приведение к нижнему регистру

      // проверка, соответствует ли карточка запросу пользователя
      if (title.indexOf(query) !== -1) {
        // показать карточку, которая соответствует запросу пользователя, и скрыть все остальные карточки
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});
