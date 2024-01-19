let wrapanswer = document.querySelector('.wrapanswer')
let addanswer = document.querySelector('.addanswer')
let addanswer_from_list = document.querySelector('.addanswer_from_list')
let addquestion = document.querySelector('.addquestion')
let wrapwork = document.querySelector('.wrapwork')
let wrapAnswerAdd = document.querySelector('.wrapAnswerAdd')
let wrapquestion = document.querySelector('.wrapquestion')
let wrapperAnswerButton = document.querySelector('.wrapperAnswerButton')
let displayAnswer_button = document.querySelector('.displayAnswer_button')
// let myTxtArea_div = document.querySelector('.myTxtArea_div')
let wrapperAnswerAdd = document.querySelector('.wrapperAnswerAdd')
let wrapprogramming = document.querySelector('.wrapprogramming')
let programming_button = document.querySelector('.programming_button')
let addquestionList = document.querySelector('.addquestionList')
let addquestionList_item

let question_answer = []
wrapwork.style.display = 'none'






programming_button.addEventListener('click', (event) =>{
	programming_buttonClick()
	
})


function programming_buttonClick() {
	if (localStorage.getItem('question_answer')) {
		wrapperAnswerAdd.style.display = 'block'
		wrapprogramming.style.display = 'none'
		let json = localStorage.getItem('question_answer')
		question_answer = JSON.parse(json)
		

		addquestionList.innerHTML = '' 
		question_answer.forEach(element => {
			// console.log(element.question);
			addquestionList.innerHTML += `
			<p class="addquestionList_item" id="${element.id}">${element.question}</p>
			`
		});
	} else {
		wrapperAnswerAdd.style.display = 'block'
		wrapprogramming.style.display = 'block'
	}
	wrapwork.style.display = 'none'
	addquestionList_item = document.querySelectorAll('.addquestionList_item')
	wrapAnswerAdd.innerHTML = ''
	// console.log(question_answer);

	question_answer.forEach(function (item) {
		
		for (const iterator in item.answer_all) {
			// debugger
			let status = item.answer_all[iterator].answer_status
			
			if (status == 'false') {
				let tempP = `<p class="p_answer_false" status='${status}' id="${iterator}">${item.answer_all[iterator].answer}</p>`
				wrapAnswerAdd.innerHTML += `
						${tempP}
						<br>
						`
			}
		}

		p_answer_falseClick()
	});

	addquestionList_itemClick(addquestionList_item)
}


 function addquestionList_itemClick(addquestionList_item) {
	
	wrapanswer.innerHTML = ''
	for (const iterator of addquestionList_item) {
		
		iterator.addEventListener('click', (event) =>{
// debugger
			wrapprogramming.style.display = 'block'
						
			// tempP = ''
			let text = event.target.textContent
			let id = event.target.getAttribute('id')
			// console.log(id);

			console.log(id);
			console.log(question_answer);
		
				for (const iterator of question_answer) {	
						if (id == 1) {
							answerQuestionAdd('Стартовый вопрос', id, text)

						}

					for (const key in iterator.answer_all) {
						if (key == id) {
							answerQuestionAdd(iterator.answer_all[key].answer, id, text)
							// console.log(iterator.answer_all[key].answer);
							break
						} 
						
					}
	
					if (iterator.id == id) {
						for (const key in iterator.answer_all) {
							let status = iterator.answer_all[key].answer_status
							addanswerClick(key, status)
							// console.log(key);
						}
					}
					}
				
				addDinamicClick() 
			})
	}
	
 }

 let questDelete_button = document.querySelector('.questDelete_button')

 questDelete_button.addEventListener('click', (event) =>{

	let result = confirm('Вы уверенны что хотите удалить этот вопрос? (будут удалены все вопросы и ответы в этой ветке)');
	// console.log(typeof(result))
	if (result) {
		// console.log('согласен');
		let question = document.querySelector('.question')
		let idQuestion = question.getAttribute('id')
		questDelete(idQuestion)

	} else {
		// console.log('отказался');
	}

	programming_buttonClick()
	
	})







	

 function questDelete(idQuestion) {
	
	if (localStorage.getItem('question_answer')) {
		let json = localStorage.getItem('question_answer')
		question_answer = JSON.parse(json)
		console.log(question_answer);
	}
	
	// console.log(idQuestion);


	question_answer.forEach((item, index, arr) => {

		if (item.id == idQuestion) {
			console.log(item);
			console.log(item.id);
			for (const iterator of question_answer) {
				for (const key in iterator.answer_all) {
					if (item.id == key) {
						console.log(iterator.answer_all[key].answer_status = 'false');

					}
					
				}
			}

			for (const key in item.answer_all) {
				console.log(key);

				arr.splice(index, 1)
				let json = JSON.stringify(question_answer);
				localStorage.setItem('question_answer', json)

// debugger
				questDelete(key)
			}
			


		}

	});
	
	

	console.log(question_answer);
 }


