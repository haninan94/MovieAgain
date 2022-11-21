<template>
  <div>
    <p>작성자 : {{ getUsername }}</p>
    <p>내용 : {{ fundingComment.content }}</p>
    <p>작성 시각 : {{ getCreatedAt }}</p>
    <button
      @click.prevent="
        deleteFundingComment(fundingComment.id, fundingComment.funding)
      "
    >
      삭제하기
    </button>
    <hr />
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
// fundingCommentItem 완
</script>

<style>
</style>