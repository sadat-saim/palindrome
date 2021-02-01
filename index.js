// dom here

const form = document.forms[0];
let heading = document.querySelector('.result');


form.addEventListener('submit', function(e) {
    e.preventDefault();

    let value = document.querySelector('input[type="text"]').value;
    let image = document.querySelector('img');

    palindrome(value);

    if (value !== "") {
        if (palindrome(value) === true) {
            heading.textContent = `${value} is a palindrome`;
            image.setAttribute("src", "https://media1.giphy.com/media/7NUJEtLY4zXcL8GKfr/giphy.gif");
        } else {
            heading.textContent = `${value} is not a palindrome`;
            image.setAttribute("src", "https://i.gifer.com/45Ra.gif");
        }
    }




    document.querySelector('input[type="text"]').value = "";

})

//palindrome check here

function palindrome(str) {
    let alphabate = "abcdefghijklmnopqrstuvwxyz0123456789";
    let myArr = alphabate.split("");
    let strings = str.toLowerCase().split("");
    let alpArray = [];
    let reverse = [];

    for (var i = 0; i < strings.length; i++) {
        for (var e = 0; e < alphabate.length; e++) {
            if (strings[i] === alphabate[e]) {
                alpArray.push(strings[i]);
            }
        }
    }
    for (var j = alpArray.length - 1; j >= 0; j--) {
        reverse.push(alpArray[j]);
    }

    if (alpArray.join("") === reverse.join("")) {
        console.log(alpArray.join(""));
        return true;

    } else {
        console.log(alpArray.join(""));
        return false;
    }

}