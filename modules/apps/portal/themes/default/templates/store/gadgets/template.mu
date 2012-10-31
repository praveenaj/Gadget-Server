<!--
<div style="position: absolute; top: 40px; width: 100%; z-index: -1; height: 70px; background: none repeat scroll 0px 0px rgb(245, 246, 247);   box-shadow: 0 2px 3px rgba(0, 0, 0, 0.2); border-bottom: 1px solid rgb(204, 204, 204);"></div>
-->

<div class="navbar navbar-static-top">
	<div class="header navbar-inner">
		<div class="container">
			<div class="row">
				<div class="span4">
					<h1>Gadget Store</h1>
				</div>
				<div class="span8 pull-right">
					<form class="form-inline">
						<a class="btn link-add-gadget-location" href="#" class="btn">Add Gadget by location</a>
						<input id="search" class="gadget-search" type="text" class="input" placeholder="Search for gadget">
						<button id="btn-gadget-search" type="submit" class="btn">
							<i class="icon-search icon-white"></i>
						</button>
					</form>
				</div>
			</div>
		</div>
	</div>
</div>

<!-- Modal -->
<div class="modal hide fade modal-gadget" tabindex="-1" role="dialog" aria-labelledby="modal-title" aria-hidden="true" style="display: none">
	<div class="modal-header">
		<button type="button" class="close" data-dismiss="modal" aria-hidden="true">
			×
		</button>
		<h3 id="modal-gadget-title">Loading...</h3>
		<div class="modal-gadget-status">
			<i class="icon-ok"></i> Already added
		</div>
	</div>
	<div class="modal-body">
		<div class="modal-left">
			<ul>
				<li>
					<img class="gadget-preview" src="{{appContext}}/themes/default/img/profile-pic.png">
				</li>
				<li>
					<div class="modal-btn-cont">
						<button class="btn btn-primary addGadget" class="btn btn-primary">
							Add Gadget
						</button>
						
						<div class='gadget-add-success' style="display:none"><i class='icon-ok'></i> Already added</div>
					</div>
				</li>
				<li>
					<h4>User ratings</h4>
					<ul class="widget-rating">
						<li>
							<i class="icon-star"></i>
						</li>
						<li>
							<i class="icon-star"></i>
						</li>
						<li>
							<i class="icon-star"></i>
						</li>
						<li>
							<i class="icon-star-empty"></i>
						</li>
						<li>
							<i class="icon-star-empty"></i>
						</li>
					</ul>

				</li>
				<li>
					<h4>12 added this</h4>
				</li>
			</ul>
		</div>
		<div class="modal-right">
			<ul class="nav nav-tabs">
				<li>
					<a href="#description" data-toggle="tab">Gadget Description</a>
				</li>
				<li>
					<a href="#reviews" data-toggle="tab">Reviews</a>
				</li>

			</ul>

			<div class="tab-content">
				<div class="tab-pane active" id="description">
					<div class="modal-description">

						<p id="modal-gadget-desc">
							Loading...
						</p>

					</div>
				</div>
				<div class="tab-pane" id="reviews">
					<div class="modal-reviews">

						<ul id="ul-reviews" data-loading="false">
							<li>
								<p>
									Review 1 goes here...
								</p><span><img src="{{appContext}}/themes/default/img/profile-pic.png"> John Doe <small>12 Sep 2012</small></span>
							</li>
							<li>
								<p>
									Review 1 goes here...
								</p><span><img src="{{appContext}}/themes/default/img/profile-pic.png"> John Doe <small>12 Sep 2012</small></span>
							</li>
							<li>
								<p>
									Review 1 goes here...
								</p><span><img src="{{appContext}}/themes/default/img/profile-pic.png"> John Doe <small>12 Sep 2012</small></span>
							</li>
							<li>
								<p>
									Review 1 goes here...
								</p><span><img src="{{appContext}}/themes/default/img/profile-pic.png"> John Doe <small>12 Sep 2012</small></span>
							</li>
							<li>
								<p>
									Review 1 goes here...
								</p><span><img src="{{appContext}}/themes/default/img/profile-pic.png"> John Doe <small>12 Sep 2012</small></span>
							</li>
							<li>
								<p>
									Review 1 goes here...
								</p><span><img src="{{appContext}}/themes/default/img/profile-pic.png"> John Doe <small>12 Sep 2012</small></span>
							</li>
							<li>
								<p>
									Review 1 goes here...
								</p><span><img src="{{appContext}}/themes/default/img/profile-pic.png"> John Doe <small>12 Sep 2012</small></span>
							</li>
							<li>
								<p>
									Review 1 goes here...
								</p><span><img src="{{appContext}}/themes/default/img/profile-pic.png"> John Doe <small>12 Sep 2012</small></span>
							</li>
						</ul>
						<form>
							<textarea rows="3"></textarea>
							<button type="submit" class="btn">
								Submit
							</button>
						</form>
					</div>
				</div>

			</div>

		</div>
	</div>

</div>

<!-- Modal -->

<div class="modal hide fade modal-add-gadget-location" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style="display: none">
	<div class="modal-header">
		<button type="button" class="close" data-dismiss="modal" aria-hidden="true">
			×
		</button>
		<h3 id="myModalLabel">Add Gadget by location</h3>
	</div>
	<div class="modal-body">
		<form>
			<label>Enter the Gadget URL</label>
			<input  class="input-xxlarge" type="text" placeholder="ex: http://domain.com/gadgets/mygadget.xml">
			<span class="help-block">This can be any *.xml file written according to <a href="https://developers.google.com/gadgets/docs/spec">Google Gadget specification.</a> <a href="https://developers.google.com/gadgets/docs/basic">Learn how to write a basic gadget</a></span>
		</form>
	</div>
	<div class="modal-footer">
		<button class="btn" data-dismiss="modal" aria-hidden="true">
			Cancel
		</button>
		<button class="btn btn-primary">
			Add Gadget
		</button>
	</div>
</div>

<div class="container">

	<div class="store row">

		{{#each gadgets}}
		<div class="img-rounded span4 widget">
			<div class="widget-header">
				<a id="{{this.name}}" data-toggle="modal" class="store-gadget-title" data-status="{{#if this.added}}true{{else}}false{{/if}}" data-path="{{this.path}}"><h4>{{this.name}}</h4></a>

				<ul class="widget-controls">

					<li>
						<a id="{{this.name}}" data-toggle="modal" class="store-gadget-title"><i class="icon-resize-full"></i></a>
					</li>

				</ul>
			</div>
			<div class="widget-content">
				<img class="widget-preview" src="{{appContext}}/themes/default/img/profile-pic.png">
				<div class="widget-intro">
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. d pharetra libero venenatis... Path: {{this.path}}
					</p>
					<small class="widget-by">By <a href="#">{{this.author}}</a></small>
				</div>

			</div>

			<div class="widget-footer">
				<div>
					{{#if this.added}}
					<div class='gadget-add-success'>
						<i class='icon-ok'></i> Already added
					</div>
					{{else}}

					<button data-target="{{this.name}}" data-path="{{this.path}}" class="btn btn-primary btn-small addGadget">
						Add Gadget
					</button>

					<ul class="widget-rating">
						<li>
							<i class="icon-star"></i>
						</li>
						<li>
							<i class="icon-star"></i>
						</li>
						<li>
							<i class="icon-star"></i>
						</li>
						<li>
							<i class="icon-star-empty"></i>
						</li>
						<li>
							<i class="icon-star-empty"></i>
						</li>
					</ul>

					<small class="widget-added">12 added this</small>
					{{/if}}
				</div>
			</div>

		</div>
		{{/each}}

	</div>