displayAnswer_button.addEventListener('click', (event) =>{


	
	wrapperAnswerAdd.style.display = 'none'
	wrapprogramming.style.display = 'none'
	wrapwork.style.display = 'block'
	wrapwork.innerHTML = ``
	
	if (localStorage.getItem('question_answer')) {
		let json = localStorage.getItem('question_answer')
		question_answer = JSON.parse(json)
		console.log(question_answer);
	}


	displayAnswer(question_answer, 1)
	console.log(question_answer);
	})



let id = getId();



// let result = question_answer.find(function (item, index, array) {
	
// 	if (item.id == 'WgxV4oDS0maxwRha') {
// 		displayQuestion(item, item.id)
// 		displayAnswer(item, item.id)
// 	}

// 	return item.id == 'WgxV4oDS0maxwRha'
// 	// если true - возвращается текущий элемент и перебор прерывается
// 	// если все итерации оказались ложными, возвращается undefined
// });


function displayQuestion(item, key) {
	wrapwork.innerHTML = `
		${item.question}
	`
}

function displayAnswer(arr, id) {
	let wrapwork = document.querySelector('.wrapwork')
	// console.log(arr);
	// debugger
	console.log(arr);
	if (arr.length == 0) {
		// alert('Скрипт в')

		wrapwork.innerHTML = `
					
					Скрипт в разработке
					
					`
	
	}
	let wrap_p_work = document.querySelector('.wrap_p_work')
	if (wrap_p_work) {
		wrap_p_work.className = 'wrap_p_work_prev'
	}
	
	

	for (const iterator of arr) {
		// console.log(iterator);

		for (const key in iterator) {
			// console.log(key);
			// console.log(iterator[key]);

			if (iterator[key] == id && key =='id') {
				wrapwork.innerHTML += `
				
				<div class="wrap_p_work">
				
				${iterator.questionHTML}
				<br><br>
				</div>
				`
				wrap_p_work = document.querySelector('.wrap_p_work')

				let temp = ''
				for (const key in iterator.answer_all) {
					// console.log(key);
					temp = iterator.answer_all[key].answer

					// console.log(iterator.answer_all);
					wrap_p_work.innerHTML += `
					
					<p class="p_answer_work" id="${key}">${temp}</p>
					
					`
				}
			
				
			} 
		}
	}
	nextQuestion()
}

function nextQuestion() {
	let p = document.querySelectorAll('.p_answer_work')
	let wrap_p_work = document.querySelector('.wrap_p_work')

	for (const iterator of p) {
		iterator.addEventListener('click', (event) =>{
		// debugger
			for (let index = 0; event.target.parentElement.nextElementSibling; index++) {
				event.target.parentElement.nextElementSibling.remove()
			}

			let id = event.target.getAttribute('id')
			displayAnswer(question_answer, id)
			})
		
			wrapwork.scrollTo(50, 0)

	}
}





addquestion.addEventListener('click', (event) => unansweredQuestions() ) // кнопка готово

