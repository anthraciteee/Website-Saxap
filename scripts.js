document.addEventListener("DOMContentLoaded", function() {
    const servicesButton = document.getElementById("servicesButton");
    const servicesContainer = document.getElementById("servicesContainer");

    // Добавляем обработчик события клика на кнопку "Услуги"
    servicesButton.addEventListener("click", function() {
        // Переключаем видимость контейнера услуг
        servicesContainer.style.display = servicesContainer.style.display === "none" ? "block" : "none";
    });
});


// Функция для отображения контента по имени вкладки
function showContent(tabName) {
    // Скрываем все блоки контента
    var contentElements = document.querySelectorAll('.content');
    contentElements.forEach(function(contentElement) {
        contentElement.style.display = 'none';
    });

    // Показываем нужный блок контента
    var selectedContent = document.getElementById(tabName);
    if (selectedContent) {
        selectedContent.style.display = 'block';
    }

    // Удалить класс 'active' у всех ссылок в боковой навигации
    var navigationLinks = document.querySelectorAll('.side-navigation a');
    navigationLinks.forEach(function(link) {
        link.classList.remove('active');
    });

    // Найти ссылку с соответствующим data-атрибутом и добавить класс 'active'
    var activeLink = document.querySelector('.side-navigation a[data-tab="' + tabName + '"]');
    if (activeLink) {
        activeLink.classList.add('active');
    }

}

// Получаем все ссылки в боковой навигации
var sideNavigationLinks = document.querySelectorAll('.side-navigation a');

// Добавляем обработчик события клика для каждой ссылки
sideNavigationLinks.forEach(function(link) {
    link.addEventListener('click', function(event) {
        // Отменяем стандартное действие перехода по ссылке
        event.preventDefault();

        // Получаем имя вкладки из data-атрибута ссылки
        var tabName = link.getAttribute('data-tab');

        // Показываем контент для выбранной вкладки
        showContent(tabName);
    });
    // Показываем первый таб по умолчанию
document.addEventListener('DOMContentLoaded', function() {
    showContent(tabName);
});
});





// Функция для отображения всплывающего окна
function showDetails() {
    var modal = document.getElementById('detailsModal');
    modal.style.display = 'block';
}

// Функция для закрытия всплывающего окна
function closeDetails() {
    var modal = document.getElementById('detailsModal');
    modal.style.display = 'none';
}

// Закрыть всплывающее окно при клике за его пределами
window.onclick = function(event) {
    var modal = document.getElementById('detailsModal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}



// Функция для перенаправления на форму Google
function redirectToForm() {
    window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLSemJ3gG1UyMYbY63FKV5n97LszQuIMjo_UjplvlqJ4puMNMJA/viewform?usp=sf_link";
}

// Добавляем обработчик события клика к кнопке "Онлайн запись"
var onlineBookingButton = document.querySelector('.online-booking-button');
if (onlineBookingButton) {
    onlineBookingButton.addEventListener('click', redirectToForm);
}




document.addEventListener('DOMContentLoaded', function() {
    // Определяем название вкладки в зависимости от текущего URL
    var pageTitle;
    var currentUrl = window.location.pathname;

    if (currentUrl.includes('depilation.html')) {
        pageTitle = 'Депиляция';
    } else if (currentUrl.includes('make-up.html')) {
        pageTitle = 'Визаж';
    } else if (currentUrl.includes('about.html')) {
        pageTitle = 'О нас';
    } else if (currentUrl.includes('cosmetology.html')) {
        pageTitle = 'Косметология';
    } else if (currentUrl.includes('manicure.html')) {
        pageTitle = 'Маникюр/Педикюр';
    } else if (currentUrl.includes('eyebrows.html')) {
        pageTitle = 'Брови/Ресницы';
    } else if (currentUrl.includes('stylist.html')) {
        pageTitle = 'Парикмахер';
    } else if (currentUrl.includes('massage.html')) {
        pageTitle = 'Массаж';
    } else if (currentUrl.includes('bodycorrection.html')) {
        pageTitle = 'Коррекция тела';
    } else if (currentUrl.includes('tan.html')) {
        pageTitle = 'Загар';
    } else if (currentUrl.includes('master.html')) {
        pageTitle = 'Мастер на дом';
    } else if (currentUrl.includes('promotion.html')) {
        pageTitle = 'Акции';
    } else {
        pageTitle = 'Главная'; // или любое другое значение по умолчанию
    }

    // Получаем все ссылки в навигационном меню
    var navigationLinks = document.querySelectorAll('.side-navigation a');

    // Получаем элемент-контейнер для хлебных крошек
    var breadcrumbContainer = document.getElementById('breadcrumb');

    // Функция для обновления хлебных крошек
    function updateBreadcrumbs(linkText) {
        // Очищаем текущие хлебные крошки
        breadcrumbContainer.innerHTML = '';

        // Создаем новые хлебные крошки
        var breadcrumbHtml = '<a href="#" class="home">Главная</a> - <a href="#" class="tab">' + pageTitle + '</a>';

        if (linkText) {
            breadcrumbHtml += ' - <span>' + linkText + '</span>';
        }

        // Вставляем сгенерированные хлебные крошки в контейнер
        breadcrumbContainer.innerHTML = breadcrumbHtml;
    }

    // Обрабатываем клик на ссылках навигации
    navigationLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Отменяем стандартное действие ссылки

            // Получаем текст ссылки, по которой кликнули
            var linkText = link.textContent.trim();

            // Обновляем хлебные крошки
            updateBreadcrumbs(linkText);

            // Дополнительные действия по выбору пункта навигации
            // Например, показ контента соответствующего выбранному пункту
            showContent(link.getAttribute('data-tab'));
        });
    });

    // Инициализация хлебных крошек и контента по умолчанию
