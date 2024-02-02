class User {
  constructor(username, city) {
    this.username = username;
    this.city = city;
    this.posts = [];
  }
  newPost(text) {
    this.posts.push(text);
  }
  readPost(postIndex) {
    return this.posts[+postIndex];
  }
}

const toby = new User("Toby", "Catland");

console.log(toby);
toby.newPost("Meow! Mew. Meooooow.");
toby.newPost("Meow meow meow.");
toby.newPost("Meooooow");
console.log(toby);
console.log(toby.readPost(2));
// uses line 11 to run readpost, which returns a specific index in the this.posts
