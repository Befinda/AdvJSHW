const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

const app = new Vue({
    el: '#app',
    data: {
        catalogUrl: '/catalogData.json',
        products: [],
        filtered: [],
        cartItems: [],
        imgCatalog: 'https://picsum.photos/220?random=',
        userSearch: '',
        show: false
    },
    methods: {
        getJson(url) {
            return fetch(url)
                .then(result => result.json())
                .catch(error => {
                    console.log(error);
                })
        },
        filter() {
            const regexp = new RegExp(this.userSearch, 'i');
            this.filtered = this.products.filter(product => regexp.test(product.product_name));
            console.log(this.filtered);
        },
        addProduct(product) {
            if (this.cartItems.includes(product)) {
                product.quantity++;
            } else {
                this.$set(product, 'quantity', 1);
                this.cartItems.push(product);
            }
        },
        removeProduct(product) {
            if (product.quantity > 1) {
                product.quantity--;
            } else {
                this.cartItems.splice(this.cartItems.indexOf(product), 1);
            }
        }

    },
    mounted() {
        this.getJson(`${API + this.catalogUrl}`)
            .then(data => {
                for (let el of data) {
                    this.products.push(el);
                }
                this.filtered = this.products;
            });

    }
})