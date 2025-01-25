document.querySelector(".submit").addEventListener("click", function (event) {
  event.preventDefault();

  const usernameField = document.querySelector(
    ".input-field[placeholder='Username or Email']"
  );
  const passwordField = document.querySelector(
    ".input-field[placeholder='Password']"
  );

  const username = usernameField.value.trim();
  const password = passwordField.value.trim();

  if (username === "") {
    alert("Please enter your Username or Email.");
    return;
  }

  if (password === "") {
    alert("Please enter your Password.");
    return;
  }

  alert(`Welcome, ${username}!`);

  window.location.href = "pup-news.html";
});
