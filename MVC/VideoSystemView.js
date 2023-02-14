"use strict";
import Category from "../js/Category.js";
class videoSystemView {


    constructor() {
        // Recogemos el main
        this.main = document.getElementsByTagName("main")[0];
    }

    init(categoriesList) {
        // Creamos un elemento Div
        let categories = document.createElement("div");
        // Le añadimos una clase (container)
        categories.classList.add("container");
        categories.classList.add("text-center");
        this.main.appendChild(categories);
        
        let categoriesRow=document.createElement("div");
        categoriesRow.classList.add("row");
        
        categories.appendChild(categoriesRow);
        
        for (let category of categoriesList) {
            let categoriesColumn=document.createElement("div");
            categoriesColumn.classList.add("col");
            categoriesColumn.innerHTML=`<img src='./media/Categoria.jpg'/ width=200 height=100>
            <h3>${category.Name}</h3>
            
            
            
            `;
            console.log(category instanceof Category);
            
            categoriesRow.appendChild(categoriesColumn);
        }
    }

    // bindInit(handler) {
	// 	document.getElementsById("logo").addEventListener("click", (event) => {
    //         handler();
    //     });
	// }
}

export default videoSystemView;