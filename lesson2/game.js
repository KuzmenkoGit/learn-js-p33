var game_field = document.getElementById("game_field");
var images = game_field.getElementsByTagName("img");
var countOpenPhoto = 0;
var win = document.querySelector(".win");


var array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
array = shuffle(array);
console.log(array);

var equal = [];
var countHidden = 0;
game_field.onclick = function(e)
{
	if(e.target != game_field && countOpenPhoto < 2){
		console.log(e.target.alt);
		e.target.src = searchPhoto(e.target.alt);
		equal[equal.length] = e.target;
		e.target.style.pointerEvents = "none";
		countOpenPhoto++;
		
	
	}else if(e.target != game_field && countOpenPhoto == 2){

		if(countOpenPhoto == 2){

			if(equal[0].src == equal[1].src){
				equal[0].style.visibility = "hidden";
				equal[1].style.visibility = "hidden";
			}else{
				equal[0].style.pointerEvents = "auto";
				equal[1].style.pointerEvents = "auto";
			}

			equal=[];
		}
			for(var i = 0; i < images.length; i++){
			images[i].src = "img/bg_card.png";
		}
		console.log(e.target.alt);
		e.target.src = searchPhoto(e.target.alt);
		equal[equal.length] = e.target;
		e.target.style.pointerEvents = "none";
		countOpenPhoto = 1;
	}

for(var j = 0; j < images.length; j++){
	if(images[j].style.visibility == "hidden"){
		console.log(countHidden);
		countHidden++;
			if(countHidden == 13 && equal.length == 2){
			if(equal[0].src == equal[1].src){
				equal[0].style.visibility = "hidden";
				equal[1].style.visibility = "hidden";
				countHidden += 2;
			}
		}
		}
	}
	if(countHidden == 16){
		win.style.display = "block";
		
	}else{
		countHidden = 0;
	}
}


function searchPhoto(alt)
{
	switch(alt){
		case "images1":
			return searchNumberPhoto(array[0]);
			break;
		case "images2":
			return searchNumberPhoto(array[1]);
			break;
		case "images3":
			return searchNumberPhoto(array[2]);
			break;
		case "images4":
			return searchNumberPhoto(array[3]);
			break;
		case "images5":
			return searchNumberPhoto(array[4]);
			break;
		case "images6":
			return searchNumberPhoto(array[5]);
			break;
		case "images7":
			return searchNumberPhoto(array[6]);
			break;
		case "images8":
			return searchNumberPhoto(array[7]);
			break;
		case "images9":
			return searchNumberPhoto(array[8]);
			break;
		case "images10":
			return searchNumberPhoto(array[9]);
			break;
		case "images11":
			return searchNumberPhoto(array[10]);
			break;
		case "images12":
			return searchNumberPhoto(array[11]);
			break;
		case "images13":
			return searchNumberPhoto(array[12]);
			break;
		case "images14":
			return searchNumberPhoto(array[13]);
			break;
		case "images15":
			return searchNumberPhoto(array[14]);
			break;
		case "images16":
			return searchNumberPhoto(array[15]);
			break;
			default:
			return "err searchPhoto";
	}
}
function searchNumberPhoto(a)
{
	switch(a){
		case 1:
		case 9:
			return "img/cat.jpg";
			break;
		case 2:
		case 10:
			return "img/cat2.jpg";
			break;
		case 3:
		case 11:
			return "img/cat3.jpg";
			break;
		case 4:
		case 12:
			return "img/cat4.jpg";
			break;
		case 5:
		case 13:
			return "img/cat5.jpg";
			break;
		case 6:
		case 14:
			return  "img/cat6.jpg";
			break;
		case 7:
		case 15:
			return "img/cat7.jpg";
			break;
		case 8:
		case 16:
			return "img/cat8.jpg";
			break;
			default:
			return "error";
	}
}
/*Перемешать массив*/
function shuffle(arr) {
    var r_i; // случайный индекс
    var v; // временная переменная
    for (var i = 0; i < arr.length-1; i++) {
        /* получаем случайный индекс (кроме последнего) */
        r_i = random(0, arr.length-1);
        /* меняем местами случайный элемент массива с последним */
        v = arr[r_i];
        arr[r_i] = arr[arr.length-1];
        arr[arr.length-1] = v;
    }
    return arr;
}
 
 function random(min, max) {
    var range = max - min + 1;
    return Math.floor(Math.random()*range) + min;
}