function unansweredQuestions() {
	
	let question = document.querySelector('.question')
	let id = question.getAttribute('id')

	if (localStorage.getItem('question_answer')) {
		let json = localStorage.getItem('question_answer')
		question_answer = JSON.parse(json)
		
		// console.log(question_answer);

		question_answer.forEach((element, index, arr) => {
			if (element.id == id) {

				arr.splice(index, 1)
				// console.log(question_answer);
				let json = JSON.stringify(question_answer);
  			localStorage.setItem('question_answer', json)

			} else {
				id = question.getAttribute('id')
			}
			
		});
		

	} else {
		id = question.getAttribute('id')
	}

	addQuestionArr(id)
	// answerTrueFalse(question_answer, id) 
	addquestionList.innerHTML = ''
	question_answer.forEach(element => {
		// console.log(element.question);
		// debugger
		addquestionList.innerHTML += `
		<p class="addquestionList_item" id="${element.id}">${element.question}</p>
		`
	});
	addquestionList_item = document.querySelectorAll('.addquestionList_item')
	addquestionList_itemClick(addquestionList_item)
	wrapAnswerAdd.innerHTML = ''

	question_answer.forEach(function (item) {
		
		for (const iterator in item.answer_all) {
			// debugger
			let status = item.answer_all[iterator].answer_status
			if (status == 'false') {
				let tempP = `<p class="p_answer_false" status='${status}' id="${iterator}">${item.answer_all[iterator].answer}</p>`
				wrapAnswerAdd.innerHTML += `
						${tempP}
						<br>
						`
			}
		}

		p_answer_falseClick()
	});



	
	wrapanswer.innerHTML = ``
	addquestion.style.display = 'none'
	wrapquestion.innerHTML = ``
	addanswer.style.display = 'none'

}

function p_answer_falseClick() {
	let p_answer_false = document.querySelectorAll('.p_answer_false')

	for (const iterator of p_answer_false) {
		// console.log(iterator);
		iterator.addEventListener('click', (event) =>{

			wrapprogramming.style.display = 'block'
			let tempP = event.target.outerHTML
			let id = event.target.getAttribute('id')
			answerQuestionAdd(tempP, id, '')
			addDinamicClick()
			})
	}
}




function answerTrueFalse(arr, id) {
	for (const iterator of arr) {
		if (iterator.answer_all[id]) {
			iterator.answer_all[id].answer_status = true
		}
	}
}


