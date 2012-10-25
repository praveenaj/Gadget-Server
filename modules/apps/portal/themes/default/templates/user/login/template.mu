<div class="container">

<div class="row">

    <div class="span6 offset3 txt-center intro-txt">
        <h1>Build customized dashboards and pages in no time!</h1>
    </div>
</div>


<div class="row">

    <div class="login-box span5 center-box txt-center img-rounded box-shadow">

        <div id="alert" class="alert alert-error txt-center">
            <a href="#" class="close" data-dismiss="alert">×</a>

            <div id="alert-msg"></div>
        </div>

        <form>

            <span class="txt-center">Sign in below or <a href="{{appContext}}/register.jag">Create a new
                account</a></span>
            <hr>
            <fieldset>

                <input id="username" name="username" type="text" placeholder="Username">


                <input id="password" name="password" type="password" placeholder="Password">
                <span class="help-block"><small><a href="#">Forgot password?</a></small></span>
            </fieldset>
            <hr>
            <fieldset>
                <button id="loginBtn" type="button" class="btn btn-primary btn-large"><span id="signin">Sign in</span><span
                        id="loading" style="display: none;"><img
                        src="{{appContext}}/themes/{{theme}}/img/ajax-loader.gif" style="height:19px"></span></button>
            </fieldset>
        </form>
    </div>

</div>
