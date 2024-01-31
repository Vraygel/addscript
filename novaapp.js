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
let addquestion = document.querySelector('.addquestion') // кнопка "готово" (сохранить вопрос-ответ)
let questions = document.querySelector('.questions') // контейнер всех вопросов
let addanswer = document.querySelector('.addanswer') // ищем кнопку "Добавить ответ"
let wrapanswer = document.querySelector('.wrapanswer') // контейнер ответов на вопрос
let answers_false = document.querySelector('.answers_false') //контейнер ответов без продолжения
let myForm_h2 = document.querySelector('.myForm_h2') // заголовок редактирования вопроса (сам вопрос)
let answers_false_beginning = document.querySelector('.answers_false_beginning') // контейнер ответов без начала
let answers = document.querySelector('.answers') // контейнер всех ответов на странице вопросов и ответов
let answers_head = document.querySelector('.answers_head') // контейнер всех ответов на странице програмирования скрипта
let wrapper_false_answers_head = document.querySelector('.wrapper_false_answers_head') // контейнер контейнера всех ответов на странице програмирования скрипта
let addanswer_from_list = document.querySelector('.addanswer_from_list') // кнопка "добавить готовый ответ"
let head_p = document.querySelector('.head_p') // кнопка изменения головного ответа для вопроса
let format_em = document.querySelector('.format_em') // кнопка "Курсив"
let format_strong = document.querySelector('.format_strong') // кнопка "Жирный"
let format_color = document.querySelector('.format_color') // кнопка "Цвет"
let mceContainer = document.querySelector('.mce-container') // контейнер цветов
let mini_but_color = document.querySelectorAll('.mini_but_color') // мини кнопка цвета
let wrapp_dinamic_add = document.querySelector('.wrapp_dinamic_add') // контейнер добавления динамического поля
// let dinamic_div_prog = document.querySelector('.dinamic_div_prog') // контейнер вставки динамического поля
let save_script = document.querySelector('.save_script') // кнопка сохранить скрипт
let wrap_scriptnam_list = document.querySelector('.wrap_scriptnam_list') // контейнер наименований скриптов
let wrap_scriptnam_list_p = document.querySelector('.wrap_scriptnam_list_p') // контейнер списка наименований скриптов
let select_script = document.querySelector('.select_script') // кнопка выбрать скрипт
let menu = document.querySelector('.menu') // кнопка выбрать скрипт




let question_answer = [] // массив содержащий все объекты вопросов и ответов
let dinamicListArr = [] // массив содержащий все объекты динамических полей
// let answerNoBeginning = [] // массив объектов вопросы без начала
// let scriptName = {} // оъект хрянящией названия скприптов
let scriptsId// переменная содержит id скрипта с которым идет работа

let scripts = [] // массив содержащий все скрипты



select_script.addEventListener('click', (event) =>{
	lineRemove()
	wrap_scriptnam_list_p.style.display = 'block'
	wrap_scriptnam_list.style.display = 'block'
	wrapper_work.style.display = 'none'
	wrapper_programming.style.display = 'none'
	wrapper_list.style.display = 'none'
	list_button.style.display = 'none'
	work_button.style.display = 'none'

	})


// localStorage.clear()
// console.log(localStorage);



// checkScriptsInLocalStorage()



outputNameScripts() // отображение наименований скриптов в выпадающем списке

save_script.addEventListener('click', (event) =>{
	menu.style.display = 'blok'
	list_button.style.display = 'inline'
	work_button.style.display = 'inline'
	wrap_scriptnam_list_p.style.display = 'none'
	programming_buttonClick()
	addScript() 
	})

function addScript() {

	// if (localStorage.getItem('scriptName')) {// если есть сохраненный scriptName
	// 	let json = localStorage.getItem('scriptName') // получаем JSON scriptName
	// 	scriptName = JSON.parse(json) // парсим JSON scriptName
	// 	console.log(scriptName);
	// }

	// Получаем значения из полей ввода
	// let systemName = document.querySelector('.script_systemName')
	
	let displayName = document.querySelector('.script_displayName')

	// Проверяем, что поле не пустое
	if (displayName.value) {

		scriptsId = getId()

		let newObjScript = {}
		newObjScript.idScript = scriptsId,
			newObjScript.nameScript = displayName.value,
			// newObjScript.question_answer = [],
			// newObjScript.dinamicListArr = []

		// if (checkScriptsInLocalStorage()) {
			
		// }
		 // получаем значение массива scripts
		scripts.push(newObjScript) // добавляем новый объект скрипта в массив scripts
		// saveScriptsToLocalStorage() // сохраняем в localStorage массив scripts

		question_answer = [] // очищаем массив question_answer
		question_answerArrSetlocalStorage() // записываем в localStorage пустой массив
		dinamicListArr = [] // очищаем массив dinamicListArr
		saveDinamicListArrToLocalStorage() // записываем в localStorage пустой массив

		displayName.value = ''
		
		outputNameScripts() // отображение наименований скриптов в выпадающем списке
	} else {
		// Если какое-то из полей пусто, выводим предупреждение
		alert('Пожалуйста, заполните поле.');
		return
	}
}


