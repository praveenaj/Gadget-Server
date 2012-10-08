<!-- Example row of columns -->
<div class="row">

    <div class="span6 offset3 txt-center intro-txt">
        <h1>Get your Gadget Server account now!</h1>
        <!--
        <span>Open Social <i></i> Elastically scaling <i></i> Multi-tenant</span>
        -->
    </div>
</div>


<div class="row">

    <div id="register-box" class="span5 center-box img-rounded box-shadow">
        <form>
            <fieldset>
                <label>Choose a username</label>
                <input id="username" class="span3" name="username" type="text" placeholder="ex: john123">
                <button id="btn-availability" type="submit" class="btn span2 pull-right">Check availability</button>
            </fieldset>
            <hr>

            <fieldset>
								<span class="span2">
									<label>First name</label>
									<input class="span2" id="fname" name="firstname" type="text">
								</span>
								<span class="span2 pull-right">
									<label>Last name</label>
									<input class="span2" id="lname" name="lastname" type="text">
								</span>
            </fieldset>

            <fieldset>
								<span class="span2">
									<label>Password</label>
									<input class="span2" id="password" name="password1" type="password">
								</span>
								<span class="span2 pull-right">
									<label>Confirm password</label>
									<input class="span2" id="re-password" name="password" type="password">
								</span>
            </fieldset>

            <fieldset>
								<span class="span4">
									<label>Your email</label>
									<input class="span4" id="email" name="email" type="text">
								</span>

            </fieldset>

            <hr>
            <fieldset>
                <button type="button" class="btn btn-info" onclick="javascript:User.register();">Sign up</button>
            </fieldset>
        </form>
    </div>

</div>
