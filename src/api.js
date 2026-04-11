export function getProducts() {
    let res = fetch('https://dummyjson.com/products/category/mens-watches')
    .then((response) => response.json())
    .then((data) => (data.products));


    return res;
}




