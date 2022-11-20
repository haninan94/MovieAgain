<template>
  <div>
    <h1>Detail</h1>
    <!-- <p>글 번호 : {{ movie?.id }}</p> -->
    <img :src="img_url" alt="이미지 자리" />
    <p>제목 : {{ movie?.title }}</p>
    <p>줄거리 : {{ movie?.overview }}</p>
    <p>개봉일 : {{ movie?.release_date }}</p>
    <p>평점 : {{ movie?.vote_average }}</p>

    <p>
      장르 :
      <button class="nes-btn is-success" v-for="genre in genres" :key="genre.id">{{ genre }}</button>
    </p>
    <p>줄거리 : {{ movie?.overview }}</p>

    <hr />
    <router-link :to="{ name: 'MovieView'}">뒤로가기</router-link>

    <!-- 댓글 작성 폼 -->
    <!-- <div>
      <form @submit="createComment" style="width: 1000px"></form>
      <input
        type="text"
        v-model="comment"
        placeholder="댓글을 입력해 주세요."
      />
    </div> -->
  </div>
</template>

<script>
import axios from "axios";

const API_URL = "http://127.0.0.1:8000";

export default {
  name: "MovieDetailView",
  data() {
    return {
      movie: [],
      img_url: null,
      genres: [],
      comment: "",
    };
  },
  created() {
    this.getMovieDetail();
  },
  methods: {
    getMovieDetail() {
      axios({
        method: "get",
        url: `${API_URL}/api/v1/movies/${this.$route.params.id}`,
      })
        .then((res) => {
          // console.log(res);
          this.movie = res.data;
          this.img_url =
            "https://image.tmdb.org/t/p/original" + res.data.poster_path;
          for (let object of this.movie.genre_ids) {
            this.genres.push(object.name);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
