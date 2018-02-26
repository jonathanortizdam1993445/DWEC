EventUtil = new Object();
EventUtil.addEventHandler = function(elemento, tipoEvento, funcion) {
  if(elemento.addEventListener) { // navegadores DOM
    elemento.addEventListener(tipoEvento, funcion, false);
  }
  else if(elemento.attachEvent) { // Internet Explorer
    elemento.attachEvent("on"+tipoEvento, funcion);
  }
  else { // resto de navegadores
    elemento["on"+tipoEvento] = funcion;
  }
};
 
EventUtil.removeEventHandler = function(elemento, tipoEvento, funcion) {
  if(elemento.removeEventListener) { // navegadores DOM
    elemento.removeEventListener(tipoEvento, funcion, false);
  }
  else if(elemento.detachEvent) { // Internet Explorer
    elemento.detachEvent("on"+tipoEvento, funcion);
  }
  else { // resto de navegadores
    elemento["on"+tipoEvento] = null;
  }
};

EventUtil.getEvent = function() {
  if(window.event) { // Internet Explorer
    return this.formatEvent(window.event);
  }
  else { // navegadores DOM
    return EventUtil.getEvent.caller.arguments[0];
  }
};
EventUtil.formatEvent = function(elEvento) {
  // Detectar si el navegador actual es Internet Explorer
  var esIE = navigator.userAgent.toLowerCase().indexOf('msie')!=-1;
  if(esIE) {
    elEvento.charCode = (elEvento.type=="keypress") ? elEvento.keyCode : 0;
    elEvento.eventPhase = 2;
    elEvento.isChar = (elEvento.charCode > 0);
    elEvento.pageX = elEvento.clientX + document.body.scrollLeft;
    elEvento.pageY = elEvento.clientY + document.body.scrollTop;
    elEvento.preventDefault = function() {
      this.returnValue = false;
    };
    if(elEvento.type == "mouseout") {
      elEvento.relatedTarget = elEvento.toElement;
    }
    else if(elEvento.type == "mouseover") {
      elEvento.relatedTarget = elEvento.fromElement
    }
    elEvento.stopPropagation = function() {
      this.cancelBubble = true;
    };
    elEvento.target = elEvento.srcElement;
    elEvento.time = (new Date).getTime();
  }
  return elEvento;
}