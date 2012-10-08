<div class="container-fluid">

    {{> menu_left}}

    <!-- /dashboard tabs -->
    <div class="dashboard-content">
        <div class="row">
            <ul class='sortable-list droptrue half-n-half ui-sortable'>
                <li class="empty-cell"></li>
                <li class="gadget">

                    <div class="gadget_title">Statistics-1</div><div class="controls">
                    <ul class="nav control_tab">
                        <li class="dropdown">
                            <a class="dropdown-toggle" data-toggle="dropdown" href="">
                                <img src="{{appContext}}/themes/default/images/gad_settings.png" alt=""/>
                            </a>
                            <ul class="dropdown-menu">
                                <li><a href="#">Settings</a></li>
                                <li><a href="#">Dashboard Preferences</a></li>
                                <li><a href="#">Profile</a></li>
                                <li class="divider"></li>
                                <li><a href="#"><i class="icon-off"></i> Close Gadget</a></li>
                            </ul>
                        </li>
                    </ul>
                    <a href="#"><img src="{{appContext}}/themes/default/images/gad_maximize.png" alt="" /></a>
                    <a href="#"><img src="{{appContext}}/themes/default/images/gad_close.png" alt="" /></a>

                </div>

                    <div style="clear:both;"></div>


                    <div class="gadget_frame">
                        <div style="height: 300px;"><div id="chart1" style="height: 270px; margin:10px"></div></div>
                    </div>
                </li>

            </ul>

            <ul class='sortable-list droptrue half-n-half ui-sortable'>
                <li class="empty-cell"></li>
                <li class="gadget">

                    <div class="gadget_title">Statistics-2</div><div class="controls">
                    <ul class="nav control_tab">
                        <li class="dropdown">
                            <a class="dropdown-toggle" data-toggle="dropdown" href="">
                                <img src="{{appContext}}/themes/default/images/gad_settings.png" alt=""/>
                            </a>
                            <ul class="dropdown-menu">
                                <li><a href="#">Settings</a></li>
                                <li><a href="#">Dashboard Preferences</a></li>
                                <li><a href="#">Profile</a></li>
                                <li class="divider"></li>
                                <li><a href="#"><i class="icon-off"></i> Close Gadget</a></li>
                            </ul>
                        </li>
                    </ul>
                    <a href="#"><img src="{{appContext}}/themes/default/images/gad_maximize.png" alt="" /></a>
                    <a href="#"><img src="{{appContext}}/themes/default/images/gad_close.png" alt="" /></a>

                </div>

                    <div style="clear:both;"></div>


                    <div class="gadget_frame">
                        <div style="height: 300px;"><div id="chart2" style="height: 270px; margin:10px"></div></div>
                    </div>
                </li>


            </ul>
        </div><!-- /end of row -->

        <div class="row">
            <div class="span4">
                <ul style="list-style-type:none;">
                    <li class="empty-cell"></li>
                    <li class="gadget">

                        <div class="gadget_title">SOA Platform Blog </div><div class="controls">
                        <ul class="nav control_tab">
                            <li class="dropdown">
                                <a class="dropdown-toggle" data-toggle="dropdown" href="">
                                    <img src="{{appContext}}/themes/default/images/gad_settings.png" alt=""/>
                                </a>
                                <ul class="dropdown-menu">
                                    <li><a href="#">Settings</a></li>
                                    <li><a href="#">Dashboard Preferences</a></li>
                                    <li><a href="#">Profile</a></li>
                                    <li class="divider"></li>
                                    <li><a href="#"><i class="icon-off"></i> Close Gadget</a></li>
                                </ul>
                            </li>
                        </ul>
                        <a href="#"><img src="{{appContext}}/themes/default/images/gad_maximize.png" alt="" /></a>
                        <a href="#"><img src="{{appContext}}/themes/default/images/gad_close.png" alt="" /></a>

                    </div>

                        <div style="clear:both;"></div>


                        <div class="gadget_frame">

                            <div style="height:300px;">{{{ gadget }}}</div> </div>
                    </li>

                </ul>
            </div>
            <div class="span9">
                <div class="hero-unit">

                    {{> static side.outputs}}
                </div>
            </div>

        </div>
    </div>
</div> <!-- /container -->