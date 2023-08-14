const form = document.querySelector(".form")
const mailInput = document.querySelector(".email")
const alert = document.querySelector(".alert")


form.addEventListener("submit", e => {
    e.preventDefault()
    const regex =  /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!regex.test(mailInput.value)) {
        alert.classList.add("active")
    } else {
        alert.classList.remove("active")
    }
})