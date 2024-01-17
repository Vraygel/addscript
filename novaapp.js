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


let question_answer = [] // массив содержащий все объекты вопросов и ответов
let dinamicListArr = [] // массив содержащий все объекты динамических полей
let answerNoBeginning = [] // массив объектов вопросы без начала

programming_button.addEventListener('click', () => programming_buttonClick()) // кнопка "програмирование скрита" событие клик

function programming_buttonClick() { // кнопка "програмирование скрита" событие клик
	wrapper_programming.style.display = 'block'
	wrapper_work.style.display = 'none'
	wrapper_list.style.display = 'none'
}

list_button.addEventListener('click', () => list_buttonClick()) // кнопка "вопросы и ответы" событие клик

function list_buttonClick() { // кнопка "вопросы и ответы" событие клик
	wrapper_list.style.display = 'flex'
	wrapper_work.style.display = 'none'
	wrapper_programming.style.display = 'none'
	question_answerArrInlocalStorage() // проверяем существование сохраненного в localStorage массива question_answer и получаем его
	displayingListQuestions(question_answer) // вывод на экран списка всех вопросов
	questionList_itemClick() // событие клик по вопросу из списка вопросов
	displayingListAnswerNoEnd(question_answer) // отображение списка ответов без продолжения
	displayingListAnswerNobeginning() // отображение списка ответов без начала
}

function displayingListAnswerNoEnd(question_answer) { // отображение списка ответов без продолжения

	answers_false.innerHTML = ''

	question_answer.forEach((item) => {
		for (const key in item.answer_all) {
			let status = item.answer_all[key].answer_status
			// debugger
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
			// debugger
			myForm_h2.textContent = iterator.textContent
			wrapanswer.innerHTML = '' // очищаем контейнер ответов
			myTxtArea.value = '' // очищаем текстареа вопроса
			programming_buttonClick() // отображение страницы редактирования вопроса-ответа

		})
	}
}


function displayingListQuestions(question_answer) { // вывод на экран списка всех вопросов
	questions.innerHTML = '' // очищаем контейнер списка всех вопросов
	question_answer.forEach(element => { // для каждлого вопроса выводим на экран текст вопроса
		questions.innerHTML += `
		<div class="wrapper_questionList_item">
			<p class="questionList_item" id="${element.id}">${element.question}</p>
			
		</div>
		`
	});
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
			let edit_questionList_item = document.querySelector('.edit_questionList_item') // ищем кнопку edit_questionList_item ("Редактировать")
			let delete_questionList_item = document.querySelector('.delete_questionList_item') // ищем кнопку delete_questionList_item ("Удалить")
			edit_questionList_item.addEventListener('click', (event) =>{ // событие клик для кнопки "Редактировать"
				addquestionList_itemClick(id) // запускаем функцию редакирования вопроса
				})
				delete_questionList_item.addEventListener('click', (event) =>{ // событие клик для кнопки "Удалить"
					addquestionList_itemDelete(id) // запускаем функцию удаление вопроса
					})

				
		})

			
		
	

	}

	// addquestionList_itemClick(questionList_item)
	// wrapAnswerAdd.innerHTML = ''

	// question_answer.forEach(function (item) {

	// 	for (const iterator in item.answer_all) {
	// 		// debugger
	// 		let status = item.answer_all[iterator].answer_status
	// 		if (status == 'false') {
	// 			let tempP = `<p class="p_answer_false" status='${status}' id="${iterator}">${item.answer_all[iterator].answer}</p>`
	// 			// wrapAnswerAdd.innerHTML += `
	// 			// 		${tempP}
	// 			// 		<br>
	// 			// 		`
	// 		}
	// 	}

	// 	// p_answer_falseClick()
	// });

}

function addquestionList_itemDelete(id) { // запускаем функцию удаление вопроса
	question_answerArrInlocalStorage() // получаем массив вопросов-ответов

	let result = question_answer.find(function(item, index, array) {
		// console.log(item);
		
		if (item.id == id) {
			array.splice(index, 1)
			return item.id == id
		}
		
		
	});

	for (const key in result.answer_all) {
		let temp = {}
		temp[key] = result.answer_all[key]
		result.answer_all[key].beginning = false
		answerNoBeginning.push(temp)
		let json = JSON.stringify(answerNoBeginning)
		localStorage.setItem('answerNoBeginning', json)
	}

	question_answer.forEach((item) => {
	
		for (const key in item.answer_all) {
			let id = key
			if (id == result.id) {
				item.answer_all[key].answer_status = false

			}
		}
	})

	question_answerArrSetlocalStorage(question_answer) // записываем в localStorage массив question_answer
	list_buttonClick() // кнопка "вопросы и ответы" событие клик

}


