onload = () => {
    document.getElementById("loginButton").onclick = () => {
        const username = document.getElementById("login").value

        axios.post("/api/login", username, { headers: { 'Content-Type': 'text/plain'}}).then(res => {
            localStorage.setItem("token", res.data)
            location.href = "/comments"
        })
    }
}