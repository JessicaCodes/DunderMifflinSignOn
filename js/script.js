// The Office (Themed)

/*
    Dundler Mifflen has created a new system where employees need to clock in.

    Write a script that stores a list of those who are clocked in - utilize html input fields to allow employees to input 
    new user information one user at a time.

    - Create classes (think of them as blueprints) - in your JS
    - Create a sign-up sheet - in your HTML - using <input> tags
    - Style it up with CSS.

    Some features:
        We want to see the the people who have signed up - ie. populate a column with the new people on your document.
*/

// Create an employee class

class Employee {
    constructor(name, id, signIn){
        this.name = name
        this.id = id
        this.signIn = false
    }

    welcome(){
        return `Welcome ${this.name}!`
    } 
}

// const user1 = new employee(inputName)


// Create a signed-in object (could be from a class)

/* 
    Everytime I enter a name, employee title, id number etc, in my input fields - create a new Employee Object - save it to 
    my signed-in object...


    Create a function that looks at that signed-in object and displays all those employees...

    You can also think about creating a seperate function (or method) that builds the html/css 
    (DOM Manipulation here) of that user being signed in - on the signed in sheet.
*/

 const employee = {
    empName:"",
    id:"",
    signIn: false,

}

const inputName = document.body.querySelector("#name-div input");
const id = document.body.querySelector("#id-div input")
const nameSubmit = document.body.querySelector("#sign-in-form button");
const signedIn = document.body.querySelector("#signed-in div")

nameSubmit.addEventListener("click", handleClick);

function handleClick(){
    welcome();
    signedIn.innerHTML = this.name, this.id, this.signedIn
}

function updateSignIn(){
    id()
}