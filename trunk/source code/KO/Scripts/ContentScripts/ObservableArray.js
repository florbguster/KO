/// <reference path="../jquery-2.1.0.js" />
/// <reference path="../jquery-2.1.0-vsdoc.js" />
/// <reference path="../knockout-3.1.0.js" />



$(function () {
    // ON LOAD
    $('#EditMakeInputSection').hide();
    var data = [
        { Id: 1, Name: ko.observable("Audi") },
        { Id: 2, Name: ko.observable("BMW") },
        { Id: 3, Name: ko.observable("Bugatti") },
        { Id: 4, Name: ko.observable("Cadillac") },
        { Id: 5, Name: ko.observable("Chevrolet") },
        { Id: 6, Name: ko.observable("Ferrari") },
        { Id: 7, Name: ko.observable("Ford") },
        { Id: 8, Name: ko.observable("Lamborghini") },
        { Id: 9, Name: ko.observable("Lotus") },
        { Id: 10, Name: ko.observable("Porsche") },
        { Id: 11, Name: ko.observable("Tesla") },
        { Id: 12, Name: ko.observable("Volvo") }
    ];

    var viewModel = {
        // carData
        carMakes: ko.observableArray(data),
        newMakeToAdd: ko.observable(""),
        selectedMake: ko.observable(null),

        //behaviours
        addNewMake: function () {
            this.carMakes.push({ Name: this.newMakeToAdd() });
            this.newMakeToAdd("");
            $('#AddMakeInputSection').focus();
        },

        selectMake: function () {
            viewModel.selectedMake(this);
        }
    };

    $('#CarMakeList').on('click', '.itemEdit', function (event) {
        $('#EditMakeInputSection').show();
        $('#AddMakeInputSection').hide();
        $('#CarMakeList button').prop("disabled", true);
        $('.itemEdit, .itemDelete').css("visibility", "hidden");

        $('#InputSection').on('click', '#SaveButton', function () {
            $('#EditMakeInputSection').hide();
            $('#AddMakeInputSection').show();
            $('#CarMakeList button').prop("disabled", false);
            $('.itemEdit, .itemDelete').css("visibility", "visible");
        });
    });

    $('#CarMakeList').on('click', '.itemDelete', function (event) {
        var itemToRemove = ko.dataFor(this);
        viewModel.carMakes.remove(itemToRemove);
    });

    ko.applyBindings(viewModel);


    // EVENTS

});