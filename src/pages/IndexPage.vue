<template>
  <q-page class="">
    <HeaderBanner />
    <ProductView />
    <div class="container">
    <q-separator />
    </div>
    <FooterView />

  </q-page>
</template>

<script>
import HeaderBanner from 'src/components/HeaderBanner.vue'
import ProductView from '../components/ProductView.vue'
import FooterView from 'src/components/FooterView.vue'

export default {
    name: "IndexPage",
    components: { HeaderBanner, ProductView, FooterView },


}
</script>
