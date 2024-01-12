let span = document.querySelector('span')

document.querySelector('button').addEventListener('click', () => {
  let mood = prompt("Whats your Favourite color ?")
  span.textContent = `favourite color is : ${mood}`
})