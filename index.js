
//--------------------------------------------------------------------
let target = document.querySelector(".target")

function moveWindow(elment)
    {
        let elmentTarget = elment.id;
        console.log(elmentTarget)
        return elmentTarget
    }

function moveWindow1 (elment){
    globalThis.elmentTarget = elment.id;
    document.body.addEventListener("mousemove"  ,mousmove)
}
function mousmove1(){

}
function mousmove (event) {
    var xposition = event.pageX;
    var yposition = event.pageY;
    document.querySelector(`[window='${elmentTarget}']`).style.left= xposition + "px" ;
    document.querySelector(`[window='${elmentTarget}']`).style.top= yposition + "px" ;
}
function bbb (){
    document.body.removeEventListener("mousemove" , mousmove)
}



//-----------------------------------------------------------------------

//--------------------------------------------------------------------------------
//Start buttom to start menu
let startcount = 5
document.querySelector("#startButtom").addEventListener("click" , startButtonMain)
function startButtonMain(){
    if (startcount == 0)
    {
        document.querySelector("#startMenu").style.display = "none"
        startcount = 5
    }
    else{
        document.querySelector("#startMenu").style.display = "block"
        startcount = 0
        
    }
}
document.querySelector("#homeIcone").addEventListener("click" , closeStartMenu)
function closeStartMenu(){
    if (startcount == 0)
    {
        document.querySelector("#startMenu").style.display = "none"
        startcount = 5
        console.log(startcount)
    }
}
//-------------------------------------------------------------------
//window efects


//open window
let windowShowConter = [0,0,0,0,0,0,0]
function reply_click(clicked_id)
  {
    globalThis.numOfWindow =clicked_id.getAttribute('open');
    if (windowShowConter[numOfWindow] < 1 )
    {
        ++windowShowConter[numOfWindow]
        zIndexWindom(numOfWindow)
    }
    else{
        document.querySelectorAll(`[show='${numOfWindow}']`).forEach(
        index => index.style.display = "flex")
        // document.querySelector(`[window='${nn}']`).style.left = Math.round(Math.random() * document.body.scrollWidth) + 'px';
        // document.querySelector(`[window='${nn}']`).style.top = Math.round(Math.random() * document.body.scrollHeight) + 'px';
        windowShowConter[numOfWindow]=0
        zIndexWindom(numOfWindow)
    }
  }
// close window 
function closeWindow (id){
    document.querySelectorAll(`[show='${id.id}']`).forEach(
        index => index.style.display = "none")
        windowShowConter[id.id]=0
}
// maxmize window screen
let windowMaxConter = [0,0,0,0,0,0,0]
function maxmizeWindow (id)
{
    if (windowMaxConter[id.id] == 0 )
    {
        document.querySelectorAll(`[maxmize='${id.id}']`).forEach(
        index => index.style.width = 100 +  "vw")
        document.querySelectorAll(`[maxmize='${id.id}']`).forEach(
        index => index.style.height = 100 +  "vh")
        document.querySelectorAll(`[maxmize='${id.id}']`).forEach(
        index => index.style.left = 960 +  "px")
        // document.querySelectorAll(`[maxmize='${0}']`).forEach(
        // index => index.style.right = 0 +  "px")
        document.querySelectorAll(`[maxmize='${id.id}']`).forEach(
        index => index.style.top = 0 +  "px")
        ++windowMaxConter[id.id]
    }
    else
    {
        document.querySelectorAll(`[maxmize='${id.id}']`).forEach(
        index => index.style.width = 50 +  "vw")
        document.querySelectorAll(`[maxmize='${id.id}']`).forEach(
        index => index.style.height = 75 +  "vh")
        document.querySelectorAll(`[maxmize='${id.id}']`).forEach(
        index => index.style.left = 960 +  "px")
        // document.querySelectorAll(`[maxmize='${0}']`).forEach(
        // index => index.style.right = 0 +  "px")
        document.querySelectorAll(`[maxmize='${id.id}']`).forEach(
        index => index.style.top = 100 +  "px")
        windowMaxConter[id.id]=0
    }        
}
// minmize window screen
let windowMinConter = [0,0,0,0,0,0,0]
function minimizeWendow (id)
{
    if (windowMinConter[id] == 0 )
    {
        console.log(800000)
        document.querySelectorAll(`[maxmize='${id}']`).forEach(
        index => index.style.transform = "translate(" +  0 + "px,"+ 900 +"px)" )
        ++windowMinConter[id]
    }
    else
    {
        console.log(9000000)
        document.querySelectorAll(`[maxmize='${id}']`).forEach(
        index => index.style.transform = "translate(" + -50  + "%,"+ 0 +"px)" )
        windowMinConter[id]=0
    }        
}
function minimizeWendowOpen (id){
    if (windowMinConter[id] != 0)
    {
        document.querySelectorAll(`[maxmize='${id}']`).forEach(
        index => index.style.transform = "translate(" + -50  + "%,"+ 0 +"px)" )
        windowMinConter[id]=0
    }
}


//minemiz window 


// Function to but a hights window in zindex
function zIndexWindom (num)
{
    for( let a = 0 ; a < 6 ;a++)
    {
        document.querySelector(`[show='${a}']`).removeAttribute("zzindex");
    }
        document.querySelector(`[show='${num}']`).setAttribute("zzindex", "first");
} 

//--------------------------------------------------------------------------

//cmd functions

