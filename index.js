function submitData(name, email) {
  function renderData(data) {
    const newDiv = document.createElement("li");
    newDiv.className = "user_data";
    newDiv.innerHTML = data;
  }

  let formData = {
    name,
    email,
  };

  const configurationalObject = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(formData),
  };

  return fetch("http://localhost:3000/users", configurationalObject)
    .then((res) => res.json())
    .then((obj) => renderData(obj));
}
