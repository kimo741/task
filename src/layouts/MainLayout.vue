<template>
  <q-layout view="hHh lpR fFf">
    <q-header  elevated class="bg-primary text-white">
      <q-toolbar class="container">
        <q-btn class = "small-screen-only" dense flat round icon="menu" @click="left = !left" />
        <q-toolbar-title>
          Logo
        </q-toolbar-title>
      <div class="row justify-between items-center half-width text-center" >
        <div class="col">Shop</div>
        <div class="col">About</div>
        <div class="col">My Account</div>
        <div class="col"><DropDownCart /> </div>
      </div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="left" side="left" behavior="mobile" bordered >
      <!-- drawer content -->
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
import DropDownCart from "../components/DropDownCart.vue";
export default {
    data() {
        return {
            left: false
        };
    },
    components: { DropDownCart }
}
</script>
<style lang="scss" scoped>
.half-width{
  width:50%
}
</style>
