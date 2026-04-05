function loadData() {
  const dataContainer = document.getElementById("data");
  const button = document.getElementById("loadBtn");

  dataContainer.innerHTML = "<p> Loading Data....</p>";
  button.disabled = true;
  button.innerText = "loading....";
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(function(res) {
      if (!res.ok){
        throw new Error("Network response is not okay");
      }
      return res.json();
    })
    .then(function(data) {
      let htmlString = "";
      for (let i = 0; i < data.length; i++) {
        htmlString +=`<li> ${data[i].name} </li>`;
      }
      setTimeout(function(){
        dataContainer.innerHTML = htmlString;

        button.disabled = false;
        button.innerText= "Load Data";
      }, 1000);
    })
    .catch(function(err) {
      console.log(err);
      dataContainer.innerHTML = "<p style='color:red'>Failed to load data. Please Try again later!!</p>";
      button.disabled= false;
      button.innerText= "Load Data";
    });
}
