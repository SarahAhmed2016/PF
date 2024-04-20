function isNumberKey(evt) {

	var charCode = (evt.which) ? evt.which : event.keyCode
 
	if (charCode > 31 && (charCode < 48 || charCode > 57 || charCode > 1536))
		return false;
	$(".numeric").bind("paste", function(e) {
		return false;
	});
	return true;
}

function isNumberKeydecimal(evt) {
	var charCode = (evt.which) ? evt.which : event.keyCode
	if (charCode != 46 && charCode > 31 && (charCode < 48 || charCode > 57))
		return false;
	return true;
}

function isalpha(evt) {
	var charCode = (evt.which) ? evt.which : event.keyCode
	if ((charCode >= 33 && charCode <= 64)
			|| (charCode >= 91 && charCode <= 96)
			|| (charCode >= 123 && charCode <= 255))
		return false;

	return true;
}

function isSpecialChar(evt) {

	var charCode = (evt.which) ? evt.which : event.keyCode
	if (charCode == 60 || charCode == 62)
		return false;

	return true;
}

$('#nati').on('change', function() {
	if (this.value == 188) {

		$("#pass_id").prop('disabled', true);
		$("#unhcr").prop('disabled', true);
		$("#unc_id").prop('disabled', true);

		$("#id_no").prop('disabled', false);
		$('#id_no').val();

	} else {

		$("#pass_id").prop('disabled', false);
		$("#unhcr").prop('disabled', false);

		$("#unc_id").prop('disabled', false);
		$("#id_no").prop('disabled', true);
		$('#pass_id').val();

		$('#unhcr').val();

	}

});
$("#savebtn").on("click", function(e) {

	var status = 0;

	var statusEDU = 0;
	var v_mobile = 0;
	var v_birth = 0;
	var v_year = 0;
	var v_avg = 0;
	var ListVar = 0;
	var v_nativ = $("#nati").val();

	if (v_nativ == 188 || v_nativ == 1) {
		var id_no_id = $("#id_no").val();

		var IDNo_size = $.trim(id_no_id).length;

		if (IDNo_size == 0) {
			$("#id_no").css("border-color", "red");
			e.preventDefault();
		}

	} else {
		var SecuPssId = $("#pass_id").val();

		var UnhcrId = $("#unhcr").val();
		var Unhcr_Id = $("#unc_id").val();
		var v_SecuPssId = $.trim(SecuPssId).length;
		var v_UnhcrId = $.trim(UnhcrId).length;
		var v_Unhcr_Id = $.trim(Unhcr_Id).length;

		if (v_SecuPssId == 0 || v_UnhcrId == 0 || v_Unhcr_Id == 0) {
			$("#pass_id").css("border-color", "red");
			$("#unc_id").css("border-color", "red");
			$("#unhcr").css("border-color", "red");
			e.preventDefault();
		}
	}
	$(".req").each(function(e) {

		var trimvalue = $.trim(this.value);
		if (typeof this.value == "undefined" || trimvalue.length == 0) {

			$(this).css("border-color", "red");
			status = 1;
		} else {

			$(this).css("border-color", "#ced4da");
		}

	});
	$(".mobile").each(function(e) {

		var trimvalue = $.trim(this.value);
		if (trimvalue.length <= 9) {

			$(this).css("border-color", "red");

			v_mobile = 1;
		} else {

			$(this).css("border-color", "#ced4da");
		}

	});

	$(".mobile2").each(function(e) {

		var trimvalue = $.trim(this.value);
		if (trimvalue.length > 0 && trimvalue.length <= 9) {

			$(this).css("border-color", "red");

			v_mobile = 1;
		} else {

			$(this).css("border-color", "#ced4da");
		}

	});
	$(".listV").each(function(e) {

		if (this.value == 0) {

			$(this).css("border-color", "red");

			ListVar = 1;
		} else {
			$(this).css("border-color", "#ced4da");
		}

	});
	// birth
	var v_nativ = $("#nati").val();

	var n = Number(v_nativ);
	if (n == 2 || n == 173) {
		var v_pass_id = $("#pass_id").val();
		var v_unhcr = $("#unhcr").val();

		var trimvaluepass_id = $.trim(v_pass_id);
		var trimvalueunhcr = $.trim(v_unhcr);

		if (trimvaluepass_id.length == 0 || trimvalueunhcr.length == 0) {
			$("#pass_id").css("border-color", "red");
			$("#unhcr").css("border-color", "red");
			e.preventDefault();

		}
	} else {

		var v_id_no = $("#id_no").val();
		var trimvaluv_id_no = $.trim(v_id_no);
		if (trimvaluv_id_no.length == 0) {
			$("#id_no").css("border-color", "red");

			e.preventDefault();

		}
	}
	$(".birth").each(function(e) {

		var trimvalue1 = $.trim(this.value);
		if (trimvalue1.length > 0) {
			var res = trimvalue1.split("/");
			if (Number(res[0]) < 0 || Number(res[0]) > 31) {
				v_birth = 1;
				$(this).css("border-color", "red");
			}
			if (Number(res[1]) < 1 || Number(res[1]) > 12) {
				v_birth = 1;
				$(this).css("border-color", "red");
			}

			var CDate = new Date(this.value);

			var today = new Date();
			var year1 = today.getFullYear();
			var year2 = Number(res[2]);

			var age = year1 - year2;

			if (!(age >= 17)) {
				// less than 18
				v_birth = 1;
				$(this).css("border-color", "red");
			} else {

				$(this).css("border-color", "#ced4da");
			}

		}
	});
	if (v_mobile == 1) {
		$("#beforSave").text("يجب ادخال رقم هاتف صحيح");
		e.preventDefault();
	}
	if (status == 1 || ListVar == 1) {
		$("#beforSave").text("يجب ادخال الحقول الاجبارية  ");
		e.preventDefault();

	} else {
		$("#beforSave").text("  ");

	}

	if (v_birth == 1) {
		$("#beforSave").text("يجب ادخال تاريخ ميلاد صحيح");
		e.preventDefault();
	}
	var pass = $("#password1").val();

	var Confpass = $("#conf_pass").val();

	var pass_size = $.trim(pass).length;
	var Confpass_size = $.trim(Confpass).length;

	if (pass_size == 0 || Confpass_size == 0) {

		$('#password1').css("border-color", "red");
		$('#conf_pass').css("border-color", "red");
		e.preventDefault();
		return false;
	} else if (pass_size != Confpass_size) {
		$('#conf_pass').css("border-color", "red");
		$("#checkpass").text("كلمة السر التي ادخلتها غير متطابقة ");

		e.preventDefault();
		return false;
	} else if (pass === Confpass) {

		$('#conf_pass').css("border-color", " ");
		$("#checkpass").text("   ");

	} else {
		$('#conf_pass').css("border-color", "red");
		$("#checkpass").text("كلمة السر التي ادخلتها غير متطابقة ");

		e.preventDefault();
		return false;

	}

	var ps_str = $("#PassStrong").val();

	if (ps_str == 1) {
		$('#password1').css("border-color", "red");
		$('#conf_pass').css("border-color", "red");

		$("#checkpass").text("كلمة السر ضعيفة");
		e.preventDefault();
		return false;
	} else {

		$('#password1').css("border-color", " ");
		$('#conf_pass').css("border-color", " ");

		$("#checkpass").text("  ");
	}
});

