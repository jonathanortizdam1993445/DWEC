$(document).ready(function(){
    $(".item").dblclick(comprar);   
    });

function comprar(){
    var stock=$(this).find(".stock").text();
    var num =stock.replace('Stock',"")
    if(num > 0){

        //ELIMINO LA ETIQUETA LABEL 
        $(this).find(".stock").replaceAll('<label class="stock">Stock '+parseInt(num-1)+'</label>')
        //Y AGREGO OTRA CON LA INFORMACIÓN ACTUALIZADA
        $(this).append('<label class="stock">Stock '+parseInt(num-1)+'</label>')

        //OBTENGO EL VALOR DE LAS COMPRAS Y AUMENTO LA CANTIDAD
        var compra=parseInt($("#citem").val());
        $('#citem').attr('value',compra+1);

        //OBTENGO EL PRECIO DEL PRODUCTO Y ELIMINO EL SIMBOLO €
        var coste=$(this).find(".price").text()
        var coste_limpio=coste.replace('€','');

        //OBTENGO EL VALOR DE L PRECIO Y AUMENTO EL PRECIO
        var precio=parseInt($('#cprice').val());
        $('#cprice').attr('value',precio+parseInt(coste_limpio)+' €');

        //CLONAMOS EL ARTICULO
        var articulo=$(this).clone();
        //LE CAMBIAMOS EL ID
        $(articulo).attr('id',"c"+$(this).attr('id'));
        //LE AÑADIMOS LA CLASE ICART
        $(articulo).addClass('icart');
        //OCULTAR CLASE STOCK
        $(articulo).find('.stock').hide();
        //CAMBIAR PROPIEDAD CURSOR
        $(articulo).css('cursor','default');
        //AÑADIR ENLACE
        var $delete =$('<a href="" class="delete"></a>')
        $delete.click(eliminar);
        //AÑADIMOS EL ARTICULO AL PRINCIPIO
        $(articulo).prepend($delete);
        $('#cart_items').prepend(articulo);
        
        
       return false

    }else{
        alert("NO HAY STOCK")
        //AÑADO LA CLASE AGOTADO CON SUBRAYADO
        $(this).find(".stock").addClass('agotado');
        $('.agotado').css("text-decoration","line-through")
    }
}

function eliminar(){
    var articulo=$(this).parent();
    var id=$(articulo).attr("id");
    id=id.substring(1);
    var stock =$("#"+id).find('.stock').text()
    var num=stock.replace("Stock","");
    num=parseInt(num);
    
    if(num > 1){
        //MODIFICO EL STOCK
        $("#"+id).find('.stock').replaceAll('<label class="stock">Stock '+parseInt(num+1)+'</label>')
        $("#"+id).append('<label class="stock">Stock '+parseInt(num+1)+'</label>')
        //RESTO 1 AL TOTAL DE PRODUCTOS COMPRADOS
        var compra=parseInt($('#citem').val())
        $('#citem').attr('value',compra-1);
        //RESTO AL PRECIO TOTAL EL VALOR DEL ARTICULO
        var producto=$("#"+id).find('.price').text()
        producto=producto.replace('€','')
        var precio=parseInt($('#cprice').val())
        $('#cprice').attr('value',precio-parseInt(producto)+' €')
        //ELIMINO EL ARTICULO EL CARRITO
        articulo.remove();
        
    }else{
        //MODIFICO EL STOCK
        $("#"+id).find('.stock').removeClass('agotado')
        $("#"+id).find('.stock').replaceAll('<label class="stock">Stock '+parseInt(num+1)+'</label>')
        //RESTO 1 AL TOTAL DE PRODUCTOS COMPRADOS
        $("#"+id).append('<label class="stock">Stock '+parseInt(num+1)+'</label>')
        $('#citem').attr('value',compra-1);
        //RESTO AL PRECIO TOTAL EL VALOR DEL ARTICULO
        $('#cprice').attr('value',precio-parseInt(producto)+' €')
        //ELIMINO EL ARTICULO EL CARRITO
        articulo.remove();
    }
    
    return false;
}



















