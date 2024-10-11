var app = angular.module('app', ['ionic']);

app.controller("MyController", function($scope){
     let registrosSalvos = JSON.parse(localStorage.getItem("registros")) || [];

    $scope.model = {
        'contacts': registrosSalvos
    };
});