$("#password1")
		.on(
				"keyup",
				function(e) {
					var pass1 = document.getElementById("password1").value;

					var strongRegex = new RegExp(
							"^(?=.*[a-z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");

					var mediumRegex = new RegExp(
							"^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})");

					var checkLitter = mediumRegex.test(pass1);
					$("#PassStrong").val("0");
					if (strongRegex.test(pass1)) {

						$("#progress").removeClass("bg-warning");

						$("#progLabel").text("كلمة المرور قوية ");
						$("#icon").removeClass("far fa-meh");
						$("#icon").addClass("far fa-smile");
						$("#icon").css('color', 'green');
						$("#PassStrong").val("3");

					} else if (mediumRegex.test(pass1)) {

						$("#progLabel").text("كلمة المرور متوسطة ");
						$("#PassStrong").val("2");
						$("#icon").removeClass("far fa-frown");

						$("#icon").addClass("far fa-meh");
						$("#icon").css('color', 'orange');
					} else {

						$("#icon").addClass("far fa-frown");
						$("#progLabel").text("كلمة السر ضعيفة ");
						$("#icon").css('color', 'red');
						$("#icon").removeClass("far fa-smile");
						$("#icon").addClass("far fa-frown");
						$("#PassStrong").val("1");
					}

				});

$('#nati').on('change', function() {
	if (this.value == 188) {

		$("#pass_id").prop('disabled', true);
		$("#unhcr").prop('disabled', true);
		$("#unc_id").prop('disabled', true);

		$("#id_no").prop('disabled', false);
		$('#id_no').val();

	} else {

		$("#pass_id").prop('disabled', false);
		$("#unhcr").prop('disabled', false);

		$("#unc_id").prop('disabled', false);
		$("#id_no").prop('disabled', true);
		$('#pass_id').val();

		$('#unhcr').val();

	}

});
$(function() {
	$(".decimal").keydown(
			function(event) {

				if (event.shiftKey == true) {
					event.preventDefault();
				}

				if ((event.keyCode >= 48 && event.keyCode <= 57)
						|| (event.keyCode >= 96 && event.keyCode <= 105)
						|| event.keyCode == 8 || event.keyCode == 9
						|| event.keyCode == 37 || event.keyCode == 39
						|| event.keyCode == 46 || event.keyCode == 190) {

				} else {
					event.preventDefault();
				}

				if ($(this).val().indexOf('.') !== -1 && event.keyCode == 190)
					event.preventDefault();
				// if a decimal has been added, disable the "."-button

			});
});