// fruitSelect.addEventListener('change', (event) => outputNameScripts(event))

 function outputNameScripts() { // отображение наименований скриптов в выпадающем списке
	
	wrap_scriptnam_list_p.innerHTML = ''

	// checkScriptsInLocalStorage() // получаем значение массива scripts
	// console.log(scripts);
	// debugger
	if (checkScriptsInLocalStorage()) {
		scripts.forEach(element => {
			let {idScript, nameScript} = element
	
			wrap_scriptnam_list_p.innerHTML +=`
			<div class="wrapper_script_list_p">
			<p class="script_list_p" id="${idScript}">${nameScript}</p>
			<button class="script_list_p_dell" id="${idScript}">Удалить</button>
			<button class="script_list_p_rename" id="${idScript}">Переименовать</button>
			</div>
		 `
			
		});
	}
	
	let script_list_p = document.querySelectorAll('.script_list_p') // ищем все параграфы с наименованием скрипта
	let script_list_p_dell = document.querySelectorAll('.script_list_p_dell') // ищем все кнопки удалить
	let script_list_p_rename = document.querySelectorAll('.script_list_p_rename') // ищем кнопки переименовать
	workingWithScriptName(script_list_p, script_list_p_dell, script_list_p_rename)
 }

function workingWithScriptName(script_list_p, script_list_p_dell, script_list_p_rename) {
	checkScriptsInLocalStorage()
	for (const iterator of script_list_p) {
		iterator.addEventListener('click', (event) =>{
		let id = iterator.getAttribute('id')
	

			scriptsId = id


			let script = scripts.find(item => item.idScript == id);

			question_answer = script.question_answer
			dinamicListArr = script.dinamicListArr

			question_answerArrSetlocalStorage() // записываем в localStorage массив question_answer
			saveDinamicListArrToLocalStorage() // записываем в localStorage массив DinamicListArr

			wrap_scriptnam_list.style.display = 'none'
			menu.style.display = 'block'
			list_button.style.display = 'inline'
			work_button.style.display = 'inline'

			list_buttonClick()
			})
	}

	for (const iterator of script_list_p_rename) {
		iterator.addEventListener('click', (event) =>{
			

			// console.log(iterator.parentElement.firstElementChild.remove);
			let parentElement = iterator.parentElement
			iterator.parentElement.firstElementChild.remove()
			iterator.className = 'script_list_p_rename_save'
			iterator.textContent = 'Сохранить'
{/* <p class="script_list_p" id="${idScript}">${nameScript}</p> */}

			// Создаем новый элемент input
			const inputElement = document.createElement('input');

			// Вставляем input как первого потомка
			parentElement.insertBefore(inputElement, parentElement.firstChild);

			// Можно также установить атрибуты, стили и другие свойства для нового input
			inputElement.setAttribute('type', 'text');
			inputElement.setAttribute('placeholder', 'Ведите название');
			iterator.addEventListener('click', (event) =>{
				if (inputElement.value) {
					let id = iterator.getAttribute('id')
					scriptsId = id
					let script = scripts.find(obj => obj.idScript === id); // Ищем индекс объекта с заданным id
					script.nameScript = inputElement.value
					saveScriptsToLocalStorage()
					let parentElement = iterator.parentElement
					iterator.parentElement.firstElementChild.remove()
					let pElement = document.createElement('p');
					parentElement.insertBefore(pElement, parentElement.firstChild);
					pElement.setAttribute('id', `${id}`);
					pElement.setAttribute('class', 'script_list_p');
					pElement.textContent = inputElement.value
					iterator.className = 'script_list_p_rename'
					iterator.textContent = 'Переименовать'
					location.reload()

				} else {
					alert('введите новое название скрипта')
					console.log(inputElement.value)
				}
				
				})


			
			
			// let index = script.indexOf(2, 2);
			// let index 

			
			

			// script.nameScript = 
			// saveScriptsToLocalStorage()
			// saveScriptToLocalStorage() 
			})
	}

	for (const iterator of script_list_p_dell) {
		iterator.addEventListener('click', (event) =>{
			let id = iterator.getAttribute('id')
			console.log();
			scriptsId = id
			checkScriptsInLocalStorage()
			// let index = script.indexOf(2, 2);
			// let index 

			
			let index = scripts.findIndex(obj => obj.idScript === id); // Ищем индекс объекта с заданным id

			// Если объект с заданным id найден, удаляем его из массива
			if (index !== -1) {
				scripts.splice(index, 1);
				console.log(`Объект с id ${id} удален из массива.`);
			} else {
				console.log(`Объект с id ${id} не найден в массиве.`);
			}


			saveScriptsToLocalStorage()
			location.reload()
			


			})
	}
}









head_p.addEventListener('click', (event) => {

	answers_false_beginning.innerHTML = ''
	wrapper_false_answers_head.style.display = 'block' // показываем контейнер контейнера всех ответов на странице програмирования скрипта
	question_answer.forEach(element => {
		for (const key in element.answer_all) {
			let id = key
			let status = element.answer_all[key].answer_status
			let text = element.answer_all[key].answer
			// console.log(element.answer_all[key].answer_status);
			if (status == false) {
				answers_false_beginning.innerHTML += `
				<div class="wrapper_AnswerNoEnd">
				<p class="p_answer_noEnd" status="${status}" id="${id}">${text}</p>
				</div>
				`
			}
		}
	});

	let p_answer_noEnd = document.querySelectorAll('.p_answer_noEnd')
	for (const iterator of p_answer_noEnd) {
		iterator.addEventListener('click', (event) => {
			let idDel = myTxtArea.getAttribute('id')
			let id = iterator.getAttribute('id')
			myForm_h2.textContent = event.target.textContent
			myTxtArea.setAttribute('id', id)
			addquestionClick()
			addquestionList_itemDelete(idDel)
		})
	}
})

