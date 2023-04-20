// Copyright (c) 2023 ZoiaB All rights reserved
//
// Created by: ZoiaB
// Created on: Apr 2023
// This file contains the JS functions for index.html

"use strict"

function ageSent() {

 // declaring age and message variables
 let age = parseInt(document.getElementById("user-age").value);
 let message = "";

 //constants: first age threshold is 17, second is 13, third is 5
 const FIRST_LIMIT = 17;
 const SECOND_LIMIT = 13;
 const THIRD_LIMIT = 5;
  
 //if: if user enters 0 or a negative number, say they must enter a valid age
 if (age <= 0) {
   message = "Please enter a valid age.";
 }

 //elseif: if user is 17 or older, tell them they can watch R-rated movies
 else if (age >= FIRST_LIMIT) {
   message = "You are old enough to see an R-rated movie by yourself, without a parent or guardian.";
 }

 //elseif: if user is 13 or older, tell them they can watch PG-13 movies
 else if (age >= SECOND_LIMIT) {
   message = "You can watch a PG-13 movie by yourself, without a parent or guardian.";
 }

 //elseif: if user is 5 or older, tell them they can watch G and PG movies
 else if (age >= THIRD_LIMIT) {
   message = "You can see a G or PG movie by yourself, without a parent or guardian.";
 }

//else: if user is under 5, tell them they need supervision
  else if (age <5) {
   message = "You should be supervised by a parent or guardian while watching any movie.";
 }

  //else: otherwise, tell them to enter age
  else {
    message = "Please enter age.";
  }

 //display results
  document.getElementById("results").innerHTML = message + " Thank you for verifying your age!";
}