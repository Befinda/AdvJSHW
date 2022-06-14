class ProductList {
    constructor(container = '.products') {
        this.container = container;
        this.goods = [];
        this._fetchProducts();//рекомендация, чтобы метод был вызван в текущем классе
        this.render();//вывод товаров на страницу
    }
    _fetchProducts() {
        this.goods = [
            { id: 1, title: 'Notebook', price: 2000 },
            { id: 2, title: 'Mouse', price: 20 },
            { id: 3, title: 'Keyboard', price: 200 },
            { id: 4, title: 'Gamepad', price: 50 },
        ];
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
        alert(`Сумма выведенных товаров = ${s}`);
    }
}

class ProductItem {
    constructor(product) {
        this.title = product.title;
        this.id = product.id;
        this.price = product.price;
        this.img = `https://picsum.photos/220?random=${this.id}`;
    }
    render() {
        return `<div class="product-item">
                <img src="${this.img}">
                <h3>${this.title}</h3>
                <p>${this.price}</p>
                <button class="buy-btn">Купить</button>
            </div>`
    }
}

let list = new ProductList();
list.sumProductList();

class Cart {
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
     */
    constructor(count = 1) {
        this.count = count;
    }
    editCount() { }
    render() { }
}