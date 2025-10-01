let Search = document.getElementById("search")
let mini_search = document.getElementById("mini-search")
let close = document.getElementById("close")


Search.addEventListener("click" , () => {
    mini_search.classList.add("mini_search_hide")
})

close.addEventListener("click" , () => {
    mini_search.classList.remove("mini_search_hide")
})