function calculate() {
    const billInput = document.getElementById("billAmount");
    const enterAmount = billInput.value;
    const tipInput = document.getElementById("tipAmount");
    const tipenter = tipInput.value;
    const result = enterAmount * (1+tipenter / 100);
    const resultField = document.getElementById('total');
    resultField.textContent = result;

}


