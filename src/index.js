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

async function makeBruzuApiCall(text){
  const response = await BruzuRequest.getBruzu(text);
  getElementsBruzu(response);
}

$(document).ready(function(){
  $('form#imageMaker').submit(function(event){
    let text = $('#text').val()
    event.preventDefault();
    makeBruzuApiCall(text);
  });
});