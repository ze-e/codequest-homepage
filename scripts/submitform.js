var form = document.getElementById("emailForm");

async function handleSubmit(event) {
  event.preventDefault();
  var status = document.getElementById("form-status");
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      if (response.ok) {
        form.reset();
        const successMessage = document.createElement("p");
        successMessage.classList.add('success');
        successMessage.textContent = "Email sent successfully!";
        form.innerHTML = ""; // Clear the form content
        form.appendChild(successMessage); // Append success message
      } else {
        response.json().then((data) => {
          if (Object.hasOwn(data, "errors")) {
            status.innerHTML = data["errors"]
              .map((error) => error["message"])
              .join(", ");
          } else {
            const errorMessage = document.createElement("p");
            errorMessage.classList.add("error");
            errorMessage.textContent = "Email not sent successfully.";
            status.appendChild(errorMessage); // Append error message
          }
        });
      }
    })
    .catch((error) => {
      const errorMessage = document.createElement("p");
      errorMessage.classList.add("error");
      errorMessage.textContent = "Email not sent successfully.";
      status.appendChild(errorMessage); // Append error message
    });
}
form.addEventListener("submit", handleSubmit);
