const container = document.querySelector('.container')

let atual = 0

const imgs = [
    {
        img: 'https://i.pinimg.com/originals/8a/ab/a8/8aaba8fe5611ab66cca05f2d94c2932b.jpg'
    },
    {
        img: 'https://i.pinimg.com/originals/62/69/c1/6269c15f8ec4b6dff4c25d1dbed05ebe.jpg'
    }
]

function addDom() {
    container.innerHTML = `
    <img src="${imgs[atual].img}" style="width: 300px">
    `
}

console.log(imgs.length); 

setInterval(() => {
    if (atual == 1) {
        atual--
        addDom()
        return
    }
    atual++
    addDom()
}, 3000)

addDom()