"use strict";
import videoSystem from "./VideoSystemModel.js";

class videoSystemController{
//Campos privados
#videoSystemModel;
#videoSystemView;

#loadDefaultObjects(){
this.#videoSystemModel.categoryFactory("Comedia","Peliculas de comedia, destinadas a hacer reir al espectador");
this.#videoSystemModel.movieFactory("Ocho apellidos vascos","14/3/2014","ES","Rafa, un señorito andaluz que nunca ha salido de Sevilla, decide dejarlo todo para conquistar a Amaia, una chica vasca. Se muda al País Vasco y allí tendrá que adaptarse a un nuevo entorno y hacerse pasar por vasco para ganarse la aprobación del padre de Amaia.");
this.#videoSystemModel.addActor(this.#videoSystemModel.personFactory("Dani","03887947G","Rovira","1/11/1980"));

this.#videoSystemModel.movieFactory("Zoolander","4/1/2002","US","Derek Zoolander ha sido el modelo masculino más cotizado durante los últimos tres años. Cuando le arrebatan la corona, decide retirarse, hasta que un diseñador le pide que desfile para él, involucrándolo al mismo tiempo en una trama de asesinato.");
this.#videoSystemModel.serieFactory("Castle","9/3/2009","US","Aburrido con su éxito, el reconocido escritor de novelas misteriosas Rick Castle se une a la detective de NYPD, Kate Beckett para resolver el caso de un asesino que emula a otro de su calaña recreando las escenas de asesinato de las novelas de Rick. Desafortunadamente, él y Kate disienten violentamente y pareciera que se fuesen a matar uno al otro.","default.png",8);
this.#videoSystemModel.serieFactory("Mejor llama a Saul","26/4/2009","US","Better Call Saul sigue la transformación de Jimmy McGill (Bob Odenkirk), un ex estafador que intenta convertirse en un abogado respetable, a la personalidad del extravagante abogado penalista Saul Goodman ","default.png",6);
this.#videoSystemModel.categoryFactory("Drama","Peliculas de drama, destinadas a hacer llorar al espectador");
this.#videoSystemModel.categoryFactory("Aventura","Peliculas de aventura, destinadas a hacer experimentar una aventura al espectador");

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