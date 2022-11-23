<template>
  <b-col>
    <router-link :to="{name: 'FundingDetailView', params: { id: userfunding.funding.id }}">
      <div class="ticket">
        <div class="ticket__content">
          <img :src="userfunding.funding.poster_path" width="100%" height="100%">
        </div>
      </div>
    </router-link>
  </b-col>
</template>

<script>
export default {
  name:'UserFundingListItem',
  props:{
    userfunding: Object,
  },
  computed:{
    // imgUrl(){
    //   // return this.userfunding.funding
    // }
  }

}
</script>

<style>
body {
  background-color: #FCD000;
}

.ticket {
  position: relative;
  box-sizing: border-box;
  width: 300px;
  height: 450px;
  margin: 150px auto 0;
  padding: 20px;
  border-radius: 10px;
  background: #FBFBFB;
  box-shadow: 2px 2px 15px 0px #AB9B0D;
}
.ticket:before, .ticket:after {
  content: "";
  position: absolute;
  left: 5px;
  height: 6px;
  width: 290px;
}
.ticket:before {
  top: -5px;
  background: radial-gradient(circle, transparent, transparent 50%, #FBFBFB 50%, #FBFBFB 100%) -7px -8px/16px 16px repeat-x;
}
.ticket:after {
  bottom: -5px;
  background: radial-gradient(circle, transparent, transparent 50%, #FBFBFB 50%, #FBFBFB 100%) -7px -2px/16px 16px repeat-x;
}

.ticket__content {
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  border: 6px solid #D8D8D8;
}

.ticket__text {
  width: 400px;
  font-family: "Helvetica", "Arial", sans-serif;
  font-size: 3rem;
  font-weight: 900;
  text-transform: uppercase;
  color: #C6DEDE;
  transform: translate(-25px, 25px) rotate(-55deg);
}
</style>