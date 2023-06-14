$(document).ready(function(){
    $('#cancelar').click(function(){
        $('form').slideUp();
    })

    $('header button').click(function(){
        $('form').slideDown();
    })

    $('form').on('submit', function(e){
        e.preventDefault();
        const enderecoUrl = $('#url-id').val();
        const novoItem = $('<li style="display:none"></li>');
        $(`<img src="${enderecoUrl}" />`).appendTo(novoItem);
        $(`<div class="overlay-imagem-link">
        <a href="${enderecoUrl}" target="_blank" title="ver imagem em tamanho real">ver imagem em tamanho real</a> 
        </div>`).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(2000);
        $('#url-id').val('');
    })
})