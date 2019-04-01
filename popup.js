'use strict';

let show = document.getElementById('show');
let hide = document.getElementById('hide');


hide.onclick = function(element) {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.executeScript(
        tabs[0].id,
        {code: "document.getElementById('sizing') && document.getElementById('sizing').remove()" });
  });
}


show.onclick = function(element) {
  let color = element.target.value;
  // document.getElementsByClassName('sizing')[0].remove()
  var html = `var elem = document.createElement('div');
  elem.innerHTML =  \`<div id="sizing">
  <div class="d-none d-xl-block font-weight-bold">XL</div>
  <div class="d-none d-lg-block d-xl-none font-weight-bold">LG</div>
  <div class="d-none d-md-block d-lg-none font-weight-bold">M</div>
  <div class="d-none d-sm-block d-md-none font-weight-bold">SM</div>
  <div class="d-block d-sm-none font-weight-bold">XS</div>
  <style>
  #sizing {
    left: 0;
    position: absolute;
    background: white;
    top: 0;
    padding: 5px;
    opacity: 0.3;
    padding-right: 10px;
    border-bottom-right-radius: 10px;
}
.d-none{ display: none !important;}
@media (min-width:576px){.d-sm-none{display:none!important}.d-sm-inline{display:inline!important}.d-sm-inline-block{display:inline-block!important}.d-sm-block{display:block!important}.d-sm-table{display:table!important}.d-sm-table-row{display:table-row!important}.d-sm-table-cell{display:table-cell!important}.d-sm-flex{display:-ms-flexbox!important;display:flex!important}.d-sm-inline-flex{display:-ms-inline-flexbox!important;display:inline-flex!important}}@media (min-width:768px){.d-md-none{display:none!important}.d-md-inline{display:inline!important}.d-md-inline-block{display:inline-block!important}.d-md-block{display:block!important}.d-md-table{display:table!important}.d-md-table-row{display:table-row!important}.d-md-table-cell{display:table-cell!important}.d-md-flex{display:-ms-flexbox!important;display:flex!important}.d-md-inline-flex{display:-ms-inline-flexbox!important;display:inline-flex!important}}@media (min-width:992px){.d-lg-none{display:none!important}.d-lg-inline{display:inline!important}.d-lg-inline-block{display:inline-block!important}.d-lg-block{display:block!important}.d-lg-table{display:table!important}.d-lg-table-row{display:table-row!important}.d-lg-table-cell{display:table-cell!important}.d-lg-flex{display:-ms-flexbox!important;display:flex!important}.d-lg-inline-flex{display:-ms-inline-flexbox!important;display:inline-flex!important}}@media (min-width:1200px){.d-xl-none{display:none!important}.d-xl-inline{display:inline!important}.d-xl-inline-block{display:inline-block!important}.d-xl-block{display:block!important}.d-xl-table{display:table!important}.d-xl-table-row{display:table-row!important}.d-xl-table-cell{display:table-cell!important}.d-xl-flex{display:-ms-flexbox!important;display:flex!important}.d-xl-inline-flex{display:-ms-inline-flexbox!important;display:inline-flex!important}}@media print{.d-print-none{display:none!important}.d-print-inline{display:inline!important}.d-print-inline-block{display:inline-block!important}.d-print-block{display:block!important}.d-print-table{display:table!important}.d-print-table-row{display:table-row!important}.d-print-table-cell{display:table-cell!important}.d-print-flex{display:-ms-flexbox!important;display:flex!important}.d-print-inline-flex{display:-ms-inline-flexbox!important;display:inline-flex!important}}
</style>
</div>\`;document.getElementById('sizing') && document.getElementById('sizing').remove();document.body.appendChild(elem);`;

  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.executeScript(
        tabs[0].id,
        {code: html });
  });
};
