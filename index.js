// const element = document.createElement('div');
// document.body.append(element);

//const ul = document.createElement('ul');

const mainTag = document.getElementById('main')
console.log(mainTag)
mainTag.remove()

const newHeader = document.createElement('h1');
newHeader.setAttribute('id', 'victory')
newHeader.innerHTML = 'Louis is the champion'

document.body.append(newHeader)

console.log(newHeader)