"use strict";
import videoSystem from "./VideoSystemModel";

class videoSystemController{
//Campos privados
#videoSystemModel;
#videoSystemView;

#loadDefaultObjects(){

}

constructor(videoSystemModel, videoSystemView) {
    this.#videoSystemModel = videoSystemModel;
    this.#videoSystemView = videoSystemView;

    // Lo invocamos en el constructor como primer evento ya que el resto necesitarán que la carga inicial se haya producido.
    this.onLoad();
}

onLoad=()=>{
    this.#loadDefaultObjects();
}
}

export default videoSystemController;