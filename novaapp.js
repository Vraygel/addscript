let programming_button = document.querySelector('.programming_button') // кнопка "програмирование скрита"
let wrapper_programming = document.querySelector('.wrapper_programming') // контейнер програмирование скрипта
let list_button = document.querySelector('.list_button') // кнопка "вопросы и ответы"
let wrapper_list = document.querySelector('.wrapper_list') // контейнер список вопросов и ответов
let work_button = document.querySelector('.work_button') // кнопка "Показать скрипт"
let wrapper_work = document.querySelector('.wrapper_work') // контейнер работы со скриптом
let addDinamic = document.querySelector('.addDinamic')  // кнопка "добавить динамичекое поле"
let dinamic_div = document.querySelector('.dinamic_div') // контейнер динимических полей добавление
let dinamic_div_prog = document.querySelector('.dinamic_div_prog') // контейнер динимических полей вставки
let dinamic_div_hide = document.querySelectorAll('.dinamic_div_hide') // кнопка "скрыть" динамичекое поле
let myTxtArea = document.querySelector('.myTxtArea ') // textarea редактирования вопроса
let myTxtArea_div = document.querySelector('.myTxtArea_div') // div визуально представляющий вопрос
let insertDinamic = document.querySelector('.insertDinamic') // кнопка "Вставить Динамическое поле"
let dinamic_save = document.querySelector('.dinamic_save') // кнопка "Сохранить" Динамическое поле
let dinamic_list = document.querySelectorAll('.dinamic_list') // контейнер списка динамических полей добавления
// let dinamic_list_prog = document.querySelector('.dinamic_list_prog') // контейнеры списка динамических полей втавки


let question_answer = [] // массив содержащий все объекты вопросов и ответов
let dinamicListArr = [] // массив содержащий все объекты динамических полей

programming_button.addEventListener('click', () => programming_buttonClick()) // кнопка "програмирование скрита" событие клик

function programming_buttonClick() {
	wrapper_programming.style.display = 'block'
	wrapper_work.style.display = 'none'
	wrapper_list.style.display = 'none'
}

list_button.addEventListener('click', () => list_buttonClick()) // кнопка "вопросы и ответы" событие клик

function list_buttonClick() {
	wrapper_list.style.display = 'flex'
	wrapper_work.style.display = 'none'
	wrapper_programming.style.display = 'none'
}

work_button.addEventListener('click', () => work_buttonClick()) // кнопка "Показать скрипт" событие клик

function work_buttonClick() {
	wrapper_work.style.display = 'block'
	wrapper_list.style.display = 'none'
	wrapper_programming.style.display = 'none'
}

for (const iterator of dinamic_div_hide) { // для всех кнопок "скрыть" динамичекое поле
	iterator.addEventListener('click', (event) => { // событие клик
		dinamic_div.style.display = 'none'
		dinamic_div_prog.style.display = 'none'
	})
}

myTxtArea.addEventListener('input', (event) => { // текст из myTxtArea транслируется в myTxtArea_div
	myTxtArea_div.innerHTML = `<p class='myTxtArea_div_p'>${myTxtArea.value}</p>`
})

insertDinamic.addEventListener('click', (event) => insertDinamicClick(event)) // кнопка "вставить динамичекое поле" событие клик


function insertDinamicClick(event) {
	event.preventDefault()
	dinamic_div_prog.style.display = 'block'
	dinamicListFunc('dinamic_add', 'Добавить') // запускаем отображение списка динамических полей с кнопкой "Добавить"
	dinamicAddClick() // добавление динамического поля в текст 

}

function dinamicAddClick() { // добавление динамического поля в текст 
	let dinamic_add = document.querySelectorAll('.dinamic_add') // ищем все кнопки "Добавить"

	for (const iterator of dinamic_add) { // для каждой кнопки

		iterator.addEventListener('click', (e) => { // событие клик

			e.preventDefault()
			let id = iterator.getAttribute('id') // получаем id кнопки
			let input = iterator.closest('.dinamic_list_item').querySelector('input') // ищем соседний input (в родителе)
			let name = input.getAttribute('name') // получаем значение атрибута name найденного input
			let placeholder = input.getAttribute('placeholder')  // получаем значение атрибута placeholder найденного input
			let temp = document.createElement('input') // создаем новый input
			temp.classList.add('dinamic_input') // устанавливаем класс
			temp.setAttribute('id', id) // устанавливаем значение атрубута id
			temp.setAttribute('name', name) // устанавливаем значение атрубута name
			temp.setAttribute('placeholder', placeholder) // устанавливаем значение атрубута placeholder

			try {
				var range = window.getSelection().getRangeAt(0);
				console.log(range);
			} catch (err) {
				console.log(err);
				alert('Выберите место для вставки')
			}

			if (range.startContainer.parentNode.classList.contains('myTxtArea_div_p')) {
				range.extractContents();
				range.insertNode(temp);
				dinamic_list.innerHTML = ''
			} else {
				alert('Выберите место для вставки')
			}
		})
	}
}

