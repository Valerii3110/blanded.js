// /** Завдання 1*/
// // 1 - отримай body елемент і виведи його в консоль;
// const bodyElement = document.body;
// console.log(bodyElement);
const body = document.body;
console.log("1:", body);

// // 2 - отримай елемент id="title" і виведи його в консоль;
// const titleElement = document.getElementById("title");
// console.log(titleElement);
const title = document.getElementById("title");
console.log("2:", title);

// // 3 - отримай елемент class="list" і виведи його в консоль;
// const listElement = document.querySelector(".list");
// console.log(listElement);

// // 4 - отримай всі елементи з атрибутом data-topic і виведи їх в консоль;
// const dataTopicElements = document.querySelectorAll("[data-topic]");
// console.log(dataTopicElements);

// // 5 - отримай перший елемент зі списку всіх елементів з атрибутом data-topic і виведи його в консоль;
// const firstDataTopicElement = dataTopicElements[0]; // Використовуємо вже оголошену змінну
// console.log(firstDataTopicElement);

// // 6 - отримай останній елемент зі списку всіх елементів з атрибутом data-topic і виведи його в консоль;
// const lastDataTopicElement = dataTopicElements[dataTopicElements.length - 1];
// console.log("Останній елемент з data-topic:", lastDataTopicElement);

// // 7 - який елемент є сусідом для h1? Знайти і виведи його в консоль;
// const h1 = document.querySelector("h1");
// const h1Sibling = h1.nextElementSibling;
// console.log("Сусідній елемент після <h1>:", h1Sibling);

// // 8 - по тегу h3 знайти всі заголовки та виведи їх у консоль;
// const h3Elements = document.querySelectorAll("h3");
// console.log("Усі заголовки <h3>:", h3Elements);
// h3Elements.forEach((element, index) => {
//   console.log(`Заголовок ${index + 1}:`, element);
// });

// // 9 - для кожного елемента h3 додай class="active", який змінить колір заголовка на червоний колір
// h3Elements.forEach((h3) => {
//   h3.classList.add("active");
// });

// // 10 - знайти елемент li, який має атрибут data-topic зі значенням "navigation" і виведи його в консоль;
// const navigationLi = document.querySelector('li[data-topic="navigation"]');
// console.log(navigationLi);

// // // 11 - додай для знайденого елемента data-topic="navigation" атрибут style і зроби його backgroundColor жовтим
// if (navigationLi) {
//   navigationLi.style.backgroundColor = "yellow";
// }

// // // 12 - у елемента data-topic="navigation" знайди елемент p і зміни його текст на "Я змінив тут текст!"
// const pInNavigation = navigationLi?.querySelector("p");
// if (pInNavigation) {
//   pInNavigation.textContent = "Я змінив тут текст!";
// }

// // // 13 - створи const currentTopic = "manipulation"; знайди елемент з data-topic="manipulation" і виведи його в консоль
// const currentTopic = "manipulation";
// const currentTopicElement = document.querySelector(
//   `[data-topic="${currentTopic}"]`
// );
// console.log(currentTopicElement);

// // // 14 - додай до знайденого елемента атрибут style і зроби його backgroundColor блакитним
// if (currentTopicElement) {
//   currentTopicElement.style.backgroundColor = "lightblue";
// }

// // // 15 - знайти в документі заголовок, який має class="completed" і виведи його в консоль
// const completedHeader = document.querySelector(".completed");
// console.log(completedHeader);

// // // 16 - видали елемент li, в якому знаходиться заголовок з class="completed"
// if (completedHeader) {
//   const liToRemove = completedHeader.closest("li");
//   liToRemove?.remove();
// }

// // // 17 - після заголовка h1 (перед списком) додай новий елемент p з текстом
// const pNew = document.createElement("p");
// pNew.textContent = "Об'єктна модель документа (Document Object Model)";
// h1.insertAdjacentElement("afterend", pNew);

// // // 18 - додай новий елемент списку у кінець списку
// const list = document.querySelector(".list");
// const liNew = document.createElement("li");
// const h3New = document.createElement("h3");
// h3New.textContent = "Властивість innerHTML";
// const pDesc = document.createElement("p");
// pDesc.textContent = "Ще один спосіб створити DOM-елементи...";
// liNew.append(h3New, pDesc);
// list.appendChild(liNew);

// // // 19 - те саме, але через insertAdjacentHTML()
// const htmlString = `
//   <li>
//     <h3>Властивість innerHTML</h3>
//     <p>Ще один спосіб створити DOM-елементи...</p>
//   </li>
// `;
// list.insertAdjacentHTML("beforeend", htmlString);

// // 20 - очисти список
// list.innerHTML = "";

// /**Завдання 2 */
// // Створіть контейнер div (з класом number-container) в HTML-документі
// // та динамічно створіть 100 блоків (з класом number) наповнивши їх рандомними
// // числами від 1 до 100 і додайте їх до контейнера div(numberContainer).
// // Парні числа повинні мати зелений фон (додати клас even),
// // Непарні числа - жовтий фон (додати клас odd).

// // const randomNumber = () => Math.floor(Math.random() * 100) + 1;
// // Створюємо контейнер
// // Створюємо контейнер
// const container = document.createElement("div");
// container.className = "number-container";
// document.body.appendChild(container);

// // Функція для генерації випадкового числа
// const randomNumber = () => Math.floor(Math.random() * 100) + 1;