function canvasAdd() { // рисование стрелок
	lineRemove()
	let questionList_item = document.querySelectorAll('.questionList_item') // все параграфы всех вопросов
	let p_answer_all = document.querySelectorAll('.p_answer_all') // все параграфы  всех ответов

	questionList_item.forEach(ques => {
		let idQest = ques.getAttribute('id')
		p_answer_all.forEach(answer => {
			let idAnswer = answer.getAttribute('id')
			let idQuestion = answer.getAttribute('idQuestion')
			if (idQest == idAnswer) {
				let line = new LeaderLine(
					answer, ques, { color: '#34C924', size: 5, outlineColor: '#F12B35', outline: true, startSocket: 'bottom', endSocket: 'top', endPlugSize: 0.8 }
				);
				leaderLineGet(line)
			}
			// 	if (idQuestion == idQest) { // не удалять
			// 		let line = new LeaderLine( 
			// 			ques, answer, {color: '#34C924', size: 5, outlineColor: '#F12B35', outline: true, startSocket: 'bottom', endSocket: 'top', endPlugSize: 0.8}
			// 		);
			// 		leaderLineGet(line) 
			// }
		});
	});
}

function leaderLineGet(line) {
	let leaderLine = document.querySelectorAll('.leader-line')
	let lastElem = leaderLine[leaderLine.length - 1];
	let width = +(getComputedStyle(lastElem).width.slice(0, -2))
	if (width < 50) {
		line.startSocket = 'left'
		line.endSocket = 'left'
	}
}

function displayingListQuestions() { // вывод на экран списка всех вопросов
	question_answerArrInlocalStorage() // проверяем существование сохраненного в localStorage массива question_answer

	questions.innerHTML = '' // очищаем контейнер списка всех вопросов
	question_answer.forEach(element => { // для каждого вопроса выводим на экран текст вопроса
		questions.innerHTML += `
		<div class="wrapper_questionList_item droppable dropArea draggable" draggable="true" >
			<p class="questionList_item" id="${element.id}">${element.question}</p>
			<div class="wrapper_AnswerAll"></div>
		</div>
		`
		let wrapper_AnswerAll = document.querySelectorAll('.wrapper_AnswerAll') // ищем только что созданный див wrapper_AnswerAll
		let lastElem = wrapper_AnswerAll[wrapper_AnswerAll.length - 1];

		if (element.answer_all != "ответов на вопрос нет") {
			for (const key in element.answer_all) {
				let id = key
				let status = element.answer_all[key].answer_status
				let text = element.answer_all[key].answer
				let idQuestion = element.answer_all[key].idQuestion
				lastElem.innerHTML += `
						<p class="p_answer_all" status="${status}" id="${id}" idQuestion="${idQuestion}">${text}</p>
				`
			}
		}
	});
}

getGuestionsNoParent()
function getGuestionsNoParent() {
	question_answerArrInlocalStorage() // получаем массив question_answer
	let temp = {} // заглушка
	temp.id = 2
	let tempArr = question_answer.concat()
	tempArr.forEach((element, index) => {
		tempArr.forEach((item) => {
			for (const key in item.answer_all) {
				if (key == element.id) {
					tempArr.splice(index, 1, temp)
				}
			}
		});
	});
	tempArr.forEach((element, index) => {
		if (element.id == 1) {
			tempArr.splice(index, 1)
		}
	})

	let results = tempArr.filter(function (item, index, array) {
		return item.id != 2
	});

	// console.log(results); // Не удалять

	question_answer.forEach(element => {
		for (const iterator of results) {
			// console.log(iterator.id);
			if (element.id == iterator.id) {
			}
		}
	});
}

// programming_button.addEventListener('click', () => programming_buttonClick()) // кнопка "програмирование скрита" событие клик

function programming_buttonClick() { // кнопка "програмирование скрита" событие клик

	wrapper_programming.style.display = 'block'
	wrap_scriptnam_list.style.display = 'block'
	menu.style.display = 'block'
	// list_button.style.display = 'none'
	// work_button.style.display = 'none'
	wrapper_work.style.display = 'none'
	wrapper_list.style.display = 'none'
	wrap_scriptnam_list.style.display = 'none'
	lineRemove() // удаление стрелок
}

list_button.addEventListener('click', () => list_buttonClick()) // кнопка "вопросы и ответы" событие клик

function list_buttonClick() { // кнопка "вопросы и ответы" событие клик
	wrapper_false_answers_head.style.display = 'none'
	wrapper_list.style.display = 'flex'
	wrapper_work.style.display = 'none'
	wrapper_programming.style.display = 'none'
	wrap_scriptnam_list.style.display = 'none'
	dinamic_div_prog.style.display = 'none'
	dinamic_div.style.display = 'none'

	question_answerArrInlocalStorage() // проверяем существование сохраненного в localStorage массива question_answer и получаем его
	displayingListQuestions(question_answer) // вывод на экран списка всех вопросов
	questionList_itemClick() // событие клик по вопросу из списка вопросов
	displayingListAnswerNoEnd(question_answer) // отображение списка ответов без продолжения
	dragGableGo() // перемещение вопросов
	canvasAdd() // рисуем стрелки
}

