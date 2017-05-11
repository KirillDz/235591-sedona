var myMap;

// Дождёмся загрузки API и готовности DOM.
ymaps.ready(init);

function init () {
    // Создание экземпляра карты и его привязка к контейнеру с
    // заданным id ("map").
    myMap = new ymaps.Map('map', {
        // При инициализации карты обязательно нужно указать
        // её центр и коэффициент масштабирования.
        center: [34.85087877228032,-111.78780282269284], // Седона
        zoom: 15
    }, {
        searchControlProvider: 'yandex#search'
    });
}
var link = document.querySelector(".btn-search");
var popup = document.querySelector(".form-wrapper");
link.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.toglle("form-wrapper-show");
});