// // Створюємо 100 блоків
// for (let i = 0; i < 100; i++) {
//   const num = randomNumber();
//   const numberBlock = document.createElement("div");
//   numberBlock.className = "number";
//   numberBlock.textContent = num;

//   // Додаємо клас в залежності від парності
//   numberBlock.classList.add(num % 2 === 0 ? "even" : "odd");

//   container.appendChild(numberBlock);
// }

// Додаємо стилі прямо в JS
// const style = document.createElement("style");
// style.textContent = `
//   .number-container {
//     display: flex;
//     flex-wrap: wrap;
//     gap: 10px;
//     padding: 20px;
//   }
//   .number {
//     width: 50px;
//     height: 50px;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     font-weight: bold;
//     border-radius: 5px;
//   }
//   .even {
//     background-color: #a3d9a5;
//   }
//   .odd {
//     background-color: #f7e38d;
//   }
// `;
// document.head.appendChild(style);

/**Завдання 3 */
// Form Events, Input, Focus, Blur and Submit.

// Використовуй шаблон форми з файлу html.

// 1 - При події `input`, якщо користувач ввів в поле більше
// 6 символів то додати клас `success`. Якщо ж символів менше аніж 6,
// то клас `error`

// 2 - При події `focus` зроби перевірку на пустоту поля інпута,
// якщо ж поле пусте, то зроби `outline` => `'3px solid red'`,
// якщо при фокусі поле непусте, то `outline` => `'3px solid green'`

// 3 - При події `blur` зроби перевірку на пустоту поля інпута,
// якщо ж поле пусте, то зроби `outline` => `'3px solid red'`,
// якщо при фокусі поле непусте, то `outline` => `'3px solid lime'`

// 4 - При події `submit`. Відміни поведінку браузера по змовчуванню.
// Дістань данні з інпуту і чек боксу, зроби перевірку,
// що інпут не порожній, також, що нажатий чек бокс у положення true,
// якщо користувач все виконав вірно, збери данні (userName)
// у обьект і виведи у консоль. У разі, якщо користувач не виконав
// одну із умов, виведи повідомлення. Також при події інпут реалізуй додавання
// ім`я користувача у span, замість слова "Anonymous".
// Якщо користувач ввів ім`я, а потім видалив, зроби так,
// щоб на місце повернулось дефолтне знаяення "Anonymous".
// При відправці форми, очисти інпут, верни чек бокс у положення
// false, верни дефолтне значення "Anonymous" у span.
// Отримуємо елементи
// const form = document.querySelector(".js-contact-form");
// const input = document.querySelector(".js-username-input");
// const checkbox = document.querySelector(".js-policy-checkbox");
// const span = document.querySelector(".js-username-output");

// // 1. Обробник події input
// input.addEventListener("input", function () {
//   if (this.value.length > 6) {
//     this.classList.remove("error");
//     this.classList.add("success");
//   } else {
//     this.classList.remove("success");
//     this.classList.add("error");
//   }

// Оновлюємо span з ім'ям користувача
//   span.textContent = this.value.trim() || "Anonymous";
// });

// // 2. Обробник події focus
// input.addEventListener("focus", function () {
//   if (this.value.trim() === "") {
//     this.style.outline = "3px solid red";
//   } else {
//     this.style.outline = "3px solid green";
//   }
// });

// // 3. Обробник події blur
// input.addEventListener("blur", function () {
//   if (this.value.trim() === "") {
//     this.style.outline = "3px solid red";
//   } else {
//     this.style.outline = "3px solid lime";
//   }
// });

// 4. Обробник події submit
// form.addEventListener("submit", function (e) {
//   e.preventDefault(); // Відміна стандартної поведінки

//   const userName = input.value.trim();
//   const isChecked = checkbox.checked;

//   // Валідація форми
//   if (!userName) {
//     console.log("Будь ласка, введіть ваше ім'я");
//     input.style.outline = "3px solid red";
//     return;
//   }

//   if (!isChecked) {
//     console.log("Будь ласка, погодьтесь з політикою конфіденційності");
//     return;
//   }

//   // Якщо все вірно - виводимо об'єкт у консоль
//   const userData = {
//     userName: userName,
//     acceptedPolicy: isChecked,
//   };
//   console.log("Форма успішно відправлена:", userData);

//   // Очищаємо форму
//   input.value = "";
//   checkbox.checked = false;
//   span.textContent = "Anonymous";
//   input.classList.remove("success", "error");
//   input.style.outline = "";
// });

// Додаємо стилі для класів success та error
// const style = document.createElement("style");
// style.textContent = `
//   .success {
//     border-color: green;
//     background-color: rgba(0, 255, 0, 0.1);
//   }
//   .error {
//     border-color: red;
//     background-color: rgba(255, 0, 0, 0.1);
//   };

/**Завдання 4 */
// document.head.appendChild(style); // Використовуй шаблон розмітки з файлу html та напиши наступний функціонал: // При кліку на кнопку "Зменшити" квадрат стає меньшим на 20 пікселів, // При кліку на кнопку "Збільшити" - квадрат стає більшим на 20 пікселів. // Використовуй шаблон розмітки з файлу html та напиши наступний функціонал: // При кліку на кнопку "Зменшити" квадрат стає меньшим на 20 пікселів, // При кліку на кнопку "Збільшити" - квадрат стає більшим на 20 пікселів.

// Отримуємо елементи DOM
//
