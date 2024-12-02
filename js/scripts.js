/*!
* Start Bootstrap - Creative v7.0.7 (https://startbootstrap.com/theme/creative)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-creative/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }
    };

    // Navbar shrink function
    var projectsNavShrink = function () {
        const projectsnavbarCollapsible = document.body.querySelector('#projects');
        if (!projectsnavbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            projectsnavbarCollapsible.classList.remove('navbar-shrink')
        } else {
            projectsnavbarCollapsible.classList.add('navbar-shrink')
        }
    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // // Collapse responsive navbar when toggler is visible
    // const navbarToggler = document.body.querySelector('#mainNav.navbar-toggler');
    // const responsiveNavItems = [].slice.call(
    //     document.querySelectorAll('#mainNav #navbarResponsive .nav-link')
    // );
    // responsiveNavItems.map(function (responsiveNavItem) {
    //     console.log("adding click")
    //     responsiveNavItem.addEventListener('click', () => {
    //         if (window.getComputedStyle(navbarToggler).display !== 'none') {
    //             navbarToggler.click();
    //         }
    //     });
    // });

    // Activate SimpleLightbox plugin for portfolio items
    // new SimpleLightbox({
    //     elements: '#portfolio a.portfolio-image'
    // });
    

    // Ensure initial state hides projects
    document.addEventListener('DOMContentLoaded', () => {
        document.querySelectorAll('.project-card.hidden').forEach(project => {
            project.style.display = 'none';
        });
    });

});

function toggleProjects() {
    const hiddenProjects = document.querySelectorAll('.project-card.hidden');
    const toggleBtn = document.getElementById('toggle-more-btn');
    const isHidden = Array.from(hiddenProjects).some(project => project.style.display === 'none' || !project.style.display);

    if (isHidden) {
        // Show hidden projects
        hiddenProjects.forEach(project => {
            project.style.display = 'block';
        });
        toggleBtn.textContent = 'Show Less';
    } else {
        // Hide projects again
        hiddenProjects.forEach(project => {
            project.style.display = 'none';
        });
        toggleBtn.textContent = 'Show More';
    }
}

function filterProjects(category) {
    var projects = document.getElementsByClassName('project');
    
    if (category === 'all') {
        for (var i = 0; i < projects.length; i++) {
            projects[i].style.display = "block";
        }
    } else {
        for (var i = 0; i < projects.length; i++) {
            if (projects[i].id === category) {
                projects[i].style.display = "block";
            } else {
                projects[i].style.display = "none";
            }
        }
    }
}
