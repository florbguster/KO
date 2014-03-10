/// <reference path="../jquery-2.1.0.js" />
/// <reference path="../jquery-2.1.0-vsdoc.js" />
/// <reference path="../knockout-3.1.0.js" />



$(function () {
    // ON LOAD


    var viewModel = {
        // data
        typedWord: ko.observable("")

        //behaviours

    };


    // EVENTS
    $('#AppendedResultSection').on('mouseenter', 'text', function (event) {
        var itemToRemove = ko.dataFor(this);
        itemToRemove.css("color", "Red");
    });

    ko.applyBindings(viewModel);
});