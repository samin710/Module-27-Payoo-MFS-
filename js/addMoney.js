document
  .getElementById("add-money")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const accountNumber = getInputValue("account-number");
    const pin = getConvertedInputValue("pin");
    // console.log(pin);

    if (accountNumber.length === 11) {
      if (pin === 1234) {
        const amount = getConvertedInputValue("amount");
        const mainBalance = getConvertedInnerText("digit");

        if (amount < 0) {
          alert("You have to enter a positive value");
          return;
        }
        // document.getElementById("digit").innerText = amount + mainBalance;
        setInnerTextById("digit", amount + mainBalance);

        const transactionContainer = document.getElementById(
          "transaction-history"
        );
        const div = document.createElement("div");
        div.classList.add("bg-red-400");
        div.innerHTML = `
        <h1>Added Money</h1>
        <h3>${amount}</h3>
        <h3>Account number: ${accountNumber}</h3>
        `;

        transactionContainer.appendChild(div);
        console.log(p);
      } else {
        console.log("Incorrect pin number!!!");
      }
    } else {
      console.log("Incorrect account number!!!");
    }
  });
