document.getElementById("logout-btn").addEventListener("click", function () {
  window.location.href = "index.html";
});

toggleHandle("add-money-container", "none");
toggleHandle("cashout-container", "none");
toggleHandle("transaction-history", "none");
document.getElementById("add-money-box").addEventListener("click", function () {
  toggleHandle("add-money-container", "block");
  toggleHandle("cashout-container", "none");
  toggleHandle("transaction-history", "none");
});
document.getElementById("cashout-box").addEventListener("click", function () {
  toggleHandle("cashout-container", "block");
  toggleHandle("add-money-container", "none");
  toggleHandle("transaction-history", "none");
});
document.getElementById("tran-box").addEventListener("click", function () {
  toggleHandle("transaction-history", "block");
  toggleHandle("cashout-container", "none");
  toggleHandle("add-money-container", "none");
});