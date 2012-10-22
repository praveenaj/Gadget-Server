<footer>
	<hr>
	<p>
		&copy; WSO2 2012
	</p>
</footer>

</div>

	
<!-- /container -->

<!-- Le javascript -->
<!--
<script type="text/javascript" src="{{appContext}}/themes/{{theme}}/js/jquery-1.8.2.min.js"></script>
<script type="text/javascript" src="{{appContext}}/themes/{{theme}}/js/jquery.gridster.js"></script>
<script src="{{appContext}}/themes/{{theme}}/js/bootstrap.js"></script>
-->
<script type="text/javascript" src="themes/default/js/jquery-1.8.2.min.js"></script>
<script type="text/javascript" src="themes/default/js/jquery.gridster.js"></script>
<script src="themes/default/js/bootstrap.js"></script>

<!-- Le HTML5 shim, for IE6-8 support of HTML5 elements -->
<!--[if lt IE 9]>
<script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
<![endif]-->
{{printJS}}

<script>
	$(function() {

		$('#myTab a:first').tab('show');

		// define gridster's its own namespace inside jQuery object
		$.gridster = {
			positions : [],
			full_width : false
		};

		$(".gridster > ul").gridster({
			widget_margins : [10, 10],
			widget_base_dimensions : [370, 370]
		});


 function autoIframe(frameId){
        try{
            frame = $(frameId);
            innerDoc = (frame.contentDocument) ? frame.contentDocument : frame.contentWindow.document;
 
            if (innerDoc == null){
                            // Google Chrome
                frame.height = document.all[frameId].clientHeight + document.all[frameId].offsetHeight + document.all[frameId].offsetTop;
                alert("Chrome!");
            }
                    else{
                    objToResize = (frame.style) ? frame.style : frame;
                    objToResize.height = innerDoc.body.scrollHeight + 18;
                    }
        }
 
        catch(err){
                alert('Err: ' + err.message);
            window.status = err.message;
        }
    }
    
    
    
		 
		$('iframe').load(function() {
			// Set inline style to equal the body height of the iframed content.
			//this.style.height = this.contentWindow.document.body.offsetHeight + 'px';
		//	this.style.height = (this.contentWindow.document.body.scrollHeight - 100) +  'px';
			//alert($(this).height() );
			//alert( (this.contentWindow.document.body.scrollHeight) +  'px' );
			//$(this).height((this.contentWindow.document.body.scrollHeight) +  'px' );
		//	if (window.parent && window.parent.autoIframe) {
		//		window.parent.autoIframe($(this));
		//	}
			//alert($("iframe",top.document).height());
			
		});

		$(".gridster .widget-content > iframe").load(function() {
			//$(".gridster > ul > li").height($(this).height() + 70);
			//$(".gridster .widget-content").height($(this).height());
			//alert($(this).height() );
//			$(this).height($(this).contents().find("html").height());

// var heightDiv  = jQuery("iframe",top.document).contents().attr("height")+"px";                                        
//jQuery("iframe",top.document).css({height:heightDiv});
                 
		});

		function responsiveWidget() {
			var idx = 1;

			if ($('.span12').width() <= 724 && $.gridster.full_width === false) {// when scaled down
				$.gridster.positions.length = 0;
				// clear previous positions
				$.gridster.full_width = true;
				$('.gridster > ul >li').each(function() {
					var row = $(this).attr('data-row');
					var col = $(this).attr('data-col');
					$.gridster.positions.push({
						"row" : row,
						"col" : col
					});
					$(this).attr({
						'data-col' : '1',
						'data-row' : idx
					});
					idx++;
				});

			} else if ($('.span12').width() > 724 && $.gridster.full_width === true) {// when scaled up
				$.gridster.full_width = false;
				$('.gridster > ul >li').each(function() {
					$(this).attr({
						'data-col' : $.gridster.positions[idx - 1].col,
						'data-row' : $.gridster.positions[idx - 1].row
					});
					idx++;
				});

			}

		}

		$(window).bind('resize', responsiveWidget);
		$(document).bind('ready', responsiveWidget);


	});
/*

    $(function(){
    
        var iFrames = $('iframe');
      
    	function iResize() {
    	
    		for (var i = 0, j = iFrames.length; i < j; i++) {
    		  iFrames[i].style.height = iFrames[i].contentWindow.document.body.offsetHeight + 'px';}
    	    }
    	    
        	if ($.browser.safari || $.browser.opera) { 
        	
        	   iFrames.load(function(){
        	       setTimeout(iResize, 0);
               });
            
        	   for (var i = 0, j = iFrames.length; i < j; i++) {
        			var iSource = iFrames[i].src;
        			iFrames[i].src = '';
        			iFrames[i].src = iSource;
               }
               
        	} else {
        	   iFrames.load(function() { 
        	       this.style.height = this.contentWindow.document.body.offsetHeight + 'px';
        	   });
        	}
        
        });
        
       */ 
       
       /*
       
        function autoIframe(frameId){
        try{
            frame = document.getElementById(frameId);
            innerDoc = (frame.contentDocument) ? frame.contentDocument : frame.contentWindow.document;
 
            if (innerDoc == null){
                            // Google Chrome
                frame.height = document.all[frameId].clientHeight + document.all[frameId].offsetHeight + document.all[frameId].offsetTop;
            }
                    else{
                    objToResize = (frame.style) ? frame.style : frame;
                    objToResize.height = innerDoc.body.scrollHeight + 18;
                    }
        }
 
        catch(err){
                alert('Err: ' + err.message);
            window.status = err.message;
        }
    }
    */
   
   function sizeFrame() {
          jQuery("#testFrame", top.document).css({ height: 0 });
          var heightDiv = jQuery("#testFrame", top.document).contents().find('body').attr('scrollHeight');
         // alert(heightDiv);
          jQuery("#testFrame", top.document).css({ height: heightDiv });
     }
 
     jQuery(function() {
          sizeFrame();
          jQuery("#testFrame").load(sizeFrame);            
     });
</script>

</body>
