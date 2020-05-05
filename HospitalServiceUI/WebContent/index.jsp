<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Hospital Service</title>
<link rel="stylesheet" href="Views/bootstrap.min.css">
<script src="Components/jquery-3.3.1.min.js"></script>
<script src="Components/Main.js"></script>
</head>
<body>
	<div class="container">
		<div class="row">
			<div class="col-md-4">
				<h1 id="heading">ADD HOSPITAL</h1>
				<form id="formHospital" name="formHospital">
					Hospital Name:<input id="hospitalName" name="hospitalName"
						type="text" class="form-control form-control-sm"> <br>
					Phone Number: <input id="phoneNumber" name="phoneNumber"
						type="text" class="form-control form-control-sm"> <br>
					Address Line 1: <input id="addrLine1" name="addrLine1" type="text"
						class="form-control form-control-sm"> <br> Address
					Line 2: <input id="addrLine2" name="addrLine2" type="text"
						class="form-control form-control-sm"> <br> Address
					Line 3: <input id="addrLine3" name="addrLine3" type="text"
						class="form-control form-control-sm"> <br> City: <input
						id="city" name="city" type="text"
						class="form-control form-control-sm"> <br> Email
					Address: <input id="emailAddr" name="emailAddr" type="text"
						class="form-control form-control-sm"> <br>
					Description: <input id="description" name="description" type="text"
						class="form-control form-control-sm"> <br> Hospital
					Services: <input id="hospitalServices" name="hospitalServices"
						type="text" class="form-control form-control-sm"> <br>
					Account Number: <input id="accountNumber" name="accountNumber"
						type="text" class="form-control form-control-sm"> <br>
					Bank: <select class="form-control form-control-sm" id='bank'
						name="bank">
						<option selected value=''>--Select Bank--</option>
						<option value='Peoples'>People's</option>
						<option value='Sampath'>Sampath</option>
						<option value='BankofCeylon'>Bank of Ceylon</option>
						<option value='Commercial'>Commercial</option>
					</select> <br> Hospital Charge: <input id="charge" name="charge"
						type="text" class="form-control form-control-sm"> <br>

					<input id="btnSave" name="btnSave" type="button" value="Save"
						class="btn btn-primary"> <input type="hidden"
						id="hidItemIDSave" name="hidItemIDSave" value="">
				</form>
				<div id="alertSuccess" class="alert alert-success"></div>
				<div id="alertError" class="alert alert-danger"></div>
				<br>

			</div>
			<div class="col-md-8">
				<div class="container">
					<h2>Hospital Table</h2>
					<p>Available Hospitals:</p>
					<table class="table table-striped" id="hospitalTable">
						<thead>
							<tr>
								<th>Hospital Name</th>
								<th>Phone Number</th>
								<th>Address Line 1</th>
								<th>Address Line 2</th>
								<th>Address Line 3</th>
								<th>City</th>
								<th>Email Address</th>
								<th>Description</th>
								<th>Hospital Services</th>
								<th>Account Number</th>
								<th>Bank</th>
								<th>Hospital Charge</th>
							</tr>
						</thead>
						<tbody>
						
						</tbody>
					</table>
				</div>
			</div>
		</div>
	</div>
</body>
</html>