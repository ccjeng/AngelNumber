window.onload = load;
    

function load() {
        // Initialize Firebase
        var config = {
                apiKey: "AIzaSyBz_2bz3i0bQUSjKYjkvs_L5c_DjJqbCbc",
                authDomain: "anglenumber-172d3.firebaseapp.com",
                databaseURL: "https://anglenumber-172d3.firebaseio.com",
                storageBucket: "anglenumber-172d3.appspot.com",
                messagingSenderId: "184395866685"
        };
        firebase.initializeApp(config);

        // Get a reference to the database service
        var database = firebase.database();         
}

$(document).ready(function() {

        $("form").submit(function(e) {
            e.preventDefault();

            //clean
            $(".result").show(); 

            var num = $("#num").val().toLowerCase();

            return firebase.database().ref('results')
                .orderByChild("num").equalTo(num)
                .once('child_added')
                .then(function(data) {

                $("#number").text(data.val().num);
                $("#description").text(data.val().desc);
            });


        });

       
});