function lineRemove() { // удаление всех стрелок
	let leaderLine = document.querySelectorAll('.leader-line') // все стрелки
	for (const iterator of leaderLine) {
		iterator.remove()
	}
}

function displayingListAnswerNoEnd(question_answer) { // отображение списка ответов без продолжения
	answers_false.innerHTML = ''
	question_answer.forEach((item) => {
		for (const key in item.answer_all) {
			let status = item.answer_all[key].answer_status

			let id = key
			if (status == false) {
				answers_false.innerHTML += `
				<div class="wrapper_AnswerNoEnd">
					<p class="p_answer_noEnd_false" status="${status}" id="${id}">${item.answer_all[key].answer}</p>
				</div>
				`
			}
		}
	})

	let p_answer_noEnd_false = document.querySelectorAll('.p_answer_noEnd_false') // ищем все ответы без продолжения

	for (const iterator of p_answer_noEnd_false) { // для каждого ответа без вопроса (элемента)
		iterator.addEventListener('click', (event) => {
			let id = iterator.getAttribute('id')
			myTxtArea.setAttribute('id', id)
			iterator.textContent
			myTxtArea.setAttribute('placeholder', 'Задайте вопрос')

			myForm_h2.textContent = iterator.textContent
			wrapanswer.innerHTML = '' // очищаем контейнер ответов
			myTxtArea.value = '' // очищаем текстареа вопроса
			programming_buttonClick() // отображение страницы редактирования вопроса-ответа

		})
	}
}

function questionList_itemClick() { // событие клик по вопросу из списка вопросов
	let questionList_item = document.querySelectorAll('.questionList_item') // ищем все вопросы
	for (const iterator of questionList_item) {
		iterator.addEventListener('click', (event) => {
			let id = event.target.id // получаем id вопроса
			let wrapper_button_questionList_item = document.querySelector('.wrapper_button_questionList_item')// ищем контейнер кнопок
			if (wrapper_button_questionList_item == null) { // если контейнер кнопок не существует
				let wrapper_button_questionList_item = document.createElement('div') // создаем новый div
				wrapper_button_questionList_item.classList.add('wrapper_button_questionList_item') // присваиваем div класс wrapper_button_questionList_item
				iterator.parentElement.append(wrapper_button_questionList_item) // добавляем div в конец родителя
				wrapper_button_questionList_item = document.querySelector('.wrapper_button_questionList_item')// ищем контейнер кнопок
				wrapper_button_questionList_item.innerHTML = // добавляем в wrapper_button_questionList_item кнопки
					`
					<button class="edit_questionList_item">Редактировать</button>
					<button class="delete_questionList_item">Удалить</button>
				`
			} else {
				wrapper_button_questionList_item.remove() // удаляем wrapper_button_questionList_item
			}
			canvasAdd()
			let edit_questionList_item = document.querySelector('.edit_questionList_item') // ищем кнопку edit_questionList_item ("Редактировать")
			let delete_questionList_item = document.querySelector('.delete_questionList_item') // ищем кнопку delete_questionList_item ("Удалить")
			edit_questionList_item.addEventListener('click', (event) => { // событие клик для кнопки "Редактировать"
				addquestionList_itemClick(id) // запускаем функцию редакирования вопроса
			})
			delete_questionList_item.addEventListener('click', (event) => { // событие клик для кнопки "Удалить"
				addquestionList_itemDelete(id) // запускаем функцию удаление вопроса
			})
		})
	}

	addanswer_from_list.addEventListener('click', (event) => {
		let addanswer_list = document.querySelector('.addanswer_list')
		addanswer_list.innerHTML = ''
		for (const iterator of question_answer) {
			console.log(iterator.answer_all);
			for (const key in iterator.answer_all) {

				let status = iterator.answer_all[key].answer_status
				let tempP = `<p class="item_answer_list" status='${status}' id="${key}">${iterator.answer_all[key].answer}</p>`
				addanswer_list.innerHTML += `
				<p class="item_answer_list" status='${status}' id="${key}">${iterator.answer_all[key].answer}</p>
				`
				let item_answer_list = document.querySelectorAll('.item_answer_list')
				for (const iterator of item_answer_list) {
					iterator.addEventListener('click', (event) => {
						let status = event.target.getAttribute('status')
						let id = event.target.getAttribute('id')
						addanswerClick(id, status)
					})
				}
			}
		}
	})
}

function addquestionList_itemDelete(id) { // запускаем функцию удаление вопроса
	question_answerArrInlocalStorage() // получаем массив вопросов-ответов
	let result = question_answer.find(function (item, index, array) {
		if (item.id == id) {
			array.splice(index, 1)
			return item.id == id
		}
	});
	question_answer.forEach((item) => {
		for (const key in item.answer_all) {
			let id = key
			if (id == result.id) {
				item.answer_all[key].answer_status = false
			}
		}
	})
	question_answerArrSetlocalStorage() // записываем в localStorage массив question_answer
	list_buttonClick() // кнопка "вопросы и ответы" событие клик
}

