<!-- Funding Main Page -->
<template>
  <div id="fundingview">
    <div>
      <div class="container1">
        <p style="font-size: 30px">πμ¬κ°λ΄μ κΈ°λ€λ¦¬λ μνλ€π</p>
      </div>
      <div class="container2">
        <form action="">
          <input @keyup.prevent="searchFunding" type="text" style="margin-left: 2rem; margin-bottom: 20px" v-model="searchWord" placeholder="νλ©μ κ²μνμΈμ.">
        </form>
        <p style="margin-right:2rem">
          <router-link :to="{ name: 'FundingCreateView'}">
            <button @click="onPlay" class="nes-btn is-error">
              νλ© λ§λ€κΈ°
            </button>
          </router-link>  
        </p>
      </div>
    </div>
    <!-- Funding List -->
    <div class="container3">
      <FundingList/>
    </div>
  </div>
</template>

<script>
import FundingList from '@/components/Fundings/FundingList'

export default {
  name: "FundingView",
  components: {
    FundingList,
  },
  data() {
    return {
      searchWord: "",
    }
  },  
  computed: {

  },
  created() {
    this.getFundings()
  },
  methods: {
    getFundings() {
      this.$store.dispatch("getFundings")
    },
    searchFunding() {
      this.$store.dispatch('searchFunding', this.searchWord)
    },
    onPlay() {
      const audio = document.querySelector("audio")
      audio.play()
    }
  },
};
</script>

<style>
#fundingview {
  width: 100vw;
  height: 100vh;
}

.container1 {
  display: flex;
  justify-content: center;
}

.container2 {
  display: flex;
  justify-content: space-between;
}

.container3 {
  display: flex;
  flex-wrap: wrap;
}
</style>
