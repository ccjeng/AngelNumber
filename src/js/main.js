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
    
        $(".panel").hide();
}

$(document).ready(function() {



        $("form").submit(function(e) {
            e.preventDefault();

            //clean
            $(".panel").show(); 
            $("#number").text("");
            $("#description").text("");

            var num = $("#num").val().toLowerCase();

            console.log("num = " + num);

            $("#number").text(num);
            return firebase.database().ref(num+'/').once('value').then(function(data) {
                var result  = data.val().desc;
                console.log("result = "+result);

                $("#number").text(data.val().num);
                $("#description").text(data.val().desc);
            });


        });

    
       
});






function isEmpty(str) {
    return (!str || 0 === str.length);
}
