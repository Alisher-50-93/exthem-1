let products = [];
const narsalarr = document.getElementById('narsalarr');

fetch('https://dummyjson.com/products?limit=15&skip=15')
    .then(res => res.json())
    .then(json => {
        products = json.products;
        render(products);
    });


function render(list) {
    narsalarr.innerHTML = list.map(item => `
        <div class="product-card">
            <img src="${item.thumbnail}">
            <div class="title">${item.title}</div>
            <div class="price-row">
                <span class="current-price">$${item.price}</span>
                <button class="add-btn" onclick="go(${item.id})">Add</button>
            </div>
        </div>
    `).join('');
}
