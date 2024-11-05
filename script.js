$(document).ready(function() {
    let cart = [];
    
    // প্রোডাক্ট যোগ করার জন্য ফাংশন
    $(".add-to-cart").click(function() {
        const productName = $(this).parent().data("name");
        const productPrice = $(this).parent().data("price");
        const quantity = parseInt($(this).siblings('.quantity').text()); // প্রোডাক্টের সংখ্যা
        
        // প্রোডাক্টের সংখ্যা যদি 0 হয়, তাহলে সেটিকে কার্টে যোগ করবেন না
        if (quantity > 0) {
            cart.push({ name: productName, price: productPrice, quantity: quantity });
            updateCart(); // কার্ট আপডেট করুন
        }
    });

    // প্রোডাক্ট সংখ্যা বাড়ানোর জন্য ফাংশন
    $(".increase").click(function() {
        const quantityElement = $(this).siblings('.quantity');
        let quantity = parseInt(quantityElement.text());
        quantityElement.text(quantity + 1);
    });

    // প্রোডাক্ট সংখ্যা কমানোর জন্য ফাংশন
    $(".decrease").click(function() {
        const quantityElement = $(this).siblings('.quantity');
        let quantity = parseInt(quantityElement.text());
        if (quantity > 0) {
            quantityElement.text(quantity - 1);
        }
    });

    // কার্ট দেখানোর জন্য ফাংশন
    $("#cart-button").click(function() {
        $("#cart-popup").toggle();
    });

    $("#close-popup").click(function() {
        $("#cart-popup").hide();
    });

    // কার্ট আপডেট করার জন্য ফাংশন
    function updateCart() {
        $("#cart-items").empty();
        let totalItems = 0;
        let totalPrice = 0;

        // প্রতিটি প্রোডাক্টের তথ্য এবং মোট মূল্য আপডেট করুন
        cart.forEach(item => {
            $("#cart-items").append(`<li>${item.name} - ${item.price} টাকা × ${item.quantity} = ${item.price * item.quantity} টাকা</li>`);
            totalItems += item.quantity; // মোট প্রোডাক্ট সংখ্যা
            totalPrice += item.price * item.quantity; // মোট মূল্য
        });

        // মোট প্রোডাক্ট সংখ্যা `cart-button`-এ আপডেট করুন
        $("#total-count").text(totalItems);

        // মোট মূল্য `cart-popup`-এ আপডেট করুন
        $("#cart-popup").find("#total-price").text(`মোট মূল্য: ${totalPrice} টাকা`);
    }
});
