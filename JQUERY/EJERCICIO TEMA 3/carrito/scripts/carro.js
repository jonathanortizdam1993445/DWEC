$(document).ready(function(){
    $(".item").dblclick(comprar);
    //SI EL ELEMENTO AÚN NO EXISTE Y EN EL FUTURO SÍ, LE AÑADIMOS UN EVENTO
    $(document).on("click",".delete",eliminar);
    $("#btn_clear").on("click",vaciar);
    $("#btn_prev").on("click",anterior);
    $("#btn_next").on("click",siguiente);
    
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
        //AÑADIMOS EL ARTICULO AL PRINCIPIO
        $(articulo).prepend($delete);
        $('#cart_items').prepend(articulo);
        
        var longitud_carro=$("#cart_items").children().length
        if(longitud_carro > 4){
            var ancho=longitud_carro*120;
            $("#cart_items").css("width", ancho+"px");
        }else{
            $("#cart_items").css("width", "483px");
        }
        
        
        return false
        
    }else{
        alert("NO HAY STOCK")
        //AÑADO LA CLASE AGOTADO CON SUBRAYADO
        $(this).find(".stock").addClass('agotado');
        $('.agotado').css("text-decoration","line-through")
        //QUITO EL EVENTO
        $(this).unbind("dblclick")
    }
}
/*
function eventos(objeto){
    $(objeto).dblclick(comprar);
}
*/

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
    //OBTENGO LA LONGITUD DEL CARRITO Y LO MULTIPLICO POR 120
    var longitud_carro=$("#cart_items").children().length
    var ancho=longitud_carro*120;
    //APLICO EL NUEVO WIDTH AL ID CART_ITEMS
    $("#cart_items").css("width", ancho+"px");
    //REESTABLEZCO EL MARGEN IZQUIERDO
    $("#cart_items").css("left", "0px");
    return false;
}

function vaciar(){
    $('a.delete').trigger("click");
}


function siguiente(){
    console.log("SIGUIENTE")
    if($("#cart_items").children().length>4){
        //OBTENGO EL TAMAÑO DE LOS ARTICULOS INTRODUCIDOS, LE RETO 4 Y MULTIPLICO POR 120 Y LE AÑADO EL TEXTO DE PX
        var ancho_final=($("#cart_items").children().length -4 )* -120+"px";
        //COMPRUEBO QUE VALOR DEL CSS DE LEFT NO ES LO MISMO QUE LO QUE HE CALCULADO, Y MUEVO HACIA LA DERECHA, SI COINCIDE YA NO PUEDO MOVERME MÁS
        if($("#cart_items").css('left')!=ancho_final){
            var pos = $("#cart_items").offset();
            pos.left-=120;
            $("#cart_items").offset(pos);
        }
    }else{
        
    }
    
}

function anterior(){
    console.log("ANTERIOR")
    if($("#cart_items").children().length>4){
        //OBTENGO EL VALOR PRINCIPAL DEL MARGEN IZQUIERDO
        var long=$("#cart_items").offset().left
        console.log(long);
        //SI EL VALOR NO ES EL DEL VALOR PRINCIPAL, PUEDO MOVERME HACIA LA DERECHA
        if(long!=560.5){
            var pos = $("#cart_items").offset();
            pos.left+=120;
            $("#cart_items").offset(pos); 
        }
    }else{
        
    }
}










