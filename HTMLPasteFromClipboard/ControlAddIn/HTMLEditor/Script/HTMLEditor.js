"use strict"

function initializeControlAddIn(id) {
  var controlAddIn = document.getElementById(id);


  var textArea = '<p></p>';

  $(controlAddIn).append(textArea)
  Microsoft.Dynamics.NAV.InvokeExtensibilityMethod('OnAddInReady', null);
}




