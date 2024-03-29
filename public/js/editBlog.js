const editBlog = document.querySelector(".editBlogForm");

const title = document.querySelector('.editBlogTitle')

const content = document.querySelector('.editBlogContent')

editBlog.addEventListener("submit", (event) => {
    event.preventDefault();

    const blogId = (window.location.pathname.split('/')[2])

    const blogData = {
        title: title.value,
        content: content.value,
    };

    fetch(`/api/blogs/${blogId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(blogData),
    })
        .then((response) => {
            if (response.status === 200) {
                window.location.href = "/dashboard";
            }
        })
        .catch((err) => console.log(err));
});