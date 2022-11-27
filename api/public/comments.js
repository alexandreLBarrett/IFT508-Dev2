onload = () => {
    const token = localStorage.getItem('token')

    if (!token)
        location.href = "/"

    document.getElementById("commentButton").onclick = () => {
        const comment = document.getElementById("comment").value

        axios.post("/api/comments", { token, comment }).then(res => {
            location.href = "/comments"
        })
        .catch(() => {
            location.href = "/"
        })
    }
}

