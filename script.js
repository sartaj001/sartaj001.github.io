// Sample blog post data with URLs to the content
const blogPosts = [
  {
    id: 1,
    title: "Unraveling the Latest Tech Trends",
    contentUrl: "blog-1.html",
  },
  {
    id: 2,
    title: "Cricket Teams in the Upcoming Season",
    contentUrl: "blog-2.html",
  },
  {
    id: 3,
    title: "New blog",
    contentUrl: "blog-3.html",
  },

  {
    id: 4,
    title: "IndVsSA",
    contentUrl: "blog-5.html",
  },
  // Add more posts as needed
];

// Function to display blog posts on the page
function displayBlogPosts() {
  const blogPostsContainer = document.getElementById("blog-posts");

  blogPosts.forEach((post) => {
    const postElement = document.createElement("div");
    postElement.classList.add("blog-post");

    const titleElement = document.createElement("h2");
    titleElement.textContent = post.title;

    // Create a link to the detailed blog post page
    const linkElement = document.createElement("a");
    linkElement.href = post.contentUrl;
    linkElement.appendChild(titleElement);

    postElement.appendChild(linkElement);

    blogPostsContainer.appendChild(postElement);
  });
}

// Call the function to display blog posts when the page loads
document.addEventListener("DOMContentLoaded", displayBlogPosts);
