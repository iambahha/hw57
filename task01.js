const tasks = [
	{id: 234, title: 'Create user registration API', timeSpent: 4, category: 'Backend', type: 'task'},
	{id: 235, title: 'Create user registration UI', timeSpent: 8, category: 'Frontend', type: 'task'},
	{id: 237, title: 'User sign-in via Google UI', timeSpent: 3.5, category: 'Frontend', type: 'task'},
	{id: 238, title: 'User sign-in via Google API', timeSpent: 5, category: 'Backend', type: 'task'},
	{id: 241, title: 'Fix account linking', timeSpent: 5, category: 'Backend', type: 'bug'},
	{id: 250, title: 'Fix wrong time created on new record', timeSpent: 1, category: 'Backend', type: 'bug'},
	{id: 262, title: 'Fix sign-in failed messages', timeSpent: 2, category: 'Frontend', type: 'bug'},
];

const getFrontendTime = tasks.reduce((acc, item) => {
	if (item.category === 'Frontend') {
		acc += item.timeSpent
	}
	return acc
}, null);
console.log('Общее количество времени, затраченное на работу над задачами из категории \'Frontend\' = ' + getFrontendTime);

const getBugCorrectTime = tasks.reduce((acc, item) => {
	if (item.type === 'bug') {
		acc += item.timeSpent
	}
	return acc
}, null);

console.log('Общее количество времени, затраченное на работу над задачами типа \'bug\' = ' + getBugCorrectTime);

const getNumberOfUI = tasks.filter(task => {
	return task.title.indexOf('UI') !== -1;
}).length;

console.log('Количество задач, имеющих в названии слово "UI" = '+ getNumberOfUI);

const getNumberOfTasks = tasks.reduce((acc, item) => {
	acc[item.category] = (acc[item.category] || 0) + 1;
	return acc;
}, {});

console.log(getNumberOfTasks);

const getTasksArr = tasks.filter(item => item.timeSpent >= 4)
	.map(name => {
		return ({title: name.title, category: name.category});
	});

console.log(getTasksArr);