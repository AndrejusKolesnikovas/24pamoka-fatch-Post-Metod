"use strict";

// const baseURL = "https://olive-bead-glazer.glitch.me/ ";
const baseURL = "https://nosy-melon-story.glitch.me/ ";

const form = document.querySelector("form");
form.addEventListener("submit", (event) => addData(event));

function addData(event) {
  event.preventDefault();
  console.log("esu formoje");
  const brandValue = document.querySelector("#brand").value;
  const modelValue = document.querySelector("#model").value;

  const car = {id: Date.now(), brand: brandValue, model: modelValue };
  let hasErrors = false;
  postData(car).then((data) => {
    console.log(data)
    if (data === undefined) {
      hasErrors = true;
    }
  } 
  // window.location.href = "../index.html" 
  ).finally(() => {
    if (hasErrors) {
      const element = document.getElementById("error");
      element.classList.remove("hidden");
    }else{
      const element = document.getElementById("success");
      element.classList.remove("hidden");
    }
  })
};

const postData = async (data) => {
  try {
    const response = await fetch(baseURL, {
      method: "POST",
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
