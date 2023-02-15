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

    headerCategories(categoriesList) {
        let nav = document.getElementsByClassName("navbar-nav");
        if (document.getElementById("nav-categories")) nav.removeChild(document.getElementById("nav-categories"));
        let categoriesIl = document.createElement("li");
        categoriesIl.classList.add("nav-item");
        categoriesIl.classList.add("dropdown");
        categoriesIl.setAttribute("Id", "nav-categories")
        categoriesIl.innerHTML = `<a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
        aria-expanded="false">Categorias</a>`;

        nav[0].appendChild(categoriesIl);
        let categoriesUl = document.createElement("ul");
        categoriesUl.setAttribute("Id", "categories-ul")
        categoriesUl.classList.add("dropdown-menu");
        categoriesIl.appendChild(categoriesUl);

        for (let category of categoriesList) {
            let categoryLink = document.createElement("li");
            categoryLink.innerHTML = `<li><a class="dropdown-item" href="#">${category.Name}</a></li>`;
            categoriesUl.appendChild(categoryLink);
        }
    }

    rngProductions(productionsList) {
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

    
	bindProductions(handler) {
		$('#init').click((event) => {
			handler();
		});
		$('#logo').click((event) => {
			handler();
		});
	}


}

export default videoSystemView;