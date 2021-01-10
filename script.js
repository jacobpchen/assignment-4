/* 1.	Create an HTML page with two buttons that argue with each other.
When one button is clicked, the text "I'm right" should be placed next to it.
When the other button is clicked, the text is replaced with, "No, I'm right!" */


const leftButton = document.querySelector(".left-button")
leftButton.addEventListener('click', event => {
    console.log('left button clicked')
    leftButton.innerHTML = "I'm right"
    rightButton.innerHTML = "Click Me"
})

const rightButton = document.querySelector(".right-button")
rightButton.addEventListener('click', event => {
    console.log('right button clicked')
    rightButton.innerHTML = "No I'm right!"
    leftButton.innerHTML = "Click Me"
})

/* 2.	Create an HTML page with a large element on the page that says
"Don't hover over me" inside of it. When you hover over the element,
send an alert to the user that says, "Hey, I told you not to hover over me! */

// Add listener to the div

const box = document.querySelector('.hover')
box.addEventListener('mouseover', event => {
    console.log("hover!")
    alert("Hey I told you not to hover over me!")
})

/* 3.	Create an HTML page with a form. It should include inputs for a username,
email, and password. Also a submit button. */

/* 4.	In a Javascript file, write a program which checks the following things:
a.	checks that the password is 12345678
b.	if the password is incorrect, send an alert message
c.	Your page should also include an <h1> tag. If the information in
the form is correct, have Javascript change the text in the <h1>.HTML page.
 */

didSubmit = (pw) => {
    if (pw === '12345678') {
        const hidden = document.querySelector('.hidden')
        hidden.textContent = 'Welcome!'
        console.log("Submitted")
    }
    else {
        alert("Incorrect password")
    }
}

const form = document.querySelector('form')
form.addEventListener('submit', event => {
    event.preventDefault()
    let password = document.getElementById("password").value
    didSubmit(password)
})