if (currentUrl.includes('depilation.html')) {
    updateBreadcrumbs('Виды депиляции');
    showContent('defaultContent'); // Отображаем вкладку по умолчанию для depilation.html
} else if (currentUrl.includes('make-up.html')) {
    updateBreadcrumbs('Что такое визаж');
    showContent('aboutmakeup'); // Отображаем вкладку по умолчанию для make-up.html
} else if (currentUrl.includes('about.html')) {
    updateBreadcrumbs('Компания');
    // Показать контент по умолчанию для страницы about.html, если он есть
} else if (currentUrl.includes('cosmetology.html')) {
    updateBreadcrumbs('Услуги косметологии');
    showContent('cosmetology'); // Отображаем вкладку по умолчанию для cosmetology.html
} else if (currentUrl.includes('manicure.html')) {
    updateBreadcrumbs('Виды маникюра и педикюра');
    showContent('nailtips'); // Отображаем вкладку по умолчанию для manicure.html
} else if (currentUrl.includes('eyebrows.html')) {
    updateBreadcrumbs('Услуги для бровей и ресниц');
    showContent('eyebrowstips'); // Отображаем вкладку по умолчанию для eyebrows.html
} else if (currentUrl.includes('stylist.html')) {
    updateBreadcrumbs('Стрижки и укладки');
    showContent('hairtips'); // Отображаем вкладку по умолчанию для stylist.html
} else if (currentUrl.includes('massage.html')) {
    updateBreadcrumbs('Виды массажа');
    showContent('massagetips'); // Отображаем вкладку по умолчанию для massage.html
} else if (currentUrl.includes('bodycorrection.html')) {
    updateBreadcrumbs('Услуги коррекции фигуры');
    showContent('bodytips'); // Отображаем вкладку по умолчанию для bodycorrection.html
} else if (currentUrl.includes('tan.html')) {
    updateBreadcrumbs('Виды загара');
    showContent('tantips'); // Отображаем вкладку по умолчанию для tan.html
} else if (currentUrl.includes('master.html')) {
    updateBreadcrumbs('Услуги мастера на дом');
    showContent('mastertips'); // Отображаем вкладку по умолчанию для master.html
} else if (currentUrl.includes('promotion.html')) {
    updateBreadcrumbs('Доступные акции');
    showContent('promotips'); // Отображаем вкладку по умолчанию для master.html
} else {
    updateBreadcrumbs(null); // null, так как пока не выбрано ничего
}


    // Функция для отображения контента по имени вкладки
    function showContent(tabName) {
        // Скрываем все блоки контента
        var contentElements = document.querySelectorAll('.content');
        contentElements.forEach(function(contentElement) {
            contentElement.style.display = 'none';
        });

        // Показываем нужный блок контента
        var selectedContent = document.getElementById(tabName);
        if (selectedContent) {
            selectedContent.style.display = 'block';
        }

        // Удалить класс 'active' у всех ссылок в боковой навигации
        var navigationLinks = document.querySelectorAll('.side-navigation a');
        navigationLinks.forEach(function(link) {
            link.classList.remove('active');
        });

        // Найти ссылку с соответствующим data-атрибутом и добавить класс 'active'
        var activeLink = document.querySelector('.side-navigation a[data-tab="' + tabName + '"]');
        if (activeLink) {
            activeLink.classList.add('active');
        }
    }
});



