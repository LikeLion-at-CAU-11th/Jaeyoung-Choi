function filterData() {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      {
        response
          .filter((data) => data.state == "아기사자")
          .map((data) => {
            const list = document.createElement("div");
            list.innerHTML = `이름: ${data.name}, 직책: ${data.state}, 좋아하는 과일: ${data.fruit}`;

            container.appendChild(list);
            // console.log(data);
          });
      }
    })
    .catch((error) => {
      console.log(error);
      container.innerText = "Error Error Warning Warning";
    });
}
