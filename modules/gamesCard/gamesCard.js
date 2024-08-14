import './gamesCard.css'
export const gamesCard = (contenedor, gameName, gameImage, score) => {
  console.log('Aquí pinto los juegos')
  console.log(gameName)
  const cardDiv = document.createElement('div')
  cardDiv.className = 'cardDiv'
  const cardH3 = document.createElement('h3')
  cardH3.textContent = gameName
  const cardImage = document.createElement('img')
  cardImage.src = gameImage
  cardImage.alt = gameName
  const cardScore = document.createElement('h3')
  cardScore.textContent = 'Puntuación: ' + score
  // aqui va un reset de score
  cardDiv.addEventListener('click', (e) => {
    console.log('Salto a la página del juego')
  })
  cardDiv.append(cardH3)
  cardDiv.append(cardImage)
  cardDiv.append(cardScore)
  contenedor.append(cardDiv)
}
