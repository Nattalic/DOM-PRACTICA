//document: api que existe dentro del lenguaje de javascript

//acceder/obtener los elementos
//get element by id es solamente para el identificador
const content = document.getElementById("content") //acceder al elemento (representado como nodo) el primero que encuentre en el arbol html
console.log(content)

//metodos
const title = document.querySelector(".title") //para seleccionar clases 
console.log(title)

const URL = document.URL //atributos
console.log(URL)

const titles = document.querySelectorAll(".title")
console.log(titles)


const titlesWithSpan = document.querySelectorAll(".title > span") //obtener uno especifico con el simbolo >
console.log(titlesWithSpan)


//obtener desde el html el contenido
const description = document.querySelector(".description")
const container = document.getElementById("container")
const text = document.querySelector(".text")
const changeText = document.getElementById("changeText")
const addElement = document.getElementById("addElement")
const toggleClass = document.getElementById("toggleClass")
const itemList = document.getElementById("itemList")
const item = document.querySelectorAll(".item")
const form = document.getElementById("myForm")
const input1 = document.getElementById("inputField")
const input2 = document.getElementById("myCheckbox")
const button = document.getElementById("submitForm")


console.dir ({
    title,
    description,
    content,
    changeText,
    addElement,
    toggleClass,
    item,
    itemList,
    form,
    input1,
    input2,
    button
})

//eventos

//cambiar el boton al ser presionado
function activarMensaje () {
    console.log("Boton presionado!!!")
}

changeText.addEventListener('click', () => {
    const textElement = document.querySelector('.text')
    textElement.textContent = 'iwiwiwiwiw' //cambiar el contenido del html desde el DOM
    console.log(textElement)
    textElement.setAttribute('style', 'color:pink') //se crea un atributo (cualquiera que uno quiera) a ese elemento en especifico 
})


//agregar elementos dandole click a un boton

addElement.addEventListener('mouseover', () => {
    const newItem = document.createElement('li') //crear elementos especificados directos de js
    newItem.className = 'item' //especificar su atributo class dentro del elemento
    newItem.textContent = `Item  ${itemList.children.length + 1}`  //(para que salga item 1 item 2 item 3 item 4...)
    itemList.appendChild(newItem)
    itemList.scrollTo(0,itemList.scrollHeight) //alto maximo que tiene el scroll 
    // scroll to : sirve para desplazarse de manera vertical y horizontal (la barrita de subir y bajar)
})


//modo oscuro
let darkMode =  true

toggleClass.addEventListener('click', () => {
    content.classList.toggle('highlight')
    container.style = `background-color :  ${darkMode ? 'pink' : 'white'}`
    //!true = false      !false = true
    darkMode = !darkMode
})

form.addEventListener('submit', (evento) =>  {
    evento.preventDefault() //evitar que la pagina se recarge 
    console.log("formulario enviado")
    const input1 = inputField.value
    const input2 = myCheckbox.checked 

    alert(`Mensaje ingresado: ${input1} Verifico?  ${input2 ? 'Si' : 'No'}`) //form

    form.reset() //limpiar los campos del form
})
