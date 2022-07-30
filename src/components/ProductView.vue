<template>
  <div class="products container ">
    <div class="text-center text-h2 q-my-xl">New Arrivals</div>
<div class="row">
        <q-card
        v-for="(prod , i ) in products"
         :key="i"
         class=" card-edit none-overflow my-card col-sm-2 col-5 justify-between q-ma-auto">
      <q-img  :src="prod.img"  />

      <q-card-section class="none-overflow">
        <div class="text-body1 none-overflow ">{{prod.title}}</div>
        <div class="text-subtitle2">{{prod.price}}</div>
      </q-card-section>
      <q-btn class="add-prod" @click="addToCart(prod)">
      <icon>
        <img class="add-prod__img"  src="cart.png"  />
      </icon>
      </q-btn>
    </q-card>
</div>
<div class="text-center">

<q-btn  label="SHOP ALL" size="md" class=" bg-orange-8 q-my-xl q-pa-md"  rounded />
</div>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
setup(){

  return{
    products:ref(
      [
        {
          id:"1",
          title:"Constraction Set",
          price:"10.99",
          img:"toy1.jpg",
          count:1
        },
        {
          id:"2",
          title:"Soft Pink Bunny",
          price:"10.99",
          img:"toy2.jpg",
          count:1
        },
        {
          id:"3",
          title:"Ring Steaker toy",
          price:"10.99",
          img:"toy3.jpg",
          count:1

        },
        {
          id:"4",
          title:"Coil Spring Toy",
          price:"10.99",
          img:"toy4.jpg",
          count:1

        },
    ]
    )
  }
},

methods:{
  addToCart(prod){
    this.$store.commit("cart/ADD_TO_CART" ,prod )
  }
}

}
</script>

<style lang="scss">
.none-overflow{
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
.card-edit{
margin-bottom:20px;
position: relative;
}
.add-prod{
  position: absolute ;
  top: 5px ;
  left: 5px;
  width: 15px;
  height: 15px;

  cursor: pointer;
}
.add-prod__img{
  width: 15px;
  height: 15px;
}
</style>
