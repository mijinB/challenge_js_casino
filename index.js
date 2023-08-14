const endNumInput = document.querySelector(".end-div input");
const chooseNumInput = document.querySelector(".choose-div input");

let endNum = "";
let chooseNum = "";

endNumInput.value = endNum;
chooseNumInput.value = chooseNum;

const onEndNumChange = (event) => {
  endNum = event.target.value;
}

const onChooseNumChange = (event) => {
  chooseNum = event.target.value;
}

endNumInput.addEventListener("change", onEndNumChange);
chooseNumInput.addEventListener("change", onChooseNumChange);