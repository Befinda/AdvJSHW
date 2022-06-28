Vue.component('products', {
    props: ['products', 'img'],
    template: `<div class="products">
                 <product v-for="item of products" 
                 :key="item.id_product" 
                 :img="img"
                 :product="item"></product>
                </div>`
});
Vue.component('product', {
    props: ['product', 'img'],
    template: `
             <div class="product-item">
                 <img :src="$root.imgCatalog+product.id_product" alt="Some img">
                 <div class="desc">
                     <h3>{{product.product_name}}</h3>
                     <p>{{product.price}}</p>
                     <button class="buy-btn" @click="$parent.$emit('add-product', product)">Купить</button>
                 </div>
             </div>
     `
})
/*            <!--             <div class="products">
                <div class="product-item" v-for="product of filtered" :key="product.id_product">
                    <img :src="imgCatalog+product.id_product" alt="Some img">
                    <div class="desc">
                        <h3>{{product.product_name}}</h3>
                        <p>{{product.price}} $</p>
                        <button class="buy-btn" @click="addProduct(product)">Купить</button>
                    </div>
                </div>
            </div> -->*/