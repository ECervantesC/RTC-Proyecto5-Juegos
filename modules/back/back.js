import { init } from '../../pages/init/init'
import './back.css'
export const back = (elementAfter) => {
  console.log('Aqui pinto el back')
  const backDiv = document.createElement('div')
  const backImg = document.createElement('img')
  backImg.src = './public/assets/deshacer.png'
  backImg.alt = 'Atrás'
  backImg.className = 'backImg'
  backDiv.addEventListener('click', (e) => {
    console.log('Salto a la página anterior')
    app.innerHTML = ''
    init(app)
  })
  backDiv.append(backImg)
  elementAfter.insertAdjacentElement('afterend', backDiv)
}
