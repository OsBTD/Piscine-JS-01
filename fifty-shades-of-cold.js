import { colors } from './fifty-shades-of-cold.data.js'

export function generateClasses() {
  const style = document.createElement('style')
  style.textContent = colors.map(color => `.${color} { background: ${color}; }`).join('\n')
  document.head.append(style)
}

export function generateColdShades() {
  const c = ['aqua', 'blue', 'turquoise', 'green', 'cyan', 'navy', 'purple'];
  const colors = colors.filter(color => 
    c.some(s => color.toLowerCase().includes(s))
  )

  const body = document.body;
  colors.forEach(color => {
    const div = document.createElement('div')
    div.className = color
    div.textContent = color
    body.appendChild(div)
  })
}

export function choseShade(shade) {
  const divs = document.querySelectorAll('div')
  divs.forEach(div => {
    if (div.textContent !== shade) {
      div.classList.replace(div.className, shade)
    }
  })
}