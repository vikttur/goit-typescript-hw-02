/*
  У вас є тип AllType. Існує функція compare, яка приймає два об'єкти. Ці об'єкти містять поля AllType. 
  Ваше завдання – використовувати Pick та generics для вказівки, що поля цих об'єктів належать AllType.
  Функція compare повинна повертати AllType.
*/

type AllType = {
	name: string;
	position: number;
	color: string;
	weight: number
};

type Top = Pick<AllType, 'name' | 'color'>;
type Bottom = Pick<AllType, 'position' | 'weight'>;

const top: Top = {
  name: 'Block',
  color: 'green',
};

const bottom: Bottom = {
  position: 20,
  weight: 500,
};

function compare (top, bottom): AllType {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  }
}

export {};