function addquestionList_itemClick(id) { // редакирования вопроса
	programming_buttonClick() // кнопка "програмирование скрита" событие клик отображение поля редактирования вопросов-ответов
	question_answerArrInlocalStorage() // получаем массив ответов-вопросов question_answer
	wrapanswer.innerHTML = '' // очищаем контейнер ответов
	let result = question_answer.find(function (item, index, array) {
		return item.id == id
	});
	myTxtArea.value = result.question
	myTxtArea.setAttribute('id', result.id)
	if (result.id == '1') {
		myForm_h2.textContent = 'Стартовый вопрос'
	} else {
		question_answer.forEach((item) => {
			for (const key in item.answer_all) {
				let id = key
				if (id == result.id) {
					myForm_h2.textContent = item.answer_all[key].answer

				}
			}
		})
	}
	for (const key in result.answer_all) {
		let status = result.answer_all[key].answer_status
		addanswerClick(key, status)
	}
}

work_button.addEventListener('click', () => work_buttonClick()) // кнопка "Показать скрипт" событие клик

function work_buttonClick() { // кнопка "Показать скрипт" событие клик
	wrapper_work.innerHTML = '' // очищаем конейнер работы со скриптом
	wrapper_work.style.display = 'block'
	wrapper_list.style.display = 'none'
	wrapper_programming.style.display = 'none'
	wrap_scriptnam_list.style.display = 'none'
	lineRemove() // удаление стрелок
	question_answerArrInlocalStorage() // получаем значение массива вопросов-ответов question_answer
	
	question_answer.forEach((element, index) => {
		let rez = question_answer.find(item => item.id == 1) // ищмем стартовый вопрос с id 1
		if (element.id == 1) {
			question_answer.splice(index, 1) // вырезаем стартовый вопрос из массива question_answer
			question_answer.splice(0, 0, rez) // втавляем статовый вопрос на первую позицию
			question_answerArrSetlocalStorage() // сохраняем question_answer
		}
		// wrapper_work.innerHTML += `
				
		// 		<div class="wrap_p_work">
			
		// 		${element.questionHTML}
		// 		<br><br>
		// 		</div>
		// 		`
	});
	displayAnswer(question_answer, 1) // отображение вопроса и ответов к нему начиная со стартового вопроса
}



function displayAnswer(question_answer, id) { // отображение вопроса и ответов к нему
	let wrapper_work = document.querySelector('.wrapper_work') // ищем контейнер работы со скриптом
	// wrapper_work.innerHTML = '' // очищаем контейнер работы со скриптом
	// console.log(arr);
	// debugger
	// console.log(arr);
	if (question_answer.length == 0) { // если массив question_answer пустой
		wrapper_work.innerHTML = `
					Скрипт в разработке
					`
	}
	let wrap_p_work = document.querySelector('.wrap_p_work') // ищем контейнер конкретного вопроса с ответами
	if (wrap_p_work) { // если контейнер существует
		wrap_p_work.className = 'wrap_p_work_prev' // присваиваем класс wrap_p_work_prev (предидущий ответ)
	}
	
	for (const iterator of question_answer) {
		// console.log(iterator);

		// for (const key in iterator) {
			// console.log(key);
			// console.log(iterator[key]);
// debugger
			if (iterator.id == id) { // если id вопроса равно id переданного вопроса
				// к контейнеру вопросов и ответов добавляем контейнер вопроса
				wrapper_work.innerHTML += ` 
					<div class="wrap_p_work">
						${iterator.questionHTML}
					<br>
					</div>
				`
				wrap_p_work = document.querySelector('.wrap_p_work') // ищем вновь созданный контейнер конкретного вопроса с ответами

				let temp = '' // создаем пустую переменную
				for (const key in iterator.answer_all) { // для каждого ответа этого вопроса
					temp = iterator.answer_all[key].answer // присваиваем текст ответа
					// к контейнеру конкретного вопроса добавляем тексты ответов
					wrap_p_work.innerHTML += `
						<p class="p_answer_work" id="${key}">${temp}</p>
					`
				}
				break
			}
			
		// }
	}
	wrapper_work.innerHTML += ` 
					<div class="plug">
						
					<br>
					</div>
				`
	nextQuestion() // функция ожидает клик по ответу и запускат отображение вопроса, который следут за этим ответом
}



