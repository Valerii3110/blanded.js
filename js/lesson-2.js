// Створіть масив styles з елементами 'jazz' і 'blues'
// Додайте до кінця масиву елемент 'rock-n-roll' за допомогою відповідного методу масивів
// Знайдіть елемент 'blues' у масиві та замініть його на 'classic', використовуючи JavaScript-код

// Напишіть функцію logItems(array), яка приймає масив як аргумент
// і виводить у консоль кожен його елемент у форматі:
// "<номер елемента> - <значення елемента>".
// Використайте цикл for для перебору елементів масиву.
// Нумерація елементів повинна починатися з 1 (а не з 0).

// const styles = ["jazz", "blues"];
// styles.push("rock-n-roll");
// const bluesIndex = styles.indexOf("blues");
// if (bluesIndex !== -1) {
//   styles[bluesIndex] = "classic";
// }
// function logItems(array) {
//   for (let i = 0; i < array.length; i++) {
//     console.log(`${i + 1} - ${array[i]}`);
//   }
// }

// logItems(styles);
// // Додайте до масиву styles елемент 'country' на початку масиву за допомогою відповідного методу масивів
// styles.unshift("country");
// // Виведіть у консоль масив styles, щоб перевірити результат
// console.log(styles);

// 3Напишіть функцію checkLogin(array), яка:
// Приймає масив логінів як аргумент.
// Запитує ім'я користувача через prompt.
// Перевіряє, чи є введене ім'я у переданому масиві.
// Якщо ім'я є в масиві – виводить повідомлення через alert: "Welcome, <name>!"
// Якщо ім'я відсутнє – виводить повідомлення: "User not found".

// const logins = ["Peter", "John", "Igor", "Sasha"];

// function checkLogin(array) {
//   const name = prompt("Введіть ваше ім'я:");
//   if (array.includes(name)) {
//     alert(`Welcome, ${name}!`);
//   } else {
//     alert("User not found");
//   }
// }

// checkLogin(logins);
// // Виклик функції для перевірки логінів
// // checkLogin(logins);

// 4 Напишіть функцію caclculateAverage(),
// яка приймає довільну кількість
// аргументів і повертає їхнє середнє значення.
// Додайте перевірку, що аргументи - це числа.

function calculateAverage(...args) {
  if (args.length === 0) return 0;
  let sum = 0;
  let count = 0;
  for (const arg of args) {
    if (typeof arg === "number") {
      sum += arg;
      count++;
    }
  }
  return count > 0 ? sum / count : 0;
}
console.log(calculateAverage(1, 2, 3, 4, 5)); // 3
console.log(calculateAverage(10, 20, 30)); // 20
console.log(calculateAverage(5, "hello", 15)); // 10
console.log(calculateAverage()); // 0
// Напишіть функцію isPalindrome(str), яка приймає рядок як аргумент