function answerQuestionAdd(tempP, id, text) {
	// console.log(tempP);
	// console.log(tempP.getAttribute('id'))
	wrapquestion.innerHTML = `
	${tempP}

	<form name="myForm">
					<button class="intLink addDinamic">Добавить динамичекое поле</button>
					<button class="intLink format-strong" id="format-strong"><strong>Жирный</strong></button>
					<button class="intLink format-em" id="format-em"><em>Курсив</em></button>
					<div class="wrap_color">
						<button class="intLink button_input_color" id="format-color">Цвет</button>
						<div id="mceu_49" class="mce-container mce-panel mce-floatpanel mce-popover mce-bottom mce-start" hidefocus="1"
							tabindex="-1" role="application">
							<div class="mce-arrow"></div>
							<table class="mce-grid mce-grid-border mce-colorbutton-grid" role="list" cellspacing="0">
								<tbody>
									<tr>
										<td class="mce-grid-cell">
											<div class="mini_div_color" id="mceu_49-0" role="option" tabindex="-1" style="background-color: #000000"
												title="Черный"><button class="mini_but_color" data-mce-color="#000000"
													style="background-color: #000000"></button></div>
										</td>
										<td class="mce-grid-cell">
											<div class="mini_div_color" id="mceu_49-1" role="option" tabindex="-1" style="background-color: #993300"
												title="Burnt orange"><button class="mini_but_color" data-mce-color="#993300"
													style="background-color: #993300"></button></div>
										</td>
										<td class="mce-grid-cell">
											<div class="mini_div_color" id="mceu_49-2" data-mce-color="#333300" role="option" tabindex="-1"
												style="background-color: #333300" title="Dark olive"><button class="mini_but_color"
													data-mce-color="#333300" style="background-color: #333300"></button></div>
										</td>
										<td class="mce-grid-cell">
											<div class="mini_div_color" id="mceu_49-3" data-mce-color="#003300" role="option" tabindex="-1"
												style="background-color: #003300" title="Dark green"><button class="mini_but_color"
													data-mce-color="#003300" style="background-color: #003300"></button></div>
										</td>
										<td class="mce-grid-cell">
											<div class="mini_div_color" id="mceu_49-4" data-mce-color="#003366" role="option" tabindex="-1"
												style="background-color: #003366" title="Dark azure"><button class="mini_but_color"
													data-mce-color="#003366" style="background-color: #003366"></button></div>
										</td>
										<td class="mce-grid-cell">
											<div class="mini_div_color" id="mceu_49-5" data-mce-color="#000080" role="option" tabindex="-1"
												style="background-color: #000080" title="Темно-синий"><button class="mini_but_color"
													data-mce-color="#000080" style="background-color: #000080"></button></div>
										</td>
										<td class="mce-grid-cell">
											<div class="mini_div_color" id="mceu_49-6" data-mce-color="#333399" role="option" tabindex="-1"
												style="background-color: #333399" title="Indigo"><button class="mini_but_color"
													data-mce-color="#333399" style="background-color: #333399"></button></div>
										</td>
										<td class="mce-grid-cell">
											<div class="mini_div_color" id="mceu_49-7" data-mce-color="#333333" role="option" tabindex="-1"
												style="background-color: #333333" title="Very dark gray"><button class="mini_but_color"
													data-mce-color="#333333" style="background-color: #333333"></button></div>
										</td>
									</tr>
									<tr>
										<td class="mce-grid-cell">
											<div class="mini_div_color" id="mceu_49-8" data-mce-color="#800000" role="option" tabindex="-1"
												style="background-color: #800000" title="Maroon"><button class="mini_but_color"
													data-mce-color="#800000" style="background-color: #800000"></button></div>
										</td>
										<td class="mce-grid-cell">
											<div class="mini_div_color" id="mceu_49-9" data-mce-color="#FF6600" role="option" tabindex="-1"
												style="background-color: #FF6600" title="Оранжевый"><button class="mini_but_color"
													data-mce-color="#FF6600" style="background-color: #FF6600"></button></div>
										</td>
										<td class="mce-grid-cell">
											<div class="mini_div_color" id="mceu_49-10" data-mce-color="#808000" role="option" tabindex="-1"
												style="background-color: #808000" title="Olive"><button class="mini_but_color"
													data-mce-color="#808000" style="background-color: #808000"></button></div>
										</td>
										<td class="mce-grid-cell">
											<div class="mini_div_color" id="mceu_49-11" data-mce-color="#008000" role="option" tabindex="-1"
												style="background-color: #008000" title="Зеленый"><button class="mini_but_color"
													data-mce-color="#008000" style="background-color: #008000"></button></div>
										</td>
										<td class="mce-grid-cell">
											<div class="mini_div_color" id="mceu_49-12" data-mce-color="#008080" role="option" tabindex="-1"
												style="background-color: #008080" title="Teal"><button class="mini_but_color" data-mce-color="#008080"
													style="background-color: #008080"></button></div>
										</td>
										<td class="mce-grid-cell">
											<div class="mini_div_color" id="mceu_49-13" data-mce-color="#0000FF" role="option" tabindex="-1"
												style="background-color: #0000FF" title="Синий"><button class="mini_but_color"
													data-mce-color="#0000FF" style="background-color: #0000FF"></button></div>
										</td>
										<td class="mce-grid-cell">
											<div class="mini_div_color" id="mceu_49-14" data-mce-color="#666699" role="option" tabindex="-1"
												style="background-color: #666699" title="Grayish blue"><button class="mini_but_color"
													data-mce-color="#666699" style="background-color: #666699"></button></div>
										</td>
										<td class="mce-grid-cell">
											<div class="mini_div_color" id="mceu_49-15" data-mce-color="#808080" role="option" tabindex="-1"
												style="background-color: #808080" title="Серый"><button class="mini_but_color"
													data-mce-color="#808080" style="background-color: #808080"></button></div>
										</td>
									</tr>
									<tr>
										<td class="mce-grid-cell">
											<div class="mini_div_color" id="mceu_49-16" data-mce-color="#FF0000" role="option" tabindex="-1"
												style="background-color: #FF0000" title="Красный"><button class="mini_but_color"
													data-mce-color="#FF0000" style="background-color: #FF0000"></button></div>
										</td>
										<td class="mce-grid-cell">
											<div class="mini_div_color" id="mceu_49-17" data-mce-color="#FF9900" role="option" tabindex="-1"
												style="background-color: #FF9900" title="Amber"><button class="mini_but_color"
													data-mce-color="#FF9900" style="background-color: #FF9900"></button></div>
										</td>
										<td class="mce-grid-cell">
											<div class="mini_div_color" id="mceu_49-18" data-mce-color="#99CC00" role="option" tabindex="-1"
												style="background-color: #99CC00" title="Yellow green"><button class="mini_but_color"
													data-mce-color="#99CC00" style="background-color: #99CC00"></button></div>
										</td>
										<td class="mce-grid-cell">
											<div class="mini_div_color" id="mceu_49-19" data-mce-color="#339966" role="option" tabindex="-1"
												style="background-color: #339966" title="Sea green"><button class="mini_but_color"
													data-mce-color="#339966" style="background-color: #339966"></button></div>
										</td>
										<td class="mce-grid-cell">
											<div class="mini_div_color" id="mceu_49-20" data-mce-color="#33CCCC" role="option" tabindex="-1"
												style="background-color: #33CCCC" title="Бирюзовый"><button class="mini_but_color"
													data-mce-color="#33CCCC" style="background-color: #33CCCC"></button></div>
										</td>
										<td class="mce-grid-cell">
											<div class="mini_div_color" id="mceu_49-21" data-mce-color="#3366FF" role="option" tabindex="-1"
												style="background-color: #3366FF" title="Royal blue"><button class="mini_but_color"
													data-mce-color="#3366FF" style="background-color: #3366FF"></button></div>
										</td>
										<td class="mce-grid-cell">
											<div class="mini_div_color" id="mceu_49-22" data-mce-color="#800080" role="option" tabindex="-1"
												style="background-color: #800080" title="Розовый"><button class="mini_but_color"
													data-mce-color="#800080" style="background-color: #800080"></button></div>
										</td>
										<td class="mce-grid-cell">
											<div class="mini_div_color" id="mceu_49-23" data-mce-color="#999999" role="option" tabindex="-1"
												style="background-color: #999999" title="Medium gray"><button class="mini_but_color"
													data-mce-color="#999999" style="background-color: #999999"></button></div>
										</td>
									</tr>
									<tr>
										<td class="mce-grid-cell">
											<div class="mini_div_color" id="mceu_49-24" data-mce-color="#FF00FF" role="option" tabindex="-1"
												style="background-color: #FF00FF" title="Magenta"><button class="mini_but_color"
													data-mce-color="#FF00FF" style="background-color: #FF00FF"></button></div>
										</td>
										<td class="mce-grid-cell">
											<div class="mini_div_color" id="mceu_49-25" data-mce-color="#FFCC00" role="option" tabindex="-1"
												style="background-color: #FFCC00" title="Gold"><button class="mini_but_color" data-mce-color="#FFCC00"
													style="background-color: #FFCC00"></button></div>
										</td>
										<td class="mce-grid-cell">
											<div class="mini_div_color" id="mceu_49-26" data-mce-color="#FFFF00" role="option" tabindex="-1"
												style="background-color: #FFFF00" title="Желтый"><button class="mini_but_color"
													data-mce-color="#FFFF00" style="background-color: #FFFF00"></button></div>
										</td>
										<td class="mce-grid-cell">
											<div class="mini_div_color" id="mceu_49-27" data-mce-color="#00FF00" role="option" tabindex="-1"
												style="background-color: #00FF00" title="Lime"><button class="mini_but_color" data-mce-color="#00FF00"
													style="background-color: #00FF00"></button></div>
										</td>
										<td class="mce-grid-cell">
											<div class="mini_div_color" id="mceu_49-28" data-mce-color="#00FFFF" role="option" tabindex="-1"
												style="background-color: #00FFFF" title="Aqua"><button class="mini_but_color" data-mce-color="#00FFFF"
													style="background-color: #00FFFF"></button></div>
										</td>
										<td class="mce-grid-cell">
											<div class="mini_div_color" id="mceu_49-29" data-mce-color="#00CCFF" role="option" tabindex="-1"
												style="background-color: #00CCFF" title="Sky blue"><button class="mini_but_color"
													data-mce-color="#00CCFF" style="background-color: #00CCFF"></button></div>
										</td>
										<td class="mce-grid-cell">
											<div class="mini_div_color" id="mceu_49-30" data-mce-color="#993366" role="option" tabindex="-1"
												style="background-color: #993366" title="Red violet"><button class="mini_but_color"
													data-mce-color="#993366" style="background-color: #993366"></button></div>
										</td>
										<td class="mce-grid-cell">
											<div class="mini_div_color" id="mceu_49-31" data-mce-color="#FFFFFF" role="option" tabindex="-1"
												style="background-color: #FFFFFF" title="Белый"><button class="mini_but_color"
													data-mce-color="#FFFFFF" style="background-color: #FFFFFF"></button></div>
										</td>
									</tr>
									<tr>
										<td class="mce-grid-cell">
											<div class="mini_div_color" id="mceu_49-32" data-mce-color="#FF99CC" role="option" tabindex="-1"
												style="background-color: #FF99CC" title="Pink"><button class="mini_but_color" data-mce-color="#FF99CC"
													style="background-color: #FF99CC"></button></div>
										</td>
										<td class="mce-grid-cell">
											<div class="mini_div_color" id="mceu_49-33" data-mce-color="#FFCC99" role="option" tabindex="-1"
												style="background-color: #FFCC99" title="Peach"><button class="mini_but_color"
													data-mce-color="#FFCC99" style="background-color: #FFCC99"></button></div>
										</td>
										<td class="mce-grid-cell">
											<div class="mini_div_color" id="mceu_49-34" data-mce-color="#FFFF99" role="option" tabindex="-1"
												style="background-color: #FFFF99" title="Light yellow"><button class="mini_but_color"
													data-mce-color="#FFFF99" style="background-color: #FFFF99"></button></div>
										</td>
										<td class="mce-grid-cell">
											<div class="mini_div_color" id="mceu_49-35" data-mce-color="#CCFFCC" role="option" tabindex="-1"
												style="background-color: #CCFFCC" title="Pale green"><button class="mini_but_color"
													data-mce-color="#CCFFCC" style="background-color: #CCFFCC"></button></div>
										</td>
										<td class="mce-grid-cell">
											<div class="mini_div_color" id="mceu_49-36" data-mce-color="#CCFFFF" role="option" tabindex="-1"
												style="background-color: #CCFFFF" title="Pale cyan"><button class="mini_but_color"
													data-mce-color="#CCFFFF" style="background-color: #CCFFFF"></button></div>
										</td>
										<td class="mce-grid-cell">
											<div class="mini_div_color" id="mceu_49-37" data-mce-color="#99CCFF" role="option" tabindex="-1"
												style="background-color: #99CCFF" title="Light sky blue"><button class="mini_but_color"
													data-mce-color="#99CCFF" style="background-color: #99CCFF"></button></div>
										</td>
										<td class="mce-grid-cell">
											<div class="mini_div_color" id="mceu_49-38" data-mce-color="#CC99FF" role="option" tabindex="-1"
												style="background-color: #CC99FF" title="Plum"><button class="mini_but_color" data-mce-color="#CC99FF"
													style="background-color: #CC99FF"></button></div>
										</td>
										<td class="mce-grid-cell mce-colorbtn-trans">
											<div class="mini_div_color clouse" id="mceu_49-39" data-mce-color="transparent" role="option"
												tabindex="-1" style="background-color: transparent" title="Без цвета">×</div>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
					<button class="intLink format-code" id="format-code">Вставить Динамическое поле</button>
					<div class="dinamic_div">
						<div class="wrapp_dinamic_add">
							<button class="dinamic_save">Сохранить</button>
							<input class="dinamic_input" name="name" type="text" placeholder="Системное имя">
							<input class="dinamic_input" name="placeholder" type="text" placeholder="Подсказка">
						</div>
						<button class="dinamic_div_hide">Скрыть</button>
						<div class="dinamic_list">
			
						</div>
						<div class="lskdfjsd"></div>
						
					</div>
						
					<div class="wrapper">
						<textarea class="myTxtArea question" id="${id}" name="myTxtArea" rows="10" cols="50" placeholder="Задайте ваш вопрос">${text}</textarea>
						<div class="myTxtArea_div" id="${id}"></div>
			
					</div>
			
				</form>

	`
	addVariable()
	
	myTxtAreaInput()
	
	addquestion.style.display = 'inline'
	addanswer.style.display = 'inline'
}



