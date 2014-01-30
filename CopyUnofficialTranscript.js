function fakeClick(event, anchorObj) {
  if (anchorObj.click) {
    anchorObj.click()
  } else if(document.createEvent) {
    if(event.target !== anchorObj) {
      var evt = document.createEvent("MouseEvents"); 
      evt.initMouseEvent("click", true, true, window, 
	  0, 0, 0, 0, 0, false, false, false, false, 0, null); 
      var allowDefault = anchorObj.dispatchEvent(evt);
    }
  }
}

function selectElementContents(el) {
  var body = document.body, range, sel;
  if (document.createRange && window.getSelection) {
    range = document.createRange();
    sel = window.getSelection();
    sel.removeAllRanges();
    try {
      range.selectNodeContents(el);
      sel.addRange(range);
    } catch (e) {
      range.selectNode(el);
      sel.addRange(range);
    }
  } else if (body.createTextRange) {
    range = body.createTextRange();
    range.moveToElementText(el);
    range.select();
  }
}

function waitForElement(el, isFrame){
  var elem = null;
  
  while (!elem) {
    if (isFrame) {  
      elem = window.frames[0].document.getElementById(el);
    }
    else {
      elem = document.getElementById(el);
    }
  }
}

var mainMenu = waitForElement("pthnavbca_PORTAL_ROOT_OBJECT", false);
fakeClick("click", mainMenu);
var selfService = waitForElement("fldra_CO_EMPLOYEE_SELF_SERVICE", false);
fakeClick("click", selfService);
var academicRecords = waitForElement("fldra_HCCC_ACADEMIC_RECORDS", false);
fakeClick("click", academicRecords);
var unofficialTranscript = waitForElement("crefli_HC_SS_AA_REPORT1_GBL", false);
fakeClick("click", unofficialTranscript);
var transcriptSelect = waitForElement("DERIVED_AA2_TSCRPT_TYPE3", true);
transcriptSelect.options[3].selected = true;
var go = waitForElement("GO", true);
fakeClick("click", go);

var text = waitForElement("ACE_$ICField5$0", true);
selectElementContents(text);