function nextQuestion() { // функция ожидает клик по ответу и запускат отображение вопроса, который следут за этим ответом
	// debugger
		let p = document.querySelectorAll('.p_answer_work') // ищем все ответы на вопрос

	let wrap_p_work = document.querySelector('.wrap_p_work')

	for (const iterator of p) { // для каждого ответа

		iterator.addEventListener('click', (event) =>{ // подписываемся на событие клик
			
		// debugger
		// console.log(event.target.parentElement.nextElementSibling);
			for (let index = 0; event.target.parentElement.nextElementSibling; index++) { // ищем все последующих соседей и удаляем их
				event.target.parentElement.nextElementSibling.remove()
			}
			let id = event.target.getAttribute('id') // определяем id ответа
			displayAnswer(question_answer, id) // запускаем функцию отображения вопроса по id ответа
			scrollToTop()
			})
		
			
		

	}
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

function insertDinamicClick(event) { // кнопка "вставить динамичекое поле" событие клик
	event.preventDefault()
	dinamic_div_prog.style.display = 'block'
	dinamic_div.style.display = 'none'
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

function addDinamicClick() { // кнопка "добавить динамичекое поле" событие клик
	dinamic_div.style.display = 'block' // контейнер динимических полей добавление
	dinamic_div_prog.style.display = 'none'
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
		dinamicDellFunc() // запускаем функцию удаления динамичеого поля
	}
	else { // иначе `Динамические поля не созданы`
		for (const iterator of dinamic_list) {
			iterator.innerHTML = `Динамические поля не созданы`
		}
	}
}

dinamic_save.addEventListener('click', () => dinamic_saveClick()) // кнопка "Сохранить" Динамическое поле событие "Клик"

function dinamic_saveClick() { // кнопка "Сохранить" Динамическое поле событие "Клик"
	let dinamicListObj = {} // объект содержащий информацию о динамическом поле
	let id = getId(length = 16) // генерация случайного номера ID
	let name = document.querySelector('input[name="name"]') // ищем input с атрубутом name="name"
	let placeholder = document.querySelector('input[name="placeholder"]')// ищем input с атрубутом name="placeholder"
	dinamicListObj.id = id // записываем в объект динамичекого поля id
	dinamicListObj.name = name.value // записываем в объект динамичекого поля name 
	dinamicListObj.placeholder = placeholder.value // записываем в объект динамичекого поля placeholder
	dinamicListArr.push(dinamicListObj) // добавляем в массив динамических полей объект нового динамического поля
	// let json = JSON.stringify(dinamicListArr) // создаем JSON из массива динамических полей
	// localStorage.setItem('dinamicListArr', json) // сохраняем в localStorage JSON массива динамических полей
	saveDinamicListArrToLocalStorage()
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
			// let json = JSON.stringify(dinamicListArr); // создаем JSON массива dinamicListArr
			// localStorage.setItem('dinamicListArr', json) // записываем JSON массива dinamicListArr в localStorage
			saveDinamicListArrToLocalStorage()
			dinamicListFunc('dinamic_dell', 'Удалить') // запускаем отображение списка динамических полей с кнопкой удалить
		})
	}
}

addquestion.addEventListener('click', (event) => addquestionClick()) // кнопка готово
function addquestionClick() {
	// debugger
	event.preventDefault()
	let question = document.querySelector('.question') // ищем текстареа question
	if (question.value == '') {
		alert('Вопрос не может быть пустым')
		return
	}
	let id = question.getAttribute('id') // получаем id текстареа question
	if (question_answerArrInlocalStorage()) { // проверяем существование сохраненного в localStorage массива question_answer 
		question_answer.forEach((element, index, arr) => { // для каждого объекта (элемента) массива вопросов и ответов
			if (element.id == id) { // если уже существует такой элемент
				arr.splice(index, 1) // удаляем этот элемент из массива вопросов и ответов
				question_answerArrSetlocalStorage() // записываем в localStorage массив question_answer
			}
		});
	}

	addQuestionArr(id, question) // добавление нового ответа-вопроса в массив question_answer
	list_buttonClick() // кнопка "вопросы и ответы" событие клик
	
}

addanswer.addEventListener('click', (event) => { // событие клик по кнопке "Добавить ответ"
	let id = getId(length = 16) // получаем ID для ответа
	addanswerClick(id, false) // // добавить текстареа ответа c уникальным ID и status false
})

function addanswerClick(id, status) { // добавить текстареа ответа
	wrapanswer.innerHTML += `
		<div class="wrapper_button_answer">
		<textarea class="answer" status="${status}" id="${id}" cols="30" rows="10" placeholder="Вариант ответа на вопрос"></textarea>
		<button class="deleteAnswer" id="${id}">Удалить ответ</button>
		</div>
	`
	let answer = document.querySelectorAll('.answer') // находим все ответы на вопрос
	if (wrapanswer.querySelectorAll('answer')) { // если ответы существуют
		for (const iterator of answer) { // для каждого ответа (элемента)
			let key = iterator.getAttribute('id') // создаем ключ равный id ответа
			if (localStorage.getItem(`${key}`)) { // если такой ключ есть в localStorage
				iterator.value = localStorage.getItem(`${key}`) // текст ответа бери из localStorage
			}
			iterator.addEventListener('input', () => { // событие input для текстареа ответа
				localStorage.setItem(`${key}`, iterator.value) // записать в localStorage текст ответа с ключем
			})
		}
	}
	deleteAnswerClick() // удаление вопроса при редактировании
}

function deleteAnswerClick() {
	let wrapper_button_answer = document.querySelectorAll('.wrapper_button_answer') // находим все контейнеры ответов
	let deleteAnswer = document.querySelectorAll('.deleteAnswer') // находим все кнопки "Удалить ответ"
	for (const iterator of deleteAnswer) { // для каждой кнопки (элемента) "Удалить ответ"
		iterator.addEventListener('click', (event) => {
			iterator.parentElement.remove() // находим родителя и удаляем весь контейнер
			question_answerArrInlocalStorage()
			console.log(question_answer);
		})
	}
}

