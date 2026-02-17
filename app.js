const item = document.querySelector("#item");
const toDoBox = document.querySelector("#to-do-box");

const data = [];

item.addEventListener("keyup", function (event) {
  if (event.key == "Enter") {
    addToDo(this.value);
    savedata(this.value);
    this.value = "";
  }
});

const addToDo = (item) => {
  const listItem = document.createElement("li");
  listItem.innerHTML = `
   ${item}
    <i class="fa-solid fa-xmark"></i>
    `;

  listItem.addEventListener("click", function () {
    this.classList.toggle("done");
  });

  listItem.querySelector("i").addEventListener("click", function () {
    listItem.remove();
  });

  toDoBox.appendChild(listItem);
};

(function () {
  const lsItems = JSON.parse(localStorage.getItem("items"));

  if (lsItems == null) {
    return;
  }

  lsItems.forEach((listItem) => {
    addToDo(listItem);
  });
})();

const savedata = (lsdata) => {
  data.push(lsdata);

  localStorage.setItem("items", JSON.stringify(data));
};
