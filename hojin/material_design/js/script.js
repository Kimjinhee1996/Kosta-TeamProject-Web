$(document).ready(function () {
    // Attach click event handler to elements with class "here"
    $(".to_admin").click(function (event) {
        // Prevent default click behavior (e.g., link following)
        event.preventDefault();

        // Redirect to main.html using window.location
        window.location.href = "admin_menu/index.html";
    });

    $(".background_main").click(function (event) {
        // Prevent default click behavior (e.g., link following)
        event.preventDefault();

        // Redirect to main.html using window.location
        window.location.href = "menu_select.html";
    });

    $(".cart").click(function (event) {
        // Prevent default click behavior (e.g., link following)
        event.preventDefault();

        // Redirect to main.html using window.location
        window.location.href = "order_list.html";
    });

    $(".home").click(function (event) {
        // Prevent default click behavior (e.g., link following)
        event.preventDefault();

        // Redirect to main.html using window.location
        window.location.href = "main.html";
    });
});