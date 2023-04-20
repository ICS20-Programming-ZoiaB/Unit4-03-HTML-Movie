// Copyright (c) 2023 ZoiaB All rights reserved
//
// Created by: ZoiaB
// Created on: Apr 2023
// This file contains the JS functions for index.html

"use strict"

// This function allows for a specific output when the user input text field is left empty
function isEmpty(str) {
  return !str || 0 === str.length;
}

// This function determines which movie rating the user can go and see alone based on their age
function ageSent() {

  // Setting constants: first age threshold is 17, second is 13, third is 5
  const FIRST_THRESHOLD = 17;
  const SECOND_THRESHOLD = 13;
  const THIRD_THRESHOLD = 5;

  // Define message that will bes displayed as result later on
  let message = "";
  
  // Get the user's age from input form
  let userAge = parseInt(document.getElementById("user-age").value);
  
 //if: if user is 17 or older, tell them they can watch R-rated movies
  if (userAge >= FIRST_THRESHOLD) {
    message = "You are old enough to see an R-rated movie by yourself, without a parent or guardian.";
  }

 //elseif: if user is 13 or older, tell them they can watch PG-13 movies
  else if (userAge >= SECOND_THRESHOLD) {
    message = "You can watch a PG-13 movie by yourself, without a parent or guardian.";
  }
    
//elseif: if user is 5 or older, tell them they can watch G and PG movies
  else if (userAge >= THIRD_THRESHOLD) {
    message = "You can see a G or PG movie by yourself, without a parent or guardian.";
  }

 //elseif: if user enters 0 or a negative number, say they must enter a valid age
  else if (userAge < 0) {
    message = "Please enter a valid age.";
  }

  //elseif: if nothing is entered, tell them to enter age
  else if (isEmpty(userAge)) {
    message = "Please enter age.";
  }
    
  //else (any age less than 5)
  else {
    message = "You should be supervised by a parent or guardian while watching any movie.";
  }
  
  // Display the results to the user in the "results" div
  document.getElementById("results").innerHTML = message + " Thank you for verifying your age!";
}