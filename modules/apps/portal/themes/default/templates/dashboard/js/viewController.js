$(function() {
	$.ajax({
		url : apiurl+'portal/dashboards/api.jag?action=listgadgets&dashboardname=default&gadgetarea=main&username=admin',
		dataType : 'json',
		success : function(data) {
			$.each(data.gadgeturls, function() {
				console.log(this.toString());
				window.buildGadgetTemplet();
				window.buildGadget(this.toString(), curId);
				curId++;
			});
		}
	});
	var curId = 0;

	//create a gadget with navigation tool bar header enabling gadget collapse, expand, remove, navigate to view actions.
	window.buildGadget = function(gadgetURL, id) {
		var elem = document.getElementById('gadget-content-' + id);
		var gadget = gadgetURL;
		var container = new osapi.container.Container();
		var site = container.newGadgetSite(elem);
		var renderParams = {
			view : 'home'
		};

		container.preloadGadget(gadget, function(result) {
			var templet = '<li class="widget img-rounded span4" data-row="1" data-col="1" data-sizex="1" data-sizey="1">' + '<div style="height: 100%">' + '<div class="widget-header" id="widget-header-' + curId + '">' + '<h2>' + result[gadget]['modulePrefs'].title + '</h2>' + '<a class="show-options"><img src="../themes/default/img/icon-widget-three-dots.png"></a>' + '<ul class="widget-controls">' + '<li>' + '<a href="#"><i class="icon-cog"></i></a>' + '</li>' + '<li>' + '<a href="#"><i class="icon-minus"></i></a>' + '</li>' + '<li>' + '<a href="#"><i class="icon-resize-full"></i></a>' + '</li>' + '<li>' + '<a href="#"><i class="icon-remove"></i></a>' + '</li>' + '</ul>' + '</div>' + '<div class="widget-content" id="widget-content-' + curId + '">' + '</div>' + '</div>' + '</li>';
			$('#gadget-' + id).append(templet);
			//var elemx = document.getElementById('gadget-content-'+ id);
			//$('#widget-header-' + id).append(elemx);
			if(!result[gadget].error) {
				container.navigateGadget(site, gadget, {}, renderParams);
				$('#gadget-header-' + id).append('<h5>' + result[gadget]['modulePrefs'].title + '</h5>');
				var obj = result[gadget]['userPrefs'];
				var gadgetForm = Object.gadgetForm(obj, curId);
				//console.log(gadgetForm);
				if(gadgetForm != '<div id="formdiv-gadget-site-1"><form id="gadget-form-1"></form></div> ') {
					$('#gadget-header-' + id).append('<br>' + gadgetForm);
				}
			}
		});
	};

	window.buildGadgetTemplet = function() {
		var gadgetdiv = document.createElement('div');
		gadgetdiv.setAttribute('id', 'gadget-' + curId);
		var gadgetHeaderdiv = document.createElement('div');
		gadgetHeaderdiv.setAttribute('id', 'gadget-content-' + curId);
		var gadgetBoadydiv = document.createElement('div');
		gadgetBoadydiv.setAttribute('id', 'gadget-header-' + curId);
		var elem = document.getElementById("gadgets");
		elem.appendChild(gadgetdiv);
		gadgetdiv.appendChild(gadgetBoadydiv);
		gadgetdiv.appendChild(gadgetHeaderdiv);

	};

	// preloadAndAddGadget
	$('#preloadAndAddGadget').click(function() {
		console.log($('#gadgetUrl').val());
		window.buildGadgetTemplet();
		window.buildGadget($('#gadgetUrl').val(), curId);
		var gadgetForm = Object.gadgetForm(obj, curId);
		curId++;
	});

	Object.gadgetForm = function(obj, curId) {
		var size = 0, key;
		var out = "<div id=\"formdiv-gadget-site-" + curId + "\"><form id=\"gadget-form-" + curId + "\">";

		for(key in obj) {
			if(obj.hasOwnProperty(key))
				size++;
			//console.log(size + key);
			var x = obj[key];
			/*
			 console.log(x);
			 console.log(x.dataType);
			 console.log(x.defaultValue);
			 console.log(x.displayName);*/

			if(x.dataType == "STRING") {
				out += x.displayName + ": <input type=\"text\" name=\"" + x.displayName + "\" value=\"" + x.defaultValue + "\"><br>";
			} else if(x.dataType == "BOOL") {
				var chk = "checked";
				if(!x.defaultValue) {
					var chk = "unchecked";
				}
				out += "<input type=\"checkbox\" name=\"" + x.displayName + "\" value=\"" + x.defaultValue + "\" checked=\"" + chk + "\">" + x.displayName + "<br>"
			} else if(x.dataType == "ENUM") {
				//console.log(x.orderedEnumValues.length)
				out += x.displayName + "<select>";
				for(var i = 0; i < x.orderedEnumValues.length; i++) {
				//	console.log(x.orderedEnumValues[i]);
					out += "<option value=\"" + x.orderedEnumValues[i].value + "\""
				//	console.log(x.orderedEnumValues[i].value + " : " + x.defaultValue);
				//	console.log(x.orderedEnumValues[i].value == x.defaultValue);
					if(x.orderedEnumValues[i].value == x.defaultValue) {
						out += "selected=\"true\" >";
					} else {
						out += ">";
					}
					out += x.orderedEnumValues[i].displayValue + "</option>"
				}
				out += "</select><br>";

			}
		}
		out += '</form></div>'
	//	console.log(out);
		return out;
	};
});
