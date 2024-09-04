
function darOI(){
    fetch("https://www.punapi.rest/api/pun",)
    .then(Response =>{
        return Response.json()
    })
    .then(data =>{
        var pun = data.id
        para.innerText = pun

    })
    
}
function pagina(){
    alert("ir pra pagina 2")
}