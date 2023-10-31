// 65130500053 Pheeraphat Dherachaisuphakij

class Movies {
  //your code here...
  
  movies = [];
  constructor(title, director , year , genre) {
    this.title = title;
    this.director = director;
    this.year = year;
    this.genre = genre;
  }

  getAllMovies() {
    return this.movies;
  }

  addMovie(title , director , year , genre){   
    if((title && director && year && genre === null) || (title && director && year && genre === undefined)){
      return undefined
    }
    if (title === this.title && director === this.director){
      return undefined
    }else{
      return this.movies.push(`title: ${title} director: ${director} year: ${year} genre: ${genre}`)
    }
    
  }

  updateMovie(title, updatedDetails) {
    movietoUpdate = this.movies.filter((update) => update.title == title);
    if(movietoUpdate != this.tile){
      return undefined
    }else{
      return this.movies.push(movietoUpdate , updatedDetails);
    }
    
  }

  deleteMovieByTitle(title){
      deletebytitle = this.movies.filter((movies) => movies.title == title)
      return deletebytitle.length = 0;     
  }  
 
}


module.exports = Movies
