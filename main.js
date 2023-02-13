function update() {
    let selectionUpdate = document.querySelector("#selection").value
    let inputUpdate = document.querySelector("#inputValue").value
    console.log(inputUpdate)
    console.log(selectionUpdate)
    if (selectionUpdate == "") {
        alert("Pilihlah Opsi Perubahan!")
    } else if (inputUpdate == "") {
        alert("Masukanlah Value Perubahan!")
    }
    let targetObject1 = document.querySelector("#targetObject1")
    let targetObject2 = document.querySelector("#targetObject2")
    if (selectionUpdate === "background") {
        targetObject1.style.background = inputUpdate
    } else if (selectionUpdate === "color") {
        targetObject2.style.color = inputUpdate
    } else if (selectionUpdate === "fontSize") {
        targetObject2.style.fontSize = `${inputUpdate}px`
    } else if (selectionUpdate === "fontFamily") {
        targetObject2.style.fontFamily = inputUpdate
    } else if (selectionUpdate === "width") {
        targetObject1.style.width = `${inputUpdate}px`
    } else if (selectionUpdate === "height") {
        targetObject1.style.height = `${inputUpdate}px`
    }
}