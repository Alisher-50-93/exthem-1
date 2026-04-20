// let dota = [];
// const ruut = document.getElementById('ruut');
// const unp = document.getElementById('unp');

// // Ma'lumotni yuklash
// fetch('https://dummyjson.com/products')
//     .then(res => res.json())
//     .then(json => {
//         // Barcha mahsulotlarni bitta massivga yig'ish va 15 tasini olish
//         dota = json.products.slice(1, 12);
//         render(dota);
//     });

// // Ekranga chiqarish
// function render(list) {
//     ruut.innerHTML = list.map(item => `
//         <div class="qisimchalar">
//             <img style="border-radius: 15px;" src="${item.thumbnail}" alt="${item.title}">
//             <div class="title">${item.title}</div>
//             <div class="total">$${item.price}</div>
//             <div class="price-row">
//                 <span class="price">$${item.discountPercentage}</span>
//                 <button class="btn">Add</button>
//             </div>
//         </div>
//     `).join('');
// }

// // Qidiruv
// function search() {
//     const val = unp.value.toLowerCase();
//     const filtered = dota.filter(i => i.title.toLowerCase().includes(val));
//     render(filtered);
// }
