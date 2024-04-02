// back to top

document.addEventListener('DOMContentLoaded', function () {
    span.onclick = function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };  
});

let span = document.getElementById("backToTop");
window.onscroll = function () {
    this.scrollY >= 500 ? span.classList.add("show") : span.classList.remove("show");
};

//

// header links transitions

document.addEventListener('DOMContentLoaded', function () {
    var headerLink = document.getElementById("section2");
    headerLink.addEventListener('click', function (event) {
        event.preventDefault(); // prevent the default behavior of jumping to the section

        var section = document.querySelector(event.target.getAttribute('href'));
        var scrollOffset = 140; // adjust this value according to your needs

        if (window.innerWidth < 800) {
            scrollOffset = 60; // adjust scroll offset value for screen width less than 800
        }

        window.scrollTo({
            top: section.offsetTop - scrollOffset,
            behavior: 'smooth' // adds smooth scrolling effect
        });
    });
});
document.addEventListener('DOMContentLoaded', function () {
    var headerLink = document.getElementById("section3");
    headerLink.addEventListener('click', function (event) {
        event.preventDefault(); // prevent the default behavior of jumping to the section

        var section = document.querySelector(event.target.getAttribute('href'));
        var scrollOffset = 90; // default scroll offset value

        if (window.innerWidth < 800) {
            scrollOffset = 80; // adjust scroll offset value for screen width less than 800
        }

        window.scrollTo({
            top: section.offsetTop - scrollOffset,
            behavior: 'smooth' // adds smooth scrolling effect
        });
    });
});
//


// active navigation link, section, page or whatever.
document.addEventListener('DOMContentLoaded', function () {
    var headerLink = document.getElementById("section4");
    headerLink.addEventListener('click', function (event) {
        event.preventDefault(); // prevent the default behavior of jumping to the section

        var section = document.querySelector(event.target.getAttribute('href'));
        var scrollOffset = 60; // adjust this value according to your needs

        if (window.innerWidth < 800) {
            scrollOffset = 0; // adjust scroll offset value for screen width less than 800
        }

        window.scrollTo({
            top: section.offsetTop - scrollOffset,
            behavior: 'smooth' // adds smooth scrolling effect
        });
    });
});
const navLinks = document.querySelectorAll('nav a');

window.addEventListener('scroll', () => {
    const scrolledY = window.scrollY;

    navLinks.forEach(link => {
        const sectionId = link.getAttribute('href').substring(1);
        const section = document.getElementById(sectionId);

        const sectionTop = section.offsetTop - 220;
        const sectionHeight = section.offsetHeight;

        if (scrolledY >= sectionTop && scrolledY < sectionTop + sectionHeight) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});

//

// checkbtn and closebtn for mobile burger menu toggle (it makes checkbtn dissapear while closebtn appear and vice versa)

document.getElementById('check').addEventListener('change', function () {
    var checkBtn = document.querySelector('.checkbtn');
    var closeBtn = document.querySelector('.closebtn');

    if (this.checked) {
        checkBtn.style.display = 'none';
        closeBtn.style.display = 'block';
    } else {
        checkBtn.style.display = 'block';
        closeBtn.style.display = 'none';
    }
});

//

/* this is so when you toggle the burger menu the appears and fades out when
you toggle it once again */

var menu = document.querySelector("nav ul");

function toggleMenu() {
    if (this.checked) {
        menu.style.display = 'block';
        setTimeout(function () {
            menu.style.opacity = '1'; // Fade in the menu
        }, 10);
    } else {
        menu.style.opacity = '0'; // Fade out the menu
        setTimeout(function () {
            menu.style.display = 'none';
        }, 250); // Wait for the fade-out animation to finish
    }
}

// Set the initial display state based on viewport width
if (window.innerWidth < 768) {
    menu.style.display = 'none'; // Hide the menu on mobile
} else {
    menu.style.display = 'flex'; // Show the menu on desktop as flex
    menu.style.flexDirection = 'row'; // Set the flex direction to row
}

document.getElementById('check').addEventListener('change', toggleMenu);


// JavaScript

const mobileToggle = document.getElementById('mobile-toggle');

// Function to apply the mobile theme
function applyMobileTheme() {
    if (mobileToggle.checked) {
        // Apply mobile dark mode styles
        document.body.classList.add('mobile-dark-mode');
        // Save the setting to localStorage
        localStorage.setItem('mobileThemeEnabled', 'true');
    } else {
        // Remove mobile dark mode styles
        document.body.classList.remove('mobile-dark-mode');
        // Save the setting to localStorage
        localStorage.setItem('mobileThemeEnabled', 'false');
    }
}

// Function to toggle desktop theme
function toggleDesktopTheme() {
    const body = document.body;
    body.classList.toggle('desktop-dark-mode');
    // Save the setting to localStorage
    const currentTheme = body.classList.contains('desktop-dark-mode');
    localStorage.setItem('desktopThemeEnabled', currentTheme.toString());
}

// Event listener for the mobile toggle
mobileToggle.addEventListener('change', applyMobileTheme);

// Retrieve the previous settings from localStorage and apply them
const previousMobileTheme = localStorage.getItem('mobileThemeEnabled');
const previousDesktopTheme = localStorage.getItem('desktopThemeEnabled');

if (previousMobileTheme === 'true') {
    mobileToggle.checked = true;
    applyMobileTheme();
}

if (previousDesktopTheme === 'true') {
    toggleDesktopTheme();
}



//

// JavaScript code
