'use strict'

const config = [
    "$stateProvider",
    "$urlRouteProvider",
    Config
]

angular
    
    .module('wildNoteApp', [
        "ui.router"
    ])

    .config(config)

    // .factory("Hey", function() {
    //     return {getConseil: () => "utilise les factory pour créer ta ressource !"}
    // })

function Config($stateProvider, $urlRouteProvider) {
    const states = [
        {
            name: "home",
            url: "/",
            component: "home"
        }
    ]

    states.forEach((state) => {
        $stateProvider.state(state)
    })

    $urlRouterProvider.otherwise('/zergling')
}
