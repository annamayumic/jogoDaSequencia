var gamePattern = []
var jogadorPattern = []
var contador = 0
var buttonColours = ['red', 'blue', 'green','yellow'];

function nextSequence(){
  return randomNumber = Math.floor( Math.random()*4);
}

function piscar(){
  var randomChosenColour = buttonColours[nextSequence()];
  gamePattern.push(randomChosenColour);
  $('h1').text(`nivel ${contador}`)
  console.log(gamePattern)
  playSound(randomChosenColour)
  $(`div #${randomChosenColour}`).fadeOut(100).fadeIn(100);
  contador++
}

function jogador(){
  jogadorPattern.push($(this).attr('id'))
  playSound($(this).attr('id'))
  console.log($(this).attr('id'))
  console.log(jogadorPattern)
    for(item in jogadorPattern){
      var stringGame = JSON.stringify(gamePattern[item])
      var stringJogador = JSON.stringify(jogadorPattern[item])
      if(stringGame!==stringJogador){
        playSound('wrong')
        $('h1').text('perdeu!')
        $('h1').append('<br>Press A Key to leave')
        $(document).one('keydown',reiniciar )
      }

    }
    if(gamePattern.length === jogadorPattern.length){
    var stringGame = JSON.stringify(gamePattern)
      var stringJogador = JSON.stringify(jogadorPattern)

      if(stringGame===stringJogador){
        jogadorPattern=[]
        setTimeout(piscar , 1000)
      }else{
        playSound('wrong')
        $('h1').text('Perdeu')
        $('h1').append('<br>Press A Key to leave')
        $(document).one('keydown',reiniciar )
      }
    }
}
function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}
function reiniciar(){
  location.reload();
}

function iniciar()
{
  setTimeout(piscar, 1000);
}
$(document).one('keydown',iniciar )
 
$('.btn').click(jogador)
