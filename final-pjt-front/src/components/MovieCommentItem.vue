<template>
  <div>
    <p>댓글</p>
    <p>{{ movieComment.content }}</p>
  </div>
</template>

<script>
export default {
  name: "MovieCommentItem",
  props: {
    comment: Object,
  },
};
</script>

<style>
</style>