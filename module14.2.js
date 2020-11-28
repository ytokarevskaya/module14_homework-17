/* Этап 1. Подготовка данных */

// JSON, который мы будем парсить
const jsonString = `
{"name":"Anton","age":36,"skills":["Javascript","HTML","CSS"],"salary":80000}
`;

/* Этап 2. Получение данных */
const person = JSON.parse(jsonString);

/* Этап 3. Запись данных в результирующий объект */
const result = {
  name: person.name,
  age: person.age,
  skills: person.skills,
  salary: person.salary,
};

console.log('result', result);