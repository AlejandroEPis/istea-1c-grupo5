import { RenderCards } from "./component/cardCat.js";
import { getProducts } from "./services/api.js";
import { cargarComponente } from "./render.js";

cargarComponente("navbar.html", "navbar-container");
cargarComponente("footer.html", "footer-container");


getProducts().then((products) => {
    let inputSearch = document.querySelector('#inputSearch');
    inputSearch.addEventListener('input', (event) => {
        console.log(event.target.value);
        let query = event.target.value;
        if (query !== '') {
           let result = products.filter((p) => p.title.toLowerCase().includes(query.toLowerCase()));
           RenderCards(result);
           return;
        }
           RenderCards(products);
    });
    RenderCards(products);
});


