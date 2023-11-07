const node_for_click = document.getElementById("for_click")

function find_edit(){
    const surname = document.getElementsByTagName('span')[0]
    console.log(surname.innerText)
    surname.innerText = 'Baiguzhin'

    const name = document.getElementsByTagName('span')[1]
    console.log(name.innerText)
    name.innerText = 'Iskander'

    const i = document.getElementsByTagName('span')[2]
    console.log(i.innerText)
    i.innerText = 'Ruslanovich'

    const it = document.getElementsByTagName('span')[3]
    console.log(it.innerText)
    it.innerText = '02.11.2023'

}
node_for_click.addEventListener("click",find_edit)


