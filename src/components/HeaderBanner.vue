<template>
  <div class="banner">
    <div class="container full-height">
      <div class=" full-height row items-center">
        <div
         class=" q-pa-sm col-12 col-sm-5 text-center banner__text ">
          <div class="text-h1" >Award winning toys for children  </div>
          <div class="text-body1 text-grey-7 q-my-lg" >Award winning toys for children  </div>
          <q-btn class="bg-orange-8 btn-edit q-pa-md" size="md"  rounded label="Shop Now " />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.banner{
  clip-path: polygon(100% 0 , 100% 97%, 71% 92%, 33% 97% , 0% 96% , 0% 60% , 0 0);
  background-color: #f8f4ed;
  width: 100%;
  height: 500px;
  margin: 0 !important;
  padding: 0;
  background-image: url('src/assets/section1BG.png');
  background-size: cover;
  background-position: center;
  }
.banner__text{
  line-height:2rem ;

}
.btn-edit{
  // font-size: 0.5rem ;
}
</style>
