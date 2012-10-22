<div class="navbar navbar-static-top">
	<div class="header navbar-inner">
		<div class="container">
			<div class="row">
				<div class="span4">
					<h1>Edit Profile</h1>
				</div>

			</div>
		</div>
	</div>
</div>

<div class="container">

	<div class="row">

		<div class="profile-box span4 center-box img-rounded box-shadow">

			<div id="alert" class="alert alert-error txt-center">
				<a href="#" class="close" data-dismiss="alert">×</a>

				<div id="alert-msg"></div>
			</div>

			<form>

				<fieldset>
					<div class="controls controls-row span4">
						<span class="span1"> <img class="img-avatar" src="{{appContext}}/themes/default/img/profile-pic.png"> </span>
						<span class="span3"> <h2>John Doe</h2>
							<button id="btn-avatar" type="button"
							class="btn btn-avatar span2">
								Change avatar
							</button> </span>
					</div>
				</fieldset>
				<hr>
				<fieldset>

					<div class="controls controls-row span4">
						<span class="span4">
							<label>First name</label>
							<input class="span3" id="fname" name="firstname" type="text" value="John">
						</span>
					</div>
					<div class="controls controls-row span4">
						<span class="span3">
							<label>Last name</label>
							<input class="span3" id="lname" name="lastname" type="text" value="Doe">
						</span>
					</div>

					<div class="controls controls-row span4">
						<span class="span4"> <label>Current Password</label>
							<input class="span3 in-password" name="password" type="password"
							id="password" value="1234">
						</span>
					</div>
					<div class="controls controls-row span4">
						<span class="span4"> <label>New Password</label>
							<input class="span3 in-password1" name="password1" type="password"
							id="password1">
						</span>
					</div>
					<div class="controls controls-row span4">
						<span class="span4"> <label>Confirm new Password</label>
							<input class="span3 in-password2" name="password" type="password"
							id="password2">
						</span>
					</div>

					<div class="controls controls-row span4">
						<span class="span4"> <label>Your email</label>
							<input class="span3 in-email" id="email" name="email" type="text" value="john@domain.com">
						</span>
					</div>
				</fieldset>

				<hr>
				<fieldset>
					<button type="button" class="btn btn-info" onclick="javascript:User.register();">
						Save Changes
					</button>
				</fieldset>
			</form>
		</div>

	</div>

