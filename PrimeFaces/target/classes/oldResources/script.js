/* ------------------------------------ Click on login and Sign Up to  changue and view the effect
---------------------------------------
 */


function checkExceptionFormValidation(){
	const title = document.getElementById('title');
	const caseDesc = document.getElementById('case');
	if(title.value == '' || title.value == null){
		title.classList.add('is-invalid');
	}else{
		title.classList.remove('is-invalid');
	}
	if(caseDesc.value == '' || caseDesc.value == null){
		caseDesc.classList.add('is-invalid');
	}else{
		caseDesc.classList.remove('is-invalid');
	}
	if((caseDesc.value != '' && caseDesc.value != null) && (title.value != '' && title.value != null)){
		document.getElementById('addExceptionForm').submit();
		document.getElementById('SaveBtnException').disabled=true;
	}
}


function addStudentDocFormValidation(){
	const type = document.getElementById("1desc");
	const file = document.getElementById("docFile");
	const form = document.getElementById("addStudentDocForm");
	if(type.value == 0){
		type.classList.add('is-invalid');
	}else{
		type.classList.remove('is-invalid');
	}
	if(file.files.length == 0){
		docFile.classList.add('is-invalid');
	}else{
		docFile.classList.remove('is-invalid');
	}
	if(type.value != 0 && file.files.length > 0){
		form.submit();
	}
}


function cambiar_login() {
	document.querySelector('.cont_forms').className = "cont_forms cont_forms_active_login";
	document.querySelector('.cont_form_login').style.display = "block";
	document.querySelector('.cont_form_sign_up').style.opacity = "0";

	setTimeout(function() {
		document.querySelector('.cont_form_login').style.opacity = "1";
	}, 400);

	setTimeout(function() {
		document.querySelector('.cont_form_sign_up').style.display = "none";
	}, 200);
}

function cambiar_sign_up(at) {
	document.querySelector('.cont_forms').className = "cont_forms cont_forms_active_sign_up";
	document.querySelector('.cont_form_sign_up').style.display = "block";
	document.querySelector('.cont_form_login').style.opacity = "0";

	setTimeout(function() {
		document.querySelector('.cont_form_sign_up').style.opacity = "1";
	}, 100);

	setTimeout(function() {
		document.querySelector('.cont_form_login').style.display = "none";
	}, 400);

}

function ocultar_login_sign_up() {

	document.querySelector('.cont_forms').className = "cont_forms";
	document.querySelector('.cont_form_sign_up').style.opacity = "0";
	document.querySelector('.cont_form_login').style.opacity = "0";

	setTimeout(function() {
		document.querySelector('.cont_form_sign_up').style.display = "none";
		document.querySelector('.cont_form_login').style.display = "none";
	}, 500);

}