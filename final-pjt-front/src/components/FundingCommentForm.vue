<template>
  <div>
    <form @submit.prevent="createFundingComment">
      <input type="text" v-model="fundingComment" />
      <button>등록하기</button>
    </form>
    <FundingCommentItem
      v-for="fundingComment in fundingComments"
      :key="fundingComment.id"
      :fundingComment="fundingComment"
    />
  </div>
</template>

<script>
import FundingCommentItem from "@/components/FundingCommentItem/";

export default {
  name: "FundingCommentForm",
  components: {
    FundingCommentItem,
  },
  props: {
    fundingId: Number,
  },
  computed: {
    fundingComments() {
      return this.$store.state.fundingComments;
    },
  },
  data() {
    return {
      fundingComment: "",
    };
  },
  methods: {
    createFundingComment() {
      const newFundingComment = {
        user: this.$store.state.userId,
        content: this.fundingComment,
        funding: this.$route.params.id,
      };
      console.log(newFundingComment);
      this.$store.dispatch("createFundingComment", newFundingComment);
      this.fundingComment = "";
    },
    getFundingComments() {
      const fundingId = this.$route.params.id;
      this.$store.dispatch("getFundingComments", fundingId);
    },
  },
};
</script>

<style>
</style>