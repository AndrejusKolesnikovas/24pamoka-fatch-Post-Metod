"use strict";

const state = {};

//  const baseURL = 'https://olive-bead-glazer.glitch.me';
const baseURL = "https://nosy-melon-story.glitch.me/";

const fetchData = async () => {
  try {
    const response = await fetch(baseURL);
    if (response.ok) {
      state.cars = await response.json();
      populateTable(state.cars);
    }
  } catch (error) {
    console.error(error);
  }
};
const deleteData = async (id) => {
  try {
    const response = await fetch(baseURL + id, { method: "DELETE" });
    if (response.ok) {
      state.cars = await response.json();
      populateTable(state.cars);
    }
  } catch (error) {
    console.error(error);
  }
};
function populateTable(cars) {
  const tbody = document.querySelector("tbody");
  tbody.innerHTML = "";
  if (cars.lenth === 0) {
    return;
  };

  cars.forEach((car) => {
    console.log(car);
    const tr = document.createElement("tr");

    const brand = document.createElement("td");
    brand.innerText = car.brand;

    const model = document.createElement("td");
    model.innerText = car.model;

    const actions = document.createElement("td");
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.addEventListener("click", () => deleteData(car.id));

    const editButton = document.createElement("button");
    editButton.innerText = "Edit";
    editButton.addEventListener("click", () => {
      console.log("edit");
    });

    actions.append(deleteButton, editButton);

    tr.append(brand, model, actions);
    tbody.append(tr);
  });
}

fetchData();
