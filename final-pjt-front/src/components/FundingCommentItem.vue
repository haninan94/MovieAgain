<template>
  <div>
    <p>댓글</p>
    <p>{{ fundingComment.content }}</p>
  </div>
</template>

<script>
export default {
  name: "FundingCommentItem",
  props: {
    fundingComment: Object,
  },
};
</script>

<style>
</style>