function displayingListAnswerNobeginning() { // отображения списка ответов без начала
	question_answerArrInlocalStorage() // получаем массив вопросов-ответов
	answers_false_beginning.innerHTML = '' // очищаем контейнер ответов без начала
	if (localStorage.getItem('answerNoBeginning')) {
		let json = localStorage.getItem('answerNoBeginning')
		answerNoBeginning = JSON.parse(json)
	}
	answers_false_beginning.innerHTML = ''
	console.log(answerNoBeginning);
	for (const iterator of answerNoBeginning) {
		console.log(iterator);
		for (const key in iterator) {
			console.log(iterator[key]);
			console.log(key);
			let id = key
			let status = iterator[key].answer_status
			let text = iterator[key].answer
				answers_false_beginning.innerHTML += `
					<div class="wrapper_AnswerNoBeginning">
							<p class="p_answer_noBeginning_false" status="${status}" id="${id}">${text}</p>
					</div>
					`
		}
	}



	
	// question_answer.forEach((item) => {
	// 	for (const key in item.answer_all) {
	// 		// console.log(item.answer_all[key].beginning);
	// 		let status = item.answer_all[key].beginning
	// 		// debugger
	// 		let id = key
	// 		if (status == false) {
				
	// 		}
	// 	}
	// })



}





function addquestionList_itemClick(id) { // редакирования вопроса
	programming_buttonClick() // кнопка "програмирование скрита" событие клик отображение поля редактирования вопросов-ответов
	question_answerArrInlocalStorage() // получаем массив ответов-вопросов question_answer
	wrapanswer.innerHTML = '' // очищаем контейнер ответов

 let result = question_answer.find(function(item, index, array) {
	return item.id == id
});

myTxtArea.value = result.question
myTxtArea.setAttribute('id', result.id)
// debugger
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







// 	for (const iterator of questionList_item) { // для каждого
		
// 		iterator.addEventListener('click', (event) =>{
// // debugger
// 			wrapprogramming.style.display = 'block'
						
// 			// tempP = ''
// 			let text = event.target.textContent
// 			let id = event.target.getAttribute('id')
// 			// console.log(id);

// 			console.log(id);
// 			console.log(question_answer);
		
// 				for (const iterator of question_answer) {	
// 						if (id == 1) {
// 							answerQuestionAdd('Стартовый вопрос', id, text)

// 						}

// 					for (const key in iterator.answer_all) {
// 						if (key == id) {
// 							answerQuestionAdd(iterator.answer_all[key].answer, id, text)
// 							// console.log(iterator.answer_all[key].answer);
// 							break
// 						} 
						
// 					}
	
// 					if (iterator.id == id) {
// 						for (const key in iterator.answer_all) {
// 							let status = iterator.answer_all[key].answer_status
// 							addanswerClick(key, status)
// 							// console.log(key);
// 						}
// 					}
// 					}
				
// 				addDinamicClick() 
// 			})
// 	}
	
 }






work_button.addEventListener('click', () => work_buttonClick()) // кнопка "Показать скрипт" событие клик

