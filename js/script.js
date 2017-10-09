
/* Création de deux tableaux contenant les sources des différentes images du slider et le texte s'y rapportant */
var images=["img/projets/rubiks.png","img/projets/tour.png","img/projets/tour2.png","img/projets/raspberry.png"];
var description=["Site web réalisé en BAC1 dans le cadre du cours \"Internet et multimédia\".Sur ce site, vous retrouverez plein d'informations sur le Rubik's cube",
				 "Menu principal du jeu réalisé en BAC2 dans le cadre du cours de \"Gestion de projets\". Ce projet a été réalisé en colaboration avec Thomas ROSI.",
				 "Aperçu d'un niveau de \"The Infernal Tower\". Ce jeu a été entièrement réalisé en langage JAVA en utilisant la bibliothèque Swing.",
				 "Projet réalisé en BAC2 dans le cadre du cours \"Initiation aux nano-ordinateurs\". Affiche les valeurs d'orientation du Raspberry PI selon différents graphiques."];

/* Variable qui sera incrémentée afin de définir quel sera la prochaine image a afficher dans le slider*/				 
var i=0;	


/*Fonction permettant de changer l'image du slider*/
function changeImg(x){
	if(x){
		i++;
	} else {
		i--;
	}
	if(i==4){
		i=0;
	}
	if(i<0){
		i=3;
	}
	document.getElementById('slide').src=images[i];
	
	if(i==0){
		document.getElementById('change').innerHTML = description[i] + '<a href="http://rubiksmania.esy.es/Projet/index.html" target="_blank"> (Lien).</a>';
	}else {
		document.getElementById('change').innerHTML = description[i];
	}
}

/* Modifie l'image de l'arrow au survol */
$('.arrow').mouseover(function(){
	var id = $(this).attr("id");
	if(id=="left"){
		$(this).attr("src","img/fleches/arrowleftover.png");

	} else {
		$(this).attr("src","img/fleches/arrowrightover.png");
	}
	
});

/* rétabli l'image de l'arrow au survol */
$('.arrow').mouseout(function(){
	var id = $(this).attr("id");
	if(id=="left"){
		$(this).attr("src","img/fleches/arrowleft.png");
	} else {
		$(this).attr("src","img/fleches/arrowright.png");
	}
});



/*Animation/apparition des containers, ecoute sur le scoll*/
$(document).ready(function() {

	/* Apparition des premiers containers présentation et timeline */
	setTimeout(function() {

		$('.start').animate({
		opacity: 1
	}, 1500)

	}, 250);

	/* Détection du scroll */

	$(window).scroll(function(event) {
		
		/* Position de chaque design-section */

		$('.design-section').each(function() {

			var hautSection = $(this).offset().top + 250;
            var basFenêtre = $(window).scrollTop() + $(window).height();
            
            /* Quand la section arrive dans la fenêtre, je la fais apparaitre */
            if( basFenêtre > hautSection ){
                
                $(this).animate({'opacity':'1'},1000);
                    
            }
		});

	});
	
	$('body').append('<a href="#top" class="top_link" title="Revenir en haut de page">Haut</a>');
	$('.top_link').css({
		'position'				:	'fixed',
		'right'					:	'20px',
		'bottom'				:	'50px',
		'display'				:	'none',
		'padding'				:	'20px',
		'background'			:	'#FFF',
		'color'					:	'#E39C20',
		'-moz-border-radius'	:	'40px',
		'-webkit-border-radius'	:	'40px',
		'border-radius'			:	'40px',
		'opacity'				:	'0.9',
		'z-index'				:	'2000',
		'textDecoration'		:	'none',
	});
	$(window).scroll(function(){
		posScroll = $(document).scrollTop();
		if(posScroll >=550) {
			$('.top_link').fadeIn(600);
		
		} else {
			$('.top_link').fadeOut(600);
		}
	});
});
