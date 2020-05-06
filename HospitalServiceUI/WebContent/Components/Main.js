$(document).ready(function() {
	if ($("#alertSuccess").text().trim() == "") {
		$("#alertSuccess").hide();
	}
	$("#alertError").hide();
	refresh();

});

// SAVE ============================================
$(document)
		.on(
				"click",
				"#btnSave",
				function(event) {
					// Clear alerts---------------------
					$("#alertSuccess").text("");
					$("#alertSuccess").hide();
					$("#alertError").text("");
					$("#alertError").hide();

					// Form validation-------------------
					var status = validateItemForm();
					if (status != true) {
						$("#alertError").text(status);
						$("#alertError").show();
						return;
					}

					var formObj = $("#formHospital")
					var hospital = {}
					hospital["h_name"] = formObj.find("#hospitalName").val()
							.trim()
					hospital["h_phone"] = formObj.find("#phoneNumber").val()
							.trim()
					hospital["h_addrLine1"] = formObj.find("#addrLine1").val()
							.trim()
					hospital["h_addrLine2"] = formObj.find("#addrLine2").val()
							.trim()
					hospital["h_addrLine3"] = formObj.find("#addrLine3").val()
							.trim()
					hospital["h_city"] = formObj.find("#city").val().trim()
					hospital["h_email"] = formObj.find("#emailAddr").val()
							.trim()
					hospital["h_desc"] = formObj.find("#description").val()
							.trim()
					hospital["h_services"] = formObj.find("#hospitalServices")
							.val().trim()
					hospital["h_accountNo"] = formObj.find("#accountNumber")
							.val().trim()
					hospital["h_bank"] = formObj.find("#bank").val().trim()
					hospital["h_charge"] = formObj.find("#charge").val().trim()

					var type = ($("#hidItemIDSave").val() == "") ? "POST"
							: "PUT";
					serviceUrl = "http://localhost:8085/HospitalService/HospitalService/hospitals"
					if (type == "PUT") {
						serviceUrl = "http://localhost:8085/HospitalService/HospitalService/hospitals/"
						// + $("#hidItemIDSave").val().trim()
						hospital["h_ID"] = $("#hidItemIDSave").val()

					}
					$.ajax({
						url : serviceUrl,
						type : type,
						data : JSON.stringify(hospital),
						contentType : "application/json",
						beforeSend : function(xhr) {
							xhr.setRequestHeader("Authorization", "Basic "
									+ btoa("admin" + ":" + "admin"));
						},
						complete : function(response, status) {
							onItemSaveComplete(response.responseText, status);
						}
					});
				});

// UPDATE==========================================
$(document).on(
		"click",
		".btnUpdate",
		function(event) {
			$("#heading").text("Update Hospital")
			$("#hidItemIDSave").val(
					$(this).closest("tr").find('#hidItemIDUpdate').val());
			$("#hospitalName").val(
					$(this).closest("tr").find('td:eq(0)').text());
			$("#phoneNumber")
					.val($(this).closest("tr").find('td:eq(1)').text());
			$("#addrLine1").val($(this).closest("tr").find('td:eq(2)').text());
			$("#addrLine2").val($(this).closest("tr").find('td:eq(3)').text());
			$("#addrLine3").val($(this).closest("tr").find('td:eq(4)').text());
			$("#city").val($(this).closest("tr").find('td:eq(5)').text());
			$("#emailAddr").val($(this).closest("tr").find('td:eq(6)').text());
			$("#description")
					.val($(this).closest("tr").find('td:eq(7)').text());
			$("#hospitalServices").val(
					$(this).closest("tr").find('td:eq(8)').text());
			$("#accountNumber").val(
					$(this).closest("tr").find('td:eq(9)').text());
			$("#bank").val($(this).closest("tr").find('td:eq(10)').text());
			$("#charge").val($(this).closest("tr").find('td:eq(11)').text());
		});

$(document)
		.on(
				"click",
				".btnRemove",
				function(event) {
					var r = confirm("Do you want to delete this record");
					if (r == true) {
						serviceUrl = "http://localhost:8085/HospitalService/HospitalService/hospitals/"
						// + $(this).data("h_ID")
						$.ajax({
							url : serviceUrl,
							type : "DELETE",
							data : "{h_ID : " + $(this).data("h_id") + "}",
							contentType : "application/json",
							beforeSend : function(xhr) {
								xhr.setRequestHeader("Authorization", "Basic "
										+ btoa("admin" + ":" + "admin"));
							},
							complete : function(response, status) {
								onItemDeleteComplete(response.responseText,
										status);
								console.log(status)
							}

						});
					}
				});

