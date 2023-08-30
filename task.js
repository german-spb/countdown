const t = document.getElementById("timer")
let timerId = setInterval(() => {
  t.textContent = Number(t.textContent) - 1
  if (t.textContent == -1){
    clearInterval(timerId);
    window.alert("Вы победили в конкурсе!")
  }
}, 1000)
