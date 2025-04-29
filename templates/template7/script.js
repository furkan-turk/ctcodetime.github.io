function addPost() {
    const title = document.getElementById('postTitle').value.trim();
    const content = document.getElementById('postContent').value.trim();
    
    if (title && content) {
      const postsSection = document.getElementById('posts');
      
      const post = document.createElement('div');
      post.className = 'post';
      
      post.innerHTML = `
        <h3>${title}</h3>
        <p>${content}</p>
      `;
      
      postsSection.appendChild(post);
      
      document.getElementById('postTitle').value = '';
      document.getElementById('postContent').value = '';
    } else {
      alert('Please fill out both fields.');
    }
  }
  