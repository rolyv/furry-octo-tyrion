function fakeClick(event, anchorObj) {
  if (anchorObj.click) {
    anchorObj.click()
  } else if(document.createEvent) {
    if(event.target !== anchorObj) {
      var evt = document.createEvent("MouseEvents"); 
      evt.initMouseEvent("click", true, true, window, 
          0, 0, 0, 0, 0, false, false, false, false, 0, null); 
      var allowDefault = anchorObj.dispatchEvent(evt);
      // you can check allowDefault for false to see if
      // any handler called evt.preventDefault().
      // Firefox will *not* redirect to anchorObj.href
      // for you. However every other browser will.
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

var mainMenu = document.getElementById("pthnavbca_PORTAL_ROOT_OBJECT");
fakeClick("click", mainMenu);
var selfService = document.getElementById("fldra_CO_EMPLOYEE_SELF_SERVICE");
fakeClick("click", selfService);
var academicRecords = document.getElementById("fldra_HCCC_ACADEMIC_RECORDS");
fakeClick("click", academicRecords);
var unofficialTranscript = document.getElementById("crefli_HC_SS_AA_REPORT1_GBL");
fakeClick("click", unofficialTranscript);
window.frames[0].document.getElementById("DERIVED_AA2_TSCRPT_TYPE3").options[3].selected = true;
var go = window.frames[0].document.getElementById("GO");
fakeClick("click", go);

var text = window.frames[0].document.getElementById("ACE_$ICField5$0");
selectElementContents(text);
