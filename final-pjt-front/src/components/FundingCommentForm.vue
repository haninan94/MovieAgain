<template>
  <div>
    <form @submit.prevent="createFundingComment">
      <input type="text" v-model="fundingComment" />
      <button>등록하기</button>
    </form>
    <!-- <p id="idTag">{{ fundingId }}번째 펀딩글</p> -->
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
  // created() {
  //   this.getFundingComments();
  //   this.$store.dispatch("getFundingComments", this.$route.params.id);
  // },
  methods: {
    createFundingComment() {
      const newFundingComment = {
        user: this.$store.state.userId,
        content: this.fundingComment,
        funding: this.$route.params.id,
      };
      this.$store.dispatch("createFundingComment", newFundingComment);
      this.fundingComment = "";
    },
    getFundingComments() {
      const fundingId = this.$route.params.id;
      this.$store.dispatch("getFundingComments", fundingId);
    },
  },
};
// fundingCommentForm 완료
</script>

<style>
</style>