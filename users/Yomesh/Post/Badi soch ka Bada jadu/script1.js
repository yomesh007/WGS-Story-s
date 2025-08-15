// Array of posts
const posts = [
    { username: "John Doe", caption: "This is a caption for the post." },
    { username: "Jane Smith", caption: "Another post with a cool caption." },
    { username: "Mike Johnson", caption: "Video post with a cool caption." },
    { username: "Emma Davis", caption: "Random post for testing." }
  ];
  
  // Function to open the search page
  function openSearchPage() {
    document.getElementById("search-page").style.display = "block";
    displayPosts(posts);
  }
  
  // Function to display posts
  function displayPosts(posts) {
    const searchResults = document.getElementById("search-results");
    searchResults.innerHTML = "";
    posts.forEach(post => {
      const postElement = document.createElement("div");
      postElement.classList.add("post");
      postElement.innerHTML = `
        <div class="post-header">
          <div class="user-avatar"></div>
          <div class="username">${post.username}</div>
        </div>
        <div class="post-caption">${post.caption}</div>
      `;
      searchResults.appendChild(postElement);
    });
  }
  
  // Function to filter posts based on search input
  function filterPosts() {
    const searchInput = document.getElementById("search-input").value.toLowerCase();
    const filteredPosts = posts.filter(post =>
      post.caption.toLowerCase().includes(searchInput) || post.username.toLowerCase().includes(searchInput)
    );
    displayPosts(filteredPosts);
  }
  
  // go back button

  function goBack() {
            window.history.back();
        }