addanswer_from_list.addEventListener('click', (event) =>{
	console.log('skdjf hskdf');

	let addanswer_list = document.querySelector('.addanswer_list')

	for (const iterator of question_answer) {
		console.log(iterator.answer_all);
		for (const key in iterator.answer_all) {
			console.log(iterator.answer_all[key].answer);
			console.log(iterator.answer_all[key].answer_status);
			console.log(key);
			let status = iterator.answer_all[key].answer_status

			let tempP = `<p class="item_answer_list" status='${status}' id="${key}">${iterator.answer_all[key].answer}</p>`
			addanswer_list.innerHTML +=`
			<p class="item_answer_list" status='${status}' id="${key}">${iterator.answer_all[key].answer}</p>
			`

			let item_answer_list = document.querySelectorAll('.item_answer_list')
			for (const iterator of item_answer_list) {
				iterator.addEventListener('click', (event) =>{
					let status = event.target.getAttribute('status')
					let id = event.target.getAttribute('id')
					addanswerClick(id, status) 
				})
			}
			
		}

	}

	})



addanswer.addEventListener('click', (event) => {

	let id = getId(length = 16)
	addanswerClick(id, false) 
	

})

function addanswerClick(id, status) {




	wrapanswer.innerHTML += `
	<textarea class="answer" status="${status}" id="${id}" cols="30" rows="10" placeholder="Вариант ответа на вопрос"></textarea>
	<button class="deleteAnswer" id="${id}">Удалить вопрос</button>
	`
	
	let answer = document.querySelectorAll('.answer')

	if (wrapanswer.querySelectorAll('answer')) {
		for (const iterator of answer) {
			let key = iterator.getAttribute('id')
			if (localStorage.getItem(`${key}`)) {
				iterator.value = localStorage.getItem(`${key}`)
			}
			
			iterator.addEventListener('input', () => {
			localStorage.setItem(`${key}`, iterator.value)
			})
		}
	}

	deleteAnswerClick()

	
}


