<!-- Funding Comment Item -->
<template>
  <div class="funding-comment-item-top">
    <div class="funding-comment-item">
      <span>{{ getUsername }}</span>
      <span>{{ fundingComment.content }}</span>
      <span>{{ getCreatedAt }}</span>
      <button
        @click.prevent="
          deleteFundingComment(fundingComment.id, fundingComment.funding)
        "
      >X</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "FundingCommentItem",
  props: {
    fundingComment: Object,
  },
  data() {
    return {};
  },
  computed: {
    getUsername() {
      const username = this.fundingComment.username;
      return username;
    },
    getCreatedAt() {
      const createdAt = new Date(
        this.fundingComment.created_at
      ).toLocaleString();
      return createdAt;
    },
  },
  methods: {
    deleteFundingComment(commentId, fundingId) {
      const payload = {
        commentId: commentId,
        fundingId: fundingId,
      };
      this.$store.dispatch("deleteFundingComment", payload);
    },
  },
};
</script>

<style>
.funding-comment-item-top {
  display: flex;
  justify-content: center;
}

.funding-comment-item {
  display: flex;
  margin-top: 5px;
  margin-bottom: 5px;
  border: 1px solid white;
  justify-content: space-between;
  width: 75%;
}

.funding-comment-item span {
  margin-left: 1rem;
  margin-right: 15px;
}

.funding-comment-item button {
  margin-left: 10px;
}


</style>