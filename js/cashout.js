document.getElementById("cashout-money").addEventListener("click", function () {
  event.preventDefault();
  const agentNumber = getInputValue("agent-number");
  const pin = getConvertedInputValue("pin");
  // console.log(pin);
  if (agentNumber.length === 11) {
    if (pin === 1234) {
      const cashoutAmount = getConvertedInputValue("cashout-amount");
      const mainBalance = getConvertedInnerText("digit");
      if (cashoutAmount > mainBalance) {
        alert("You have to give a valid amount!!!!");
        return;
      }
      // document.getElementById("digit").innerText = amount + mainBalance;
      setInnerTextById("digit", mainBalance - cashoutAmount);
      const transactionContainer = document.getElementById(
        "transaction-history"
      );
      const p = document.createElement("p");
      p.innerText = `
        Withdraw ${cashoutAmount} from agent number ${agentNumber} and makes total amount of ${
        mainBalance - cashoutAmount
      }
        `;
      transactionContainer.appendChild(p);
      console.log(p);
    } else {
      console.log("Incorrect pin number!!!");
    }
  } else {
    console.log("Incorrect agent number!!!");
  }
});
