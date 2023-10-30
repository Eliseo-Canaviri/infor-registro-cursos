const loginForm = document.querySelector('#loginForm')
loginForm.addEventListener('submit', (e)=>{
    e.preventDefault()
    const email = document.querySelector('#email').value
    const password = document.querySelector('#password').value
    const Users = JSON.parse(localStorage.getItem('users')) || []
    const validUser = Users.find(user => user.email === email && user.password === password)

    if(!validUser){
        return alert('Usurious y/o Contrast incorrecto!')
    }
    alert('Bienvenido la Sistema')
  
    localStorage.setItem('login_success', JSON.stringify(validUser))
    window.location.href = 'panel.html'
})