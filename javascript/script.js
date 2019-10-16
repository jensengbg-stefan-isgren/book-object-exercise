let myBook = {
  title: "Learn to Code",
  author: "Steve Code",
  genres: ["code", "learning"]
};

let myBook1 = {
  title: "Back to basic",
  author: "Steve Code",
  genres: ["code", "learning"]
};

let myBook2 = {
  title: "Happy Crocodiles",
  author: "Alan Clown",
  genres: ["science fiction", "crime"]
};

let myBook3 = {
  title: "Play the game",
  author: "Steve Code",
  genres: ["bio", "fiction"]
};

let myBook4 = {
  title: "Clean sheet",
  author: "Rosie McDougall",
  genres: ["fine art", "nature"]
};

let myBook5 = {
  title: "Into the Wild",
  author: "Rosie McDougall",
  genres: ["documentary", "nature"]
};

let myBooks = [myBook, myBook1, myBook2, myBook3, myBook4, myBook5];

const filterBooks = author => {
  for (book of myBooks) {
    if (book.author.indexOf(author) != -1) {
      console.log(book.author + " " + book.title + " " + book.genres);
    }
  }
};
console.log(filterBooks("Steve Code"));
