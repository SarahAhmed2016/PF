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

$("#SaveRef")
		.on(
				"click",
				function(e) {

					var status = 0;

					var status_valid = 0;
					var v_mobile = 0;
					var status_Notvalid = 0;
					var v_email = 0;
					$(".Ref").each(
							function(e) {

								var trimvalue = $.trim(this.value);
								if (typeof this.value == "undefined"
										|| trimvalue.length == 0) {

									$(this).css("border-color", "red");

									status = 1;
								} else {

									$(this).css("border-color", "#ced4da");
									status = 0;
								}

							});
					$(".mobile").each(
							function(e) {
								var trimvalue = $.trim(this.value);

								if (typeof this.value == "undefined"
										|| trimvalue.length <= 9) {

									$(this).css("border-color", "red");

									v_mobile = 1;
								} else {
									v_mobile = 0;
									$(this).css("border-color", "#ced4da");
								}

							});
					$(".email")
							.each(
									function(e) {
										var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
										var trimvalueemail = $.trim($(this)
												.val());

										if (typeof this.value == "undefined"
												|| trimvalueemail.length == 0) {
											$(this).css("border-color",
													"#ced4da");
											v_email = 0;
										} else {
											var EmailValid;

											EmailValid = regex
													.test(trimvalueemail);

											if (!(EmailValid)) {
												$(this).css("border-color",
														"red");

												v_email = 1;
											} else {

												$(this).css("border-color",
														"#ced4da");
												v_email = 0;
											}
										}

									});
					if (status == 1) {
						$("#beforSaveRef").text("يجب ادخال الحقول المطلوبة");
						e.preventDefault();

					} else if (v_mobile == 1) {

						$("#beforSaveRef").text(
								"يرجى التأكد من رقم الهاتف المدخل ");
						e.preventDefault();
					} else if (v_email == 1) {

						$("#beforSaveRef").text(
								"تأكد من البريد الالكتروني المدخل ");
						e.preventDefault();
					} else {
						$("#beforSaveRef").text(" ");
					}

				});
