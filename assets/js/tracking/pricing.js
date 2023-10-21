import { controlContactModule } from "../modules/contact.module.js"

//Measurement ID
const measurementID = "G-00VKM23QFH"
let current_session_number = ""

//Getting the session_number parameter from the gtag library
let sessionNumberPromise = new Promise((resolve) => {
  gtag("get", measurementID, "session_number", resolve)
})

sessionNumberPromise.then((session_number) => {
  current_session_number = session_number
})

//Fire event when the user clicks on the package buttons
const packageButtons = document.querySelectorAll('[data-gtm-att]:not([data-gtm-att="contact"])')

if (packageButtons == "undefined") {
  throw new Error("Package buttons not found")
}

const logPackageButtonClick = (button) => {
  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({
    event: "clicked_package_button",
    package_type: button?.id,
    event_session_number: current_session_number,
  })
}

packageButtons.forEach((packageButton) => {
  packageButton.addEventListener("click", (e) => {
    logPackageButtonClick(e);
    controlContactModule();
  })
})

const contactButtons = document.querySelectorAll('[data-gtm-att="contact"]')
if (contactButtons == "undefined") {
  throw new Error("Contact buttons not found")
}

contactButtons.forEach((contactButton) => {
  contactButton.addEventListener('click', () => {
    window.dataLayer = window.dataLayer || []
    window.dataLayer.push({
        event: "clicked_contact_us",
        event_session_number: current_session_number,
    });
    controlContactModule();
  });
})
