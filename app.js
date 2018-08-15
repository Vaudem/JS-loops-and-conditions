reviserWhile = function(){
var count = 1;

while(count <= 100){ // tant que
	console.log(count); // affiche jusqu'à 100
	count += 1;
};
};

reviserWhile();




var reviserDoWhile = function(){
	var count = 0;
	do {
		console.log("loop a while");
		count += 1;
	}
	while (count < 10);
};

reviserDoWhile();





var parcourirWhileTableau = function(){
	var i = 0, arr = ["a", "b", "c", "d", "e"];
	while (i < arr.length){
		console.log(arr[i]);
		i ++;
	};
};
parcourirWhileTableau();






var reviserFor = function(){
	var arr = document.querySelectorAll("#list_1 .item");
	console.log(arr);
	for (i = 0; i < arr.length ; i ++){
		console.log(arr[i]);
	}

};



var reviserForEach = function(){
	var arr = ["a1","a2","a3","a4"];
	arr.forEach(function(item, i){
		console.log(item);
		console.log("= case n° " + i);
	});
};
reviserForEach();






console.log(" -------- Exercice createElement Li version 1 -------- ");


var creerUser = function (n,a,g){
	return {
		name: n,
		age: a,
		gimmick: g};
};


var user1 = creerUser("bibi",28,"sos");
var user2 = creerUser("titi", 17, "hoho");
var user3 = creerUser("toto", 65, "haha");
console.log(user1, user2, user3);

//console.log(creerUser("bibi",28,"sos"));
//console.log(creerSimplonien("titi", 17, "hoho"));



var tableau = function(){
	var arr = [];
	arr.push(user1);
	arr.push(user2);
	arr.push(user3);	
	return(arr);
};

console.log(tableau());
console.log(tableau().length);




//parcourir tableau + créer li + insérer phrase dans li + li dans ul Html

var parcourirUser = function(){
	var ol = document.getElementById("ol");
	for(var i=0; i < tableau().length; i++) {
		var li = document.createElement("li");
		console.log(li);
		li.innerHTML = `${tableau()[i].name} a ${tableau()[i].age} ans et aime dire "${tableau()[i].gimmick}."`;
		ol.appendChild(li);
	};

	//console.log(`L'utilisateur ${creerUser[i].name} a ${creerUser[i].age} et son gimmick est ${creerUser[i].gimmick}.`);
};








console.log("-------- Exercice createElement Li version 2 --------")

var users = [
		{nom: "Tata",
		age: 20,
		gimmick : "haha!"},
		{nom: "Tete",
		age: 20,
		gimmick: "hehe!"},
		{nom: "Titi",
		age: 20,
		gimmick: "hihi!"},
		{nom: "Toto",
		age: 20,
		gimmick: "hoho!"}

	]

users.push({nom: "Tutu", age : 20, gimmick: "huhu!"})




var insertTxtLi = function(){


	for (var i=0; i < users.length; i++){	
		var li = document.createElement("li");	
		li.innerHTML = `${users[i].nom} a ${users[i].age} ans et aime dire "${users[i].gimmick}"`;
		console.log(li);
		var ul = document.getElementById("newul");
		ul.appendChild(li);

		var gimmick = users[i].gimmick;
		li.addEventListener('click',function(){
        this.innerHTML+= gimmick;
    	});
	};
};






// -------------------- version Cindy

//Créer une tableau d'objet
var simploniens = [
    {
        name: "Vanessa",
        age: 14,
        gimmick: "J'ai pas de gimmick"
    },

    {
        name: "Cindy",
        age: 14,
        gimmick :"bla bla bla bla bla..."
    },

    {
        name: "Daiana",
        age: 18,
        gimmick: "Les gimmicks c'est la vie !"
    },

    {
        name: "Aïcha",
        age: 24,
        gimmick: "Every thing is ok!"
    },

    {
        name: "Julie",
        age: 24,
        gimmick: "C'est OK!"
    }
]

//Mettre les "li" dans le "ul"
function ajouteMoiUnli(){
    var li = document.createElement("li")
    var ul = document.getElementById("simploniens")
    var my_ul = ul.appendChild(li);
    return my_ul;
};






/*
// pour le clic fond couleur html
var clickHandler = function (evt){
	console.log("clicked");
	console.log(evt);
	var src = evt.srcElement || evt.target;
	console.log("src === target");
	console.log(src === this);  // true
	console.log(this); // représente le bouton cliqué
};


var applyCSS = function (evt) {

    var color = document.getElementById("newul");
    color.classList.toggle("clicked");
    console.log(this);

};
*/





var start = function(){
	/*var btn = document.getElementById("btn");
	btn.addEventListener("click", function(e) { // evt = e
	clickHandler(e);
	applyCSS(e);});*/
	parcourirUser(); // version 1
	insertTxtLi(); // version 2 tableau tout prêt


	console.log("-------- version Cindy --------")
	//Parcourir la liste
	simploniens.forEach(function(element){
    	console.log(element.name + " " + "a " + element.age + " ans et son gimmick est: " + " (clik here) ...");
    	var li = ajouteMoiUnli();
    	li.innerHTML = element.name + " " + "a " + element.age + " ans et son gimmick est => " + " (click here) ..." ;
        li.addEventListener("click", function(){
			li.innerHTML+=`" ${element.gimmick} "`;
		});
    	console.log(element.gimmick);
 	});

	ajouteMoiUnli(); // version Cindy
	reviserFor(); // a besoin du chargement du Document
};





window.addEventListener("DOMContentLoaded", start)

