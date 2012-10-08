Caramel.initializer("layout/base", {

    preInitialize:function (data) {
        Caramel.addHeaderJS("layout/base", "flot", "http://people.iola.dk/olau/flot/jquery.flot.js");
        Caramel.addHeaderJS("layout/base", "flotpie", "http://people.iola.dk/olau/flot/jquery.flot.pie.js");
        Caramel.addHeaderJS("layout/base", "line", "templates/layout/base/js/line.js");
        Caramel.addHeaderJS("layout/base", "pie", "templates/layout/base/js/pie.js");
    }
});