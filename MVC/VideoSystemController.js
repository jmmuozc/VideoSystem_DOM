"use strict";
import videoSystem from "./VideoSystemModel.js";

class videoSystemController{
//Campos privados
#videoSystemModel;
#videoSystemView;

#loadDefaultObjects(){
    let actor_director="";
this.#videoSystemModel.categoryFactory("Comedia","Peliculas de comedia, destinadas a hacer reir al espectador");

this.#videoSystemModel.movieFactory("Ocho apellidos vascos","14/03/2014","ES","Rafa, un señorito andaluz que nunca ha salido de Sevilla, decide dejarlo todo para conquistar a Amaia, una chica vasca. Se muda al País Vasco y allí tendrá que adaptarse a un nuevo entorno y hacerse pasar por vasco para ganarse la aprobación del padre de Amaia.");
this.#videoSystemModel.addActor(this.#videoSystemModel.personFactory("Dani","03887947G","Rovira","01/11/1980"));
this.#videoSystemModel.addActor(this.#videoSystemModel.personFactory("Carmen","71025412D","Machi","07/01/1963"));
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

this.#videoSystemModel.serieFactory("Mejor llama a Saul","26/04/2009","US","Better Call Saul sigue la transformación de Jimmy McGill (Bob Odenkirk), un ex estafador que intenta convertirse en un abogado respetable, a la personalidad del extravagante abogado penalista Saul Goodman ","default.png",6);

this.#videoSystemModel.addActor(this.#videoSystemModel.personFactory("Bob","16868595G","Odenkirk","22/10/1962"));
this.#videoSystemModel.addActor(this.#videoSystemModel.personFactory("Jonathan","18041889E","Banks","31/1/1947"));
this.#videoSystemModel.addDirector(this.#videoSystemModel.personFactory("Terry","39726325N","Mcdonough","23/12/1966"));

this.#videoSystemModel.categoryFactory("Drama","Peliculas de drama, destinadas a hacer llorar al espectador");

this.#videoSystemModel.movieFactory("Cerdo","16/07/2021","US","Robin es un ermitaño atormentado por su pasado que vive en medio del bosque con la única compañía de una cerda trufera. Cuando esta le es arrebatada, Robin buscará venganza.");

this.#videoSystemModel.addActor(this.#videoSystemModel.personFactory("Lyn","41629302S","May","12/12/1952"));
this.#videoSystemModel.addActor(this.#videoSystemModel.personFactory("José María","00375747L","Torre","04/11/1977"));
this.#videoSystemModel.addDirector(this.#videoSystemModel.personFactory("Juan Carlos","37783577M","Daboin","24/5/1977"));

this.#videoSystemModel.movieFactory("Puñales por la espaldas","29/10/2019","US","Un misterio moderno en el que un grupo de investigadores ha de descubrir al responsable del asesinato del patriarca de una excéntrica familia.");

this.#videoSystemModel.addActor(this.#videoSystemModel.personFactory("Chris","97980957Z","Evans","13/6/1981"));
this.#videoSystemModel.addActor(this.#videoSystemModel.personFactory("Ana","30028098B","Dearmas","30/4/1988"));
this.#videoSystemModel.addDirector(this.#videoSystemModel.personFactory("Rian","70496193C","Johnson","17/12/1973"));

this.#videoSystemModel.serieFactory("You","09/9/2009","US","Una historia de amor del siglo XXI sobre un obsesivo, pero brillante mánager de 20 años de una librería, quien utiliza la era digital hiperconectada para enamorar a la mujer de sus sueños.","default.png",4);

this.#videoSystemModel.addActor(this.#videoSystemModel.personFactory("Elizabeth","74038302Z","Lail","13/6/1992"));
this.#videoSystemModel.addActor(this.#videoSystemModel.personFactory("Jenna","46401836A","Ortega","27/9/2002"));
this.#videoSystemModel.addDirector(this.#videoSystemModel.personFactory("Marcos","31029047T","Siega","08/6/1969"));

this.#videoSystemModel.serieFactory("Alguien está mintiendo","07/10/2021","US","Tras la muerte de Simon Kelleger, un estudiante de secundaria, cuatro de sus compañeros, Cooper, Bronwyn, Addy y Nate, se convierten en sospechosos de asesinato.","default.png",2);

this.#videoSystemModel.addActor(this.#videoSystemModel.personFactory("Barrett","05456677L","Carnahan","22/9/1992"));
this.#videoSystemModel.addActor(this.#videoSystemModel.personFactory("Marianly","26545283V","Tejada","04/7/1992"));
this.#videoSystemModel.addDirector(this.#videoSystemModel.personFactory("Jennifer","95305815W","Morrison","12/4/1979"));

this.#videoSystemModel.categoryFactory("Aventura","Peliculas de aventura, destinadas a hacer experimentar una aventura al espectador");

this.#videoSystemModel.movieFactory("Viaje al centro de la tierra","05/09/2008","US","Durante una expedición científica en Islandia, el científico Trevor Anderson, su sobrino Sean y Hannah, la guía que les acompaña, quedan atrapados en una cueva.");

this.#videoSystemModel.addActor(this.#videoSystemModel.personFactory("Brendan","73509482X","Fraser","02/12/1968"));
this.#videoSystemModel.addActor(this.#videoSystemModel.personFactory("Josh","92318914L","Hutcherson","12/10/1992"));
this.#videoSystemModel.addDirector(this.#videoSystemModel.personFactory("Henry","58451547Z","Levin","05/6/1909"));

this.#videoSystemModel.movieFactory("Atlantis El imperio perdido","23/11/2001","US","Un inexperto aventurero se convierte en la clave para desentrañar un viejo misterio cuando se une a un grupo de temerarios exploradores para encontrar el legendario imperio perdido de Atlantis.");

this.#videoSystemModel.addActor(this.#videoSystemModel.personFactory("Florence","06927439T","Stanley","01/7/1924"));
this.#videoSystemModel.addActor(this.#videoSystemModel.personFactory("John","04518192A","Mahoney","20/6/1940"));
this.#videoSystemModel.addDirector(this.#videoSystemModel.personFactory("Kirk","29059056M","Wise","24/8/1963"));

this.#videoSystemModel.serieFactory("The witcher","23/11/2001","US","El brujo Geralt, un cazador de monstruos, trata de encontrar su lugar en un mundo en el que las personas suelen ser más malvadas que las bestias.","default.png",2);

this.#videoSystemModel.addActor(this.#videoSystemModel.personFactory("Joey","89629793N","Batey","01/1/1989"));
this.#videoSystemModel.addActor(this.#videoSystemModel.personFactory("Henry","49924909M","Cavill","05/5/1983"));
this.#videoSystemModel.addDirector(this.#videoSystemModel.personFactory("Alik","68157768M","Sakharov","17/5/1959"));

this.#videoSystemModel.serieFactory("Hora de aventuras","23/11/2001","US","Un inexperto aventurero se convierte en la clave para desentrañar un viejo misterio cuando se une a un grupo de temerarios exploradores para encontrar el legendario imperio perdido de Atlantis.","default.png",10);

this.#videoSystemModel.addActor(this.#videoSystemModel.personFactory("Pendleton","29458740H","Ward","23/9/1982"));
this.#videoSystemModel.addActor(this.#videoSystemModel.personFactory("Justin","11442737F","Roiland","21/2/1980"));
this.#videoSystemModel.addDirector(this.#videoSystemModel.personFactory("Larry","87132573V","Leichliter","24/5/1941"));

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