function changeWebsiteBackColor (value){
    const myArray = value.split(" ");
    if (myArray[0] == "wallpapercolor") 
    {
        console.log(90100)
        document.querySelector(".home").style.backgroundImage = "none" ;
        document.querySelector(".home").style.backgroundColor = myArray[1] ;
    }
}
function changenaveBackColor (value){
    const myArray = value.split(" ");
    if (myArray[0] == "navcolor") 
    {
        document.querySelectorAll(`[class='singleIndicator']`).forEach(
        index => index.style.backgroundColor = "red");
        var nav = document.querySelector(".navPar")
        nav.style.backgroundColor = myArray[1] ;
        nav.style.setProperty('--navbeforeback','linear-gradient(to bottom, #ffffff65 0%,' + myArray[1] + ' 100%)');
    }
}

function cmdBackColor (value) {
    const myArray = value.split(" ");
    if (myArray[0] == "cmdcolor") 
    {
        document.querySelector("#CommendContent").style.backgroundColor = myArray[1]
        
    }
}

function cmdshutdown (value)
{
    if (value == "turnoff") 
    {
        turnoff()
    }
}
function cahngeusername (value) {
    const myArray = value.split(" ");
    if (myArray[0] == "username") 
    {
        document.querySelector(".usernamedisplay").innerHTML = myArray[1]
    }
}
/*function time (value,id) {
    if (value == "time") 
    {
        const date = new Date();
        const n = date.toDateString();
        const time = date.toLocaleTimeString();
        console.log('Date: ' + n);
        console.log('Time: ' + time)
        let datedis = document.createElement("h5")
        datedis.innerHTML = "date " + n;
        let timedis = document.createElement("h5")
        timedis.innerHTML = "time " + time
        console.log(id.id)
        document.querySelector(`[commendcount='${id.id}']`).appendChild(datedis);
    }
}*/
function open (value) {
    const myArray = value.split(" ");
    if (myArray[0] == "open") 
    {
        switch(myArray[1]){
            case "mycomputer": 
            document.querySelectorAll(`[show='0']`).forEach(
            index => index.style.display = "flex")
            
            break;
            case "controlpanel": 
            document.querySelectorAll(`[show='2']`).forEach(
            index => index.style.display = "flex")
            
            break;
            case "filemanager": 
            document.querySelectorAll(`[show='3']`).forEach(
            index => index.style.display = "flex")
            
            break;
            case "internet": 
            document.querySelectorAll(`[show='4']`).forEach(
            index => index.style.display = "flex")
            
            break;
            case "note": 
            document.querySelectorAll(`[show='5']`).forEach(
            index => index.style.display = "flex")
            
            break;
        }
        
    }
}





//cmd creat new sec
let commendcount = 0

//make first button work with enter key
var input = document.querySelector(`[inputNum='${commendcount}']`);
    input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
    event.preventDefault();
    document.querySelector(`[supNum='${commendcount}']`).click();
  }
});

//main functin in click enter key 
function getdatacommend (id){

    let value = document.querySelector(`[inputNum='${commendcount}']`).value
    changeWebsiteBackColor (value)
    changenaveBackColor (value)
    cmdBackColor (value)
    cmdshutdown (value)
    cahngeusername (value)
    open (value)
    document.querySelector(`[supNum='${commendcount}']`).disabled = true;
    commendcount++
    newCommendSec(commendcount)
    var input = document.querySelector(`[inputNum='${commendcount}']`);
    input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
    event.preventDefault();
    document.querySelector(`[supNum='${commendcount}']`).click();
  }
});
    input.focus()
}

// creat a new fild 
function newCommendSec (id){
    const divContaner = document.createElement("div");
    divContaner.setAttribute("class", "commendSec");
    divContaner.setAttribute("commendcount", id);
    const h5 = document.createElement("h5");
    h5.innerHTML = `c:${String.fromCharCode(92)}Users${String.fromCharCode(92)}matter _`
    const input = document.createElement("input");
    input.setAttribute("inputNum", id);
    input.focus();
    const button = document.createElement("button");
    button.setAttribute("supNum", id);
    button.setAttribute("id", id);
    button.setAttribute("onclick","getdatacommend()");
    divContaner.appendChild(h5);
    divContaner.appendChild(input);
    divContaner.appendChild(button);
    document.querySelector(".CommendContent").appendChild(divContaner);
}








var returnMax = function(nums) {
    let numout = 0
	for (let i = 0 ; i<nums.length ; i++)
    {
        if(num[i] > numout )
        {   
            numout = num[i]
        }
        console.log(numout)
    }
     
    let  nu = 
    returnMax(nu);
};






//----------------------------------------------
// turnoff function
function turnoff()
{
    document.querySelector(".home").style.display = "none" ;
    document.querySelector(".turnOff").style.display = "flex" ;
}















//--------------------------------------------------------
// welcome window

function closeWelcomeWindow ()
{
    document.querySelector(".welcomeWindows").style.display = "none" ;
    document.querySelector(".home").style.filter = "none" ;
}
let counterWindow = 0
function nextWelcomeWindow ()
{
    if (counterWindow == 2)
    {
        document.querySelector(".welcomeWindows").style.display = "none" ;
        document.querySelector(".home").style.filter = "none" ;
    }
    else if (counterWindow == 0)
    {
        document.querySelector("#start").innerHTML = "Next" ;
    }
    else if (counterWindow == 1)
    {
        document.querySelector("#start").innerHTML = "Finsh" ;
    }
    document.querySelector(`[welcomewindow='${counterWindow}']`).style.display = "none"
    document.querySelector(`[welcomewindow='${counterWindow + 1}']`).style.display = "flex"
    document.querySelector(".usernamedisplay").innerHTML = document.querySelector(".username").value
    ++counterWindow
}




