document.querySelector('button').addEventListener('click', () => {
  let modal = document.querySelector('.modal')

  modal.style.display = 'block'
})

document.querySelector('.modal').addEventListener('click', () => {
  let modal = document.querySelector('.modal')

  modal.style.display = 'none'
})