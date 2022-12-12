const posts = [
  { title: 'one', body: 'this is post one' },
  { title: 'two', body: 'this is post two' },
];

const getPosts = () => {
  setTimeout(() => {
    let output = '';
    posts.forEach((post, index) => {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 4000);
};

const createPost = (post, callback) => {
  setTimeout(() => {
    posts.push(post);
    callback();
  }, 4000);
};

getPosts();
createPost({ title: 'three', body: 'this is post three' }, getPosts());
