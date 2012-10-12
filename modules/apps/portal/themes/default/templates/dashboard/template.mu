<!--
<ul class="gadget_list">
{{#each gadgets}}
<div class="gadget_frame">
<div style="height:300px;">{{{ this }}}</div>
</div>
{{/each}}
</ul>
-->

<section class="widgets">
	<div class="gridster row">
		<ul class="span12">
			{{#each gadgets}}
			<!-- load row and column from the db, auto-adjust height according to iframe height-->
			<li class="img-rounded span4" data-row="1" data-col="1" data-sizex="1" data-sizey="1">
				<div>
					<div class="widget-header">
						<h2>Widget Title</h2>
						<a class="show-options"><img src="{{appContext}}/themes/{{theme}}/img/icon-widget-three-dots.png"></a>
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
						{{{ this }}}
					</div>

				</div>

			</li>
			{{/each}}
		</ul>
	</div>

</section>

