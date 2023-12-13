// 65130500053 Pheeraphat Dherachaisuphakij

// นิยามคลาส Movies
class Movies {
  // Constructor ที่สร้าง object movies และกำหนดให้เป็น empty array
  constructor() {
    this.movies = [];
  }

  // Method สำหรับดึงข้อมูลหนังทั้งหมด
  getAllMovies() {
    return this.movies;
  }

  // Method สำหรับเพิ่มหนังใหม่
  addMovie(title, director, year, genre) {
    // ตรวจสอบว่าข้อมูลที่จำเป็นไม่หายไป
    if (!title || !director || !year || !genre) {
      return undefined;
    }

    // ตรวจสอบหนังซ้ำ
    const isDuplicate = this.movies.some(
      (movie) =>
        movie.title.toLowerCase() === title.toLowerCase() &&
        movie.director.toLowerCase() === director.toLowerCase()
    );

    if (isDuplicate) {
      return undefined;
    }

    // เพิ่มหนังใหม่ลงใน array
    const newMovie = { title, director, year, genre };
    this.movies.push(newMovie);
    return newMovie;
  }

  // Method สำหรับอัปเดตข้อมูลหนัง
  updateMovie(title, updatedDetails) {
    // หา index ของหนังที่ต้องการอัปเดต
    const movieIndex = this.movies.findIndex(
      (movie) => movie.title.toLowerCase() === title.toLowerCase()
    );

    if (movieIndex === -1) {
      return undefined;
    }

    // อัปเดตข้อมูลหนัง
    this.movies[movieIndex] = { ...this.movies[movieIndex], ...updatedDetails };
    return this.movies[movieIndex];
  }

  // Method สำหรับลบหนังตาม title
  deleteMovieByTitle(title) {
    // หา index ของหนังที่ต้องการลบ
    const movieIndex = this.movies.findIndex(
      (movie) => movie.title.toLowerCase() === title.toLowerCase()
    );

    if (movieIndex === -1) {
      return 'no movie deleted';
    }

    // ลบหนังและคืนค่า object ของหนังที่ถูกลบ
    const deletedMovie = this.movies.splice(movieIndex, 1)[0];
    return deletedMovie;
  }
}

// ส่งออกคลาส Movies เพื่อให้นำไปใช้ใน module อื่น
module.exports = Movies;
