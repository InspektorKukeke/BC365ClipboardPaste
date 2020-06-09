

document.onpaste = function (event) {
  var items = (event.clipboardData  || event.originalEvent.clipboardData).items;
  var blob = null;
  var ImageText;
  for (var i = 0; i < items.length; i++) {
    if (items[i].type.indexOf("image") === 0) {
      blob = items[i].getAsFile();
    }
  }

  if (blob !== null) {
    var reader = new FileReader();
    reader.onload = function(event) {
      pasteHtmlAtCaret('<img src="'+ event.target.result + '" alt="image"/>');

    };
    reader.readAsDataURL(blob);
  }
  
   
}
 
function pasteHtmlAtCaret(html) {
    var sel, range;
    if (window.getSelection) {

        sel = window.getSelection();
        if (sel.getRangeAt && sel.rangeCount) {
            range = sel.getRangeAt(0);
            range.deleteContents();


            var el = document.createElement("div");
            el.innerHTML = html;
            var frag = document.createDocumentFragment(), node, lastNode;
            while ( (node = el.firstChild) ) {
                lastNode = frag.appendChild(node);
            }
            range.insertNode(frag);


            if (lastNode) {
                range = range.cloneRange();
                range.setStartAfter(lastNode);
                range.collapse(true);
                sel.removeAllRanges();
                sel.addRange(range);
            }
        }
    } else if (document.selection && document.selection.type != "Control") {

        document.selection.createRange().pasteHTML(html);
    }
}