function addQuestionArr(id, question) { // добавление нового ответа-вопроса в массив question_answer
	let answer = document.querySelectorAll('.answer') // ищем все текстареа ответов
	let myTxtArea_div = document.querySelector('.myTxtArea_div') // ищем myTxtArea_div (визуальное оформление вопроса)
	let idQuestion = question.getAttribute('id') // получаем Id самого вопроса
	let arr = {} // новый объект вопроса-ответа
	arr.id = id // устанавливаем id нового объект вопроса-ответа равным id ответа на который задаем вопрос
	arr.question = question.value // текст вопроса
	question.value = '' // очищаем поле вопроса
	arr.questionHTML = myTxtArea_div.innerHTML // HTML версия этого вопроса (визуальное оформление вопроса)
	myTxtArea_div.innerHTML = '' // очищаем поле визауального оформления фопроса
	arr.answer_all = {} // новый объект ответов
	if (answer.length == 0) { // если ответов на вопрос нет
		arr.answer_all = {}
	} else {
		for (const iterator of answer) { // для каждого ответа (элемента)
			let status = iterator.getAttribute('status') // получаем значение отрибута status
			if (status.toLowerCase() === "false") {
				status = false;
			} else {
				status = true
			}
			let id = iterator.getAttribute('id') // получаем значение отрибута id
			arr.answer_all[id] = {} // в объект answer_all создаем новый ключ равный id ответа и создаем в нем новый объект конкретного ответа 
			arr.answer_all[id].answer = iterator.value // в объекте нового вопроса указываем текст ответа
			arr.answer_all[id].answer_status = status // в объекте нового вопроса указываем status этого ответа
			arr.answer_all[id].idQuestion = idQuestion // id вопроса на который дали этот ответ
			iterator.value = '' // очищаем поле вопроса

		}
	}
	question_answerArrInlocalStorage() // получаем сохраненный в localStorage массива question_answer 
	question_answer.push(arr) // добавляем в массив question_answer новый объект вопроса-ответа
	answerTrueFalse(question_answer, id) // устанавливаем ответу на который задали вопрос answer_status равный trye
	question_answerArrSetlocalStorage() // записываем в localStorage массив question_answer
}

