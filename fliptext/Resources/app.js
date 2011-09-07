var flipTable = { a : '\u0250', 
                    b : 'q', 
                    c : '\u0254', 
                    d : 'p', 
                    e : '\u01DD', 
                    f : '\u025F', 
                    g : '\u0183', 
                    h : '\u0265', 
                    i : '\u0131', 
                    j : '\u027E', 
                    k : '\u029E', 
                    l : 'l', 
                    m : '\u026F', 
                    n : 'u', 
                    o : 'o', 
                    p : 'd', 
                    q : 'b', 
                    r : '\u0279', 
                    s : 's', 
                    t : '\u0287', 
                    u : 'n', 
                    v : '\u028C', 
                    w : '\u028D', 
                    y : '\u028E', 
                    z : 'z', 
                    '\u00E4' : '\u01DD\u0250', 
                    /* ä */ '\u00F6' : '\u01DDo', 
                    /* ö */ '\u00FC' : '\u01DDn', 
                    /* ü */ '\u00DF' : 'ss', 
                    /* ß */ '\u00E1' : '\u0250', 
                    /* á */ '\u00E0' : '\u0250', 
                    /* à */ '\u00E2' : '\u0250', 
                    /* â */ '\u0105' : '\u0250', 
                    /* ą */ '\u00E6' : '\u01DD\u0250', 
                    /* æ */ '\u00E5' : '\u0250\u0250', 
                    /* å */ '\u00E7' : '\u0254', 
                    /* ç */ '\u0107' : '\u0254', 
                    /* ć */ '\u00E9' : '\u01DD', 
                    /* é */ '\u00E8' : '\u01DD', 
                    /* è */ '\u00EA' : '\u01DD', 
                    /* ê */ '\u0119' : '\u01DD', 
                    /* ę */ '\u00ED' : '\u0131', 
                    /* í */ '\u00EC' : '\u0131', 
                    /* ì */ '\u00EE' : '\u0131', 
                    /* î */ '\u0142' : 'l',
                     /* ł */ '\u00F1' : 'u', 
                     /* ñ */ '\u0144' : 'u', 
                     /* ń */ '\u00F3' : 'o', 
                     /* ó */ '\u00F2' : 'o', 
                     /* ò */ '\u00F4' : 'o', 
                     /* ô */ '\u00F8' : '\u01DDo', 
                     /* ø */ '\u015B' : 's', 
                     /* ś */ '\u00FA' : 'n', 
                     /* ú */ '\u00F9' : 'n', 
                     /* ù */ '\u00FB' : 'n', 
                     /* û */ '\u00FD' : '\u028E', 
                     /* ý */ '\u017A' : 'z', 
                     /* ź */ '\u017C' : 'z', /* ż */ 
                     1 : '\u21C2', 
                     2 : '\u1105', 
                     3 : '\u1110', 
                     4 : '\u3123', 
                     5 : '\u078E', /* or u03DB */ 
                     6 : '9', 
                     7 : '\u3125', 
                     8 : '8', 
                     9 : '6', 
                     0 : '0', 
                     '.' : '\u02D9', 
                     ',' : "\'", 
                     "\'" : ',', 
                     "\"" : ',,', 
                     "´" : ',', 
                     "`" : ',', 
                     ';' : '\u061B', 
                     '!' : '\u00A1', 
                     '\u00A1' : '!', 
                     '?' : '\u00BF', 
                     '\u00BF' : '?', 
                     '[' : ']', 
                     ']' : '[', 
                     '(' : ')', 
                     ')' : '(', 
                     '{' : '}', 
                     '}' : '{', 
                     '<' : '>', 
                     '>' : '<', 
                     '_' : '\u203E', 
                     '\r' : '\n' 
                     };

 
for (i in flipTable) { 
    if (flipTable[flipTable[i]] == undefined) 
        { flipTable[flipTable[i]] = i; } 
    } 
function flipString(s) { 
    var result = new Array(s.length); 
    for (var i = s.length - 1; i >= 0; --i) { 
            var o = s.charAt(i); 
            var f = flipTable[o]; 
            result[s.length - 1 - i] = f != undefined ? f : o; 
            } 
    return result.join(''); 
    } 
            
            
            
            
            


// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');



//
// create base UI tab and root window
//
var win1 = Titanium.UI.createWindow({  
    title:'Tab 1',
    backgroundColor:'#fff'
});
var tab1 = Titanium.UI.createTab({  
    icon:'KS_nav_views.png',
    title:'Tab 1',
    window:win1
});

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

win1.open();