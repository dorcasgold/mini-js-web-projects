const addBtnEl = document.querySelector('#counterAdd')
const subBtnEl = document.querySelector('#counterSub')
const counterDisplayEl = document.querySelector('#counterDisplay')

let total = 0;
let limit = 30;


const updatecounterDisplay = () => {
  if (total > limit) {
    total = limit
  }
  if (total < -3) {
    total = -3
  }
  counterDisplayEl.textContent = total;

  document.body.style.setProperty('background-color', `rgb(${(total / limit) * 255}, 64, 0)`)
}

addBtnEl.addEventListener('click', () => {
  total += 1;
  updatecounterDisplay()
})
subBtnEl.addEventListener('click', () => {
  total -= 1;
  updatecounterDisplay()
})

updatecounterDisplay()