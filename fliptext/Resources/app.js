Ti.include("flipper.js");         
            
            
            
            


// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');



//
// create base UI tab and root window
//
var win1 = Titanium.UI.createWindow({  
    title:'Tab 1',
    backgroundColor:'#fff'
});
var main_tab = Titanium.UI.createTab({  
    title:'FlipText',
    window:win1
});

tabs= Titanium.UI.createTabGroup({}) ;

tabs.add(main_tab);


var initialText = 'Type here to flip me';
var originalText = true;
var orig = Titanium.UI.createTextArea({
    color:'#336699',
    value: initialText,
    height:250,
    width:300,
    top:100,
    borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
    borderWidth:2,
    borderColor:'#bbb',
    borderRadius:5,
    suppressReturn: false
});

var flipped = Titanium.UI.createTextArea({
    color:'#336699',
    value: flipString(initialText),
    height:250,
    width:300,
    top:400,
    borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
    keyboardToolbarColor: '#999', 
    keyboardToolbarHeight: 40,
    borderWidth:2,
    borderColor:'#bbb',
    borderRadius:5
});

var sendEmailBtn = Titanium.UI.createButton({
	color:'red',
	title:'Send Email',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width: 200,
	height: 40,
	top: 0,
	left: 0
	
});

var resetBtn = Titanium.UI.createButton({
	color:'#999',
	title:'reset',
	font:{fontSize:12,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width: 100,
	height: 40,
	top: 0,
	left: 200
	
});




var sendEmail = function(text){
    var emailDialog = Titanium.UI.createEmailDialog();
    emailDialog.subject = "";
    emailDialog.toRecipients = [];
    emailDialog.messageBody = text;

    emailDialog.open();
};

var buttons = Titanium.UI.createView({
   borderRadius:10,
   width:300,
   height:40,
   top: 700
   
});

buttons.add(sendEmailBtn);
buttons.add(resetBtn);

win1.add(orig);
win1.add(flipped);
win1.add(buttons);



sendEmailBtn.addEventListener("click", function(){
    sendEmail(flipped.value);
});

orig.addEventListener("change", function(){
    flipped.value = flipString(orig.value);
});

orig.addEventListener("focus", function(){
   if (originalText){
       flipped.value = "";
       orig.value = "";
       originalText = false;
   }
    
});

tabs.open();