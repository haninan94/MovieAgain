<template>
  <div>
    {{ funding.movie_title }}
    <br>
    {{ funding.content }}
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