Vue.component('cart', {
    props: ['cartItems', 'visibility'],
    template: `
        <div class="cart-block" v-show="visibility">
            <cart-item v-for="item of cartItems" :key="item.id_product" :img="img" :cart-item="item">
            </cart-item>
        </div>
    `
});

Vue.component('cart-item', {
    props: ['cartItem'],
    template: `
    <div class="cart-item">
                    <div class="product-bio">
                        <img :src="$root.imgCatalog+cartItem.id_product" alt="Some img">
                        <div class="product-desc">
                            <div class="product-title">{{ cartItem.product_name }}</div>
                            <div class="product-quantity">Quantity: {{ cartItem.quantity }}</div>
                            <div class="product-single-price">$ {{ cartItem.price }} each</div>
                        </div>
                    </div>
                    <div class="right-block">
                        <div class="product-price">{{cartItem.quantity*cartItem.price}}</div>
                        <button class="del-btn" @click="$root.removeProduct(cartItem)">&times;</button>
                    </div>
                </div>
    `
})
/*
<div v-if="cartItems.length==0">Нет данных</div>
<div class="cart-item" v-else v-for="product of cartItems" :id="product.id_product">
    <div class="product-bio">
        <img :src="imgCatalog+product.id_product" alt="Some image">
        <div class="product-desc">
            <p class="product-title">{{product.product_name}}</p>
            <p class="product-quantity">Quantity: {{product.quantity}}</p>
            <p class="product-single-price">{{product.price}} $</p>
        </div>
    </div>
    <div class="right-block">
        <p class="product-price">{{product.price*product.quantity}} $</p>
        <button class="del-btn" @click="removeProduct(product)">&times;</button>
    </div>

</div>

*/