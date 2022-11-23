<template>
  <div class="funding-comment-form">
    <!-- <p id="idTag">{{ fundingId }}번째 펀딩글</p> -->
    <FundingCommentItem
      v-for="fundingComment in fundingComments"
      :key="fundingComment.id + Math.random()"
      :fundingComment="fundingComment"
    />
    <div>
      <form @submit.prevent="createFundingComment">
        <label for="funding-comment"></label>
        <input
          type="text"
          id="funding-comment"
          class="nes-input is-dark"
          v-model="fundingComment"
        />
        <br />
        <button class="nes-btn is-warning">댓글 달기</button>
      </form>
    </div>
  </div>
</template>

<script>
import FundingCommentItem from "@/components/FundingCommentItem/";
import swal from 'sweetalert';

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
      if (!this.$store.state.token) {
        swal('댓글을 달 수 없습니다 !', "로그인 해주세요", 'warning')
        return;
      }
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
</script>

<style>
#funding-comment {
  width: 75%;
  margin-bottom: 2rem;
}
</style>