
//collisiom
//the second commit
var target = UIATarget.localTarget();
var app = target.frontMostApp();
var window = app.mainWindow();

UIALogger.logMessage("Closing Interstitial");
window.buttons()["Close Interstitial Ad"].tap();


var tabBar = window.tabBar();
tabBar.logElementTree();

var profileButton = target.tabBar.buttons()["My Profile"];
profileButton.tap();



UIALogger.logMessage("Tapping Settings Button");
var scrView = window.scrollViews()[0];
var setButton = scrView.buttons()["settings"];
setButton.tap();

UIALogger.logMessage("Tapping Login / Sign Up Buton Button");
var ssbutton = app.actionSheet().collectionViews()[0].cells()["Login / Sign Up"].buttons()["Login / Sign Up"];
ssbutton.tap();

//zachem eshe tapat??
window.tap();
window.logElementTree();

UIALogger.logMessage("Tapping Sign InButton");
window.buttons()["Already have an account? Sign In"].tap();
window.logElementTree();*/

window.scrollViews()[0].textFields()[0].tap();
app.keyboard().typeString("wewe@a.com");

window.scrollViews()[0].secureTextFields()[0].tap();
app.keyboard().typeString("wewe");


window.scrollViews()[0].buttons()["Sign In"].tap();
                                                   




