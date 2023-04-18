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

 //Setting constants: first age threshold is 17, second is 13, third is 5
 const FIRST_LIMIT = 17;
 const SECOND_LIMIT = 13;
 const THIRD_LIMIT = 5;
  
 //first if statement: if user age is greater than or equal to 17 years old
 if (age >= FIRST_LIMIT) {
   message = "You are old enough to see an R-rated movie by yourself, without a parent or guardian.";
 }

 //otherwise, if age is greater than or equal to 13
 else if (age >= SECOND_LIMIT) {
   message = "You can watch a PG-13 movie by yourself, without a parent or guardian.";
 }

 //otherwise, if age is greater than or equal to 5
 else if (age >= THIRD_LIMIT) {
   message = "You can see a G or PG movie by yourself, without a parent or guardian.";
 }

 //else (any age under 5)
 else {
   message = "You should be supervised by a parent or guardian while watching any movie.";
 }

 //display results
  document.getElementById("results").innerHTML = message;
  document.getElementById("results").innerHTML = "Thank you for inputting your age.";
}