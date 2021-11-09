var names = ["Hole-in-one!", "Eagle", "Birdie","Par", "Bogey", "Double Bogey", "Go Home!"];
function golfScore(par, strokes){
  var response = '';
  switch(true){
  case (strokes === 1):
  response = 'Hole-in-one!';
  break;
  case (strokes <= par -2):
  response = 'Eagle';
  break;
  case (strokes === par -1):
  response = 'Birdie';
  break;
  case (strokes === par):
  response = 'Par';
  break;
  case (strokes === par +1):
  response = 'Bogey';
  break;
  case (strokes === par +2):
  response = 'Double Bogey';
  break;
  case (strokes >= par +3):
  response = 'Go Home!';
  }
  return response;
}
golfScore(4, 1);
golfScore(4, 2);
golfScore(5, 2);
golfScore(4, 3);
golfScore(4, 4);
golfScore(1, 1);
golfScore(5, 5);
golfScore(4, 5);
golfScore(4, 6);
golfScore(4, 7);
golfScore(5, 9);