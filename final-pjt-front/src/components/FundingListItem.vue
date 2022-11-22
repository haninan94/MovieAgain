<template>
  <div>
    {{ funding.movie_title }}
    <br>
    {{ funding.content }}
    <br>
    <router-link :to="{ name: 'FundingDetailView', params: { id: funding.id } }" >Detail</router-link>
    <hr>
  </div>
</template>

<script>


export default {
  name:'FundingListItem',
  props: {
    funding: Object,
  },
}
</script>

<style>

</style>