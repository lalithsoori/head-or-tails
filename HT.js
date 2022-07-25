function headTail() {

  let removes = document.getElementById('gameresultfunction');
  gameresultfunction.remove(gameresultfunction.lastElementChild);
  var computerchoice;

  computerchoice = resultToChoose( randomNumber() );
  console.log( computerchoice );

  result( computerchoice);

  //document.getElementById('gameresultfunction').innerHTML= computerchoice;

}

function randomNumber() {
  return Math.floor( Math.random() * 2 );
}

function resultToChoose( number ) {
  return [ 'head', 'tail' ][ number ];
}



function result( computerchoice, message ) {
  var imageData = {
    'head': document.getElementById( 'letterH' ).src,
    'tail': document.getElementById( 'letterL' ).src
  }
  var resultDiv = document.createElement( 'div' );
  resultDiv.innerHTML = " <img src='" + imageData[ computerchoice ] + "'>"

  document.getElementById( 'gameresultfunction' ).appendChild( resultDiv );


}
