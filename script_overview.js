// Удаление формы просмотра события

function delAddOverview() {
  let cross2 = document.getElementById('close2')

  const cell6 = document.getElementById('cell6')

  cross2.addEventListener('click', () => cross2.parentNode.parentNode.parentNode.remove())

  cross2.addEventListener('click', () => cell6.classList.remove('ac'))

}

delAddOverview()

// Изменение CSS стилей кнопок класса 'add'&'update'

function changeButton(button) {    


    let b = document.getElementById(button)
  
    b.addEventListener('click', function() {
      this.classList.add('main-button-active')
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

  cell.addEventListener('click', () =>
    createOverviewForm())
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

// Создание формы просмотра события


function createOverviewForm() {


const table = document.getElementById('conteiner')

const AddEvent = `
          <div class="decorate"></div>
            <div class="pop-up-menu">
              <div class="close"><img src="images/close.svg" id="close2"></div>
              <div class="description-event-fill">
                <div class="title-event-fill">Сдача проекта</div>
                <div class="date-event-fill">6 ноября</div>
                <div class="people">
                  <div class="people-all">Участники:</div>
                  <div class="people-each">Я</div>
                </div>
              </div>
              <div class="description-add-event"><textarea placeholder="Описание" id="description-event"></textarea></div>
              <div class="buttons-add-event">
                <button class="small-button" id="ready">Готово</button>
                <button class="small-button" id="delete">Удалить</button>
              </div>
            </div>
`
const divForQuick = document.createElement('div')

divForQuick.setAttribute('id', 'add-event-conteiner')

divForQuick.innerHTML  = AddEvent

table.appendChild(divForQuick)

delAddOverview()

changeSmallButton()

}