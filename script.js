class Movie {
  constructor(title, genre, numStars) {
    this.title = title;
    this.genre = genre;
    this.numStars = numStars;
  }
  showDetails() {
    console.log(
      `${this.title} is a ${this.genre} movie with ${this.numStars} stars.`
    );
  }
}

const movies = [];

while (true) {
  const firstPrompt = prompt(
    "Please, enter your movie information. Type 'done' to finish.",
    "title,genre,numStars"
  ).trim();

  if (firstPrompt === "done") {
    break;
  }

  const inputs = firstPrompt.split(",");
  const newMovie = new Movie(...inputs);
  movies.push(newMovie);
}

movies.forEach((movie) => {
  return movie.showDetails();
});

const secondPrompt = prompt(
  "Please enter the movie title you wish to search for.",
  "title"
).trim();

const foundMovie = movies.find((movie) => movie.title === secondPrompt);

if (foundMovie) {
  foundMovie.showDetails();
} else {
  console.log("No movies with that title were found.");
}

const thirdPrompt = prompt(
  "Please enter a movie genre to filter by.",
  "genre"
).trim();

const matchingGenre = movies.filter((movie) => thirdPrompt === movie.genre);

if (matchingGenre.length > 0) {
  matchingGenre.forEach((movie) => {
    movie.showDetails();
  });
} else {
  console.log("No movies within that genre were found.");
}
