document.getElementById("submit").addEventListener("click", () => {
  const val430 = Number(document.getElementById("430").value) || 0;
  const val400 = Number(document.getElementById("400").value) || 0;
  const val380 = Number(document.getElementById("380").value) || 0;
 const ordInput = document.getElementById("ord").value;
  const slotInput = document.getElementById("slot").value;

  // Validate that both orders and slots are NOT empty
  if (ordInput === "" || slotInput === "") {
    alert("Please fill in both Orders and Slots fields.");
    return; // stop execution
  }

  const orders = Number(ordInput);
  const slots = Number(slotInput);
  // Corrected calculation
  const total = val430 * 430 + val400 * 400 + val380 * 380 + orders * 10 + slots * 210;
  const tax= total*0.02;
  const res=total-tax;
  document.getElementById("output").innerHTML = `
    <p><strong>Total Earnings:</strong> ₹${total}</p>
  `;
    <p><strong>Total Earnings before deduction :</strong> ₹${total}</p>
  <br>
  <p><strong>Total Earnings after deduction :</strong> ₹${res}</p>`;
  });
