<template>
  <div>
    <div>
      <div class="moviedetail">
        <div class="border border-dark mx-3">
          <img class="poster" :src="img_url" alt="이미지 자리" />
        </div>
        <b-card border-variant="dark" class="nes-container is-rounded is-dark me-3">
          <p>제목 : {{ movie?.title }}</p>
          <p>{{ movie?.overview }}</p>
          <p>개봉일 : {{ movie?.release_date }}</p>
          <p>평점 : {{ movie?.vote_average }}</p>
          <p>
            장르 :
            <button
              class="nes-btn small mx-1"
              v-for="genre in genres"
              :key="genre.id"
            >
              {{ genre }}
            </button>
          </p>
        </b-card>
      </div>
      <div class="moviedetail2">
        <router-link :to="{ name: 'MovieView'}">
          <button class="nes-btn is-primary">Back</button>
        </router-link>
        <MovieCommentForm ref="MovieCommentForm"></MovieCommentForm>
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
  updated() {
    this.$refs.MovieCommentForm.getMovieComments();
    this.$refs.MovieCommentForm.$on("reset", this.reset);
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
            "https://image.tmdb.org/t/p/w300_and_h450_bestv2" + res.data.poster_path;
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
  justify-content: center;
}

.moviedetail2 {
  text-align: center;
}

.card {
  text-align: start;
  background-color: dimgray;
}

.poster {
  width: 300px;
  height: 100%;
}

.card p {
  margin-left: 10px;
  margin-top: 10px;
}

.hr {
  background-color: red;
  height: 1px;
  border: 0;
}

.card {
  max-width: 70rem;
}

/* .container {
  background-size: cover;
  background-repeat: no-repeat;
} */

/* .backdrop {
  position: fixed;
  top: 0;
  left: 0;
  background-repeat: no-repeat;
  background-size: cover;
} */
</style>