
/****** Changing style using jQuery ******/

$("h1").css("color","red"); // to set the value of the property

console.log($("h1").css("color")); // to get the value of the property

$("button"); // selects all the buttons

$("h1").addClass("big-title margin-50"); // adds class/es to element/s

$("h1").removeClass("margin-50"); // removes class from element

console.log($("h1").hasClass("big-title")); // returns true if the elements has the class, false if not.



/****** Chanigng text using jQuery ******/

$("h1").text("Bye"); // changes text content

$("button").html("<em>Hey</em>"); // changes inner HTML


/****** Changing attributes using jQuery ******/

console.log($("img").attr("src")); // gets the value of the attribute

$("a").attr("href", "https://www.yahoo.com") // sets the value of the attribute

console.log($("h1").attr("class")); // gets the element(s)'s class(es)



/****** Adding Event Listeners ******/

$("h1").click(function () {
    $("h1").css("color", "purple");     // adds event listener for event type "click"
}); 

$("button").click(function () {
    $("h1").css("color", "pink");       //adds event listener to every button element 
});

$("input").keydown(function(event) {
    console.log(event.key);             
});

$("h1").on("mouseover", function () {
    $("h1").css("color", "orange");    // the event type is passed as the first argument
});


// Exercise:
// Update the code so that whenever a key is pressed, the h1 text changes to that key.

$(document).keydown( function(event) {
    $("h1").text(event.key);
});



/****** Adding new html elements ******/

$("h1").before("<button>New button before</button>");  // adds a button before the h1 element

$("h1").after("<button>New button after</button>");  // adds a button after the h1 element

$("h1").prepend("<button>New button prepend</button>");  // adds a button inside the h1 tag, before its content

$("h1").append("<button>New button append</button>");  // adds a button inside the h1 tag, after its content

// $("element").remove(); removes all the elements with name "element"


/****** Adding animations  ******/


$(document).on("keydown", function (event) {
    
    key = event.key;
    switch (key) {

        // hide, show, toggle
        case "a":
            $("h1").hide();                // hides h1
            break;
        
        case "s":
            $("h1").show();                             // shows h1
            break;

        case "d":
            $("h1").toggle();                           // toggles h1 (shows if hidden, hides if shown)
            break;

        // fadeout, fadein, fadeToggle (does the same thing but more progressively)
        case "f":
            $("h1").fadeOut();                             // fades out h1
            break;

        case "g":
            $("h1").fadeIn();                             // fades in h1
            break;

        case "h":
            $("h1").fadeToggle();                           // toggles h1 (shows if hidden, hides if shown)
            break;


        // the slide function collapses the element
        case "j":
            $("h1").slideUp();                             // collapses h1
            break;

        case "k":
            $("h1").slideDown();                           // uncollapses down in h1
            break;

        case "l":
            $("h1").slideToggle();                           // toggles h1 (slides down if hidden, slides up if shown)
            break;

        
        // animate function allows us to define some custom css that we want to gradually animate towards 
        // only works for propoerties that have a numeric value.
        case "z":
            $("h1").animate({opacity: 0.5});
            break;

        case "x":
            $("h1").animate({margin: "20px"});
            break;

        
        // chaining methods together
        case "c":
            $("h1").slideUp().slideDown().animate({fontSize: "5rem"});

        default:
            $("h1").text(event.key);
            break;
    }

    
});                          







