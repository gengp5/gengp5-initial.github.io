console.log("JavaScript is amazing!");

 // Create a "close" button and append it to each list item
 let myNodelist = document.getElementsByTagName("LI");
 let i;
 for (i = 0; i < myNodelist.length; i++) {
   let span = document.createElement("SPAN");   /* this creates an additional 'span */
   let txt = document.createTextNode("\u00D7"); /*this creates the 'x' */
   span.className = "close";                    /* sets the class of 'close' to the new span. This becomes important down the track when we to apply a function to all elements with class 'close'*/
   span.appendChild(txt);                       /*this appends the 'x' to the span*/     
   myNodelist[i].appendChild(span);             /*this adds the span at the end of the 'li' elements */
 }
 
 // Create a new list item when clicking on the "Add" button
 function newElement() {
   let li = document.createElement("li");        /*this creates a new variable named 'li' and it is a "li" element */
   let inputValue = document.getElementById("myInput").value;  /* this creates a variable named 'inputValue' and applies the value to this variable that is found in the  element that has the ID 'myInput' */ 
   let t = document.createTextNode(inputValue);                /*this creates a variable named 't'. 't' is a new textnode with the value from the variable'inputValue' */ 
   li.appendChild(t);                                         /*this appends the inputvalue in variable 't' to the 'li' element*/
   if (inputValue === '') {                                /*if nothing is typed in the input element, then this triggers an alert prompting the user to write something*/
     alert("You must write something!");
   } else {
     document.getElementById("myUL").appendChild(li);            
   }
   document.getElementById("myInput").value = "";          
   /*I think this action returns the writing in the inputfield to nothing after the function has been carried out and a new list item added. Not sure though because by commenting it out the new words disappear once you hit 'add'*/
 
   let span = document.createElement("SPAN");
   let txt = document.createTextNode("\u00D7");
   span.className = "close";
   span.appendChild(txt);
   li.appendChild(span);
 
   /*for (i = 0; i < close.length; i++) {
     close[i].onclick = function() {
       var div = this.parentElement;
       div.style.display = "none";
     }
   }*/
 }
 