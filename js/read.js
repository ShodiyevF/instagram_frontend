const list = document.querySelector('.list')

async function getLogins(){
    const res = await fetch('https://abubakr.uz:4001/read')

    const data = await res.json()
    console.log(data);
    for (const i of data.data) {
        const ul = document.createElement('ul')
        const item1 = document.createElement('li')
        const item2 = document.createElement('li')
        const item3 = document.createElement('li')

        ul.classList.add('innerlist')

        item1.textContent = i.user_id
        item2.textContent = i.user_username
        item3.textContent = i.user_password

        ul.appendChild(item1)
        ul.appendChild(item2)
        ul.appendChild(item3)

        list.appendChild(ul)
    }
}

getLogins()