const loginForm = document.querySelector('.login-form')
loginForm.addEventListener('submit', handleSubmit)

function handleSubmit(event) {
    event.preventDefault()
    const form = event.target
    const email = form.elements.email.value.trim()
    const password = form.elements.password.value.trim()
    const formData = {}
    if (email === '' || password === '') {
        window.alert('All form fields must be filled in')
    } else {
        formData.email = form.elements.email.value
        formData.password = form.elements.password.value
        console.log(formData)
        form.reset()
    }
}
