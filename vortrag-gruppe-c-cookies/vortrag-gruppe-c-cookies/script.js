'use strict'
//Variables
const acceptbtn = document.getElementById("Acceptbutton");
const rejectbtn = document.getElementById("Rejectbutton");
const cookie = document.getElementById("Cookie");
const infotext = document.getElementById("Infotext");
const cookiewindow = document.getElementById("Cookiewindow");
let condition = 0;
let datestart = 0;
let dateend = 0;
let CookieCounter = 0;

//Eventlisteners
acceptbtn.addEventListener("click", cookiesaccepted);
rejectbtn.addEventListener("click", cookiesrejected);

if(getCookie("cookieaccepted") == "true")
{
    cookiesaccepted();
}

//Functions
function cookiesaccepted()
{
 //TODO
}
function cookieClicked()
{
  //TODO
}
function cookiesrejected()
{
    windowcloser();
}
function windowcloser()
{
    acceptbtn.remove();
    rejectbtn.remove();
    infotext.remove();
    cookiewindow.remove();
}
function setCookie(cookieName, cookieValue, expirationDays) 
{
    const date = new Date();
    date.setTime(date.getTime() + (expirationDays*24*60*60*1000));
    let expires = "expires="+ date.toUTCString();
    document.cookie = cookieName + "=" + cookieValue + ";" + expires + "path=/";
}
function BrowserDetector(){
                 
    let userAgent = navigator.userAgent;
    let browserName;
    
    if(userAgent.match(/chrome|chromium|crios/i)){
        browserName = "chrome";
      }else if(userAgent.match(/firefox|fxios/i)){
        browserName = "firefox";
      }  else if(userAgent.match(/safari/i)){
        browserName = "safari";
      }else if(userAgent.match(/opr\//i)){
        browserName = "opera";
      } else if(userAgent.match(/edg/i)){
        browserName = "edge";
      }else{
        browserName="other";
      }

      setCookie("Browser", browserName, 30);
}
function getCookie(cookieName) 
{
    cookieName += "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let allcookies = decodedCookie.split(';');
    for(let i = 0; i < allcookies.length; i++) {
      let cookie = allcookies[i];
      while (cookie.charAt(0) == ' ') {
        cookie = cookie.substring(1);
      }
      if (cookie.indexOf(cookieName) == 0) {
        return cookie.substring(cookieName.length, cookie.length);
      }
    }
    return "";
}