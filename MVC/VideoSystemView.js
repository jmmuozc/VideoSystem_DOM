"use strict";
class videoSystemView {


    constructor() {
        // Recogemos el main
        this.main = document.getElementsByTagName("main")[0];
    }

    showCategories(categoriesList) {
        // Creamos un elemento Div
        let categories = document.createElement("div");
        // Le añadimos una clase (container)
        categories.classList.add("container");
        categories.classList.add("text-center");
        this.main.appendChild(categories);

        let categoriesRow = document.createElement("div");
        categoriesRow.classList.add("row");

        categories.appendChild(categoriesRow);

        for (let category of categoriesList) {
            let categoriesColumn = document.createElement("div");
            categoriesColumn.classList.add("col");
            categoriesColumn.innerHTML = `<img src='./media/${category.Name}.jpg' width=200 height=100 id='categoryImg'>
            <h3>${category.Name}</h3>`;
            categoriesRow.appendChild(categoriesColumn);
        }
    }

    rngProductions(productionsList) {
        // let arrayProductions=
        let arrayProductions = [];
        let rng;
        const numberProductions=3;
        let arrayExistent = [];
        // Creamos un elemento Div
        let productionsContainer = document.createElement("div");
        // Le añadimos una clase (container)
        productionsContainer.classList.add("container");
        productionsContainer.classList.add("text-center");
        this.main.appendChild(productionsContainer);

        for (let production of productionsList) {
            arrayProductions.push(production);
        }
        let productionsRow = document.createElement("div");
        productionsRow.classList.add("row");

        productionsContainer.appendChild(productionsRow);


        for (let i = 0; i < numberProductions; i++) {
            do {
                rng = Math.floor(Math.random() * (arrayProductions.length));
            } while (arrayExistent.includes(rng));

            arrayExistent.push(rng);
            console.log(arrayProductions[rng]);
            let productionsColumn = document.createElement("div");
            productionsColumn.classList.add("col");
            productionsColumn.innerHTML = `<img src='./media/${arrayProductions[rng].Image}' width=200 height=100 id='productionImg'>
            <h3>${arrayProductions[rng].Title}</h3>`;
            productionsRow.appendChild(productionsColumn);
        }
    }


}

export default videoSystemView;