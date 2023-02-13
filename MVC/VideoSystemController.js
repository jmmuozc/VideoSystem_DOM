"use strict";
import videoSystem from "./VideoSystemModel.js";

class videoSystemController{
//Campos privados
#videoSystemModel;
#videoSystemView;

#loadDefaultObjects(){
    let actor_director="";
this.#videoSystemModel.categoryFactory("Comedia","Peliculas de comedia, destinadas a hacer reir al espectador");

this.#videoSystemModel.movieFactory("Ocho apellidos vascos","14/3/2014","ES","Rafa, un señorito andaluz que nunca ha salido de Sevilla, decide dejarlo todo para conquistar a Amaia, una chica vasca. Se muda al País Vasco y allí tendrá que adaptarse a un nuevo entorno y hacerse pasar por vasco para ganarse la aprobación del padre de Amaia.");
this.#videoSystemModel.addActor(this.#videoSystemModel.personFactory("Dani","03887947G","Rovira","01/11/1980"));
this.#videoSystemModel.addActor(this.#videoSystemModel.personFactory("Carmen","71025412D","Machi","07/1/1963"));
this.#videoSystemModel.addDirector(this.#videoSystemModel.personFactory("Emilio","31186215D","Martínez","30/11/1944"));

this.#videoSystemModel.movieFactory("Zoolander","04/1/2002","US","Derek Zoolander ha sido el modelo masculino más cotizado durante los últimos tres años. Cuando le arrebatan la corona, decide retirarse, hasta que un diseñador le pide que desfile para él, involucrándolo al mismo tiempo en una trama de asesinato.");
actor_director=this.#videoSystemModel.personFactory("Ben","84718220C","Stiller","30/11/1965");
this.#videoSystemModel.addActor(actor_director);
this.#videoSystemModel.addActor(this.#videoSystemModel.personFactory("Owen","36685822V","Wilson","18/11/1968"));
this.#videoSystemModel.addDirector(actor_director);

this.#videoSystemModel.serieFactory("Castle","09/3/2009","US","Aburrido con su éxito, el reconocido escritor de novelas misteriosas Rick Castle se une a la detective de NYPD, Kate Beckett para resolver el caso de un asesino que emula a otro de su calaña recreando las escenas de asesinato de las novelas de Rick. Desafortunadamente, él y Kate disienten violentamente y pareciera que se fuesen a matar uno al otro.","default.png",8);

this.#videoSystemModel.addActor(this.#videoSystemModel.personFactory("Nathan","24009028H","Fillion","27/3/1971"));
this.#videoSystemModel.addActor(this.#videoSystemModel.personFactory("Stana","06859582Q","Katic","26/4/1978"));
this.#videoSystemModel.addDirector(this.#videoSystemModel.personFactory("Andrew","84590389T","Marlowe","23/12/1966"));

this.#videoSystemModel.serieFactory("Mejor llama a Saul","26/4/2009","US","Better Call Saul sigue la transformación de Jimmy McGill (Bob Odenkirk), un ex estafador que intenta convertirse en un abogado respetable, a la personalidad del extravagante abogado penalista Saul Goodman ","default.png",6);

this.#videoSystemModel.addActor(this.#videoSystemModel.personFactory("Bob","16868595G","Odenkirk","22/10/1962"));
this.#videoSystemModel.addActor(this.#videoSystemModel.personFactory("Jonathan","18041889E","Banks","31/1/1947"));
this.#videoSystemModel.addDirector(this.#videoSystemModel.personFactory("Terry","39726325N","Mcdonough","23/12/1966"));

this.#videoSystemModel.categoryFactory("Drama","Peliculas de drama, destinadas a hacer llorar al espectador");

this.#videoSystemModel.serieFactory("Cerdo","16/7/2021","US","Robin es un ermitaño atormentado por su pasado que vive en medio del bosque con la única compañía de una cerda trufera. Cuando esta le es arrebatada, Robin buscará venganza.");


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