/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/
enum Days {
	Monday = 'MONDAY',
	Tuesday = 'TUESDAY',
	Wednesday = 'WEDNESTDAY',
	Thursday = 'THURSDAY',
	Friday ='FRIDAY',
	Saturday = 'SATURDAY',
	Sunday = 'SUNDAY',
}

function isWeekend(day: string): boolean {
	const dayToUpperCase = day.toUpperCase();
	return dayToUpperCase === Days.Saturday || dayToUpperCase === Days.Sunday;
} 

isWeekend('Saturday');