function work_buttonClick() { // кнопка "Показать скрипт" событие клик
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

function insertDinamicClick(event) { // кнопка "вставить динамичекое поле" событие клик
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

function addDinamicClick() { // кнопка "добавить динамичекое поле" событие клик
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

function dinamic_saveClick() { // кнопка "Сохранить" Динамическое поле событие "Клик"

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

addquestion.addEventListener('click', (event) => addquestionClick(event)) // кнопка готово

function addquestionClick(event) {
	event.preventDefault()
	let question = document.querySelector('.question') // ищем текстареа question
	let id = question.getAttribute('id') // получаем id текстареа question

	if (question_answerArrInlocalStorage()) { // проверяем существование сохраненного в localStorage массива question_answer 

		question_answer.forEach((element, index, arr) => { // для каждого объекта (элемента) массива вопросов и ответов
			if (element.id == id) { // если уже существует такой элемент
				arr.splice(index, 1) // удаляем этот элемент из массива вопросов и ответов

				question_answerArrSetlocalStorage(question_answer) // записываем в localStorage массив question_answer
			}
		});
	}

	addQuestionArr(id, question) // добавление нового ответа-вопроса в массив question_answer
	list_buttonClick() // кнопка "вопросы и ответы" событие клик












	// wrapanswer.innerHTML = ``
	// addquestion.style.display = 'none'
	// wrapquestion.innerHTML = ``
	// addanswer.style.display = 'none'

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
		iterator.addEventListener('click', (event) =>{
			iterator.parentElement.remove() // находим родителя и удаляем весь контейнер
			question_answerArrInlocalStorage()
			console.log(question_answer);
			})


		
	}
	
}


// function deleteAnswerClick() { // удаление всей ветки ответа
// 	let deleteAnswer = document.querySelectorAll('.deleteAnswer')
// 	for (const iterator of deleteAnswer) {
// 		iterator.addEventListener('click', (event) => {
// 			let result = confirm('Вы уверенны что хотите удалить этот ответ? (будут удалены все ответы и вопросы в этой ветке)')
// 			if (result) {
// 				for (const item of question_answer) {
// 					for (const key in item.answer_all) {
// 						if (key == iterator.id) {
// 							questDelete(key)
// 						}
// 					}
// 				}
// 				iterator.previousElementSibling.remove()
// 				iterator.remove()
// 			}
// 		})
// 	}
// }







function addQuestionArr(id, question) { // добавление нового ответа-вопроса в массив question_answer
	let answer = document.querySelectorAll('.answer') // ищем все текстареа ответов
	let myTxtArea_div = document.querySelector('.myTxtArea_div') // ищем myTxtArea_div (визуальное оформление вопроса)

	let arr = {} // новый объект вопроса-ответа
	arr.id = id // устанавливаем id нового объект вопроса-ответа равным id заданного вопроса
	arr.question = question.value // текст вопроса
	arr.questionHTML = myTxtArea_div.innerHTML // HTML версия этого вопроса (визуальное оформление вопроса)
	arr.answer_all = {} // новый объект ответов

	if (answer.length == 0) { // если ответов на вопрос нет
		arr.answer_all = 'ответов на вопрос нет'
	} else {
		for (const iterator of answer) { // для каждого ответа (элемента)
			let status = iterator.getAttribute('status') // получаем значение отрибута status
			if (status.toLowerCase() === "false") {
				status = false;
			} else{
				status = true
			}
			let id = iterator.getAttribute('id') // получаем значение отрибута id
			arr.answer_all[id] = {} // в объект answer_all создаем новый ключ равный id ответа и создаем в нем новый объект конкретного ответа 
			arr.answer_all[id].answer = iterator.value // в объекте нового вопроса указываем текст ответа
			arr.answer_all[id].answer_status = status // в объекте нового вопроса указываем status этого ответа
		}
	}
	question_answerArrInlocalStorage() // получаем сохраненный в localStorage массива question_answer 

// debugger
	

	
	question_answer.push(arr) // добавляем в массив question_answer новый объект вопроса-ответа
	answerTrueFalse(question_answer, id) // устанавливаем ответу на который задали вопрос answer_status равный trye
	question_answerArrSetlocalStorage(question_answer) // записываем в localStorage массив question_answer
}

function answerTrueFalse(question_answer, id) { // устанавливаем ответу на который задали вопрос answer_status равный trye
	for (const iterator of question_answer) {
		if (iterator.answer_all[id]) {
			iterator.answer_all[id].answer_status = true
			console.log(question_answer);
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

function question_answerArrInlocalStorage() { // проверяем существование сохраненного в localStorage массива question_answer

	if (localStorage.getItem('question_answer')) {// если есть сохраненный question_answer
		let json = localStorage.getItem('question_answer') // получаем JSON question_answer
		question_answer = JSON.parse(json) // парсим JSON question_answer
		return true
	} else {
		return false
	}
}

function question_answerArrSetlocalStorage(question_answer) // записываем в localStorage массив question_answer
{
	let json = JSON.stringify(question_answer) // создаем JSON массива question_answer
	localStorage.setItem('question_answer', json) // записываем JSON массива question_answer в localStorage
}



function getId(length = 16) { // генерация случайного номера ID
	let chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

	let res = '';

	for (let i = 0; i < length; i++) {
		res += chars[Math.floor(Math.random() * chars.length)];
	}
	return res;
}


localStorage.clear()