$("#SaveExp").on("click", function(e) {

	var status = 0;

	var status_valid = 0;

	var status_Notvalid = 0;

	var ListVar = 0;

	var ListVar_counter = 0;
	var ListVar_valid = 0;
	var ListVar_Notvalid = 0;
	$(".Exp").each(function(e) {

		var trimvalue = $.trim(this.value);
		if (typeof this.value == "undefined" || trimvalue.length == 0) {

			$(this).css("border-color", "red");

			status = 1;
		} else {

			$(this).css("border-color", "#ced4da");
			status = 0;
		}

	});
	$(".ExpV").each(function(e) {

		if (this.value == 0) {

			$(this).css("border-color", "red");

			ListVar_Notvalid = ListVar_Notvalid + 1;
		} else {
			$(this).css("border-color", "#ced4da");
			ListVar_valid = ListVar_valid + 1;
		}

	});
	if (ListVar_Notvalid > 0) {
		ListVar = 1;
	} else {
		ListVar = 0;
	}
	if (status == 1 || ListVar == 1) {
		$("#beforSaveExp").text("يجب ادخال الحقول المطلوبة");
		e.preventDefault();

	} else {
		$("#beforSaveExp").text(" ");
	}
});
$("#SaveEdu").on("click", function(e) {

	var status = 0;

	var status_valid = 0;

	var status_Notvalid = 0;
	var ListVar = 0;

	var ListVar_counter = 0;
	var ListVar_valid = 0;
	var ListVar_Notvalid = 0;
	var v_avg = 0;
	var v_year = 0;
	$(".Edu").each(function(e) {

		var trimvalue = $.trim(this.value);
		if (typeof this.value == "undefined" || trimvalue.length == 0) {

			$(this).css("border-color", "red");

			status_Notvalid = status_Notvalid + 1;
		} else {

			$(this).css("border-color", "#ced4da");
			status_valid = status_valid + 1;
		}

	});
	$(".EduV").each(function(e) {

		if (this.value == 0) {

			$(this).css("border-color", "red");

			ListVar_Notvalid = ListVar_Notvalid + 1;
		} else {
			$(this).css("border-color", "#ced4da");
			ListVar_valid = ListVar_valid + 1;
		}

	});

	$(".year").each(function(e) {

		var trimvalue = $.trim(this.value);
		if (trimvalue.length > 4) {

			var today = new Date();
			var year1 = today.getFullYear();
			var year2 = Number(this.value);
			var acceptYear = year1;
			if (year2 > acceptYear) {

				$(this).css("border-color", "red");
				v_year = 1;
			} else {

				v_year = 0;

			}
		} else if (trimvalue.length < 4 && trimvalue.length != 0) {

			$(this).css("border-color", "red");
			v_year = 1;
		} else

		if (trimvalue.length == 0) {

			$(this).css("border-color", "red");
			status_Notvalid = status_Notvalid + 1;

		}
	});
	$(".avg").each(function(e) {

		var trimvalue = $.trim(this.value);
		if (trimvalue.length > 0) {

			var v_avg_val = this.value;
			if (v_avg_val <= 4) {
				$(this).css("border-color", "#ced4da");
				v_avg = 0;
			} else if (v_avg_val > 100 || v_avg_val < 50) {

				$(this).css("border-color", "red");
				v_avg = 1;
			} else {
				$(this).css("border-color", "#ced4da");
				v_avg = 0;
			}

		} else {

			$(this).css("border-color", "red");
			status_Notvalid = status_Notvalid + 1;
		}

	});
	if (ListVar_Notvalid > 0) {
		ListVar = 1;
	} else {
		ListVar = 0;
	}
	if (status_Notvalid > 0) {
		status = 1;
	} else {
		status = 0;
	}
	if (status == 1 || ListVar == 1) {
		$("#beforSaveEdu").text("يجب ادخال الحقول المطلوبة");
		e.preventDefault();

	} else if (v_year == 1) {

		$("#beforSaveEdu").text("يرجى التأكد من السنة المدخلة");
		e.preventDefault();
	} else if (v_avg == 1) {

		$("#beforSaveEdu").text("يرجى التأكد من المعدل المدخلة");
		e.preventDefault();

	} else {
		$("#beforSaveEdu").text(" ");
	}
});
$("#SaveQueenRaina").on("click", function(e) {

	var status = 0;

	var status_valid = 0;

	var status_Notvalid = 0;
	var ListVar = 0;

	var ListVar_counter = 0;
	var ListVar_valid = 0;
	var ListVar_Notvalid = 0;
	var checkBox = 0;
	$(".queen").each(function(e) {

		var trimvalue = $.trim(this.value);
		if (typeof this.value == "undefined" || trimvalue.length == 0) {

			$(this).css("border-color", "red");

			status = 1;
		} else {

			$(this).css("border-color", "#ced4da");
			status = 0;
		}

	});
	$(".check").each(function(e) {
		if ($(this).prop("checked") == true) {
			checkBox = 0;
			$("#checkBoxDiv").css("background-color", "#ffffff");
		} else if ($(this).prop("checked") == false) {
			checkBox = 1;
			$("#checkBoxDiv").css("background-color", "#ff000061");
		}

	});
	$(".queenV").each(function(e) {

		if (this.value == 0) {

			$(this).css("border-color", "red");

			ListVar_Notvalid = ListVar_Notvalid + 1;
		} else {
			$(this).css("border-color", "#ced4da");
			ListVar_valid = ListVar_valid + 1;
		}

	});

	if (ListVar_Notvalid > 0) {
		ListVar = 1;
	} else {
		ListVar = 0;
	}

	if (status == 1 || ListVar == 1) {
		$("#beforSave").text("يجب ادخال الحقول المطلوبة");
		e.preventDefault();

	} else if (checkBox == 1) {
		$("#beforSave").text("يرجى الموافقة على التعهد");
		e.preventDefault();
	} else {
		$("#beforSave").text(" ");
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