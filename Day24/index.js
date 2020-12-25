//HINT: ONLY EDIT THE SPIN() AND STOP() FUNCTIONS

//globals
var pushed = false //Has the stop button been pushed - false is default
var targetInt; //The target number to stop the wheel on
var spinningElem = document.getElementById('spinning'); //The spinning number

//event listener
document.getElementById("buttonPressed").addEventListener("click", buttonPressed);

//When the stop button is pushed
function buttonPressed(){
    pushed = true;
}

//set the target Int
function setTargetInt(){
    var targetElem = document.getElementById('targetNum');
    targetInt=Math.floor(Math.random() * 101)
    targetElem.innerHTML = targetInt;
}

//sleep const
const sleep = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}


//EDIT THIS FUNCTION
const spin = async () => {
  for(var cnt=0; cnt<101; cnt++){
    spinningElem.textContent = cnt;
    await sleep(75) //Paste this wherever you need to sleep the incrimentor 
    if(pushed) {
      stop(cnt);
      break;
    }
  } 
}

//EDIT THIS FUNCTION
function stop(i){
  var result = document.getElementById('result'); //display your result message here
  var yourNumber = i;
  result.textContent = yourNumber == targetInt ? "You are amazing, you won!"
                                               : `Oh no, you lose! Off by ${Math.abs(yourNumber-targetInt)}`;     
}


//main
setTargetInt();
spin()