// Функция для отображения всплывающего окна с текстом и кнопкой
function showTextModal(description) {
    var modal = document.getElementById('textModal');
    var textDescription = document.getElementById('textDescription');

    textDescription.innerHTML = description;

    modal.style.display = 'block';
}

// Функция для закрытия всплывающего окна с текстом и кнопкой
function closeTextModal() {
    var modal = document.getElementById('textModal');
    modal.style.display = 'none';
}






// ПРАЙС ЛИСТ ДЛЯ ВКЛАДКИ ЦЕНЫ
document.addEventListener('DOMContentLoaded', function() {
    const header = document.getElementById('accordion-header');
    const content = document.getElementById('accordion-content');

    header.addEventListener('click', function() {
        if (content.style.display === "none" || content.style.display === "") {
            content.style.display = "block";
        } else {
            content.style.display = "none";
        }
    });

    // Функция для добавления услуг и цен
    function addPriceRow(service, price) {
        const table = document.getElementById('price-table');
        const row = document.createElement('tr');
        row.classList.add('priceRowContent');
    
        // Создаем ячейку для названия услуги
        const serviceCell = document.createElement('td');
        serviceCell.textContent = service;
        row.appendChild(serviceCell);
    
        // Создаем ячейку для цены
        const priceCell = document.createElement('td');
        priceCell.textContent = price;
        row.appendChild(priceCell);

         // Если цена не указана, добавляем класс к первой ячейке
    if (!price) {
        serviceCell.classList.add('bold');
    }
    
        table.appendChild(row);
    }
    
    // Пример добавления строк (вы можете удалить или изменить эти строки)
    addPriceRow('Депиляция');
    addPriceRow('Депиляция всего тела', '1800 / 2050 ₽');
    addPriceRow('Подмышечные впадины', '250 / 300 ₽');
    addPriceRow('Бикини трусики', '350/400 ₽');
    addPriceRow('Бикини глубокое', '700/800 ₽');
    addPriceRow('Ноги до колен', '500/600 ₽');
    addPriceRow('Ноги выше колен', '500/600 ₽');
    addPriceRow('Ноги полностью', '1000/1200 ₽');
    addPriceRow('Руки до локтя', '300/350 ₽');
    addPriceRow('Руки полностью', '600/700 ₽');
    addPriceRow('Спина', '200/250 ₽');
    addPriceRow('Живот', '200/250 ₽');
    addPriceRow('Ягодицы', '200/250 ₽');
    addPriceRow('Грудь', '200/250 ₽');
    addPriceRow('Кисти рук', '50/50 ₽');
    addPriceRow('Пальцы', '50/50 ₽');
    addPriceRow('Ареолы', '50/50 ₽');
    addPriceRow('Линия живота', '100/100 ₽');
    addPriceRow('Межъягодичная зона', '350/400 ₽');
    addPriceRow('Электроэпиляция');
    addPriceRow('1 минута', '40/50 ₽');
    addPriceRow('1 час', '2400/3000 ₽');
    addPriceRow('Игла', '200 ₽');
    addPriceRow('Интимная стрижка');
    addPriceRow('Интимная стрижка', '100/500₽');
    addPriceRow('Интимная мужская стрижка', '700₽');
    addPriceRow('Интимное окрашивание', '1000/1500₽');
    addPriceRow('Блеск-Тату', '400₽');
    addPriceRow('Массаж лица');
    addPriceRow('Массаж лица классический', '1000/1100 ₽');
    addPriceRow('Лимфодренажный массаж', '1500/1600 ₽');
    addPriceRow('Буккальный массаж', '2000/2200 ₽');
    addPriceRow('Криомассаж', '1200/1300 ₽');
    addPriceRow('Массаж лица по пилингу', '1500/1650 ₽');
    addPriceRow('Маска для лица', '450/500 ₽');
    addPriceRow('Альгинатная маска', '500/600 ₽');
    addPriceRow('Консультация по лечению акне', '1500/1800 ₽');
    addPriceRow('Склеротерапия', '5500/6500 ₽');
    addPriceRow('Чистка лица');
    addPriceRow('Чистка лица на косметике CHRISTINA механическая', '2000/2200 ₽');
    addPriceRow('SPA чистка лица', '2700/2900 ₽');
    addPriceRow('Гидро чистка лица', '3500 ₽');
    addPriceRow('Чистка лица на косметике GIGI/HOLY LAND вакуумная', '2700/2900 ₽');
    addPriceRow('Пилинг');
    addPriceRow('Карбоновый пилинг', '2000/2200 ₽');
    addPriceRow('PRX-T33', '4000/5000 ₽');
    addPriceRow('Жёлтый/ретиноловый МСР', '3500/3800 ₽');
    addPriceRow('Омоложение');
    addPriceRow('Лечение гипергидроза BOTULAX 1ЕД', '210/230 ₽');
    addPriceRow('Лечение гипергидроза BOTULAX 100ЕД', '20000/22000 ₽');
    addPriceRow('Увеличение губ');
    addPriceRow('JUVEDERM ULTRA SMILE', '14000/15000 ₽');
    addPriceRow('PRINCESS VOLUME', '11200/12200 ₽');
    addPriceRow('JUVEDERM ULTRA 4', '18000/19000 ₽');
    addPriceRow('Аппаратная косметология');
    addPriceRow('Микротоки по лицу', '800-1300 ₽/900-1500 ₽');
    addPriceRow('Электропорация по лицу', '800-1300 ₽/900-1500 ₽');
    addPriceRow('Удаление татуажа', '1500/1700 ₽');
    addPriceRow('Маникюр');
    addPriceRow('Аппаратный маникюр (при последующем покрытии)', '500/700 ₽');
    addPriceRow('Японский маникюр', '500/700 ₽');
    addPriceRow('Маникюр+педикюр в 4 руки (при последующем покрытии)', '1800/2000 ₽');
    addPriceRow('Педикюр');
    addPriceRow('Обработка пальчиков', '700/900 ₽');
    addPriceRow('Аппаратный педикюр (при последующем покрытии)', '1300/1500 ₽');
    addPriceRow('Фруктово-кислотный педикюр (при последующем покрытии)', '1800/2000 ₽');
    addPriceRow('Долговременное покрытие');
    addPriceRow('Гель-лак + выравнивание', '1000/2000 ₽');
    addPriceRow('Дизайн');
    addPriceRow('Френч', '300 ₽');
    addPriceRow('Втирка', '300 ₽');
    addPriceRow('Градиент', '700 ₽');
    addPriceRow('Брови/ресницы');
    addPriceRow('Коррекция бровей', '600/800 ₽');
    addPriceRow('Коррекция + окрашивание', '1100/1300 ₽');
    addPriceRow('Коррекция + окрашивание + ламинирование', '1600/1800 ₽');
    addPriceRow('Коррекция + ламинирование', '1300/1500 ₽');
    addPriceRow('Ламинирование ресниц', '1100/1400 ₽');
    addPriceRow('Макияж');
    addPriceRow('Экспресс макияж', '1000/1200 ₽');
    addPriceRow('Дневной макияж', '1500/1700 ₽');
    addPriceRow('Вечерний макияж', '2000/2200 ₽');
    addPriceRow('Сложный макияж', '2500/2800 ₽');
    addPriceRow('Реснички-пучки', '200-500 ₽');
    addPriceRow('Перманентный макияж');
    addPriceRow('Микроблейдинг бровей', '4200/5000 ₽');
    addPriceRow('Коррекция микроблейдинга', '2000/2500 ₽');
    addPriceRow('Перманентный макияж родинки 1шт', '1000/1500 ₽');
    addPriceRow('Перманентный макияж бровей', '6000/7000 ₽');
    addPriceRow('Перманентный макияж татуаж губ', '6000/7000 ₽');
    addPriceRow('Перманентный макияж межресничного пространства', '5000/5500 ₽');
    addPriceRow('Перманентный макияж стрелка', '5000/5500 ₽');
    addPriceRow('Перманентный макияж стрелка с растушевкой', '5000/5500 ₽');
    addPriceRow('Коррекция перманентного макияжа бровей, губ, межресничного пространства', '3500/4000 ₽');
    addPriceRow('Удаление татуажа ремувером', '3000 ₽');
    addPriceRow('Татуаж сосков', '8000/9000 ₽');
    addPriceRow('Коррекция татуажа сосков', '4000/5000 ₽');
    addPriceRow('Камуфляж рубцов 1 см', '700/1000 ₽');
    addPriceRow('Минимальная стоимость камуфляж рубцов', '2000/2200 ₽');
    addPriceRow('Стрелки с растушевкой', '3000/3500 ₽');
    addPriceRow('Имитация мушки/родинки', '1500/1800 ₽');
    addPriceRow('Парикмахер');
    addPriceRow('Стрижка женская (экспресс укладка)', '1000/1200 ₽');
    addPriceRow('Подравнивание (одним срезом)', '500/600 ₽');
    addPriceRow('Стрижка горячим лезвием', '1500/1700 ₽');
    addPriceRow('Окрашивание волос');
    addPriceRow('Окрашивание в 1 тон короткая', '2500-3900P/2800-4200 ₽');
    addPriceRow('Сложное окрашивание короткая', '3900-4900P/4200-5200 ₽');
    addPriceRow('Мелирование (без тонирование) короткая', '2800-3500P/3300-4500 ₽');
    addPriceRow('Восстановление волос');
    addPriceRow('Абсолютное счастье для волос LEBEL короткая', '2500/4500 ₽');
    addPriceRow('Жизненная сила LEBEL короткая', '1 000-2 500 ₽');
    addPriceRow('Уход revlon увлажнение', '750 ₽');
    addPriceRow('Укладки и прически');
    addPriceRow('Косоплетение', '300-1200/400-1500 ₽');
    addPriceRow('Экспресс-укладка', '700/900 ₽');
    addPriceRow('Вечерний образ', '3000/3500 ₽');
    addPriceRow('Массаж');
    addPriceRow('Шейно-воротниковая зона', '600/800 ₽');
    addPriceRow('Спина', '1000/1300 ₽');
    addPriceRow('Спина мужская', '1100/1400 ₽');
    addPriceRow('Ноги', '900/1200 ₽');
    addPriceRow('Руки', '800/1000 ₽');
    addPriceRow('Голова', '800/1000 ₽');
    addPriceRow('Классический общий массаж', '1700/2200 ₽');
    addPriceRow('Классический общий массаж', '2500/3300 ₽');
    addPriceRow('Антицеллюлитный массаж', '1300/1600 ₽');
    addPriceRow('Массаж «бразильская попка»', '3000/3500 ₽');
    addPriceRow('Массаж на ингибиторе жира h.Q.В.М (все тело)', '3500/3800 ₽');
    addPriceRow('Массаж на ингибиторе жира h.Q.В.М (ягодицы+ножки)', '2000/2300 ₽');
    addPriceRow('Липомоделирующий массаж мегаскульптор', '2600/3000 ₽');
    addPriceRow('Лимфодренажный массаж', '2000/2500 ₽');
    addPriceRow('Лимфодренажный массаж', '3000/3750 ₽');
    addPriceRow('Медовый массаж');
    addPriceRow('Спина', '1300/1500 ₽');
    addPriceRow('Обертывание');
    addPriceRow('Виски обёртывание styx', '4200/4500 ₽');
    addPriceRow('Обёртывание cello-gel styx', '2800/3000 ₽');
    addPriceRow('Детокс обёртывание мегаскульптор', '2800/3000 ₽');
    addPriceRow('Экспресс похудение мегаскулыттор (обёртывание массаж)', '3000/3200 ₽');
    addPriceRow('Бинтовое обертывание', '2000/2300 ₽');
    addPriceRow('Аппаратная коррекция фигуры');
    addPriceRow('Прессотерапия', '700/800 ₽ (30 мин.)');
    addPriceRow('Костюм (при покупке абонемента костюм в подарок)', '200 ₽');
    addPriceRow('LPG массаж (45 мин)', '1000/1200 ₽ (45 мин.)');
    addPriceRow('Костюм', '600 ₽ (45 мин.)');
    addPriceRow('Вакуумно-роликовый массаж', '800/1000 ₽ (30 мин.)');
    addPriceRow('Загар');
    addPriceRow('Моментальный загар', '2000 ₽');
    addPriceRow('Химический', '500 ₽');
    addPriceRow('Мастер на дом');
    addPriceRow('Выезд в центре города', '1000 ₽');
    addPriceRow('Выезд в южный/северный микрорайоны', '1500 ₽');
    addPriceRow('Выезд за пределы города', '2000 ₽');
    

    // Вы можете использовать addPriceRow для добавления новых услуг и цен
});


