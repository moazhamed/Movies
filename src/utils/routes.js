let mainRoutes = {
  movies: (page) =>
    `https://api.themoviedb.org/3/discover/movie?api_key=f44893180d79c5d421ee7f9638ff1b2b&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`,
};

let routes = {
  moviesController: {
    getMovies: mainRoutes.movies,
  },
};

export default routes;
