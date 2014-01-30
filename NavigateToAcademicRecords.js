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

function getElement(el, isFrame){
  if (isFrame) {  
    var elem = window.frames[0].document.getElementById(el);
  }
  else {
    var elem = document.getElementById(el);
  }
  
  return elem;
}

var mainMenu = getElement("pthnavbca_PORTAL_ROOT_OBJECT", false);
fakeClick("click", mainMenu);
setTimeout(function() { 
  var selfService = getElement("fldra_CO_EMPLOYEE_SELF_SERVICE", false);
  fakeClick("click", selfService);
}, 1000);
setTimeout(function() {
  var academicRecords = getElement("fldra_HCCC_ACADEMIC_RECORDS", false);
  fakeClick("click", academicRecords);
}, 2000);
setTimeout(function() { 
  var unofficialTranscript = getElement("crefli_HC_SS_AA_REPORT1_GBL", false);
  fakeClick("click", unofficialTranscript);
}, 3000);