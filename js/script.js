let navItemDom = document.querySelectorAll(".nav-item")
console.log(navItemDom)
navItemDom.forEach(ele => {
    console.log(ele)
    ele.addEventListener("click", () => {
        let allActiveItem = document.querySelectorAll(".active-link")
        allActiveItem.forEach(item => item.classList.remove("active-link"));
        ele.classList.add("active-link");
    })
})
console.log(this)