import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import $ from 'jquery';
import { BruzuRequest } from './bruzu-request.js'

function getElementsBruzu(response){
  let image = response;
  console.log(image);
  $('#imageOutput').html(`<img src="${image.url}">`)
}

async function makeBruzuApiCall(text, textColor, bgColor, fontFamily, textAlign, fontSize){
  const response = await BruzuRequest.getBruzu(text, textColor, bgColor, fontFamily, textAlign, fontSize);
  getElementsBruzu(response);
}

$(document).ready(function(){
  $('form#imageMaker').submit(function(event){
    let text = $('#text').val();
    let textColor = $('#textColor').val();
    let bgColor = $('#backgroundColor').val();
    let fontFamily = $('#fontFamily').val();
    let textAlign = $('#textAlign').val();
    let fontSize = $('#fontSize').val();
    event.preventDefault();
    makeBruzuApiCall(text, textColor, bgColor, fontFamily, textAlign, fontSize);
  });
});