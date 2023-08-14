const endNumInput = document.querySelector("#end-div input");
const chooseNumInput = document.querySelector("#choose-div input");
const playButton = document.querySelector("#choose-div button");
const hiddenDiv = document.querySelector("#hidden-div");
const hiddenFirstText = hiddenDiv.firstElementChild;
const hiddenSecondText = hiddenDiv.lastElementChild;

let endNum;
let chooseNum;

const onEndNumChange = (event) => {
  endNumInput.value = event.target.value.replace("-", "");
  endNum = parseInt(endNumInput.value);
}

const onChooseNumChange = (event) => {
  chooseNumInput.value = event.target.value.replace("-", "");
  chooseNum = parseInt(chooseNumInput.value);
}

const onPlayButtonClick = () => {
  const machineChooseNum = Math.ceil(Math.random() * endNum);
  hiddenDiv.classList.remove("hidden");

  hiddenFirstText.innerText = `You chose: ${chooseNum}, the machine chose: ${machineChooseNum}.`;
  hiddenSecondText.innerText = (chooseNum === machineChooseNum) ? "You won!" : "You lost";
}

endNumInput.addEventListener("change", onEndNumChange);
chooseNumInput.addEventListener("change", onChooseNumChange);
playButton.addEventListener("click", onPlayButtonClick);