const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const postEl = document.getElementById("post-el")


function renderPost() {
    for (let i = 0; i < posts.length; i++) {
        postEl.innerHTML += `
                                <section class="post">
                                    <div class="user-info">
                                        <img id="avatar-el" src="${posts[i].avatar}">
                                        <div class="text-info">
                                            <h2 id="username-el">${posts[i].username}</h2>
                                            <h3 id="location-el">${posts[i].location}</h3>
                                        </div>
                                    </div>

                                    <div class="post-body">
                                        <img id="img-el" class="post-img" src="${posts[i].post}" alt="selfie of vincent van gogh">
                                        <div class="post-icons">
                                            <img class="icon fav-btn" src="images/fav_empty.png">
                                            <img class="icon bubble-btn" src="images/bubble-chat-empty.png">
                                            <img class="icon send-btn" src="images/send.png">
                                        </div>
                                        <div class="post-text">
                                            <p id="likes-el">${posts[i].likes} likes</p>
                                            <p id="comments-el"><strong>${posts[i].username}</strong> ${posts[i].comment} </p>
                                        </div>
                                    </div>
                                </section>
                            `
    }
}

renderPost()

const favBtn = document.querySelectorAll(".fav-btn")
const bubbleBtn = document.querySelectorAll(".bubble-btn")
const sendBtn = document.querySelectorAll(".send-btn")


favBtn.forEach(favBtn => {
    favBtn.addEventListener("mouseover", function() {
        favBtn.src = "images/fav_fill.png"
    })
    
    favBtn.addEventListener("mouseout", function() {
        favBtn.src = "images/fav_empty.png"
    })
});

bubbleBtn.forEach(bubbleBtn => {
    bubbleBtn.addEventListener("mouseover", function() {
        bubbleBtn.src = "images/bubble-chat.png"
    })
    
    bubbleBtn.addEventListener("mouseout", function() {
        bubbleBtn.src = "images/bubble-chat-empty.png"
    })
});

sendBtn.forEach(sendBtn => {
    sendBtn.addEventListener("mouseover", function() {
        sendBtn.src = "images/send_fill.png"
    })
    
    sendBtn.addEventListener("mouseout", function() {
        sendBtn.src = "images/send.png"
    })
});




