// 65130500053 Pheeraphat Dherachaisuphakij

class Movies {
  //your code here...

  movies = [];
  constructor(title, director, year, genre) {
    this.title = title;
    this.director = director;
    this.year = year;
    this.genre = genre;
  }

  getAllMovies() {
    return this.movies;
  }

  addMovie(title, director, year, genre) {
    if ((title && director && year && genre === null) || (title && director && year && genre === undefined)) {
      return undefined
    }
    if (title === this.title && director === this.director) {
      return undefined
    }
    return this.movies.push(`title: ${title} director: ${director} year: ${year} genre: ${genre}`)
  }

  updateMovie(title, updatedDetails) {
    const movietoUpdate = this.movies.find((update) => update.title == title);
    if (movietoUpdate != this.title) {
      return undefined
    } else {
      return this.movies.push(movietoUpdate, updatedDetails);
    }

  }

  deleteMovieByTitle(title) {
    const deletebytitle = this.movies.find((movies) => movies.title == title)
    if(deletebytitle === title){
      return deletebytitle.length = 0;
    }else{
      return "no movie deleted"
    }
  }

}


module.exports = Movies
