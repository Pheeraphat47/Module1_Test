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
