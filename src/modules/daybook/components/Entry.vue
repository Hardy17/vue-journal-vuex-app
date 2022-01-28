<template>
  <div class="entry-container mb-3 pointer p-2"
  @click="$router.push({name:'entry',params:{id:10}})"
  >

      <!--Titulo -->
    <div class="entry-title d-flex">
        <span class="text-success fs-5 fw-bold">25</span>
        <span class="mx-1 fs-5">Enero</span>
        <span class="mx-2 fw-light">2022, Martes</span>
    </div>
    <div class="entry-description">
       Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod excepturi delectus ab aliquid repellendus itaque, doloremque vero. Rem asperiores magnam fugit? Commodi aliquam aliquid mollitia blanditiis perferendis numquam dignissimos consectetur. 
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.entry-container{
  border-bottom:1px solid #2c3e50;
  transition: 0.2s all ease-in;

  &:hover{
    background-color: lighten($color: grey, $amount: 45);
    transition: 0.2 all ease-in;
  }
  .entry-description{
    font-size: 12px;
  }
}
</style>