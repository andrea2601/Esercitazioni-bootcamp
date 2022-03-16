// Sezione commenti

const username = document.querySelector("#username");
const email = document.querySelector("#mail");
const avatar = document.querySelector("#avatar");
const submit = document.querySelector("#submit");
const text = document.querySelector("#input");
const commentsList = document.querySelector("#comments");

const comments = [{
  user: "Prova user",
  email: "PRova email",
  avatar: "https://randomuser.me/api/portraits/men/90.jpg",
  text: "prova text"
}];

const renderComments = () => {
  const commentItems = comments.map(
    (comment) =>
      `
        <li class="cardItem">
          <img src="${comment.avatar}">
          <div class="message">
            <h4>${comment.user}</h4>
            <p class="email">${comment.email}</p>
            <p>${comment.text}</p>
          </div>
        </li>
      `
  );
  console.log(commentItems.join(""));
  commentsList.innerHTML = commentItems.join("");
};

submit.addEventListener("click", () => {

  if (username.value !== "" || text.value !== "" || avatar.value !== "") {
    if (avatar.value === "") {
      avatar.value = "https://www.caliaesemenza.it/wp-content/uploads/2014/05/facebook-profile-picture-no-pic-avatar.jpeg";
    }
    comments.push({
      user: username.value,
      email: email.value,
      avatar: avatar.value,
      text: text.value
    });

    username.value = "";
    email.value = "";
    avatar.value = "";
    text.value = "";
    console.log(comments);
    renderComments();
  }
  else { alert("Inserisci almeno un username e un testo!") }
});

renderComments();


