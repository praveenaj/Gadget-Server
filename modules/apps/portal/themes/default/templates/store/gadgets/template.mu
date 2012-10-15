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
						<a href="#" class="btn">Add Gadget by location</a>
						<input class="gadget-search" type="text" class="input" placeholder="Search for gadget">
						<button id="" type="submit" class="btn">
							<i class="icon-search icon-white"></i>
						</button>
					</form>
				</div>
			</div>
		</div>
	</div>
</div>

<div class="container">

	<div class="store row">

		{{#each gadgets}}
		<div class="img-rounded span4 widget">
			<div class="widget-header">
				<h4><a href="{{this.url}}">{{this.name}}</a></h4>

				<ul class="widget-controls">

					<li>
						<a href="#"><i class="icon-resize-full"></i></a>
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
				<input type="button" class="btn btn-info btn-small" onclick="GadgetStore.addGadgetToUser('default', 'main', '{{this.path}}', '{{this.name}}')" value="Add Gadget">

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

			</div>

		</div>
		{{/each}}

	</div>
