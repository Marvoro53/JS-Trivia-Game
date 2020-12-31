
  const myQuestions = [
    {
      question: "Who invented Football (Ameican)?",
      answers: {
        a: "Walter Camp",
        b: "Ron Rivera",
        c: "Pete Carroll"
      },
      correctAnswer: "a"
    },
    {
      question: "What team won 3 Super Bowls in the 1990's?",
      answers: {
        a: "Steelers",
        b: "Patriots",
        c: "Broncos"
      },
      correctAnswer: "c"
    },
    {
      question: "Who was the couch that lead the Broncos to first Super Bowl?",
      answers: {
        a: "Red Miller",
        b: "Bill Belichick",
        c: "Sean Payton",
        d: "Andy Reid"
      },
      correctAnswer: "d"
    }
  ];
  // Kick things off
  buildQuiz();

//   // Event listeners
//   submitButton.addEventListener('click', showResults);
// })();

// const quizContainer = document.getElementById('quiz');
// const resultsContainer = document.getElementById('results');
// const submitButton = document.getElementById('submit');
// var books=[
//     {
// title:"Bone",
// Author:"Jeff Smith",
// alreadyRead:true
//     },
//     {
// title:"Amulet",
// author:"Kazu Kibuishi",
// alreadyRead:true
//     },
//     {
// title:"Amulet #9",
// author:"Kazu Kibuishi",
// alreadyRead:false
//     }
// ];
// for(i=0; i<books.length; i++){
// var book=books[i];
// var bookInfo= book.title + " by " + book.author;
// if(book.alreadyRead){
//     document.write("You read " + bookInfo + "<br>")
// }
// else{
//     document.write("You still need to read " + bookInfo);
// }
// };
// var recipe = {
//     name: "Tacos",
//     amount: 5,
//     ingredients: ["Tortilla", "Beef", "Onion", "coriander", "Salsa"],
//     isGood: true,
// }
// console.log("My favorite recipe is " + recipe.name);
// console.log("This feeds " + recipe.amount);
// console.log("The ingredients are " + recipe.ingredients);
// console.log("The tacos are good wh" + recipe.isGood);

// //strings, numbers, arrays, booleans, functions(methods)
// //creating objects: 
// //Object literal
// var sibling={
//     name:"Lendy",
//     age:19,
//     brothers: ["Tony", "Marvin"],
//     isSingle: false,
//     email: "Lendy@gmail.com"
// }
// //object constructor
// var sibling = new Object();
// sibling.name="Lendy";
// sibling.age=19;
// sibling.brothers=["Tony", "Marvin"];
// sibling.isSingle=false;
// sibling.email="lendy@gmail.com";
// //Passing strings arguments
// function meetSibling(){
//     console.log("My name is " + sibling.name);
// }
// meetSibling(sibling);

// //accesories dot notation
// document.write("My name is " + sibling.name + " I am " + sibling.age + " years old" + "<br>");
// //brakect notstiom
// document.write("My name is " + sibling["name"] + " my email is " + sibling["email"]);
// //see all keys/values in aa object
// //for in loop iterating onject data
// for (key in sibling) {
//     document.write(key);
// }
// document.write(Object.keys(sibling));
// document.write (Object.values(sibling));