addDinamic.addEventListener('click', (event) => addDinamicClick()) // кнопка "добавить динамичекое поле" событие клик

function addDinamicClick() {
	dinamic_div.style.display = 'block' // контейнер динимических полей добавление

	dinamicListFunc('dinamic_dell', 'Удалить') // отображение списка динамических полей с кнопкой "удалить" динамическое поле
}

function dinamicListFunc(buttonClass, buttonValue) { // отображение списка динамических полей 

	for (const iterator of dinamic_list) { // контейнер списка динамических полей добавления
		iterator.innerHTML = '' // очищаем
	}

	if (dinamicListArrInlocalStorage()) { // если есть сохраненный dinamicListArr и он не пустой получаем dinamicListArr

		dinamicListArr.forEach(element => { // для каждого объекта (элемента) динамического поля

			for (const iterator of dinamic_list) { // для каждого dinamic_lista
				iterator.innerHTML += `
					<div class='dinamic_list_item'>
						Системное имя: ${element.name};
						Подсказка: ${element.placeholder};
						На странице: <input class="dinamic_input" id="${element.id}" name="${element.name}" type="text" placeholder="${element.placeholder}">
						<button class="${buttonClass}" id="${element.id}">${buttonValue}</button>
						<br>
					</div>
					`
			}
		});

		// dinamic_add = []
		// dinamic_add = document.querySelectorAll('.dinamic_add')
		// dinamicAddClick(dinamic_add) 
		dinamicDellFunc() // запускаем функцию удаления динамичеого поля
	}
	else { // иначе `Динамические поля не созданы`
		for (const iterator of dinamic_list) {
			iterator.innerHTML = `Динамические поля не созданы`
		}

	}
}

dinamic_save.addEventListener('click', () => dinamic_saveClick()) // кнопка "Сохранить" Динамическое поле событие "Клик"

function dinamic_saveClick() {

	let dinamicListObj = {} // объект содержащий информацию о динамическом поле
	let id = getId(length = 16) // генерация случайного номера ID

	let name = document.querySelector('input[name="name"]') // ищем input с атрубутом name="name"
	let placeholder = document.querySelector('input[name="placeholder"]')// ищем input с атрубутом name="placeholder"

	dinamicListObj.id = id // записываем в объект динамичекого поля id
	dinamicListObj.name = name.value // записываем в объект динамичекого поля name 
	dinamicListObj.placeholder = placeholder.value // записываем в объект динамичекого поля placeholder

	dinamicListArr.push(dinamicListObj) // добавляем в массив динамических полей объект нового динамического поля

	let json = JSON.stringify(dinamicListArr) // создаем JSON из массива динамических полей
	localStorage.setItem('dinamicListArr', json) // сохраняем в localStorage JSON массива динамических полей

	name.value = '' // очищаем input name
	placeholder.value = '' // очищаем input placeholder

	dinamicListFunc('dinamic_dell', 'Удалить') // запускаем отображение списка динамических полей с кнопкой удалить
	dinamicDellFunc() // запускаем функцию удаления динамичеого поля
}


function dinamicDellFunc() { // функция удаления динамичеого поля
	let dinamic_dell = document.querySelectorAll('.dinamic_dell') // ищем все кнопки "Удалить" динамическое поле

	dinamicListArrInlocalStorage()// проверяем существование сохраненного в localStorage массива dinamicListArr

	for (const iterator of dinamic_dell) { // для каждой найденой кнопки

		iterator.addEventListener('click', (e) => { // событие клик
			let id = e.target.getAttribute('id') // получаем id кнопки
			e.target.parentElement.remove() //удаляем кнопку
			dinamicListArr.forEach((element, index, arr) => { // для каждого объекта (элемента) динамического поля
				if (element.id == id) { // если id элемента равно с id кнопки
					arr.splice(index, 1) // удаляем этот элемент из массива dinamicListArr
				}
			});
			let json = JSON.stringify(dinamicListArr); // создаем JSON массива dinamicListArr
			localStorage.setItem('dinamicListArr', json) // записываем JSON массива dinamicListArr в localStorage
			dinamicListFunc('dinamic_dell', 'Удалить') // запускаем отображение списка динамических полей с кнопкой удалить
		})
	}
}




















function dinamicListArrInlocalStorage() { // проверяем существование сохраненного в localStorage массива dinamicListArr

	if (localStorage.getItem('dinamicListArr') && localStorage.getItem('dinamicListArr').length != 2) { // если есть сохраненный dinamicListArr и он не пустой
		let json = localStorage.getItem('dinamicListArr') // получаем JSON dinamicListArr
		dinamicListArr = JSON.parse(json) // парсим JSON dinamicListArr
		return true
	}
	else {
		return false
	}
}




function getId(length = 16) { // генерация случайного номера ID
	let chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

	let res = '';

	for (let i = 0; i < length; i++) {
		res += chars[Math.floor(Math.random() * chars.length)];
	}
	return res;
}