const API_URL = "https://your-graphql-server.com/graphql"; // Change this

async function fetchPosts() {
    const query = `
        query {
            posts {
                id
                title
                content
            }
        }
    `;

    const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query })
    });

    const result = await response.json();
    updateTable(result.data.posts);
}

function updateTable(posts) {
    const tableBody = document.getElementById("postsTable");
    tableBody.innerHTML = ""; // Clear previous rows

    posts.forEach(post => {
        const row = document.createElement("tr");
        row.innerHTML = `<td>${post.id}</td><td>${post.title}</td><td>${post.content}</td>`;
        tableBody.appendChild(row);
    });
}

// Handle form submission
document.getElementById("postForm").addEventListener("submit", async (event) => {
    event.preventDefault();

    const title = document.getElementById("title").value;
    const content = document.getElementById("content").value;

    const mutation = `
        mutation {
            createPost(title: "${title}", content: "${content}") {
                id
                title
                content
            }
        }
    `;

    await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: mutation })
    });

    document.getElementById("title").value = "";
    document.getElementById("content").value = "";

    fetchPosts(); // Refresh table
});

// Load posts on page load
fetchPosts();
