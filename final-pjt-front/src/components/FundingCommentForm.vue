<template>
  <div>
    <form @submit.prevent="createFundingComment">
      <input type="text" v-model="fundingComment" />
      <button>등록하기</button>
    </form>
    <p id="idTag"> {{ fundingId }}번째 펀딩글</p>
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
      return this.$store.getters.getFundingComments;
    },
  },
  data() {
    return {
      fundingComment: "",
    };
  },
  created() {
    this.getFundingComments();
    this.$store.dispatch("getFundingComments", this.$route.params.id);
  },
  methods: {
    createFundingComment(event) {
      event.preventDefault();
      const newFundingComment = {
        // 새로운 무비커멘트
        // userid 를 가져와야함
        // username 가져오는중 근데 undefined 임
        user: this.$store.state.userId,
        content: this.fundingComment,
        funding: this.$route.params.id,
      };
      console.log('createFundingComment메소드')
      console.log(this.$store.state.userId)
      console.log('-------------------------------')
      console.log(newFundingComment.user)
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