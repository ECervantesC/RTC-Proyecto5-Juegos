import { dataGames } from '../../data/dataGames/dataGames'
import { back } from '../../modules/back/back'
import { gamesCard } from '../../modules/gamesCard/gamesCard'
import './games.css'
export const games = (contenedor, usuario) => {
  console.log('Llego a la pagina de juegos')
  contenedor.innerHTML = ''
  const gamesDiv = document.createElement('div')
  gamesDiv.className = 'gamesDiv'
  const gamesH1 = document.createElement('h1')
  gamesH1.textContent = 'JUEGOS'
  const gamesH2 = document.createElement('h2')
  gamesH2.textContent = usuario + '  ¿preparad@ para un rato de diversión?'
  const gamesCardDiv = document.createElement('div')
  gamesCardDiv.className = 'gamesCardDiv'
  for (const game of dataGames) {
    console.log('Llego al bucle para pintar los juegos')
    gamesCard(gamesCardDiv, game.name, game.image, 0)
  }
  gamesDiv.append(gamesH1)
  gamesDiv.append(gamesH2)
  gamesDiv.append(gamesCardDiv)
  back(gamesCardDiv, app)
  contenedor.append(gamesDiv)
}
