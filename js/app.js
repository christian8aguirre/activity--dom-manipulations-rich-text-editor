//--------------------------------------------------------
//TASK 1: Add an event listener to the <button class="rte-italics">
//
//        When user clicks, it should toggle the fontStyle property
//        value of the <p class="textbox"> to 'italic'
//
//--------------------------------------------------------

var rteItalicsDomEl = document.querySelector('.rte-italics')

function handleItalicsBtnClick(){
  var para = document.querySelector('.textbox');
  para.classList.toggle('rte-italics');
  
  
}

rteItalicsDomEl.addEventListener('click', handleItalicsBtnClick)


//--------------------------------------------------------
//TASK 2: Add an event listener to the <button class="rte-bold">
//
//        When user clicks, it should toggle the fontWeight property
//        value of the <p class="textbox"> to 700
//
//--------------------------------------------------------

var rteBoldDomEl = document.querySelector('.rte-bold')

function handleBoldBtnClick() {
  var para = document.querySelector('.textbox');
  para.classList.toggle('rte-bold');
}

rteBoldDomEl.addEventListener('click', handleBoldBtnClick)


//--------------------------------------------------------
//TASK 3: Add event listeners to the <button class="rte-fontsize"> elements
//
//        When user clicks, it should change the fontSize property of the
//        <p class="textbox"> to the value of the button that was clicked
//
//--------------------------------------------------------

var btnFontSize = document.querySelectorAll('.rte-fontsize');

btnFontSize.forEach(function (button) {
  button.addEventListener('click', function (e) {
    var para = document.querySelector('.textbox');
    para.style.fontSize = button.textContent;
  });
});


//--------------------------------------------------------
//TASK 4: Add event listeners to the <button class="rte-fontcolor"> elements
//
//        When user clicks, it should take the value from the 'data-color'
//        attribute and set the 'color' property of the <p class="textbox">
//
//        To access data-* attributes:
//        https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes
//--------------------------------------------------------

 var btnColor = document.querySelectorAll('.color-palette');
   
 btnColor.forEach(function (button) {
   button.addEventListener('click',function (e) {
     var para = document.querySelector('.textbox');
     console.log(para);
     
     var btn = e.target;
     para.style.color = btn.dataset.color;
     
   });
 });