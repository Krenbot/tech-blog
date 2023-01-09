const editBlog = document.querySelector(".editBlogForm");

editBlog.addEventListener("submit", (event) => {
    event.preventDefault();

    console.log(window.location.pathname.split('/')[3])

    const title = document.querySelector('.editBlogTitle').value
    const content = document.querySelector('.editBlogContent').value

    const blogData = {
        title: title.value,
        content: content.value,
    };
    fetch("/api/blogRoutes/:id", {
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

    // console.log('Button Clicked!')
});