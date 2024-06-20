form = document.getElementById('form')
successful = document.getElementById('successful')

form.addEventListener("submit", (e)=>{
    e.preventDefault()
    const user = {
        username: "Marcos",
        password: "123456"
    }
    if (form[0].value === user.username & form[1].value === user.password) {
        successful.textContent = `Login exitoso`
        successful.classList.add('successful')
    } else {
        alert('Usuario o password incorrectos')
    }
    
})