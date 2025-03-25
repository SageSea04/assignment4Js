//Display Student Name and ID 
document.addEventListener("DOMContentLoaded", function () {
    const studentInfo = document.getElementById("student-info");
    studentInfo.textContent = "Student: Ebhool Lamichhane - ID: 200593232";
});

//Pizza Class
class Pizza {
    constructor(size, crust, toppings, extraCheese, specialInstructions) {
        this.size = size;
        this.crust = crust;
        this.toppings = toppings;
        this.extraCheese = extraCheese;
        this.specialInstructions = specialInstructions;
    }

    describe() {
        return `
            <h2>Your Order:</h2>
            <p><strong>Size:</strong> ${this.size}</p>
            <p><strong>Crust:</strong> ${this.crust}</p>
            <p><strong>Toppings:</strong> ${this.toppings.length > 0 ? this.toppings.join(", ") : "None"}</p>
            <p><strong>Extra Cheese:</strong> ${this.extraCheese ? "Yes" : "No"}</p>
            <p><strong>Special Instructions:</strong> ${this.specialInstructions || "None"}</p>
        `;
    }
}

//Handle Form Submission
document.getElementById("pizza-form").addEventListener("submit", function (event) {
    event.preventDefault();

    //Get form values
    let size = document.getElementById("size").value;
    let crust = document.getElementById("crust").value;
    let toppings = Array.from(document.querySelectorAll("fieldset input[type='checkbox']:checked"))
    .map(checkbox => checkbox.value);
    let extraCheese = document.getElementById("extra-cheese").checked;
    let specialInstructions = document.getElementById("special-instructions").value.trim();

    //Create Pizza Object
    let order = new Pizza(size, crust, toppings, extraCheese, specialInstructions);

    //Display Order Summary
    document.getElementById("order-summary").innerHTML = order.describe();
});
