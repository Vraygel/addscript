let wrap = document.querySelector('.wrap')
let butt = document.querySelector('.butt')
let myTxtArea = document.querySelector('.myTxtArea')
let input_color = document.querySelector('.input_color')
let buten_text = document.querySelector('.buten_text')
let myTxtArea_div = document.querySelector('.myTxtArea_div')
let button_input_color = document.querySelector('.button_input_color')
let mceContainer = document.querySelector('.mce-container')
let clouse = document.querySelector('.clouse')
let addDinamic = document.querySelector('.addDinamic')
let dinamic_save = document.querySelector('.dinamic_save')
let dinamic_list = document.querySelector('.dinamic_list')
let dinamic_div = document.querySelector('.dinamic_div')
let dinamic_div_hide = document.querySelector('.dinamic_div_hide')
let wrapp_dinamic_add = document.querySelector('.wrapp_dinamic_add')
let mini_but_color = document.querySelectorAll('.mini_but_color')
let mini_div_color = document.querySelectorAll('.mini_div_color')
let strong = document.querySelector(".format-strong");
let em = document.querySelector(".format-em");
let link = document.querySelector(".format-link");
let code = document.querySelector(".format-code");
let dinamic_add

function addVariable() {
  wrap = document.querySelector('.wrap')
  butt = document.querySelector('.butt')
  myTxtArea = document.querySelector('.myTxtArea')
  input_color = document.querySelector('.input_color')
  buten_text = document.querySelector('.buten_text')
  myTxtArea_div = document.querySelector('.myTxtArea_div')
  button_input_color = document.querySelector('.button_input_color')
  mceContainer = document.querySelector('.mce-container')
  clouse = document.querySelector('.clouse')
  addDinamic = document.querySelector('.addDinamic')
  dinamic_save = document.querySelector('.dinamic_save')
  dinamic_list = document.querySelector('.dinamic_list')
  dinamic_div = document.querySelector('.dinamic_div')
  dinamic_div_hide = document.querySelector('.dinamic_div_hide')
  wrapp_dinamic_add = document.querySelector('.wrapp_dinamic_add')
  mini_but_color = document.querySelectorAll('.mini_but_color')
  mini_div_color = document.querySelectorAll('.mini_div_color')
  strong = document.querySelector(".format-strong");
  em = document.querySelector(".format-em");
  link = document.querySelector(".format-link");
  code = document.querySelector(".format-code");
	programming_button = document.querySelector('.programming_button')

	buttonEventListener()
}






let dinamicListArr = []





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

clouse.addEventListener('click', (event) => {
  mceContainer.style.display = 'none';
})

function insertURL() {
  const newURL = prompt("Enter the full URL for the link");
  if (newURL) {
    insert(`<a href="${newURL}">`, "</a>");
  } else {
    document.myForm.myTxtArea.focus();
  }
}

let input = `<input type="text" class="input" id="" placeholder="Имя клиента"></input>`




buttonEventListener()

function buttonEventListener() {
  button_input_color.addEventListener('click', (e) => {
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
  
  })

  em.addEventListener("click", (e) => {
    e.preventDefault()
    var range = window.getSelection().getRangeAt(0);
    var selectionContents = range.extractContents();
    var span = document.createElement("span");
    span.style.fontStyle = 'italic';
    span.appendChild(selectionContents);
    range.insertNode(span);
  });

  strong.addEventListener("click", (e) => {
    e.preventDefault()
    var range = window.getSelection().getRangeAt(0);
    var selectionContents = range.extractContents();
    var span = document.createElement("span");
    span.style.fontWeight = "600";
    span.appendChild(selectionContents);
    range.insertNode(span);
  });

  code.addEventListener("click", (e) => {

    e.preventDefault()
    wrapp_dinamic_add.style.display = 'none'
    dinamic_list.innerHTML = ''
    // debugger
    dinamicListFunc('dinamic_add', 'Добавить') 
  });
}


function dinamicAddClick(dinamic_add) {
  for (const iterator of dinamic_add) {
    // console.log(dinamic_add);
    // console.log(iterator);
    // dinamic_add = document.querySelectorAll('.dinamic_add')
    iterator.addEventListener('click', (e) =>{
      // console.log(e.target);
      
      e.preventDefault()
      let id = iterator.getAttribute('id')
      let input = iterator.closest('.dinamic_list_item').querySelector('input')
      let temp = input

      try {
        var range = window.getSelection().getRangeAt(0);
      } catch (err) {
        // console.log(err);
        alert('Выберите место для вставки')   
      }
      
      if (range.startContainer.parentNode.classList.contains('myTxtArea_div_p')) {
        var selectionContents = range.extractContents();
        range.insertNode(temp);
        dinamic_list.innerHTML = ''
        dinamicListFunc('dinamic_add', 'Добавить') 
      } else{
        alert('Выберите место для вставки')
      }
      dinamic_list.innerHTML = ''
      dinamicListFunc('dinamic_add', 'Добавить') 
      
      
      
      })
      // console.log(dinamic_add);
      
  }
  // dinamic_add = document.querySelectorAll('.dinamic_add')
 
}





