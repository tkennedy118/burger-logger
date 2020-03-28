// attach functions to handlebars once DOM has loaded
$(function() {

    // 'Eat Burger!' button is clicked
    $(".eat-burger-btn").on("click", function(event) {
        event.preventDefault();

        const id = $(this.data("id"));
        const newDevoured = $(this).data("devoured");

        devouredObj = { devoured: newDevoured }

        // update/put request
        $.ajax("/api/burgers/" + id, {
            method: "PUT",
            data: devouredObj
        }).then(function() {
            console.log("This burger is now devoured!");

            location.reload();
        });
    });

    // 'Add Burger!' button is clicked in form
    $("#add-burger-form").on("submit", function(event) {
        event.preventDefault();

        const newBurger = {
            burger_name: $("#burger-textarea").val().trim(),
            devoured: false
        };

        // post requrest
        $.ajax("/api/burgers", {
            method: "POST",
            data: newBurger
        }).then(function() {
            console.log("Added a new burger!");

            location.reload();
        });
    });
});