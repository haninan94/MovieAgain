<template>
<div id="fundingcreate">
  <form @submit.prevent="createFunding">
    <label for="movie_title"></label>
    <input 
      type="text" 
      id="movie_title" 
      class="nes-input" 
      v-model="funding.movie_title"
      placeholder="title">

    <label for="content"></label>
    <textarea 
      id="content" 
      class="nes-textarea" 
      v-model="funding.content"
      placeholder="content"></textarea>

    <label for="poster_path"></label>
    <input 
      type="url"
      id="poster_path"
      class="nes-input"
      v-model="funding.poster_path"
      placeholder="Poster URL"
    >

    <label for="minimum_money"></label>
    <div class="nes-select">
      <select required id="minumum_money" v-model="funding.minimum_money">
        <option value="" disabled selected hidden>select</option>
        <option value="0">10000</option>
        <option value="1">30000</option>
        <option value="2">50000</option>
        <option value="3">100000</option>
      </select>
    </div>

    <label for="goal_money"></label>
    <input 
      type="text"
      id="goal_money"
      class="nes-input"
      v-model="funding.goal_money"
      placeholder="Goal Money"
    >

    <label for="expired_date"></label>
    <b-form-datepicker 
      id="expired_date"
      v-model="funding.expired_date"
      class="mx-2"
    >
    </b-form-datepicker>
    <button class="nes-btn is-error">CREATE</button>
  </form>
</div>
</template>

<script>
export default {
  name: "FundingCreateView",
  data() {
    return {
      funding: {
        movie_title: '',
        content: '',
        poster_path: '',
        minimum_money: null,
        goal_money: null,
        expired_date: '',
      }
    }
  },
  methods: {
    createFunding() {
      const payload = {
        user: this.$store.state.userId,
        movie_title: this.funding.movie_title,
        content: this.funding.content,
        poster_path: this.funding.poster_path,
        minimum_money: this.funding.minimum_money,
        goal_money: this.funding.goal_money,
        expired_date: this.funding.expired_date,
      }
      this.$store.dispatch("createFunding", payload)
    }
  }
}
</script>

<style>

</style>