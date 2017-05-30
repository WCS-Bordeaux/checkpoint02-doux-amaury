'use strict'

angular.module('wildNoteApp')

    .component('header', {
        templateUrl: '/app/components/header/header.html',
        controller: Header
    })

function Header() {
    this.states = [
        {
            name: 'home',
            displayName: 'Home'
        }
    ]
}