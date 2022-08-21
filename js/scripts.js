window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});
(function () {
    'use strict'
    let form = document.getElementById("formConsult");
    form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
        }
        form.classList.add('was-validated')
        let name = document.getElementById("nameForm").value;
        let email = document.getElementById("emailForm").value;
        let message = document.getElementById("messageForm").value;
        if((name != null && name != "") && (email != null && email != "") && (message != null && message != "")){
            //console.log(name, email, message);

            let req = {
                title: 'foo',
                body: 'bar',
                userId: 1,
            }
            const options = {
                method: 'POST',
                body: JSON.stringify(req),
                headers: { 'Content-Type': 'application/json; charset=UTF-8' },
            }

            fetch('https://jsonplaceholder.typicode.com/posts', options)
            .then(data => {
                if (!data.ok) {
                    throw Error(data.status);
                }
                    return data.json();
                }).then(update => {
                    console.log(update);
                    let alert = document.getElementById("alr");
                    alert.style.display = "block";
                }).catch(e => {
                    console.log(e);
                });
        }
    }, false)

  })()