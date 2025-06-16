// 1 - отримай body елемент і виведи його в консоль;
// 2 - отримай елемент id="title" і виведи його в консоль;
// 3 - отримай елемент class="list" і виведи його в консоль;
// 4 - отримай всі елементи з атрибутом data-topic і виведи їх в консоль;
// 5 - отримай перший елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
// 6 - отримай останній елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
// 7 - який елемент є сусідом для h1? Знайти і виведи його в консоль;
// 8 - по тегу h3 знайти всі заголовки та виведи їх у консоль;
// 9 - для кожного елмента h3 додай class="active", який змінить колір заголовка на червоний колір
// 10 - знайти елемент li який має атрибут data-topic з значенням "navigation" і виведи його в консоль;
// 11 - додай для знайденого елемента data-topic="navigation" атрибут style і зроби його backgroundColor жовтим
// 12 - у елемента data-topic="navigation" знайди елемент р і зміни його текст на "Я змінив тут текст!".
// 13 - створи const currentTopic = "manipulation"; після цього знайди елемент у якогоо атрибут data-topic має значення, яке зберігається у змінній currentTopic і виведи його в консоль;
// 14 - додай до знайденого елемента атрибут style і зроби його backgroundColor блакитним;
// 15 - знайти в документі заголовок, який має class="completed" і виведи його в консоль;
// 16 - видали елемент li в якому знаходиться заголовок, який має class="completed"
// 17 - після заголовка h1 (перед списком) додай новий елемент p і задай йому наступний текст: "Об'єктна модель документа (Document Object Model)"
// 18 - додай новий елемент списку у кінець списка, його заголовок це - "Властивість innerHTML" а опис (р) - "Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу". тобто, потрібно створити елемент LI потім наповнити H3 та P і готову LI закинути у кінець списку
// 19 - зроби це саме, але використовуй шаблонні рядки та метод insertAdjacentHTML()
// 20 - очисти список
// 1 - отримай body елемент і виведи його в консоль;
console.log(document.body);

// 2 - отримай елемент id="title" і виведи його в консоль;
console.log(document.getElementById("title"));

// 3 - отримай елемент class="list" і виведи його в консоль;
console.log(document.querySelector(".list"));

// 4 - отримай всі елементи з атрибутом data-topic і виведи їх в консоль;
const dataTopicElements = document.querySelectorAll("[data-topic]");
console.log(dataTopicElements);

// 5 - отримай перший елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
console.log(dataTopicElements[0]);

// 6 - отримай останній елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
console.log(dataTopicElements[dataTopicElements.length - 1]);

// 7 - який елемент є сусідом для h1? Знайти і виведи його в консоль;
const h1 = document.querySelector("h1");
console.log(h1.nextElementSibling);

// 8 - по тегу h3 знайти всі заголовки та виведи їх у консоль;
const h3Elements = document.querySelectorAll("h3");
console.log(h3Elements);

// 9 - для кожного елмента h3 додай class="active", який змінить колір заголовка на червоний колір
h3Elements.forEach((h3) => h3.classList.add("active"));

// 10 - знайти елемент li який має атрибут data-topic з значенням "navigation" і виведи його в консоль;
const navigationLi = document.querySelector('li[data-topic="navigation"]');
console.log(navigationLi);

// 11 - додай для знайденого елемента data-topic="navigation" атрибут style і зроби його backgroundColor жовтим
navigationLi.style.backgroundColor = "yellow";

// 12 - у елемента data-topic="navigation" знайди елемент p і зміни його текст на "Я змінив тут текст!".
const pInNavigation = navigationLi.querySelector("p");
if (pInNavigation) {
  pInNavigation.textContent = "Я змінив тут текст!";
}

// 13 - створи const currentTopic = "manipulation"; після цього знайди елемент у якого атрибут data-topic має значення, яке зберігається у змінній currentTopic і виведи його в консоль;
const currentTopic = "manipulation";
const currentTopicElement = document.querySelector(
  `[data-topic="${currentTopic}"]`
);
console.log(currentTopicElement);

// 14 - додай до знайденого елемента атрибут style і зроби його backgroundColor блакитним;
if (currentTopicElement) {
  currentTopicElement.style.backgroundColor = "lightblue";
}

// 15 - знайти в документі заголовок, який має class="completed" і виведи його в консоль;
const completedHeader = document.querySelector(".completed");
console.log(completedHeader);

// 16 - видали елемент li в якому знаходиться заголовок, який має class="completed"
if (completedHeader) {
  const liToRemove = completedHeader.closest("li");
  if (liToRemove) {
    liToRemove.remove();
  }
}

// 17 - після заголовка h1 (перед списком) додай новий елемент p і задай йому наступний текст: "Об'єктна модель документа (Document Object Model)"
const pNew = document.createElement("p");
pNew.textContent = "Об'єктна модель документа (Document Object Model)";
h1.insertAdjacentElement("afterend", pNew);

// 18 - додай новий елемент списку у кінець списка, його заголовок це - "Властивість innerHTML" а опис (р) - "Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу".
const list = document.querySelector(".list");
const liNew = document.createElement("li");

const h3New = document.createElement("h3");
h3New.textContent = "Властивість innerHTML";

const pDesc = document.createElement("p");
pDesc.textContent =
  "Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу.";

liNew.appendChild(h3New);
liNew.appendChild(pDesc);
list.appendChild(liNew);

// 19 - зроби це саме, але використовуй шаблонні рядки та метод insertAdjacentHTML()
const htmlString = `
  <li>
    <h3>Властивість innerHTML</h3>
    <p>Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу.</p>
  </li>
`;
list.insertAdjacentHTML("beforeend", htmlString);

// 20 - очисти список
list.innerHTML = "";
