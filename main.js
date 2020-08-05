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
