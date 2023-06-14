document.addEventListener("DOMContentLoaded", () => {
  const buyButton = document.querySelector(".buy-button");
  const orderForm = document.querySelector(".order-form");

  buyButton.addEventListener("click", (event) => {
    event.preventDefault();
    orderForm.style.display = "block";
  });

  const submitButton = document.querySelector(
    '.order-form button[type="submit"]'
  );
  submitButton.addEventListener("click", (event) => {
    event.preventDefault();

    const nameInput = document.getElementById("name");
    const cityInput = document.getElementById("city");
    const warehouseInput = document.getElementById("warehouse");
    const paymentInput = document.getElementById("payment");
    const quantityInput = document.getElementById("quantity");

    const errorMessage = document.getElementById("error-message");
    const orderInfo = document.getElementById("order-info");

    const isFormValid =
      nameInput.value &&
      cityInput.value &&
      warehouseInput.value &&
      paymentInput.value &&
      quantityInput.value;

    errorMessage.textContent = isFormValid
      ? ""
      : "Будь ласка, заповніть всі обов'язкові поля.";

    if (isFormValid) {
      const productName =
        document.querySelector(".product-card h2").textContent;
      const productPrice = document.querySelector(
        ".product-card .price"
      ).textContent;

      const customerName = nameInput.value;
      const selectedCity = cityInput.options[cityInput.selectedIndex].text;
      const selectedWarehouse = warehouseInput.value;
      const selectedPayment =
        paymentInput.options[paymentInput.selectedIndex].text;
      const selectedQuantity = quantityInput.value;

      const message =
        "Ви замовили:\n\n" +
        "Товар: " +
        productName +
        "\n" +
        "Ціна: " +
        productPrice +
        "\n\n" +
        "Інформація про доставку:\n" +
        "ПІБ покупця: " +
        customerName +
        "\n" +
        "Місто: " +
        selectedCity +
        "\n" +
        "Склад Нової пошти: " +
        selectedWarehouse +
        "\n" +
        "Оплата: " +
        selectedPayment +
        "\n" +
        "Кількість: " +
        selectedQuantity;

      orderInfo.textContent = message;
    } else {
      orderInfo.textContent = "";
    }
  });
});