function deleteAnswerClick() {
	

	let deleteAnswer = document.querySelectorAll('.deleteAnswer')
	for (const iterator of deleteAnswer) {
		iterator.addEventListener('click', (event) =>{
			
			let result = confirm('Вы уверенны что хотите удалить этот ответ? (будут удалены все ответы и вопросы в этой ветке)')
			if (result) {
				console.log(iterator.id);
				console.log(question_answer);

				for (const item of question_answer) {
					// console.log(iterator.answer_all);
					for (const key in item.answer_all) {
						// console.log(key);	
						if (key == iterator.id) {

							questDelete(key)
							console.log(key);	
						}
					}
				}

				console.log(question_answer);




				iterator.previousElementSibling.remove()
				iterator.remove()
			} else {
				
			}
			
			
			})
		
		
	}
}



function addQuestionArr(id) {
	let answer = document.querySelectorAll('.answer')
	let question = document.querySelector('.question')
	let myTxtArea_div = document.querySelector('.myTxtArea_div')
	console.log(myTxtArea_div.innerHTML);

	let arr = {}
	arr.id = id
	// arr.question = question.value
	arr.question = question.value
	arr.questionHTML = myTxtArea_div.innerHTML
	arr.answer_all = {}

	for (const iterator of answer) {
		console.log(iterator);
		status = iterator.getAttribute('status')
		let id = iterator.getAttribute('id')
		arr.answer_all[id] = {}
		arr.answer_all[id].answer = iterator.value
		arr.answer_all[id].answer_status = status
	}

	let arrAnswer_all = {}
	if (!answer) {
		arrAnswer_all.answer_1 = ''
	} 

	if (localStorage.getItem('question_answer')) {
		let json = localStorage.getItem('question_answer')
		question_answer = JSON.parse(json)
		console.log(question_answer);
	}

	question_answer.push(arr)

	answerTrueFalse(question_answer, id) 

	// console.log(question_answer);

	let json = JSON.stringify(question_answer);
  localStorage.setItem('question_answer', json)

	// console.log(JSON.parse(localStorage.getItem('question_answer')));

	// console.log(question_answer);
}

function getId(length = 16) {
	let chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

	let res = '';

	for (let i = 0; i < length; i++) {
		res += chars[Math.floor(Math.random() * chars.length)];
	}
	return res;
}


// localStorage.clear()












// function myClick(){
//  console.log('сработало');
// 	let s;
// 	let b = <input type="text" name="" id="">dfa sdfas dfas dsdf</input>
// 	s=`${b}`;
// 	document.getElementById("myArea").value=s;
	 
	 
// 	 };





