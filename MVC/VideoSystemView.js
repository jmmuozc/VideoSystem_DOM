"use strict";
class videoSystemView {

    constructor() {
        // Recogemos el main
        this.main = document.getElementsByTagName("main")[0];
    }

    showCategories(categoriesList) {

        
        if (document.getElementById("div-Productions")) this.main.removeChild(document.getElementById("div-Productions"));
        if (document.getElementById("div-categories")) this.main.removeChild(document.getElementById("div-categories"));
        // Creamos un elemento Div
        let categories = document.createElement("div");
        // Le añadimos una clase (container)
        categories.classList.add("container");
        categories.classList.add("text-center");
        categories.setAttribute("Id", "div-categories");
        this.main.appendChild(categories);

        let categoriesRow = document.createElement("div");
        categoriesRow.classList.add("row");

        categories.appendChild(categoriesRow);

        for (let category of categoriesList) {
            let categoriesColumn = document.createElement("div");
            categoriesColumn.classList.add("col");
            categoriesColumn.classList.add("category");
            categoriesColumn.setAttribute("data-category", `${category.Name}`);
            categoriesColumn.innerHTML = `<img src='./media/${category.Name}.jpg' width=200 height=100>
            <h3>${category.Name}</h3>`;
            categoriesRow.appendChild(categoriesColumn);
        }
    }

    headerCategories(categoriesList) {
        let nav = document.getElementById("navbarUl");
        if (document.getElementById("nav-categories")) nav.removeChild(document.getElementById("nav-categories"));
        let categoriesIl = document.createElement("li");
        categoriesIl.classList.add("nav-item");
        categoriesIl.classList.add("dropdown");
        categoriesIl.setAttribute("Id", "nav-categories");
        categoriesIl.innerHTML = `<a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
        aria-expanded="false">Categorias</a>`;
        
        nav.appendChild(categoriesIl);
        let categoriesUl = document.createElement("ul");
        categoriesUl.setAttribute("Id", "categories-ul");
        categoriesUl.classList.add("dropdown-menu");
        categoriesIl.appendChild(categoriesUl);
        
        for (let category of categoriesList) {
            let categoryLink = document.createElement("li");
            categoryLink.classList.add("category");
            categoryLink.setAttribute("data-category", `${category.Name}`);
            categoryLink.innerHTML = `<a class="dropdown-item" href="#">${category.Name}</a>`;
            categoriesUl.appendChild(categoryLink);
        }
    }