function answerTrueFalse(question_answer, id) { // устанавливаем ответу на который задали вопрос answer_status равный trye
	for (const iterator of question_answer) {
		if (iterator.answer_all[id]) {
			iterator.answer_all[id].answer_status = true
		}
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

function saveDinamicListArrToLocalStorage() { // сохранение в локасторадж массива DinamicListArr
	try {
			// Преобразовываем переменную в строку JSON
			const jsonString = JSON.stringify(dinamicListArr);
			
			// Сохраняем строку JSON в localStorage под определенным ключом
			localStorage.setItem('dinamicListArr', jsonString);

			console.log('Переменная успешно сохранена в localStorage.');
			saveScriptsToLocalStorage()


	} catch (error) {
			console.error('Ошибка при сохранении переменной в localStorage:', error);
	}
}





function checkScriptsInLocalStorage() { // проверяем существование сохраненного в localStorage объекта scripts
	// Ваш код для проверки наличия переменной в localStorage
	// debugger

	if (localStorage.getItem('scripts')) {
		// scripts = localStorage.getItem('scripts');
			// Обработка случая, когда переменная scripts найдена в localStorage
			let json = localStorage.getItem('scripts') // получаем JSON question_answer
			scripts = JSON.parse(json) // парсим JSON question_answer
			return true;
	} else {
		scripts = []
			// Обработка случая, когда переменная scripts не найдена в localStorage
			console.log('Переменная scripts не найдена в localStorage');
			return false;
	}
}

function saveScriptsToLocalStorage() {
	// debugger
	// Ваш код для сохранения переменной в localStorage
	if (scripts) {
		let script = scripts.find(item => item.idScript == scriptsId);
		// console.log(question_answer);
		if (script) {
			script.question_answer = question_answer
				script.dinamicListArr = dinamicListArr
		}
		
	}

	
	let json = JSON.stringify(scripts) // создаем JSON объекта scripts
	localStorage.setItem('scripts', json);
	console.log('Переменная scripts сохранена в localStorage:', scripts);
}

function question_answerArrInlocalStorage() { // проверяем существование сохраненного в localStorage массива question_answer
	if (localStorage.getItem('question_answer')) {// если есть сохраненный question_answer
		let json = localStorage.getItem('question_answer') // получаем JSON question_answer
		question_answer = JSON.parse(json) // парсим JSON question_answer
		return true
	} else {
		return false
	}
}

function question_answerArrSetlocalStorage() { // записываем в localStorage массив question_answer
	

	let json = JSON.stringify(question_answer) // создаем JSON массива question_answer
	localStorage.setItem('question_answer', json) // записываем JSON массива question_answer в localStorage

	saveScriptsToLocalStorage()
}

function getId(length = 16) { // генерация случайного номера ID
	// Получаем текущий временной момент в виде строки
	let timestamp = Date.now().toString();

	// Генерируем случайные цифры
	let randomDigits = '';
	for (let i = 0; i < timestamp.length; i++) {
		randomDigits += Math.floor(Math.random() * 100).toString();
	}

	// Умножаем каждую цифру временной метки на соответствующую случайную цифру
	let multipliedTimestamp = '';
	for (let i = 0; i < timestamp.length; i++) {
		multipliedTimestamp += (parseInt(timestamp[i]) * parseInt(randomDigits[i])).toString();
	}

	// Получаем случайные 12 символов
	const multiplied = Array.from({ length: 12 }, () => multipliedTimestamp[Math.floor(Math.random() * multipliedTimestamp.length)]).join('');

	// Разбиваем на массив по два символа
	let splitTimestamp = multiplied.match(/.{1}/g);

	// Генерируем случайные символы
	let randomChars = '';
	const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	for (let i = 0; i < 24; i++) {
		randomChars += characters.charAt(Math.floor(Math.random() * characters.length));
	}

	// Разбиваем случайные символы на массив по два символа
	let splitRandomChars = randomChars.match(/.{1,2}/g);

	// Объединяем массивы временной метки и случайных символов
	let mergedArray = splitRandomChars.map((v, i) => v + (splitTimestamp[i] || ""));

	// Перемешиваем объединенный массив
	let shuffledMergedArray = mergedArray.sort(() => Math.random() - 0.5).join('');

	// Разбиваем массив по девять символов и объединяем их через дефис
	const result = shuffledMergedArray.match(/.{1,9}/g).join('-');

	return result;
}

function dragGableGo() {
	let draggableElement = document.querySelectorAll('.draggable');
	let dropArea = document.querySelectorAll('.dropArea')
	let itemDell
	question_answerArrInlocalStorage()
	for (const iterator of draggableElement) {
		iterator.addEventListener('dragstart', function (event) {
			let id = event.target.childNodes[1].getAttribute('id')
			let count = question_answer.findIndex(item => {
				itemDell = item
				return item.id == id
			})
			let temp = {}
			temp.id = 2
			question_answer.splice(count, 1, temp)
		});
	}

	for (const iterator of dropArea) {
		iterator.addEventListener('dragover', function (event) {
			event.preventDefault();
			// Добавляем класс, чтобы стилизовать визуальное отображение целевой области
			iterator.classList.add('active');
		});
	}

	for (const iterator of dropArea) {
		iterator.addEventListener('dragleave', function () {
			// Удаляем класс после того, как курсор покинул целевую область
			iterator.classList.remove('active');
		});
	}

	for (const iterator of dropArea) {
		iterator.addEventListener('drop', function (event) {
			try {
				let id = event.target.childNodes[1].getAttribute('id')
				let count = question_answer.findIndex(item => {
					if (item.id == id) {
					}
					return item.id == id
				})
				question_answer.splice(count, 0, itemDell)
				let tempDel = question_answer.findIndex(item => {
					return item.id == 2
				})
				question_answer.splice(tempDel, 1)
			} catch {
				alert('Что-то пошло не так. Пожалуйста попробуйте снова')
				list_buttonClick()
			}
			question_answerArrSetlocalStorage()
			list_buttonClick()
			event.preventDefault();
			// Удаляем класс после завершения бросания
			iterator.classList.remove('active');
		});
	}
}

format_em.addEventListener("click", (e) => {
	e.preventDefault()
	var range = window.getSelection().getRangeAt(0);
	var selectionContents = range.extractContents();
	var span = document.createElement("span");
	span.style.fontStyle = 'italic';
	span.appendChild(selectionContents);
	range.insertNode(span);
});

format_strong.addEventListener("click", (e) => {
	e.preventDefault()
	var range = window.getSelection().getRangeAt(0);
	var selectionContents = range.extractContents();
	var span = document.createElement("span");
	span.style.fontWeight = "600";
	span.appendChild(selectionContents);
	range.insertNode(span);
});

format_color.addEventListener('click', (e) => {
	e.preventDefault()
	mceContainer.style.display = 'block';

	let textArea = document.querySelector('.myTxtArea');
	let selectionStart = textArea.selectionStart;
	console.log(selectionStart);
	let selectionEnd = textArea.selectionEnd;
	let oldText = textArea.value;

	let prefix = oldText.substring(0, selectionStart);
	let inserted = oldText.substring(selectionStart, selectionEnd);
	console.log(inserted);
	let suffix = oldText.substring(selectionEnd);
	textArea.value = `${prefix}${inserted}${suffix}`;

	for (const item of mini_but_color) {
		
		item.addEventListener('click', (e) => {
			console.log(item.getAttribute('data-mce-color'));
			e.preventDefault()
			var range = window.getSelection().getRangeAt(0);
			var selectionContents = range.extractContents();
			var span = document.createElement("span");
			span.style.color = `${item.getAttribute('data-mce-color')}`;
			console.log(span);
			span.appendChild(selectionContents);
			range.insertNode(span);
			mceContainer.style.display = 'none';
	
		})
	}

})

function scrollToTop() {
	// debugger
	// Получаем ссылку на элемент div, к которому нужно прокрутить страницу
	let wrap_p_work = document.querySelector('.wrap_p_work')

	// Прокручиваем страницу к верху указанного div
	// document.documentElement.scrollTop = wrap_p_work.offsetTop;
	wrap_p_work.scrollIntoView({ behavior: 'smooth' });
}



