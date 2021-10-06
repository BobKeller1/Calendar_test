// Удаление формы быстрого добавления события

function delQuickAdd(){

  let cross = document.getElementById('close-quick')

  cross.addEventListener('click', () => cross.parentNode.parentNode.parentNode.remove())

}

delQuickAdd()

// Изменение CSS стилей кнопок класса 'add'&'update'

function changeButton(button) {    


    let b = document.getElementById(button)
  
    b.addEventListener('click', function() {
      this.classList.add('main-button-active')
      if (this.id == 'add'){
      createQuickAdd()  
      }
      
    })

    b.addEventListener('mouseout', function() {
      this.classList.remove('main-button-active')
      this.classList.remove('main-button-hover')
    })

    b.addEventListener('mouseover', function() {
      this.classList.add('main-button-hover')
    })

  }

  changeButton('add');
  changeButton('update');

// Изменение CSS стилей ячеек таблицы календаря 

function changeCell() {

var cells = document.getElementsByClassName('not-active');

var tds = document.getElementsByTagName('td')

var headings = document.getElementsByClassName('heading')


for (const cell of cells) {

  cell.addEventListener('click', () => 
    cell.classList.toggle('ac'))
}


for (const td of tds) {
  td.addEventListener('mouseover', () => td.classList.add('td-hover'))
  }

for (const td of tds) {
  td.addEventListener('mouseout', () => td.classList.remove('td-hover'))
  }

}

changeCell();

// Изменение CSS стилей класса small-button

function changeSmallButton() {
  var buttons = document.getElementsByClassName('small-button')

  for (const button of buttons) {
    button.addEventListener('mouseover', () => button.classList.add('small-button-hover'))
  }


  for (const button of buttons) {
    button.addEventListener('mouseout', () => button.classList.remove('small-button-hover'))

    button.addEventListener('mouseout', () => button.classList.remove('small-button-active'))
  }

  for (const button of buttons) {
    button.addEventListener('click', () => button.classList.remove('small-button-hover'))

    button.addEventListener('click', () => button.classList.add('small-button-active'))


}
}


changeSmallButton()

// Изменение CSS стилей кнопок выбора месяца

function changeArrowButton(arrowButtId) {
    let b = document.getElementById(arrowButtId)
  
    b.addEventListener('click', function() {

      if (this.id == 'month-change-button1'){

      this.innerHTML = '<div id="box-arrow-left"><img src="images/ArrowWhite2.svg"></div>'
      this.style.backgroundColor = '#cfcfcf'
    }

      if (this.id == 'month-change-button2') {
        this.innerHTML = '<div id="box-arrow-right"><img src="images/ArrowWhite.svg"></div>'
        this.style.backgroundColor = '#cfcfcf'
      }
    })
    

    b.addEventListener('mouseout', function() {
      if (this.id == 'month-change-button1'){
      this.innerHTML = '<div id="box-arrow-left"><img src="images/arrow.svg"></div>'
      this.style.backgroundColor = 'white'
    }
       if (this.id == 'month-change-button2'){
      this.innerHTML = '<div id="box-arrow-left"><img src="images/arrow1.svg"></div>'
     this.style.backgroundColor = 'white'
    }
  })

}

changeArrowButton('month-change-button1')
changeArrowButton('month-change-button2')

// Создание формы быстрого добавления события

function createQuickAdd() {


const control = document.getElementById('control')

const quickAddEvent = `
          <div class="decorate-quick">
            <div class="arrow-up"></div>
          </div>
          <div class="quick-event">
            <div class="close-quick"><img src="images/close.svg" id="close-quick"></div>
            <div class="input-quick"><input type="text" name="" placeholder="25 ноября, Кутеж, Серж"></div>
            <div class="cont-small-button-quick"><button class="small-button" id="quick-small-button">Создать</button></div>
          </div>
`
const divForQuick = document.createElement('div')

divForQuick.setAttribute('id', 'quick-event-conteiner')

divForQuick.innerHTML  = quickAddEvent

control.appendChild(divForQuick)

delQuickAdd()

changeSmallButton()

}