    rngProductions(productionsList) {

        if (document.getElementById("div-rngProductions")) this.main.removeChild(document.getElementById("div-rngProductions"));

        // let arrayProductions=
        let arrayProductions = [];
        let rng;
        const numberProductions = 3;
        let arrayExistent = [];
        // Creamos un elemento Div
        let productionsContainer = document.createElement("div");
        // Le añadimos una clase (container)
        productionsContainer.classList.add("container");
        productionsContainer.classList.add("text-center"); 
        productionsContainer.setAttribute("Id", "div-rngProductions");
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
            let productionsColumn = document.createElement("div");
            productionsColumn.classList.add("col");
            productionsColumn.innerHTML = `<div class="card mx-auto" style="width: 18rem;">
            <img src='./media/${arrayProductions[rng].Image}' class="card-img-top" alt="${arrayProductions[rng].Image}" width=250 height=150>
            <div class="card-body">
              <h5 class="card-title">${arrayProductions[rng].Title}</h5>
              <a href="#" class="btn btn-primary">Ver</a>
            </div>
          </div>`

            productionsRow.appendChild(productionsColumn);
        }
    }

    showCategoriesProductions(category){

        let arrayProductions = [];

        if (document.getElementById("div-categories")) this.main.removeChild(document.getElementById("div-categories"));
        if (document.getElementById("div-rngProductions")) this.main.removeChild(document.getElementById("div-rngProductions"));
        if (document.getElementById("div-Productions")) this.main.removeChild(document.getElementById("div-Productions"));

        let productionsContainer = document.createElement("div");
        // Le añadimos una clase (container)
        productionsContainer.classList.add("container");
        productionsContainer.classList.add("text-center"); 
        productionsContainer.setAttribute("Id", "div-Productions");
        this.main.appendChild(productionsContainer);

        let productionsRow = document.createElement("div");
        productionsRow.classList.add("row");

        productionsContainer.appendChild(productionsRow);
        
        for (let production of category) {
            arrayProductions.push(production);
        }

        

        for (let i = 0; i < arrayProductions.length; i++) {
            let productionsColumn = document.createElement("div");
            productionsColumn.classList.add("col");
            productionsColumn.innerHTML = `<div class="card mx-auto" style="width: 18rem;">
            <img src='./media/${arrayProductions[i].Image}' class="card-img-top" alt="${arrayProductions[i].Image}" width=250 height=150>
            <div class="card-body">
              <h5 class="card-title">${arrayProductions[i].Title}</h5>
              <a href="#" class="btn btn-primary">Ver</a>
            </div>
          </div>`
          productionsRow.appendChild(productionsColumn);
        }
    }

    showSeries(serieList){

        let arraySerie = [];

        if (document.getElementById("div-categories")) this.main.removeChild(document.getElementById("div-categories"));
        if (document.getElementById("div-rngProductions")) this.main.removeChild(document.getElementById("div-rngProductions"));
        if (document.getElementById("div-Productions")) this.main.removeChild(document.getElementById("div-Productions"));
        if (document.getElementById("div-serie")) this.main.removeChild(document.getElementById("div-serie"));

        let serieContainer = document.createElement("div");
        // Le añadimos una clase (container)
        serieContainer.classList.add("container");
        serieContainer.classList.add("text-center"); 
        serieContainer.setAttribute("Id", "div-serie");
        this.main.appendChild(serieContainer);

        let serieRow = document.createElement("div");
        serieRow.classList.add("row");

        serieContainer.appendChild(serieRow);

        console.log(serieList);
        for (let serie of serieList) {
            arraySerie.push(serie);
        }

        for (let i = 0; i < arraySerie.length; i++) {
            let serieColumn = document.createElement("div");
            serieColumn.classList.add("col");
            serieColumn.innerHTML = `<div class="card mx-auto" style="width: 18rem;">
            <img src='./media/${arraySerie[i].Image}' class="card-img-top" alt="${arraySerie[i].Image}" width=250 height=150>
            <div class="card-body">
              <h5 class="card-title">${arraySerie[i].Title}</h5>
              <a href="#" class="btn btn-primary">Ver</a>
            </div>
          </div>`
          serieRow.appendChild(serieColumn);
        }
    }

    showMovies(MovieList){
       
        let arraySerie = [];

        if (document.getElementById("div-categories")) this.main.removeChild(document.getElementById("div-categories"));
        if (document.getElementById("div-rngProductions")) this.main.removeChild(document.getElementById("div-rngProductions"));
        if (document.getElementById("div-Productions")) this.main.removeChild(document.getElementById("div-Productions"));
        if (document.getElementById("div-serie")) this.main.removeChild(document.getElementById("div-serie"));

        let serieContainer = document.createElement("div");
        // Le añadimos una clase (container)
        serieContainer.classList.add("container");
        serieContainer.classList.add("text-center"); 
        serieContainer.setAttribute("Id", "div-serie");
        this.main.appendChild(serieContainer);

        let serieRow = document.createElement("div");
        serieRow.classList.add("row");

        serieContainer.appendChild(serieRow);

        console.log(serieList);
        for (let serie of serieList) {
            arraySerie.push(serie);
        }

        for (let i = 0; i < arraySerie.length; i++) {
            let serieColumn = document.createElement("div");
            serieColumn.classList.add("col");
            serieColumn.innerHTML = `<div class="card mx-auto" style="width: 18rem;">
            <img src='./media/${arraySerie[i].Image}' class="card-img-top" alt="${arraySerie[i].Image}" width=250 height=150>
            <div class="card-body">
              <h5 class="card-title">${arraySerie[i].Title}</h5>
              <a href="#" class="btn btn-primary">Ver</a>
            </div>
          </div>`
          serieRow.appendChild(serieColumn);
        }
    }

    showActors(actorList){
        if (document.getElementById("div-categories")) this.main.removeChild(document.getElementById("div-categories"));
        if (document.getElementById("div-rngProductions")) this.main.removeChild(document.getElementById("div-rngProductions"));
        if (document.getElementById("div-Productions")) this.main.removeChild(document.getElementById("div-Productions"));
    }

    showDirectors(DirectorList){
        if (document.getElementById("div-categories")) this.main.removeChild(document.getElementById("div-categories"));
        if (document.getElementById("div-rngProductions")) this.main.removeChild(document.getElementById("div-rngProductions"));
        if (document.getElementById("div-Productions")) this.main.removeChild(document.getElementById("div-Productions"));
    }
    
	bindInit(handler) {
        for (let element of document.getElementsByClassName('init')) {
            element.addEventListener("click", (event) => {
                handler();
            });
           
        }
    }
    
	bindSeries(handler) {
        for (let element of document.getElementsByClassName('series')) {
            element.addEventListener("click", (event) => {
                handler();
            });
           
        }
    }
    
	bindMovies(handler) {
        for (let element of document.getElementsByClassName('movies')) {
            element.addEventListener("click", (event) => {
                handler();
            });
           
        }
    }
    
	bindActors(handler) {
        for (let element of document.getElementsByClassName('actors')) {
            element.addEventListener("click", (event) => {
                handler();
            });
           
        }
    }
    
    
	bindDirectos(handler) {
        for (let element of document.getElementsByClassName('directors')) {
            element.addEventListener("click", (event) => {
                handler();
            });
           
        }
    }
    
	bindCategory(handler) {
        for (let element of document.getElementsByClassName('category')) {
            
            element.addEventListener("click", (event) => {
                console.log(element);
                handler(element.dataset.category);
            });
           
        }
    }


}

export default videoSystemView;