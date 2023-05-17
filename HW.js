/*
Домашка:

1.  Ви прийшли в Макдональдз з трьома друзями.
    Всі вони хочуть зʼїсти гамбургер. Ви хочете зʼїсти гамбургер з картоплею.
    Реалізувати код, який буде перевіряти, що якщо всім вистачає гамбургерів і картоплі,
    то виводити текст "Ми поїли" в консоль. Якщо на всіх не вистачає їжі,
    то виводити в консоль текст "Ми йдемо в інше кафе"
    (Змінні типу інтеджер містять кількість продуктів в наявності у вигляді вхідних даних)
*/


let hamburgers = 4;
let fries = 1;

if(hamburgers >= 4 && fries >= 1){
    console.log('Мі поїли')
}
else{ 
   console.log ("Ми йдемо в інше кафе")
}





/*
2.  Напишіть умовну конструкцію if, що перевіряє, чи знаходиться значення ціни товару між 1000 та 1900 включно.
    Результат виводити в консоль.*/
    
    
let priceValue = 999;

if(priceValue > 999 && priceValue < 1901)
{
console.log("Price value is in the range")
}
else
{
console.log("Price value is not in the range")
}


    

/*
3.  Напишіть конструкцію if, щоб перевіряє, чи значення ціни товару не знаходиться між 1000 та 1900 включно.
    Реалізуйте два варіанти, один з оператором НЕ !, а інший без цього оператора.
    Результат виводити в консоль.*/

    let priceValue1 = 2000;

    if(!(priceValue1 > 999 && priceValue1 < 1901)){
    console.log("Price value is in the range")
    }
    else{
    console.log("Price value is not in the range")
    };

    let priceValue2 = 1901;

    if(priceValue2 > 999 && priceValue2 < 1901){
    console.log("Price value is not in the range")
    }
    else{
        console.log("Price value is in the range")
    }
    



/*
4.  За номером пори року вивести назву цієї пори року використовуючи оператор if-else-if
    Результат виводити в консоль.*/
    
    let timeOfYear = 4;
    
    if(timeOfYear == 1){
    console.log("Winter")
    } 
    else if (timeOfYear == 2){
    console.log("Spring")
    } 
    else if(timeOfYear == 3) {
    console.log("Summer")
    }
    else if(timeOfYear == 4) {
    console.log("Autumn")
    }
    


    /*
5.  Задано 3 числа (a, b, c), які не рівні між собою.
    Визначити середнє мід цими трьома числами
    (не середнє арифметичне значення, а яке з трьох заданих чисел среднє за значенням) використовуючи оператор if-else.
    Використати вкладені оператори if
    Результат виводити в консоль.*/
    
    let a = 2
    let b = 3
    let c = 1

    if(a < b && b < c){
        console.log('B is the average number')
    } else if (b < a && a < c) {
        console.log('A is the average number')
    } else if(c < a && a < b) {
        console.log('A is the average number')
    } else if(c < b && b < a) {
        console.log('B is the average number')
    }
      else if(b < c && c < a) {
        console.log('C is the average number')
    } else if(a < c && c < b) {
        console.log('C is the average number')
    } else {
        console.log('Other non-valid cases')
    }


/*
6.  Задано номер дня тижня.
    За заданим номером вивести назву дня тижня використовуючи switch.
    Результат виводити в консоль.*/

    let dayOfWeek = 1000;

    switch(dayOfWeek){
        case 7: 
            console.log('Sunday');
            break;
        case 6: 
            console.log('Saturday');
            break;
        case 5: 
            console.log('Friday');
            break;
        case 4: 
            console.log('Tuesday');
            break;
        case 3: 
            console.log('Wednesday');
            break; 
        case 2: 
            console.log('Thursday');
            break;      
        case 1: 
            console.log('Monday');
            break;                
        default:
            console.log('Please enter numbers from 1 to 7 to get some Day of Week');
            break;  
    }


/*
7.  За допомогою switch реалізуйте обчислення виразу, передаючи у switch, як параметр, символ математичної операції.
    Математичні операції для обчислення: "+", "-", "*", "/".
    Результат виводити в консоль.*/
    
    let operation = '/'; 

switch(operation){
    case '+': 
        console.log(5 + 5);
        break;
    case '-': 
        console.log(5 - 5);
        break;
    case '*': 
        console.log(5 * 5);
        break;
    case '/': 
        console.log(5 / 5);
        break;  
    default:
        console.log('This is default, no maths');
        break;  
}

/*
8.*  Використовуючи властивості рядків (тип string), та регулярний вираз (regular expression) видалити голосні букви зі слова.*/

    let str = 'Regular Expression';
    str = str.replace(/[aouiye]+/g, '');
    console.log(str);

/*
9.*  Використовуючи оператор if реалізувати логіку переводу метрів в кілометри,
    так щоб в консоль виводився результат обчислень з правильним закінченням.
    Наприклад: 1000 метрів це 1 кілометр;  32 метри це 0,032 кілометра і т.д.

    Підказка(https://ukr-lifehacks.ed-era.com/rozdil-9/zvyazok_chislivnykiv)*/

