"use strict";
class videoSystemView {

    constructor() {
        // Recogemos el main
        this.main = document.getElementsByTagName("main")[0];
    }

    showCategories(categoriesList) {

        
        if (document.getElementById("div-Contents")) this.main.removeChild(document.getElementById("div-Contents"));
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
            categoriesColumn.innerHTML = `<img src='./media/categorias/${category.Name}.jpg' width=200 height=100>
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

        if (document.getElementById("div-Contents")) this.main.removeChild(document.getElementById("div-Contents"));

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
        productionsContainer.setAttribute("Id", "div-Contents");
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
            <img src='./media/producciones/${arrayProductions[rng].Image}' class="card-img-top" alt="${arrayProductions[rng].Image}" width=250 height=150>
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
        if (document.getElementById("div-Contents")) this.main.removeChild(document.getElementById("div-Contents"));

        let productionsContainer = document.createElement("div");
        // Le añadimos una clase (container)
        productionsContainer.classList.add("container");
        productionsContainer.classList.add("text-center"); 
        productionsContainer.setAttribute("Id", "div-Contents");
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
            <img src='./media/producciones/${arrayProductions[i].Image}' class="card-img-top" alt="${arrayProductions[i].Image}" width=250 height=150>
            <div class="card-body">
              <h5 class="card-title">${arrayProductions[i].Title}</h5>
              <a href="#" class="btn btn-primary">Ver</a>
            </div>
          </div>`
          productionsRow.appendChild(productionsColumn);
        }
    }

    showProductions(productionList){

        let arrayProductions = [];

        if (document.getElementById("div-categories")) this.main.removeChild(document.getElementById("div-categories"));
        if (document.getElementById("div-Contents")) this.main.removeChild(document.getElementById("div-Contents"));

        let productionContainer = document.createElement("div");
        // Le añadimos una clase (container)
        productionContainer.classList.add("container");
        productionContainer.classList.add("text-center"); 
        productionContainer.setAttribute("Id", "div-Contents");
        this.main.appendChild(productionContainer);

        let productionRow = document.createElement("div");
        productionRow.classList.add("row");

        productionContainer.appendChild(productionRow);

        console.log(productionList);
        for (let production of productionList) {
            arrayProductions.push(production);
        }

        for (let i = 0; i < arrayProductions.length; i++) {
            let productionColumn = document.createElement("div");
            productionColumn.classList.add("col");
            productionColumn.innerHTML = `<div class="card mx-auto" style="width: 18rem;">
            <img src='./media/producciones/${arrayProductions[i].Image}' class="card-img-top" alt="${arrayProductions[i].Image}" width=250 height=150>
            <div class="card-body">
              <h5 class="card-title">${arrayProductions[i].Title}</h5>
              <a href="#" class="btn btn-primary">Ver</a>
            </div>
          </div>`
          productionRow.appendChild(productionColumn);
        }
    }

    
    showPerson(personList){
        if (document.getElementById("div-categories")) this.main.removeChild(document.getElementById("div-categories"));
        if (document.getElementById("div-Contents")) this.main.removeChild(document.getElementById("div-Contents"));

        let arrayPerson = [];

        if (document.getElementById("div-categories")) this.main.removeChild(document.getElementById("div-categories"));
        if (document.getElementById("div-Contents")) this.main.removeChild(document.getElementById("div-Contents"));

        let personContainer = document.createElement("div");
        // Le añadimos una clase (container)
        personContainer.classList.add("container");
        personContainer.classList.add("text-center"); 
        personContainer.setAttribute("Id", "div-Contents");
        this.main.appendChild(personContainer);

        let personRow = document.createElement("div");
        personRow.classList.add("row");

        personContainer.appendChild(personRow);

        console.log(personList);
        for (let person of personList) {
            arrayPerson.push(person);
        }

        for (let i = 0; i < arrayPerson.length; i++) {
            let personColumn = document.createElement("div");
            personColumn.classList.add("col");
            personColumn.innerHTML = `<div class="card mx-auto" style="width: 18rem;">
            <img src='./media/personas/${arrayPerson[i].Picture}' class="card-img-top" alt="${arrayPerson[i].Picture}" width=250 height=250>
            <div class="card-body">
              <h5 class="card-title">${arrayPerson[i].Name} ${arrayPerson[i].FirstLastName}</h5>
              <a href="#" class="btn btn-primary">Ver</a>
            </div>
          </div>`
          personRow.appendChild(personColumn);
        }
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
    
    
	bindDirectors(handler) {
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