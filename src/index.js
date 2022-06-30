import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import $ from 'jquery';
import { BruzuRequest } from './bruzu-request.js'
import { PicsumRequest } from './piscum-request.js'

function getElementsBruzu(response){
  let image = response;
  $('#imageOutput').html(`<img src="${image.url}">`)
}

async function makeBruzuApiCall(text, textColor, textBgColor, bgColor, fontFamily, textAlign, fontSize, image){
  const response = await BruzuRequest.getBruzu(text, textColor, textBgColor, bgColor, fontFamily, textAlign, fontSize, image);
  getElementsBruzu(response);
}

async function makePicsumApiCall(text, textColor, textBgColor, bgColor, fontFamily, textAlign, fontSize){
  const response = await PicsumRequest.getPicsum();
  makeBruzuApiCall(text, textColor, textBgColor, bgColor, fontFamily, textAlign, fontSize, response.url);
}

$(document).ready(function(){
  $('form#imageMaker').submit(function(event){
    event.preventDefault();
    let text = " " + $('#text').val() + " ";
    let textColor = $('#textColor').val();
    let bgColor = $('#backgroundColor').val();
    let fontFamily = $('#fontFamily').val();
    let textAlign = $('#textAlign').val();
    let fontSize = $('#fontSize').val();
    let textBgColor = $('#textBgColor').val();
    if ($('#image').is(':checked')){
      makePicsumApiCall(text, textColor, textBgColor, bgColor, fontFamily, textAlign, fontSize);
    } else {
      makeBruzuApiCall(text, textColor, textBgColor, bgColor, fontFamily, textAlign, fontSize);
    }
  });
});


// <input type="checkbox" id="extra-cheese" name="extra-cheese">
// <label for="extra-cheese">Extra Cheese</label>

// let inputtedExtraCheese = "";
// if ($("#extra-cheese").is(":checked")) {
//   inputtedExtraCheese = $("#extra-cheese").attr('name');
// }