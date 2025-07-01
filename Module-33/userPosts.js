function loadPosts(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => displayUser(data))
}

function displayUser(posts){
    const userContainer = document.getElementById('user-container');
       for(const post of posts){
        const div = document.createElement('div');
        div.classList.add('post')
        console.log(post)
        div.innerHTML = `
          <h3>User Id:${post.id}</h3>
          <h4>Title: ${post.title}</h4>
          <p><h3>Description:</h3> ${post.body}</p>
           
      
        `
        userContainer.appendChild(div);
       }
}

loadPosts();