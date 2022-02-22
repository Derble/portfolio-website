// load default all cards
filterCards("all");

function filterCards(c) {
    let x, i;
    // handle to the cards
    x = document.getElementsByClassName("portfolio-card");
    if (c == "all") {
        c = "";
    }
    for (i = 0; i < x.length; i++) {
        // removes show class for each item
        removeClass(x[i], "show");
        // adds show class for the value of c, if it has a class name that matches the value selected
        if (x[i].className.indexOf(c) > -1) {
            addClass(x[i], "show");
        }
    }
}

function addClass(element, name) {
    let i, arr1, arr2;
    // split the class names for the element into an array element
    arr1 = element.className.split(" ");
    // split the words in class name into different array elements
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        // if indexOf returns -1, the value is not found, so we add it
        if (arr1.indexOf(arr2[i]) == -1) {
            element.className += " " + arr2[i];
        }
    }
}

function removeClass(element, name) {
    let i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            // removes one show (class name passed in) if it is present
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    // joins array elements into class name
    element.className = arr1.join(" ");
}
