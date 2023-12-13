class Movies {
  // ... (code for existing methods)

  getMoviesByGenre(genre) {
    // สร้าง method ที่รับ parameter เป็น genre และคืนค่าเป็น array ของหนังที่มี genre ตรงกับที่ระบุ
    return this.movies.filter(movie => movie.genre.toLowerCase() === genre.toLowerCase());
  }

  getMoviesByDirector(director) {
    // สร้าง method ที่รับ parameter เป็น director และคืนค่าเป็น array ของหนังที่มี director ตรงกับที่ระบุ
    return this.movies.filter(movie => movie.director.toLowerCase() === director.toLowerCase());
  }

  getMoviesReleasedAfter(year) {
    // สร้าง method ที่รับ parameter เป็น year และคืนค่าเป็น array ของหนังที่ release หลังจาก year ที่ระบุ
    return this.movies.filter(movie => movie.year > year);
  }

  getMoviesCount() {
    // สร้าง method ที่คืนค่าเป็นจำนวนหนังทั้งหมดใน collection
    return this.movies.length;
  }

  getMovieByTitle(title) {
    // สร้าง method ที่รับ parameter เป็น title และคืนค่าเป็น object ของหนังที่มี title ตรงกับที่ระบุ
    return this.movies.find(movie => movie.title.toLowerCase() === title.toLowerCase());
  }
}

ตัวอย่าง Method get เพิ่มเติม 

Delete หนัง ทุกเรื่อง
deleteAllMovies() {
  // Delete all movies and return the array of deleted movies
  const deletedMovies = this.movies.slice(); // Create a copy of the array
  this.movies = []; // Clear the array
  return deletedMovies;
}

// ลบหนังตามเงื่อนไข
deleteMovieByCondition(condition, value) {
  // Write a program to delete a movie from the array based on the specified condition.
  // If the movie meets the condition, then delete it. Otherwise, no movie has been deleted.

  const lowerCaseCondition = condition.toLowerCase();

  const movieIndex = this.movies.findIndex((movie) => {
    if (lowerCaseCondition === 'title') {
      return movie.title.toLowerCase() === value.toLowerCase();
    } else if (lowerCaseCondition === 'year') {
      return movie.year === value;
    } else if (lowerCaseCondition === 'genre') {
      return movie.genre.toLowerCase() === value.toLowerCase();
    }

    // Unsupported condition
    return false;
  });

  if (movieIndex !== -1) {
    const deletedMovie = this.movies.splice(movieIndex, 1)[0];
    return `A movie object ${JSON.stringify(deletedMovie)} is deleted`;
  } else {
    return 'No movie deleted';
  }
}

// update โดยใส่ parameter 4 ตัว

updateMovie(title, updatedYear, updatedDirector, updatedGenre) {
  // หา index ของหนังที่ต้องการอัปเดต
  const movieIndex = this.movies.findIndex(
    (movie) => movie.title.toLowerCase() === title.toLowerCase()
  );

  if (movieIndex === -1) {
    return undefined;
  }

  // อัปเดตข้อมูลหนัง
  this.movies[movieIndex] = {
    ...this.movies[movieIndex],
    year: updatedYear !== undefined ? updatedYear : this.movies[movieIndex].year,
    director: updatedDirector !== undefined ? updatedDirector : this.movies[movieIndex].director,
    genre: updatedGenre !== undefined ? updatedGenre : this.movies[movieIndex].genre,
  };

  return this.movies[movieIndex];
}






