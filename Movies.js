// 65130500053 Pheeraphat Dherachaisuphakij

class Movies {
  constructor() {
    // creates a new movies object without the provided parameters.
    // Your constructor must initialize the movies property to an empty array ([]).
    this.movies = [];
  }

  getAllMovies() {
    // Write a program to get all movies
    return this.movies;
  }

  addMovie(title, director, year, genre) {
    // Write a program to add a new movie to the end of array.
    // If any of the required details are missing, do not add the movie and return undefined.
    // If a movie with the same title and director (with case insensitive) already exists in the array, do not add the duplicate movie and return undefined.
    // Otherwise, a new movie object returned.

    // Check if any required details are missing
    if (!title || !director || !year || !genre) {
      return undefined;
    }

    // Check for duplicate movie
    const isDuplicate = this.movies.some(
      (movie) =>
        movie.title.toLowerCase() === title.toLowerCase() &&
        movie.director.toLowerCase() === director.toLowerCase()
    );

    if (isDuplicate) {
      return undefined;
    }

    // Add new movie to the array
    const newMovie = { title, director, year, genre };
    this.movies.push(newMovie);
    return newMovie;
  }

  updateMovie(title, updatedDetails) {
    // Write a program to update the details of a movie on a given title with case insensitive.
    // If the movie is found in the array, update its details.
    // If the movie is not found, return undefined.

    const movieIndex = this.movies.findIndex(
      (movie) => movie.title.toLowerCase() === title.toLowerCase()
    );

    if (movieIndex === -1) {
      return undefined;
    }

    // Update movie details
    this.movies[movieIndex] = { ...this.movies[movieIndex], ...updatedDetails };
    return this.movies[movieIndex];
  }

  deleteMovieByTitle(title) {
    // Write a program to delete a movie from the array.
    // If the movie title is found (with case insensitive) in the array then delete it.
    // Otherwise, no movie has been deleted.

    const movieIndex = this.movies.findIndex(
      (movie) => movie.title.toLowerCase() === title.toLowerCase()
    );

    if (movieIndex === -1) {
      return 'no movie deleted';
    }

    // Delete movie and return the deleted movie object
    const deletedMovie = this.movies.splice(movieIndex, 1)[0];
    return deletedMovie;
  }
}

module.exports = Movies
