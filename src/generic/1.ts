/*
  Є функція getPromise(), яка повертає проміс, що дозволяється в масив, що містить рядки та числа. 
  Доповніть цю функцію, використовуючи generics, щоб вона повертала правильний тип.
*/

const promise: Promise<(string | number)[] > = new Promise((resolve) => {
	resolve(['Text', 50]);
});

promise.then((data) => {
  console.log(data); 
});

export { };
