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
