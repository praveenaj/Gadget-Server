<div class="navbar navbar-inverse navbar-static-top">
	<div class="header navbar-inner header-dashboard-pages">
		<div class="container">
			<div class="row">
				<ul id="myTab" class="nav nav-tabs">
					<li class="active">
						<a data-toggle="tab" href="#home">Home</a>
					</li>
					<li>
						<a data-toggle="tab" href="#profile">Profile</a>
					</li>
					<li>
						<a data-toggle="tab" href="#messages">Messages</a>
					</li>
					<li>
						<a data-toggle="tab" href="#settings">Settings</a>
					</li>
				</ul>
			</div>
		</div>
	</div>
</div>

<div class="container">
	<div class="row">
		<div class="tab-content">
			<div id="home" class="tab-pane active">
				<div class="gadgets">
					<div class="gridster row">
						<ul class="span12">
							{{#each gadgets}}

							<!-- load row and column from the db, auto-adjust height according to iframe height-->
							<li class="widget img-rounded span4" data-row="{{this.row}}" data-col="{{this.col}}" data-sizex="1" data-sizey="1">
								<div style="height: 100%">
									<div class="widget-header">
										<h2>Widget Title</h2>
										<a class="show-options"><img src="{{appContext}}/themes/default/img/icon-widget-three-dots.png"></a>
										<ul class="widget-controls">
											<li>
												<a href="#"><i class="icon-cog"></i></a>
											</li>
											<li>
												<a href="#"><i class="icon-minus"></i></a>
											</li>
											<li>
												<a href="#"><i class="icon-resize-full"></i></a>
											</li>
											<li>
												<a href="#"><i class="icon-remove"></i></a>
											</li>
										</ul>
									</div>
									<div class="widget-content">
										{{{ this.content }}}
									</div>

								</div>

							</li>

							{{/each}}

						</ul>
					</div>

					<!-- TODO: get the last row for this button and append to bottom, middle -->

					<div id="add-gadget" class="widget img-rounded span4">
						<a href="{{appContext}}/store.jag"> <img src="{{appContext}}/themes/default/img/icon-gadget-add-new.png"> <span> Add new Gadget here</span> </a>
					</div>

				</div>
			</div>

			<div id="profile" class="tab-pane">
				..dfg.
			</div>
			<div id="messages" class="tab-pane">
				..dfgfd.
			</div>
			<div id="settings" class="tab-pane">
				...dfg
			</div>

		</div>
	</div>
</div>

