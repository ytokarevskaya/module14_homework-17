function usePromise() {
    // Создаем promise
    const myPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        let number = Math.floor(Math.random() * 101);
        if (number % 2 === 0) {
          resolve(number);
        } else {
          reject(number);
        }
      }, 3000);
  
    });
  
  
    myPromise
      .then((result) => {
          console.log(`Завершено успешно. Сгенерированное число — ${result}`);
      })
      .catch((result) => {
        console.log(`Завершено с ошибкой. Сгенерированное число — ${result}`);
      })
  
  }
  
  usePromise();


// Не совсем верно, т.к. несмотря на выводимое сообщение, промис по факту всегда завершается успешно, потому что вы используете только функцию resolve в конструкторе промиса, функция reject ни разу не вызывается. Исправила на правильный вариант