var GadgetStore = GadgetStore || ( function () {
    var addGadgetToUser = function (page, gadgetArea, gadgetPath, gadgetName) {
        $.post("/portal/apis/store/gadgets/store.jag", {
                "action":"addGadgetToUser",
                "page":page,
                "gadgetArea":gadgetArea,
                "gadgetPath":gadgetPath,
                "gadgetName":gadgetName
            },
            function (result) {
                console.log(result)
            }, "json");
    };
    return {
        addGadgetToUser:addGadgetToUser
    };
}());