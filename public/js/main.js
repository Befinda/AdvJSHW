const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';


class ProductList {
    constructor(container = '.products') {
        this.container = container;
        this.goods = [];
        this.filteredGoods = [];
        this._getProducts()
            .then(data => {
                this.goods = data;
                this.render(this.goods);//вывод товаров на страницу
            })
    }

    _getProducts() {
        return fetch(`${API}/catalogData.json`)
            .then(result => result.json())
            .catch(error => {
                console.log(error);
            });
    }
    render(mas) {
        /*         const block = document.querySelector(this.container);
                for (let product of this.goods) {
                    const item = new ProductItem(product);
                    block.insertAdjacentHTML("beforeend", item.render());
        
                }
         */

        let listHtml = '';
        mas.forEach(good => {
            const goodItem = new ProductItem(good);
            listHtml += goodItem.render();
        });
        document.querySelector('.products').innerHTML = listHtml;

    }
    sumProductList() {

        let s = 0;
        this.goods.forEach(item => {
            s += item.price;
        })
        return `Сумма выведенных товаров = ${s}`;
        // return this.allProducts.reduce((accum, item) => accum += item.price, 0);
    }
    filterGoods(value) {
        const regexp = new RegExp(value, 'i');
        this.filteredGoods = this.goods.filter(good =>
            regexp.test(good.product_name));
        this.render(this.filteredGoods);
    }
}
class CartList {
    constructor(container = ".cart") {
        this.container = container;
        this.goods = [];
        this._getCartItem().then(data => {
            this.goods = data.contents;
            this.render();
        });
    }
    _getCartItem() {
        return fetch(`${API}/getBasket.json`)
            .then(result => result.json())
            .catch(error => {
                console.log(error);
            });
    }
    render() {
        const block = document.querySelector(this.container);
        for (let product of this.goods) {
            const item = new CartItem(product);
            block.insertAdjacentHTML("beforeend", item.render(product));

        }
    }
}

class ProductItem {
    constructor(product, id = 3) {
        this.title = product.product_name;
        this.id = product.id_product;
        this.price = product.price;
        this.img = `https://picsum.photos/220?random=${this.id}`;
    }
    render() {
        return `<div class="product-item">
                <img src="${this.img}" alt="Some img">
                <h3>${this.title}</h3>
                <p>${this.price}</p>
                <button class="buy-btn">Купить</button>
            </div>`
    }
}

class CartItem {
    render(product, img = `https://picsum.photos/220?random=${product.id_product}`) {
        return `<div class="cart-item">
                <img src="${img}" alt="Some img">
                <div class = "descript">
                <h3>${product.product_name}</h3>
                <p> Quantity: ${product.quantity}</p>
                <p>${product.price}</p>
</div>
            </div>`
    }
}
let list = new ProductList();
let cart = new CartList();
let searchButton = document.querySelector(".search-button");
searchButton.addEventListener('click', (e) => {
    const value = document.querySelector(".goods-search").value;
    list.filterGoods(value);
});

