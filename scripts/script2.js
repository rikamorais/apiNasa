function fotoNasa(data) {
    const key = '6sG0hzqMR4eKpLBcfngGYn3879YbJWGXo1ESlwR9'

    // metodo do jQuery para requisições ajax
    $.ajax({
        url: `https://api.nasa.gov/planetary/apod?api_key=${key}&date=${data}`,
        dataType: 'json', 
        success: function(dados) {
            imgNasa = document.getElementById('imagemNasa');
            imgNasa.src = dados.url;
        }
    })
}

fotoNasa('')

$("#botaoPesquisa").click(function(event){
event.preventDefault();
var dataValue = $("#date").val();
fotoNasa (dataValue);
})