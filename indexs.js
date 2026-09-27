const form = document.getElementById("orderForm");

const result = document.getElementById("orderResult");
const summary = document.getElementById("summary");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const employeeName =
        document.getElementById("employeeName").value;

    const department =
        document.getElementById("department").value;

    const laptop =
        document.getElementById("laptop").value;

    const quantity =
        document.getElementById("quantity").value;


    summary.innerHTML = `
        <strong>Order Placed Successfully!</strong><br><br>

        Employee Name: ${employeeName}<br>
        Department: ${department}<br>
        Laptop: ${laptop}<br>
        Quantity: ${quantity}
    `;

    result.style.display = "block";

    form.reset();

});
