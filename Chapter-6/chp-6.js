/* This is the function to calculate total cost */
function calculateTotal(){
    /* Getting values from input fields */
    let price = parseFloat(document.getElementById('price').value)
    let liters=parseFloat(document.getElementById('liters').value)
    /*Calculates total cost */
    let total = price * liters
    /*Displays the result with two decimal places*/
    document.getElementById('total').textContent = `Total Cost: $${total.toFixed(2)}`;
}