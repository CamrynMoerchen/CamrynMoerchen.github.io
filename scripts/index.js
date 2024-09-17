/* Name: Camryn Moerchen 
   Script:  index.js
   Script Description: This script is for the main page on the website.
*/

"use strict"; //Using strict 

// Including this block for better IE support
window.addEventListener("DOMContentLoaded", () => {

   const greetingHeader = document.getElementById("greeting"); // Getting the greeting header
   const date = new Date();
   const hour = date.getHours();

   // Determining what greeting to display depending on the time
   if (hour <= 12){
      greetingHeader.innerText = "Good morning!";
   }
   else if (hour <= 16){
      greetingHeader.innerText = "Good afternoon!";
   }
   else{
      greetingHeader.innerText = "Good evening!";
   }


 
 
 });