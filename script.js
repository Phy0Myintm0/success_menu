// $(".slide-box-switch").click(function () {
//     $(this).toggleClass("active");
//     let status = $(this).hasClass("active");
//     if(status){
//         $(".slide-box-container").animate({left:0},500,function () {
//             $(".slide-box-switch i").removeClass("close").addClass("open");
//         });
//     }else{
//         $(".slide-box-container").animate({left:"-326px"},500,function () {
//             $(".slide-box-switch i").removeClass("open").addClass("close");
//         });
//     }
// });


const address = document.getElementById('address');

address.addEventListener('mouseover', () => {
address.style.transform = 'scale(1)';
});

address.addEventListener('mouseout', () => {
address.style.transform = 'scale(1)';
});

 // JavaScript code to calculate total price and update display
 const menuItems = document.querySelectorAll('#menuItems input[type="checkbox"]');
 const totalPriceDisplay = document.getElementById('totalPrice');

 // Add event listener to each checkbox
 menuItems.forEach(item => {
     item.addEventListener('change', calculateTotalPrice);
 });

 // Function to calculate total price
 function calculateTotalPrice() {
     let totalPrice = 0;
     menuItems.forEach(item => {
         if (item.checked) {
             // Extract price from the DOM
             const price = parseFloat(item.dataset.price.replace(',', ''));
             totalPrice += price;
         }
     });
     // Update total price display
     totalPriceDisplay.textContent = totalPrice.toLocaleString() + ' MMK';
 }

 // Function to handle order submission
 function submitOrder() {
     // Implement order submission logic here
     console.log('Order submitted!');
 }

 //script for qr code button
 // Wait for the DOM to be fully loaded before running the code
document.addEventListener('DOMContentLoaded', function () {
    const scanButton = document.getElementById('scanButton');
    const resultDiv = document.getElementById('result');

    // Add click event listener to the scan button
    scanButton.addEventListener('click', function () {
        // Configure QuaggaJS
        Quagga.init({
            inputStream: {
                name: "Live",
                type: "LiveStream",
                target: document.querySelector('#result'), // Output element
                constraints: {
                    width: 480,
                    height: 320,
                    facingMode: "environment" // Use the rear camera if available
                },
            },
            decoder: {
                readers: ["code_128_reader"] // You can add more reader types if needed
            }
        }, function (err) {
            if (err) {
                console.error(err);
                return
            }
            console.log("Initialization finished. Ready to start");
            Quagga.start();
        });

        // Add event listener to handle scan results
        Quagga.onDetected(function (result) {
            resultDiv.innerHTML = `QR Code detected: ${result.codeResult.code}`;
            // You can perform any action with the scanned data here
        });
    });
});
