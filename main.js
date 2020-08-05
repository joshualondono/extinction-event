const list = document.querySelectorAll("div.app ol li")
for (const item of list) {
  item.addEventListener('click', function(event) {
    item.style.textDecoration = "line-through"
  })
}

const listFade = document.querySelectorAll("div.app ul li")
for (const item of listFade) {
  item.addEventListener('click', function(event) {
    item.style.opacity = 0.2
  })
}

const imgList = document.querySelectorAll("img")
for (const img of imgList) {
  img.addEventListener('click', function(event) {
    img.style.opacity = 0
  })
}

const buttons = document.querySelectorAll("button")
for (const button of buttons) {
  button.addEventListener('click', function(event) {
    document.querySelector("body").style.opacity = 0


}
  )
}
