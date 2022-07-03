const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

const app = new Vue({
    el: '#app',
    data: {
        imgCatalog: 'https://picsum.photos/220?random=',
        userSearch: '',
    },
    methods: {
        getJson(url) {
            return fetch(url)
                .then(result => result.json())
                .catch(error => {
                    //console.log(error);
                    this.$refs.error.text = error;
                })
        },
        postJson(url, data) {
            return fetch(url, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
                .then(result => result.json())
                .catch(error => {
                    // console.log(error)
                    this.$refs.error.text = error;
                })
        },
        putJson(url, data) {
            return fetch(url, {
                method: 'PUT',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
                .then(result => result.json())
                .catch(error => {
                    // console.log(error)
                    this.$refs.error.text = error;
                })
        },
        /* filter(userSearch) {
             const regexp = new RegExp(userSearch, 'i');
             this.filtered = this.products.filter(product => regexp.test(product.product_name));
 
         },
          addProduct(product) {
              this.getJson(`${API}/addToBasket.json`)
                  .then(data => {
                      if (data.result === 1) {
                          if (this.cartItems.includes(product)) {
                              product.quantity++;
                          } else {
                              this.$set(product, 'quantity', 1);
                              this.cartItems.push(product);
                          }
                      }
                  });
          },
          removeProduct(product) {
              this.getJson(`${API}/addToBasket.json`)
                  .then(data => {
                      if (data.result === 1) {
                          if (product.quantity > 1) {
                              product.quantity--;
                          } else {
                              this.cartItems.splice(this.cartItems.indexOf(product), 1);
                          }
                      }
                  });
          }*/

    },
    mounted() {
        /* this.getJson(`${API + this.catalogUrl}`)
             .then(data => {
                 for (let el of data) {
                     this.$data.products.push(el);
                 }
                 this.$data.filtered = this.$data.products;
             });*/

    }
})