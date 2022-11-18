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
      <button v-for="genre in genres" :key="genre.id">{{ genre }}</button>
    </p>
    <p>줄거리 : {{ movie?.overview }}</p>
    <p id="idTag">{{ movie?.id }}</p>
    <hr />
    <router-link :to="{ name: 'MovieView' }">뒤로가기</router-link>

    <!-- 댓글 작성 폼 -->
    <!-- <MovieCommentForm /> -->
    <MovieCommentForm :movieId="movieId" />
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
      movie: null,
      img_url: null,
      genres: [],
      comment: "",
      movieId: null,
      // movieId: this.movie.id,
    };
  },
  created() {
    this.getMovieDetail();
    this.getId();
  },
  methods: {
    getId() {
      const idTag = document.querySelector("#idTag");
      console.log(idTag);
      console.log(idTag.innerText);
      // this.movieId = idTag.innerText;
      // const movieTag = document.querySelector("#movieId");
      // console.log(movieTag);
      // console.log(movieTag.innertext);
      // this.movieId = movieId;
    },
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
