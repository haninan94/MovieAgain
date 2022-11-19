<template>
  <div class="moviedetail" :style="{ backgroundImage: `url('https://image.tmdb.org/t/p/original${movie?.backdrop_path}')`}">
    <!-- <img :src="`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`" alt=""> -->
    <!-- <div :style="{ backgroundImage: `url('https://image.tmdb.org/t/p/original${movie?.backdrop_path}')`}"></div>   -->
    <!-- <p>글 번호 : {{ movie?.id }}</p> -->

    <div class='movie-information'>
      <div>
        <img class='movie-poster' :src="img_url" alt="이미지 자리" />
      </div>
      <div>
        <p>제목 : {{ movie?.title }}</p>
        <p>개봉일 : {{ movie?.release_date }}</p>
        <p>평점 : {{ movie?.vote_average }}</p>
        <p>줄거리 : {{ movie?.overview }}</p>
      </div>
    </div>


    <p>
      장르 :
      <button v-for="genre in genres" :key="genre.id">{{ genre }}</button>
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
      movie: null,
      img_url: null,
      genres: [],
      comment: "",
      backgroundImgUrl: null,
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

            // console.log(res.data.poster_path)
            // console.log(res.data.backdrop_path)

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
  background-repeat: no-repeat;
}

.movie-poster {
  display: flex;
}

.movie-information {
  display: flex;
}
</style>