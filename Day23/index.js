/*
DESCRIPTION:
We are making a Social Media Character Counter! We want to display the available characters LEFT.
Using the Keydown event should help you here. When the characters reach 20 and below, we want them to turn red. So we will use Javascript to add that styling to it. If the characters drop below 0, we want the button to be disabled BUT if there are only 0 characters left, we should still be able to tweet.

Keydown, addEventListeners, add and remove a class

Tips:
1. We want to create our variables first
2. Add the event listener
3. Look in the CSS to see what could be used to disable the button
4. Create conditions to check the count of the characters

Let your imagination run wild! You can use the provided styling or you can take it to another level!
Make sure you share your solution using the "Share solution!" button at the top!
There will be multiple winners that I select!

Follow me on twitter @DThompsonDev so you can find who who is selected! I hope it's YOU!

*/
const cntFooter = document.getElementById('counterFooter');
const btn = document.getElementById('btn');
const text = document.getElementById('text');

text.addEventListener('input', show);

function show(){
  let cntCharsLeft = 140 - text.value.length;
  
  if(cntCharsLeft < 0){
    btn.classList.add('buttonDisabled');
  }else if(cntCharsLeft < 20 && cntCharsLeft >=0){
    btn.classList.remove('buttonDisabled');
    cntFooter.classList.add('text-low-space');
  } else {
    btn.classList.remove('buttonDisabled');
    cntFooter.classList.remove('text-low-space');
  }
  
  cntFooter.innerHTML = `${cntCharsLeft}/140`;
}

btn.addEventListener('click', function(event){
  if (event.target.classList.contains('buttonDisabled')) {
    event.preventDefault();
  }
  let hashtags = 
  btn.href = `https://twitter.com/intent/tweet?text=${text.value}&hashtags=JavaScriptmas`;
})