// CLIENTMODEL=========================================================================
function validateItemForm() {

	// HOSPITAL NAME
	if ($("#hospitalName").val().trim() == "") {
		return "Insert Hospital Name.";
	}

	// PHONE NUMBER
	if ($("#phoneNumber").val().trim() == "") {
		return "Insert Phone Number.";
	}
	var phoneNo = $("#phoneNumber").val().trim();
	if (!$.isNumeric(phoneNo)) {
		return "Phone Number should be numeric.";
	}

	// ADDRESSLINE1
	if ($("#addrLine1").val().trim() == "") {
		return "Insert Address Line 1.";
	}

	// ADDRESSLINE2
	if ($("#addrLine2").val().trim() == "") {
		return "Insert Address Line 2.";
	}

	// //ADDRESSLINE3
	// if ($("#addrLine3").val().trim() == "") {
	// return "Insert Address Line 3.";
	// }

	// CITY
	if ($("#city").val().trim() == "") {
		return "Insert City.";
	}

	// EMAILADDRESS
//	if ($("#emailAddr").val().trim() == "") {
//		return "Insert Email Address.";
//	}
	
		
		// Email
		if ($("#emailAddr").val().trim() == "") {
			return "Insert email Address.";
		}
		
		var statusemail = validateEmail();	
		if( statusemail != true ){
			return "Invalid Email Address"
		}
		
	

	function validateEmail() {
	    var emailID = document.formHospital.emailAddr.value;
	    atpos = emailID.indexOf("@");
	    dotpos = emailID.lastIndexOf(".");
	    
	    if (atpos < 1 || ( dotpos - atpos < 2 )) {
	       //alert("Please enter correct email ID")
	       document.formHospital.emailAddr.focus() ;
	       return false;
	    }
	    return( true );
	 }

	// DESCRIPTION
	if ($("#description").val().trim() == "") {
		return "Insert Description.";
	}

	// HOSPITALSERVICES
	if ($("#hospitalServices").val().trim() == "") {
		return "Insert Hospital Services.";
	}

	// ACCOUNTNUMBER
	if ($("#accountNumber").val().trim() == "") {
		return "Insert Account Number.";
	}
	var accNo = $("#accountNumber").val().trim();
	if (!$.isNumeric(accNo)) {
		return "Account Number should be numeric.";
	}

	// BANK
	if ($("#bank").val().trim() == "") {
		return "Insert Bank.";
	}

	// CHARGE
	if ($("#charge").val().trim() == "") {
		return "Insert Hospital Charge.";
	}
	var hosCharge = $("#charge").val().trim();
	if (!$.isNumeric(hosCharge)) {
		return "Insert a numerical value for Hospital Charge.";
	}
	$("#charge").val(parseFloat(hosCharge).toFixed(2));

	return true;
}

function onItemSaveComplete(response, status) {
	if (status == "success") {
		var resultSet = JSON.parse(response);
		if (resultSet.status.trim() == "success") {
			$("#alertSuccess").text("Successfully saved.");
			$("#alertSuccess").show();
			$("#divItemsGrid").html(resultSet.data);
		} else if (resultSet.status.trim() == "error") {
			$("#alertError").text(resultSet.data);
			$("#alertError").show();
		}
	} else if (status == "error") {
		$("#alertError").text("Error while saving.");
		$("#alertError").show();
	} else {
		$("#alertError").text("Unknown error while saving..");
		$("#alertError").show();
	}
	$("#hidItemIDSave").val("");
	$("#formHospital")[0].reset();
	$("#heading").text("Create Hospital");
	refresh();

}

function onItemDeleteComplete(response, status) {
	if (status == "success") {
		var resultSet = JSON.parse(response);
		if (resultSet.status.trim() == "success") {
			$("#alertSuccess").text("Successfully deleted.");
			$("#alertSuccess").show();
			$("#divItemsGrid").html(resultSet.data);
		} else if (resultSet.status.trim() == "error") {
			$("#alertError").text(resultSet.data);
			$("#alertError").show();
		}
	} else if (status == "error") {
		$("#alertError").text("Error while deleting.");
		$("#alertError").show();
	} else {
		$("#alertError").text("Unknown error while deleting..");
		$("#alertError").show();
	}
	refresh()
}

function readHospital(data) {
	$("#hospitalTable tbody").empty();
	var content = ""
	$
			.each(
					data,
					function(index, obj) {
						content += "<tr><td><input id='hidItemIDUpdate' name='hidItemIDUpdate' type='hidden' value='"
								+ obj["id"]
								+ "'>"
								+ obj["hospitalName"]
								+ "</td>";
						content += "<td>" + obj["hospitalPhone"] + "</td><td>"
								+ obj["hospitalAddrLine1"] + "</td><td>"
								+ obj["hospitalAddrLine2"] + "</td><td>"
								+ obj["hospitalAddrLine3"] + "</td>"
						content += "<td>" + obj["hospitalCity"] + "</td><td>"
								+ obj["hospitalEmail"] + "</td><td>"
								+ obj["hospitalDesc"] + "</td><td>"
								+ obj["hospitalServices"] + "</td><td>"
								+ obj["hospitalAccNo"] + "</td><td>"
								+ obj["hospitalBank"] + "</td><td>"
								+ obj["hospitalCharge"]

						content += "<td><input name='btnUpdate' type='button' value='Update' class='btnUpdate btn btn-secondary'></td>"
								+ "<td><input name='btnRemove' type='button' value='Remove' class='btnRemove btn btn-danger' data-h_id='"
								+ obj["id"] + "'>" + "</td></tr>";
					});
		$("#hospitalTable tbody").append(content);
}

function refresh() {

	serviceUrl = "http://localhost:8085/HospitalService/HospitalService/hospitals"
	$.ajax({
		dataType : 'json',
		url : serviceUrl,
		beforeSend : function(xhr) {
			xhr.setRequestHeader("Authorization", "Basic "
					+ btoa("admin" + ":" + "admin"));
		},
		success : function(data) {
			readHospital(data)
		}
	});

}
