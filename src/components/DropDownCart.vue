<template>
  <div class="q-pa-md">
    <q-btn
      flat
      size="15px"
      icon="eva-shopping-cart-outline
"
    >
      <!-- style="width: 280px;" -->
      <q-menu fit class="section-card">
        <q-item clickable v-ripple active
        v-for="(item , i ) in product"
        :key="i"

        >
          <q-item-section avatar>
            <q-avatar>
              <img :src="item.img" />
            </q-avatar>
          </q-item-section>
          <q-item-section>
            <q-item-label class="text-h6" lines="1">{{ item.title }}</q-item-label>
            <q-item-label caption lines="2">
              <!-- <span class="text-weight-bold">{{ brand }}</span> -->
              {{ item.price }}
            </q-item-label>
          </q-item-section>

          <q-item-section top side >
            <div class="row text-center justify-between items-center">
            <div class="col">
            <q-btn @click="dicCount(item)" flat icon="eva-arrow-left" />
            </div>
            <div class="text-bold col text-center q-ml-md">
                    {{item.count}}
            </div>
            <div class="col">
            <q-btn @click="incCount(item)"  flat icon="eva-arrow-right" />
            </div>
            </div>
          </q-item-section>
        </q-item>
        <q-btn v-if="product[0]" class="full-width" label="CHECK OUT" color="primary" />

        <div v-else class="text-body1 q-pa-md">Not found product in your cart</div>
        <q-btn class="bg-orange full-width" label="See all"  />
      </q-menu>
      <q-tooltip>cart</q-tooltip>
    </q-btn>
  </div>
</template>

<script>
export default {
  props: {
    imgSrc: {
      type: String,
      default: "https://cdn.quasar.dev/img/avatar2.jpg",
      require: false,
    },
    title: {
      type: String,
      default: "title",
      require: false,
    },
    brand: {
      type: String,
      default: "",
      require: false,
    },
    desc: {
      type: String,
      default:
        "I'll be in your neighborhood doing errands this weekend. Do you want to grab brunch?",
      require: false,
    },
  },
    computed:{
    product() {
        return this.$store.getters["cart/cart"]

      }
    },
    methods:{
      incCount(count){
        this.$store.commit("cart/INC_COUNT" , count)
      },
      dicCount(count){
        this.$store.commit("cart/DEC_COUNT" , count)
      }
    }
};
</script>
<style lang="scss" scoped>
.section-card {
  width: 400px;
  // overflow: hidden;
  height: max-content;
}
.cart-title {
  font-size: 1.3rem;
}
.cart-capt {
  text-overflow: ellipsis;
}
</style>
