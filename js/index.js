const element = document.createElement('div')
element.innerHTML = 'Hello, DOM!'
element.style.backgroundColor = 'pink'
document.body.appendChild(element)
element.style.textAlign = 'center'


element.remove();
