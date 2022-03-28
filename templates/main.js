document.querySelector('.menu-btn').addEventListener('click', () => {
	document.querySelector('.nav-menu').classList.toggle('show');
});

function closeNav(){
	document.querySelector('.nav-menu').classList.remove('show');
}


function showForm(){
	document.getElementById("form").style.display = "block";
}

function hideForm(){
	document.getElementById('form').style.display = "none";
}


$(document).ready(function(){
	$('.tope').click(function(){
		$('body, html').animate({
			scrollTop: '0px'
		}, 300);
	});
});


function conocenos(){
	swal({
		title: "¡Conócenos!",
		text: " Oro Rosa Box es un emprendimiento que nace en período de cuarentena, una idea entre madre e hija que fue tomando forma, con la finalidad de llenar de alegría con detalles únicos a vuestros amigos y familiares, invirtiendo nuestra creatividad y amor en cada uno de los pedidos que realizamos. \n\nNos esforzamos como equipo para ofrecedles productos decorativos únicos e inolvidables. \n\nNuestra principal prioridad sois vosotros, nuestros clientes, vuestra satisfacción y el orgullo de sentir que os hemos logrado complacer y sorprender con nuestro trabajo y con nuestra atención personalizada. \n\nEn Oro Rosa Box tenemos una opción para cada uno de vosotros, sin importar la ocasión especial o la edad, siempre trabajaremos para cumplir con vuestras expectativas. "
	});
}