document.getElementById('loadTable').addEventListener('click', function() {
    const tableHtml = `
        <table class="beautiful-table">
        <tr>
        <th>Название</th>
        <th>Категория</th>
        <th>Функции</th>
        <th>Основные особенности</th>
    </tr>
    <tr>
        <td>iPhone 14</td>
        <td>Смартфоны</td>
        <td>Звонки, интернет, камера, приложения</td>
        <td>OLED дисплей, 5G, A15 Bionic, двойная камера</td>
    </tr>
    <tr>
        <td>Samsung Galaxy S22</td>
        <td>Смартфоны</td>
        <td>Звонки, интернет, камера, приложения</td>
        <td>AMOLED дисплей, 5G, Exynos 2100, тройная камера</td>
    </tr>
    <tr>
        <td>MacBook Air M2</td>
        <td>Ноутбуки</td>
        <td>Работа, интернет, мультимедиа</td>
        <td>Retina дисплей, M2 чип, длительная батарея</td>
    </tr>
    <tr>
        <td>Dell XPS 13</td>
        <td>Ноутбуки</td>
        <td>Работа, интернет, мультимедиа</td>
        <td>InfinityEdge дисплей, Intel i7, легкий дизайн</td>
    </tr>
    <tr>
        <td>Apple Watch Series 8</td>
        <td>Умные часы</td>
        <td>Уведомления, фитнес-трекер, мониторинг здоровья</td>
        <td>OLED дисплей, датчики здоровья, GPS</td>
    </tr>
    <tr>
        <td>Samsung Galaxy Watch 4</td>
        <td>Умные часы</td>
        <td>Уведомления, фитнес-трекер, мониторинг здоровья</td>
        <td>AMOLED дисплей, датчики здоровья, Wear OS</td>
    </tr>
    <tr>
        <td>iPad Pro</td>
        <td>Планшеты</td>
        <td>Работа, мультимедиа, рисование</td>
        <td>Liquid Retina дисплей, M1 чип, Face ID</td>
    </tr>
    <tr>
        <td>Samsung Galaxy Tab S8</td>
        <td>Планшеты</td>
        <td>Работа, мультимедиа, рисование</td>
        <td>AMOLED дисплей, S Pen, Snapdragon 8 Gen 1</td>
    </tr>
    <tr>
        <td>Sony WH-1000XM5</td>
        <td>Наушники</td>
        <td>Музыка, звонки, шумоподавление</td>
        <td>Активное шумоподавление, до 30 часов работы, комфортный дизайн</td>
    </tr>
    <tr>
        <td>Bose QuietComfort 45</td>
        <td>Наушники</td>
        <td>Музыка, звонки, шумоподавление</td>
        <td>Активное шумоподавление, до 24 часов работы, эргономичный дизайн</td>
    </tr>
    <tr>
        <td>GoPro HERO10</td>
        <td>Экшн-камеры</td>
        <td>Съемка видео, фото</td>
        <td>5.3K видео, HyperSmooth 4.0, водонепроницаемость</td>
    </tr>
    <tr>
        <td>DJI Air 2S</td>
        <td>Дроны</td>
        <td>Воздушная съемка</td>
        <td>5.4K видео, до 31 мин полета, сенсоры препятствий</td>
    </tr>
    <tr>
        <td>Kindle Paperwhite</td>
        <td>Электронные книги</td>
        <td>Чтение книг</td>
        <td>300 ppi дисплей, подсветка, водонепроницаемость</td>
    </tr>
    <tr>
        <td>Oculus Quest 2</td>
        <td>Виртуальная реальность</td>
        <td>VR игры, приложения</td>
        <td>Standalone VR, 1832x1920 пикселей на глаз, 6 ГБ RAM</td>
    </tr>
    <tr>
        <td>Philips Hue Starter Kit</td>
        <td>Умный дом</td>
        <td>Освещение</td>
        <td>Управление через приложение, голосовое управление, настройка цвета</td>
    </tr>
    <tr>
        <td>Google Nest Thermostat</td>
        <td>Умный дом</td>
        <td>Управление климатом</td>
        <td>Программируемое управление, энергосбережение, интеграция с Google Home</td>
    </tr>
    <tr>
        <td>Sonos One</td>
        <td>Умный дом</td>
        <td>Музыка, голосовое управление</td>
        <td>Wi-Fi колонки, поддержка Alexa и Google Assistant, стерео звук</td>
    </tr>
    <tr>
        <td>Fitbit Charge 5</td>
        <td>Фитнес-трекеры</td>
        <td>Мониторинг активности, здоровья</td>
        <td>AMOLED дисплей, GPS, датчики здоровья</td>
    </tr>
    <tr>
        <td>Garmin Fenix 6</td>
        <td>Фитнес-трекеры</td>
        <td>Мониторинг активности, здоровья</td>
        <td>Транфлективный дисплей, GPS, длительное время работы</td>
    </tr>
    <tr>
        <td>Canon EOS R5</td>
        <td>Фотоаппараты</td>
        <td>Съемка фото, видео</td>
        <td>45 МП, 8K видео, стабилизация изображения</td>
    </tr>
    <tr>
        <td>Sony A7 IV</td>
        <td>Фотоаппараты</td>
        <td>Съемка фото, видео</td>
        <td>33 МП, 4K видео, быстрый автофокус</td>
    </tr>
    <tr>
        <td>Razer Blade 15</td>
        <td>Игровые ноутбуки</td>
        <td>Игры, работа, мультимедиа</td>
        <td>15.6" дисплей, NVIDIA RTX 3080, Intel i7</td>
    </tr>
    <tr>
        <td>Asus ROG Zephyrus G14</td>
        <td>Игровые ноутбуки</td>
        <td>Игры, работа, мультимедиа</td>
        <td>14" дисплей, AMD Ryzen 9, NVIDIA RTX 3060</td>
    </tr>
    <tr>
        <td>Apple AirPods Pro</td>
        <td>Беспроводные наушники</td>
        <td>Музыка, звонки, шумоподавление</td>
        <td>Активное шумоподавление, до 24 часов работы с зарядным футляром, водонепроницаемость</td>
  
    </tr>
    <tr>
        <td>Jabra Elite 85t</td>
        <td>Беспроводные наушники</td>
        <td>Музыка, звонки, шумоподавление</td>
        <td>Активное шумоподавление, до 25 часов работы с зарядным футляром, эргономичный дизайн</td>

    </tr>
    <tr>
        <td>Nintendo Switch</td>
        <td>Игровые консоли</td>
        <td>Игры, мультимедиа</td>
        <td>Портативный и док-режим, 6.2" экран, поддержка HD Rumble</td>
   
    </tr>
    <tr>
        <td>PlayStation 5</td>
        <td>Игровые консоли</td>
        <td>Игры, мультимедиа</td>
        <td>8K графика, SSD, обратная совместимость, новый контроллер DualSense</td>
 
    </tr>
    <tr>
        <td>Xbox Series X</td>
        <td>Игровые консоли</td>
        <td>Игры, мультимедиа</td>
        <td>8K графика, SSD, обратная совместимость, Game Pass</td>
 
    </tr>
    <tr>
        <td>Amazon Echo Dot (4th Gen)</td>
        <td>Умный дом</td>
        <td>Голосовое управление, музыка, умный дом</td>
        <td>Интеграция с Alexa, компактный дизайн, улучшенный звук</td>
   
    </tr>
    <tr>
        <td>Google Nest Hub (2nd Gen)</td>
        <td>Умный дом</td>
        <td>Голосовое управление, мультимедиа, умный дом</td>
        <td>Интеграция с Google Assistant, 7" дисплей, управление умным домом</td>
    
    </tr>
    <tr>
        <td>Logitech MX Master 3</td>
        <td>Компьютерные аксессуары</td>
        <td>Работа, навигация</td>
        <td>Эргономичный дизайн, программируемые кнопки, быстрая зарядка</td>
      
    </tr>
    <tr>
        <td>Razer DeathAdder V2</td>
        <td>Компьютерные аксессуары</td>
        <td>Игры, работа</td>
        <td>Оптический сенсор, эргономичный дизайн, программируемые кнопки</td>
   
    </tr>
    <tr>
        <td>Samsung T7 Portable SSD</td>
        <td>Хранение данных</td>
        <td>Хранение данных, резервное копирование</td>
        <td>Скорость передачи до 1050 МБ/с, защита паролем, компактный дизайн</td>
   
    </tr>
    <tr>
        <td>Western Digital My Passport</td>
        <td>Хранение данных</td>
        <td>Хранение данных, резервное копирование</td>
        <td>До 5 ТБ, защита паролем, автоматическое резервное копирование</td>
        
    </tr>
    <tr>
        <td>Sennheiser HD 560S</td>
        <td>Наушники</td>
        <td>Музыка, аудио производство</td>
        <td>Аудиофильское качество звука, открытый дизайн, комфортное ношение</td>
      
    </tr>
    <tr>
        <td>Shure SM7B</td>
        <td>Микрофоны</td>
        <td>Запись голоса, подкасты</td>
        <td>Кардиоидный паттерн, встроенный поп-фильтр, широкая частотная характеристика</td>
       
    </tr>
    <tr>
        <td>Blue Yeti</td>
        <td>Микрофоны</td>
        <td>Запись голоса, стриминг</td>
        <td>Мультипаттерн, простота использования, встроенный поп-фильтр</td>
        
    </tr>
        </table>`
    document.getElementById('dynamicContent').innerHTML = tableHtml;
});

document.getElementById('loadList').addEventListener('click', function() {
    const listHtml = `
        <ul class="artistic-list">
            <li>Кудабаев</li>
            <li>Нурбек</li>
            <li>ВТиПО-22</li>
        </ul>`;
    document.getElementById('dynamicContent').innerHTML = listHtml;
});

// script.js

document.addEventListener("DOMContentLoaded", function() {
    // Получаем контекст 2D канваса, где будет отрисовываться график
    const ctx = document.getElementById('myChart').getContext('2d');
    
    // Начальные данные для графика
    const initialData = {
        labels: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль'],
        datasets: [{
            label: 'Онлайн',
            data: [15252, 151512, 5252, 5445, 6565, 77, 6565],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
        }]
    };

    // Конфигурация графика
    const config = {
        type: 'line',
        data: initialData,
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    };

    // Создаем график
    const myChart = new Chart(ctx, config);

    // Функция для генерации случайных данных
    function generateRandomData() {
        return Array.from({ length: 7 }, () => Math.floor(Math.random() * 25));
    }

    // Обработчик события нажатия на кнопку обновления данных
    document.getElementById('updateData').addEventListener('click', function() {
        myChart.data.datasets[0].data = generateRandomData();
        myChart.update();
    });
});
