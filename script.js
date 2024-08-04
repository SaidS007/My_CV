/*
Apache License
Version 2.0, January 2004
http://www.apache.org/licenses/

Copyright 2024 Seydou SARR

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
console.log('Hello, world!');

window.onload = function() {
    var modal = document.getElementById("myModal");
    var span = document.getElementsByClassName("close")[0];
    var modal2 = document.getElementById("myModal2")
    var span2 = document.getElementsByClassName("close2")[0];
    // Afficher la modale lorsque la page est chargée
    modal.style.display = "block";

    // Fermer la modale lorsque l'utilisateur clique sur (x)
    span.onclick = function() {
        modal.style.display = "none";
        modal2.style.display = "block";
    }

    // Fermer la modale lorsque l'utilisateur clique en dehors de la modale
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
            modal2.style.display = "block";
        }
    }
    span2.onclick = function() {
        modal2.style.display = "none";
    }
    window.onclick = function(event) {
        if (event.target == modal2) {
            modal2.style.display = "none";
        }
    }
};
