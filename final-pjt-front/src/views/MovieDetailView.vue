<template>
  <div>
    <!-- <div class="container" :style="{ backgroundImage: `url('https://image.tmdb.org/t/p/w500${movie?.backdrop_path}')`}"> -->
    <div>
      <div class="moviedetail">
        <div class="poster">
          <img :src="img_url" alt="이미지 자리" />
        </div>
        <div class="card">
          <p>제목 : {{ movie?.title }}</p>
          <p>{{ movie?.overview }}</p>
          <p>개봉일 : {{ movie?.release_date }}</p>
          <p>평점 : {{ movie?.vote_average }}</p>
          <p>장르 :
            <button v-for="genre in genres" :key="genre.id">{{ genre }}</button>
          </p>
        </div>
      </div>
      <div>
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
    </div>
  </div>
</template>

<script>
import axios from "axios";
import MovieCommentForm from "@/components/MovieCommentForm";

const API_URL = "http://127.0.0.1:8000";

export default {
  name: "MovieDetailView",
  components: {
    MovieCommentForm,
  },
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
            "https://image.tmdb.org/t/p/w200" + res.data.poster_path;
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

<style>
.moviedetail {
  display: flex;
}

.container {
  background-size: cover;
  background-repeat: no-repeat;
}

.card {
  text-align: start;
}
/* .backdrop {
  position: fixed;
  top: 0;
  left: 0;
  background-repeat: no-repeat;
  background-size: cover;
} */

</style>