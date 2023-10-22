import { controlContactModule } from '../modules/contact.module.js'

// Measurement ID
const measurementID = 'G-00VKM23QFH';
let current_session_number;

// Getting the session_number parameter from gtag
let sessionNumberPromise = new Promise(resolve => {
    gtag('get', measurementID, 'session_number', resolve)
});

sessionNumberPromise.then((session_number) => {
    current_session_number = session_number;
});

// Fire dataLayer events for nav link clicks
const navLinks = document.querySelectorAll('nav li a'); // Getting the list of nav links
navLinks.forEach((navLink) => {
    navLink.addEventListener('click', () => {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
            'event': 'clicked_nav_link',
            'nav_item': navLink.textContent.trim()
        }); 
    })
});

// Fire dataLayer events for the clicks on the Typeform button and link
const typeformElements = document.querySelectorAll('#marketing_websites');
typeformElements.forEach((typeformElement) => {
    typeformElement.addEventListener('click', (e) => {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
            'event': 'initiated_contact_form',
            'event_session_number': current_session_number,
            'cta_text': e.target.textContent
        });
        controlContactModule();
    });
});

// Fire dataLayer event for the clicks on the tech stack logos
const techStackLogos = document.querySelectorAll('ul#codeEditorTab a');
techStackLogos.forEach((techStackLogo) => {
    techStackLogo.addEventListener('click', () => {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
           'event': 'click_on_tech_stack_logo',
           'tech_stack_logo': techStackLogo.querySelector('img').getAttribute("alt")
        });
    });
});

// Fire dataLayer event for the clicks on accordion elements
const accordionElements = document.querySelectorAll('a.accordion-button');
accordionElements.forEach((accordionElement) => {
    accordionElement.addEventListener('click', () => {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
            'event': 'clicked_accordion_button',
            'accordion_title': accordionElement.textContent.trim()
        });
    });
})

window.addEventListener("message", function (event) {
        if (event.data.type === "hsFormCallback" && event.data.eventName === "onFormSubmitted") {
            window.dataLayer.push({
                'event': "captured_lead",
                'form_id': event.data.id,
            });
        }
    });