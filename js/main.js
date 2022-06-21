const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';
class ProductList {
    constructor(container = '.products') {
        this.container = container;
        this.goods = [];
        this._getProducts()
            .then(data => {
                this.goods = data;
                this.render();//вывод товаров на страницу
            })
        // this._fetchProducts();//рекомендация, чтобы метод был вызван в текущем классе

    }
    /*     _fetchProducts() {
            this.goods = [
                { id: 1, title: 'Notebook', price: 2000 },
                { id: 2, title: 'Mouse', price: 20 },
                { id: 3, title: 'Keyboard', price: 200 },
                { id: 4, title: 'Gamepad', price: 50 },
            ];
        }
     */
    _getProducts() {
        return fetch(`${API}/catalogData.json`)
            .then(result => result.json())
            .catch(error => {
                console.log(error);
            });
    }
    render() {
        const block = document.querySelector(this.container);
        for (let product of this.goods) {
            const item = new ProductItem(product);
            block.insertAdjacentHTML("beforeend", item.render());

        }
    }
    sumProductList() {

        let s = 0;
        this.goods.forEach(item => {
            s += item.price;
        })
        return `Сумма выведенных товаров = ${s}`;
        // return this.allProducts.reduce((accum, item) => accum += item.price, 0);
    }
}

class ProductItem {
    constructor(product, id = 3) {
        this.title = product.product_name;
        this.id = product.id;
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

let list = new ProductList();
list.sumProductList();

/* class Cart {
    constructor() {
        this.cartList = [];
    }
    addItem() { }
    removeItem() { }
    sumCart() { }
    render() { }
}
class ItemCart {
    /**
     * 
     * @param {*} count количество конкретного товара, по умолчанию 1
     
    constructor(count = 1) {
        this.count = count;
    }
    editCount() { }
    render() { }
} */