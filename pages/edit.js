"use strict";

// const baseURL = "https://olive-bead-glazer.glitch.me/ ";
const baseURL = "https://nosy-melon-story.glitch.me/ ";

const getCar = async (id) => {
  try {
    const response = await fetch(baseURL + id);
    return await response.json();
  } catch (error) {
    console.error(error);
  }
};

const editData = async (data) => {
  try {
    const response = await fetch(baseURL + data.id, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    return await response.json();
  } catch (error) {
    // window.location.href = "../index.html"; cia jei nesekimgai issaugo nunaviguoja atgal i pirmini puslapi
    console.error(error);
  }
};

function initData() {
  const windowHref = window.location.href;
  const id = windowHref.substring(windowHref.lastIndexOf("=") + 1);

  getCar(id).then((data) => {
    console.log(data);
    const brandValue = document.querySelector("#brand");
    brandValue.value = data.brand;

    const modelValue = document.querySelector("#model");
    modelValue.value = data.model;

    const form = document.querySelector("form");
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const car = {id,brand: brandValue.value, model: modelValue.value};
      editData(car).then(()=>{
         window.location.href = "../index.html"
      });
          
    });
  });
}

initData();