import { games } from '../games/games'
import './init.css'
export const init = (contenedor) => {
  const userName = sessionStorage.getItem('user')
  if (userName === null) {
    const userDiv = document.createElement('div')
    userDiv.id = 'userDiv'
    const userH1 = document.createElement('h1')
    userH1.textContent = 'Bienvenido a tu aplicación de juegos'
    const userH2 = document.createElement('h2')
    userH2.textContent = 'Introduce tu nombre'
    const userInput = document.createElement('input')
    userInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        sessionStorage.setItem('user', e.target.value)
        games(app, userName)
      }
    })
    userDiv.append(userH1)
    userDiv.append(userH2)
    userDiv.append(userInput)
    contenedor.append(userDiv)
  } else {
    const userDiv = document.createElement('div')
    userDiv.id = 'userDiv'
    const userH1 = document.createElement('h1')
    userH1.textContent =
      'Hola de nuevo    ' + userName + ', bienvenido a tu aplicación de juegos'
    const userButton = document.createElement('button')
    userButton.textContent = 'Continuar jugando'
    userButton.addEventListener('click', (e) => {
      games(app, userName)
    })
    const userH2 = document.createElement('h2')
    userH2.textContent = 'si no eres   ' + userName + '   introduce tu nombre'
    const userInput = document.createElement('input')
    userInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        sessionStorage.setItem('user', e.target.value)
        const userName = e.target.value
        games(app, userName)
      }
    })
    userDiv.append(userH1)
    userDiv.append(userButton)
    userDiv.append(userH2)
    userDiv.append(userInput)
    contenedor.append(userDiv)
  }
}