myTxtAreaInput()

function myTxtAreaInput() {
  myTxtArea.addEventListener('input', () => {
  
    // console.log(myTxtArea_div);
    myTxtArea_div.innerHTML = `<p class='myTxtArea_div_p'>${myTxtArea.value}</p>`
  })
}

addDinamicClick()  



function addDinamicClick(e) {
  addDinamic = document.querySelector('.addDinamic')
  addDinamic.addEventListener('click', (e) => {
    e.preventDefault()
    wrapp_dinamic_add.style.display = 'block'
    dinamic_list.innerHTML = ''
    dinamicListFunc('dinamic_dell', 'Удалить') 
    dinamic_saveClick()
  })
}

function dinamicListFunc(buttonClass, buttonValue) {
  dinamic_div.style.display = 'block'

  

  if (localStorage.getItem('dinamicListArr') && localStorage.getItem('dinamicListArr').length != 2) {
    console.log(localStorage.getItem('dinamicListArr').length);
    console.log(localStorage.getItem('dinamicListArr'));
    let json = localStorage.getItem('dinamicListArr')
    dinamicListArr = JSON.parse(json)
    
    dinamicListArr.forEach(element => {
      dinamicListDisplay(element, buttonClass, buttonValue)
       });
    dinamic_add = []
    dinamic_add = document.querySelectorAll('.dinamic_add')
    dinamicAddClick(dinamic_add) 
    dinamicDellFunc()
  }
   else {
    dinamic_list.innerHTML += `Динамическое поле не создано`
  }
}

function dinamicListDisplay(element, buttonClass, buttonValue) {

    dinamic_list.innerHTML += `
    <div class='dinamic_list_item'>
      Системное имя: ${element.name};
      Подсказка: ${element.placeholder};
      На странице: <input class="dinamic_input" id="${element.id}" name="${element.name}" type="text" placeholder="${element.placeholder}">
      <button class="${buttonClass}" id="${element.id}">${buttonValue}</button>
      <br>
    </div>
    `
    
}



dinamic_div_hide.addEventListener('click', (event) =>{
  event.preventDefault()
  dinamic_div.style.display = 'none'
  })

let dinamic_dell

function dinamic_saveClick() {
  let dinamic_save = document.querySelector('.dinamic_save')

  dinamic_save.addEventListener('click', (e) => {
    e.preventDefault()
    let dinamicListObj = {}
    let id = getId(length = 16)
  
    let name = document.querySelector('input[name="name"]')
    let placeholder = document.querySelector('input[name="placeholder"]')
   
    dinamicListObj.id = id
    dinamicListObj.name = name.value
    dinamicListObj.placeholder = placeholder.value
  
    dinamicListDisplay(dinamicListObj, 'dinamic_dell', 'Удалить')
    
    dinamicListArr.push(dinamicListObj)
  
    let json = JSON.stringify(dinamicListArr);
    localStorage.setItem('dinamicListArr', json)
  
    dinamicDellFunc()
  
    name.value = ''
    placeholder.value = ''
  })
  
}

dinamic_save.addEventListener('click', (e) => {
  e.preventDefault()
  let dinamicListObj = {}
  let id = getId(length = 16)

  let name = document.querySelector('input[name="name"]')
  let placeholder = document.querySelector('input[name="placeholder"]')
 
  dinamicListObj.id = id
  dinamicListObj.name = name.value
  dinamicListObj.placeholder = placeholder.value

  dinamicListDisplay(dinamicListObj, 'dinamic_dell', 'Удалить')
  
  dinamicListArr.push(dinamicListObj)

  let json = JSON.stringify(dinamicListArr);
  localStorage.setItem('dinamicListArr', json)

  dinamicDellFunc()

  name.value = ''
  placeholder.value = ''
})

function dinamicDellFunc() {
  dinamic_dell = document.querySelectorAll('.dinamic_dell')

  for (const iterator of dinamic_dell) {
    if (localStorage.getItem('dinamicListArr')) {
      dinamicListArrJson = localStorage.getItem('dinamicListArr')
      dinamicListArr = JSON.parse(dinamicListArrJson)
    }

    iterator.addEventListener('click', (e) => {
      e.preventDefault()
      let id = e.target.getAttribute('id')
      console.log(e.target.parentElement);
      e.target.parentElement.remove()

      dinamicListArr.forEach((element, index, arr) => {
        if (element.id == id) {
          arr.splice(index, 1)
        }
      });
      let json = JSON.stringify(dinamicListArr);
      localStorage.setItem('dinamicListArr', json)
    })
  }
}




function getId(length = 16) {
  let chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

  let res = '';

  for (let i = 0; i < length; i++) {
    res += chars[Math.floor(Math.random() * chars.length)];
  }
  return res;
}

