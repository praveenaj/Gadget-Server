Caramel.initializer("dashboard", {

    preInitialize:function (data) {
        Caramel.addHeaderJS("dashboard", "dashboardShindig", "http://localhost:9763/gadgets/js/container:open-views:opensearch:rpc:xmlutil:pubsub-2.js?c=1&debug=1&container=default");
        Caramel.addHeaderJS("dashboard", "dashboardcont", "templates/dashboard/js/container.js");
        Caramel.addHeaderJS("dashboard", "dashboardinit", "templates/dashboard/js/init.js");

    }
});