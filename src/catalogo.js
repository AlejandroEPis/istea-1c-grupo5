import { RenderCards } from "./component/cardCat.js";
import { getProducts } from "./services/api.js";

fetch("navbar.html")
    .then(res => res.text())
    .then(data => {
        document.getElementById("navbar-container").innerHTML = data;
        return import("./navbar.js");
    })
    .then(module => {
        module.toggleNavbarIcon();
    });

fetch("footer.html")
    .then(res => res.text())
    .then(data => {
        document.getElementById("footer-container").innerHTML = data;
        return import("./footer.js");
    })
    .catch(() => {});

getProducts().then((products) => {
    let inputSearch = document.querySelector('#inputSearch');

    inputSearch.addEventListener('input', (event) => {
        let query = event.target.value;

        if (query !== '') {
            let result = products.filter((p) =>
                p.title.toLowerCase().includes(query.toLowerCase())
            );
            RenderCards(result);
            return;
        }

        RenderCards(products);
    });

    RenderCards(products);
});
