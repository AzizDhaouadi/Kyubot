import * as loginEvents from "../tracking_templates/general_events_modules/login_module/loginEvent.js"

import * as purchaseEvents from "../tracking_templates/general_events_modules/purchase_module/purchaseEvent.js"

import * as SeachEvents from "../tracking_templates/general_events_modules/search_module/searchEvent.js"

import * as SelectContentEvents from "../tracking_templates/general_events_modules/select_content_module/selectContentEvent.js"

import * as ShareEvents from "../tracking_templates/general_events_modules/share_module/shareEvent.js"

import * as SignUpEvents from "../tracking_templates/general_events_modules/sign_up_module/signUpEvent.js"

import * as saasAddPaymentInfoEvents from "../tracking_templates/saas_events_modules/add_payment_info_module/addPaymentInfoEvent.js"

import * as saasAddUserEvents from "../tracking_templates/saas_events_modules/add_user_module/addUserEvent.js"

import * as saasBeginCheckoutEvents from "../tracking_templates/saas_events_modules/begin_checkout_module/beginCheckoutEvent.js"

import * as saasCreateAccountEvents from "../tracking_templates/saas_events_modules/create_account_module/createAccountEvent.js"

import * as saasDeleteAccountEvents from "../tracking_templates/saas_events_modules/delete_account_module/deleteAccountEvent.js"

import * as saasGenerateLeadEvents from "../tracking_templates/saas_events_modules/generate_lead_module/generateLeadEvent.js"

import * as saasRemoveUserEvents from "../tracking_templates/saas_events_modules/remove_user_module/removeUserEvent.js"

import * as saasSubscribeEvents from "../tracking_templates/saas_events_modules/subscribe_module/subscribeEvent.js"

import * as saasTrialStartEvents from "../tracking_templates/saas_events_modules/trial_start_module/trialStartEvent.js"

import * as saasTrialEndEvents from "../tracking_templates/saas_events_modules/trial_end_module/trialEndEvent.js"

import * as saasTutorialBeginEvents from "../tracking_templates/saas_events_modules/tutorial_begin_module/tutorialBeginEvent.js"

import * as saasTutorialCompleteEvents from "../tracking_templates/saas_events_modules/tutorial_complete_module/tutorialCompleteEvent.js"

import * as saasUpdateSubscriptionEvents from "../tracking_templates/saas_events_modules/update_subscription_module/updateSubscriptionEvent.js"

import * as saasCancelSubscriptionEvents from "../tracking_templates/saas_events_modules/cancel_subscription_module/cancelSubscriptionEvent.js"

import * as saasRenewSubscriptionEvents from "../tracking_templates/saas_events_modules/renew_subscription_module/renewSubscriptionEvent.js"

import * as ecommerceAddPaymentInfoEvents from "../tracking_templates/ecommerce_events_modules/add_payment_info_module/addPaymentInfoEvent.js"

import * as ecommerceAddShippingInfoEvents from "../tracking_templates/ecommerce_events_modules/add_shipping_info_module/addShippingInfoEvent.js"

import * as ecommerceAddToCartEvents from "../tracking_templates/ecommerce_events_modules/add_to_cart_module/addToCartEvent.js"

import * as ecommerceBeginCheckoutEvents from "../tracking_templates/ecommerce_events_modules/begin_checkout_module/beginCheckoutEvent.js"

import * as ecommercePurhcaseEvents from "../tracking_templates/ecommerce_events_modules/purchase_module/purchaseEvent.js"

import * as ecommerceRefundEvents from "../tracking_templates/ecommerce_events_modules/refund_module/refundEvent.js"

import * as ecommerceRemoveFromCartEvents from "../tracking_templates/ecommerce_events_modules/remove_from_cart_module/removeFromCart.js"

import * as ecommerceSelectItemEvents from "../tracking_templates/ecommerce_events_modules/select_item_module/selectItemEvent.js"

import * as ecommerceViewCartEvents from "../tracking_templates/ecommerce_events_modules/view_cart_module/viewCartEvent.js"

import * as ecommerceViewItemEvents from "../tracking_templates/ecommerce_events_modules/view_item_module/viewItemEvent.js"

import * as ecommerceViewItemListEvents from "../tracking_templates/ecommerce_events_modules/view_list_item_module/viewItemListEvent.js"

const codeGeneratorForm = document.getElementById("codeGeneratorForm");


let codeContainerSection = document.getElementById("code-editor");

const editor = CodeMirror.fromTextArea(codeContainerSection, {
    mode: "javascript",
    theme: "eclipse",
    lineNumbers: true,
    lineWrapping: true,
    matchBrackets: true,
    autoCloseBrackets: true,
    tabSize: 2,
    indentWithTabs: false
});

editor.setValue("// Welcome to our Google Analytics 4 Tracking Code Generator \n\nfunction generateEventTrackingCode(trackingMethod, eventToTrack) {\n  return `Pick the ${eventToTrack} and the ${trackingMethod} and we'll do the rest!`;\n}");

let chosentEventType;
let chosenEventName;
let chosenTrackingMedium;

let addedCustomEventName;
let addedEventParameterNames = [];
let addedEventParameterValues = [];

codeGeneratorForm.addEventListener("submit", (event) => {
    event.preventDefault();

    chosentEventType = codeGeneratorForm.elements["event_type"].value;
    chosenEventName = codeGeneratorForm.elements["event_name"].value;
    chosenTrackingMedium = codeGeneratorForm.elements["tracking_medium"].value;
    addedCustomEventName = codeGeneratorForm.elements["custom_event_name"].value;

    switch (chosentEventType) {
        case "all_properties":
            switch (chosenEventName) {
                case "login":
                    switch (chosenTrackingMedium) {
                        case "dataLayer":
                            editor.setValue(loginEvents.dataLayerLoginEvent);
                            break
                        case "gtag":
                            editor.setValue(loginEvents.gtagLoginEvent);
                            break
                        case "API":
                            editor.setValue(loginEvents.apiLoginEvent);
                            break
                    }

                    break

                case "purchase":
                    switch (chosenTrackingMedium) {
                        case "dataLayer":
                            editor.setValue(purchaseEvents.dataLayerPurchaseEvent);
                            break
                        case "gtag":
                            editor.setValue(purchaseEvents.gtagPurchaseEvent);
                            break
                        case "API":
                            editor.setValue(purchaseEvents.apiPurchaseEvent);
                            break
                    }
                    break

                case "search":
                    switch (chosenTrackingMedium) {
                        case "dataLayer":
                            editor.setValue(SeachEvents.dataLayerSearchEvent);
                            break
                        case "gtag":
                            editor.setValue(SeachEvents.gtagSearchEvent);
                            break
                        case "API":
                            editor.setValue(SeachEvents.apiSearchEvent);
                            break
                    }
                    break

                case "select_content":
                    switch (chosenTrackingMedium) {
                        case "dataLayer":
                            editor.setValue(SelectContentEvents.dataLayerSelectContentEvent);
                            break;
                        case "gtag":
                            editor.setValue(SelectContentEvents.gtagSelectContentEvent);
                            break;
                        case "API":
                            editor.setValue(SelectContentEvents.apiSelectContentEvent);
                            break;
                    }
                    break;

                case "share":
                    switch (chosenTrackingMedium) {
                        case "dataLayer":
                            editor.setValue(ShareEvents.dataLayerShareEvent);
                            break;
                        case "gtag":
                            editor.setValue(ShareEvents.gtagShareEvent);
                            break;
                        case "API":
                            editor.setValue(ShareEvents.apiShareEvent);
                            break;
                    }
                    break

                case "sign_up":
                    switch (chosenTrackingMedium) {
                        case "dataLayer":
                            editor.setValue(SignUpEvents.dataLayerSignUpEvent);
                            break;
                        case "gtag":
                            editor.setValue(SignUpEvents.gtagSignUpEvent);
                            break;
                        case "API":
                            editor.setValue(SignUpEvents.apiSignUpEvent);
                            break;
                    }
                    break;
            }
            break;

        case "SaaS":
            switch (chosenEventName) {
                case "tutorial_begin":
                    switch (chosenTrackingMedium) {
                        case "dataLayer":
                            editor.setValue(saasTutorialBeginEvents.dataLayerTutorialBeginEvent);
                            break
                        case "gtag":
                            editor.setValue(saasTutorialBeginEvents.gtagTutorialBeginEvent);
                            break
                        case "API":
                            editor.setValue(saasTutorialBeginEvents.apiTutorialBeginEvent);
                    }
                    break

                case "tutorial_complete":
                    switch (chosenTrackingMedium) {
                        case "dataLayer":
                            editor.setValue(saasTutorialCompleteEvents.dataLayerTutorialCompleteEvent);
                        case "gtag":
                            editor.setValue(saasTutorialCompleteEvents.dataLayerTutorialCompleteEvent);
                            break
                        case "API":
                            editor.setValue(saasTutorialCompleteEvents.dataLayerTutorialCompleteEvent);
                    }
                    break

                case "add_payment_info":
                    switch (chosenTrackingMedium) {
                        case "dataLayer":
                            editor.setValue(saasAddPaymentInfoEvents.dataLayerAddPaymentInfoEvent);
                            break
                        case "gtag":
                            editor.setValue(saasAddPaymentInfoEvents.gtagAddPaymentInfoEvent);
                            break
                        case "API":
                            editor.setValue(saasAddPaymentInfoEvents.apiAddPaymentInfoEvent);
                            break
                    }
                    break

                case "begin_checkout":
                    switch (chosenTrackingMedium) {
                        case "dataLayer":
                            editor.setValue(saasBeginCheckoutEvents.dataLayerBeginCheckoutEvent);
                            break
                        case "gtag":
                            editor.setValue(saasBeginCheckoutEvents.gtagBeginCheckoutEvent);
                            break
                        case "API":
                            editor.setValue(saasBeginCheckoutEvents.apiBeginCheckoutEvent);
                            break
                    }
                    break

                case "generate_lead":
                    switch (chosenTrackingMedium) {
                        case "dataLayer":
                            editor.setValue(saasGenerateLeadEvents.dataLayerGenerateLeadEvent);
                            break
                        case "gtag":
                            editor.setValue(saasGenerateLeadEvents.gtagGenerateLeadEvent);
                            break
                        case "API":
                            editor.setValue(saasGenerateLeadEvents.apiGenerateLeadEvent);
                            break
                    }
                    break

                case "trial_start":
                    switch (chosenTrackingMedium) {
                        case "dataLayer":
                            editor.setValue(saasTrialStartEvents.dataLayerTrialStartEvent);
                            break
                        case "gtag":
                            editor.setValue(saasTrialStartEvents.gtagTrialStartEvent);
                            break
                        case "API":
                            editor.setValue(saasTrialStartEvents.apiTrialStartEvent);
                            break
                    }
                    break

                case "trial_end":
                    switch (chosenTrackingMedium) {
                        case "dataLayer":
                            editor.setValue(saasTrialEndEvents.dataLayerTrialEndEvent);
                            break
                        case "gtag":
                            editor.setValue(saasTrialEndEvents.gtagTrialEndEvent);
                            break
                        case "API":
                            editor.setValue(saasTrialEndEvents.apiTrialEndEvent);
                            break
                    }
                    break

                case "add_user":
                    switch (chosenTrackingMedium) {
                        case "dataLayer":
                            editor.setValue(saasAddUserEvents.dataLayerAddUserEvent);
                            break
                        case "gtag":
                            editor.setValue(saasAddUserEvents.gtagAddUserEvent);
                            break
                        case "API":
                            editor.setValue(saasAddUserEvents.apiAddUserEvent);
                            break
                    }
                    break

                case "remove_user":
                    switch (chosenTrackingMedium) {
                        case "dataLayer":
                            editor.setValue(saasRemoveUserEvents.dataLayerRemoveUserEvent);
                            break
                        case "gtag":
                            editor.setValue(saasRemoveUserEvents.gtagRemoveUserEvent);
                            break
                        case "API":
                            editor.setValue(saasRemoveUserEvents.apiRemoveUserEvent);
                            break
                    }
                    break

                case "create_account":
                    switch (chosenTrackingMedium) {
                        case "dataLayer":
                            editor.setValue(saasCreateAccountEvents.dataLayerCreateAccountEvent);
                        case "gtag":
                            editor.setValue(saasCreateAccountEvents.gtagCreateAccountEvent);
                            break
                        case "API":
                            editor.setValue(saasCreateAccountEvents.apiCreateAccountEvent);
                            break
                    }
                    break

                case "delete_account":
                    switch (chosenTrackingMedium) {
                        case "dataLayer":
                            editor.setValue(saasDeleteAccountEvents.dataLayerDeleteAccountEvent);
                            break
                        case "gtag":
                            editor.setValue(saasDeleteAccountEvents.gtagDeleteAccountEvent);
                            break
                        case "API":
                            editor.setValue(saasDeleteAccountEvents.apiDeleteAccountEvent);
                            break
                    }
                    break

                case "subscribe":
                    switch (chosenTrackingMedium) {
                        case "dataLayer":
                            editor.setValue(saasSubscribeEvents.dataLayerSubscribeEvent);
                            break
                        case "gtag":
                            editor.setValue(saasSubscribeEvents.gtagSubscribeEvent);
                            break
                        case "API":
                            editor.setValue(saasSubscribeEvents.apiSubscribeEvent);
                            break
                    }
                    break

                case "update_subscription":
                    switch (chosenTrackingMedium) {
                        case "dataLayer":
                            editor.setValue(saasUpdateSubscriptionEvents.dataLayerUpdateSubscriptionEvent);
                            break
                        case "gtag":
                            editor.setValue(saasUpdateSubscriptionEvents.gtagUpdateSubscriptionEvent);
                            break
                        case "API":
                            editor.setValue(saasUpdateSubscriptionEvents.apiUpdateSubscriptionEvent);
                            break
                    }
                    break

                case "cancel_subscription":
                    switch (chosenTrackingMedium) {
                        case "dataLayer":
                            editor.setValue(saasCancelSubscriptionEvents.dataLayerCancelSubscriptionEvent);
                            break
                        case "gtag":
                            editor.setValue(saasCancelSubscriptionEvents.gtagCancelSubscriptionEvent);
                            break
                        case "API":
                            editor.setValue(saasCancelSubscriptionEvents.apiCancelSubscriptionEvent);
                            break
                    }
                    break

                case "renew_subscription":
                    switch (chosenTrackingMedium) {
                        case "dataLayer":
                            editor.setValue(saasRenewSubscriptionEvents.dataLayerRenewSubscriptionEvent);
                            break
                        case "gtag":
                            editor.setValue(saasRenewSubscriptionEvents.gtagRenewSubscriptionEvent);
                            break
                        case "API":
                            editor.setValue(saasRenewSubscriptionEvents.apiRenewSubscriptionEvent);
                            break
                    }
                    break
            }
            break

        case "ecommerce":
            switch (chosenEventName) {
                case "add_payment_info":
                    switch (chosenTrackingMedium) {
                        case "dataLayer":
                            editor.setValue(ecommerceAddPaymentInfoEvents.dataLayerAddPaymentInfoEvent);
                            break
                        case "gtag":
                            editor.setValue(ecommerceAddPaymentInfoEvents.gtagAddPaymentInfoEvent);
                            break
                        case "API":
                            editor.setValue(ecommerceAddPaymentInfoEvents.apiAddPaymentInfoEvent);
                            break
                    }
                    break

                case "begin_checkout":
                    switch (chosenTrackingMedium) {
                        case "dataLayer":
                            editor.setValue(ecommerceBeginCheckoutEvents.dataLayerBeginCheckoutEvent);
                            break
                        case "gtag":
                            editor.setValue(ecommerceBeginCheckoutEvents.gtagBeginCheckoutEvent);
                            break
                        case "API":
                            editor.setValue(ecommerceBeginCheckoutEvents.apiBeginCheckoutEvent);
                            break
                    }
                    break

                case "view_list_item":
                    switch (chosenTrackingMedium) {
                        case "dataLayer":
                            editor.setValue(ecommerceViewItemListEvents.dataLayerViewItemListEvent);
                            break
                        case "gtag":
                            editor.setValue(ecommerceViewItemListEvents.gtagViewItemListEvent);
                            break
                        case "API":
                            editor.setValue(ecommerceViewItemListEvents.apiViewItemListEvent);
                            break
                    }
                    break

                case "add_to_cart":
                    switch (chosenTrackingMedium) {
                        case "dataLayer":
                            editor.setValue(ecommerceAddToCartEvents.dataLayerAddToCartEvent);
                            break
                        case "gtag":
                            editor.setValue(ecommerceAddToCartEvents.gtagAddToCartEvent);
                            break
                        case "API":
                            editor.setValue(ecommerceAddToCartEvents.apiAddToCartEvent);
                            break
                    }
                    break

                case "purchase":
                    switch (chosenTrackingMedium) {
                        case "dataLayer":
                            editor.setValue(ecommercePurhcaseEvents.dataLayerPurchaseEvent);
                            break
                        case "gtag":
                            editor.setValue(ecommercePurhcaseEvents.gtagPurchaseEvent);
                            break
                        case "API":
                            editor.setValue(ecommercePurhcaseEvents.apiPurchaseEvent);
                            break
                    }
                    break

                case "select_item":
                    switch (chosenTrackingMedium) {
                        case "dataLayer":
                            editor.setValue(ecommerceSelectItemEvents.dataLayerSelectItemEvent);
                            break
                        case "gtag":
                            editor.setValue(ecommerceSelectItemEvents.gtagSelectItemEvent);
                            break
                        case "API":
                            editor.setValue(ecommerceSelectItemEvents.apiSelectItemEvent);
                            break
                    }
                    break

                case "view_cart":
                    switch (chosenTrackingMedium) {
                        case "dataLayer":
                            editor.setValue(ecommerceViewCartEvents.dataLayerViewCartEvent);
                            break
                        case "gtag":
                            editor.setValue(ecommerceViewCartEvents.gtagViewCartEvent);
                            break
                        case "API":
                            editor.setValue(ecommerceViewCartEvents.apiViewCartEvent);
                            break
                    }
                    break

                case "remove_from_cart":
                    switch (chosenTrackingMedium) {
                        case "dataLayer":
                            editor.setValue(ecommerceRemoveFromCartEvents.dataLayerRemoveFromCartEvent);
                            break
                        case "gtag":
                            editor.setValue(ecommerceRemoveFromCartEvents.gtagRemoveFromCartEvent);
                            break
                        case "API":
                            editor.setValue(ecommerceRemoveFromCartEvents.apiRemoveFromCartEvent);
                            break
                    }
                    break

                case "add_shipping_info":
                    switch (chosenTrackingMedium) {
                        case "dataLayer":
                            editor.setValue(ecommerceAddShippingInfoEvents.dataLayerAddShippingInfoEvent);
                            break
                        case "gtag":
                            editor.setValue(ecommerceAddShippingInfoEvents.gtagAddShippingInfoEvent);
                            break
                        case "API":
                            editor.setValue(ecommerceAddShippingInfoEvents.apiAddShippingInfoEvent);
                            break
                    }
                    break

                case "refund":
                    switch (chosenTrackingMedium) {
                        case "dataLayer":
                            editor.setValue(ecommerceRefundEvents.dataLayerRefundEvent);
                            break
                        case "gtag":
                            editor.setValue(ecommerceRefundEvents.gtagRefundEvent);
                            break
                        case "API":
                            editor.setValue(ecommerceRefundEvents.apiRefundEvent);
                            break
                    }
                    break

                case "view_item":
                    switch (chosenTrackingMedium) {
                        case "dataLayer":
                            editor(ecommerceViewItemEvents.dataLayerViewItemEvent);
                            break
                        case "gtag":
                            editor.setValue(ecommerceViewItemEvents.gtagViewItemEvent);
                            break
                        case "API":
                            editor.setValue(ecommerceViewItemEvents.apiViewItemEvent);
                            break
                    }
                    break
            }
            break

        case "custom_event":
            switch (chosenTrackingMedium) {
                case "dataLayer":
                    for (let eventParameterName = 0; eventParameterName < codeGeneratorForm.querySelectorAll(".added.name").length; eventParameterName++) {
                        addedEventParameterNames.push(codeGeneratorForm.querySelectorAll(".added.name")[eventParameterName].value)
                    }
                    for (let eventParameterValue = 0; eventParameterValue < codeGeneratorForm.querySelectorAll(".added.value").length; eventParameterValue++) {
                        addedEventParameterValues.push(codeGeneratorForm.querySelectorAll(".added.value")[eventParameterValue].value)
                    }

                    let addSectionArray = []
                    let addSection = ""

                    if (addedEventParameterNames.length == 1) {
                        for (let addedEventParameterName = 0; addedEventParameterName < addedEventParameterNames.length; addedEventParameterName++) {
                            for (let addedEventParameterValue = 0; addedEventParameterValue < addedEventParameterValues.length; addedEventParameterValue++) {
                                addSectionArray.push(`'${addedEventParameterNames[addedEventParameterName]}': '${addedEventParameterValues[addedEventParameterValue]}'
                                `)
                            }
                        }
                        addSection = addSectionArray.join("")
                    } else {
                        for (let addedEventParameterName = 0; addedEventParameterName < addedEventParameterNames.length; addedEventParameterName++) {
                            addSectionArray.push(`'${addedEventParameterNames[addedEventParameterName]}': '${addedEventParameterValues[addedEventParameterName]}',
                            `)

                            if (addedEventParameterName == addedEventParameterNames.length - 1) {
                                addSectionArray[
                                    addSectionArray.length - 1
                                ] = `'${addedEventParameterNames[addedEventParameterName]}': '${addedEventParameterValues[addedEventParameterName]}'
                                
                                `
                            }
                        }
                        addSection = addSectionArray.join("")
                    }

                    let generatedCodeZeroParameter =
                        `
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
    'event': '${addedCustomEventName}'
});
                    `

                    let generatedCodeOnePlusParameter = `
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
    'event': '${addedCustomEventName}',
    ${addSection}
});
                    `

                    if (codeGeneratorForm.querySelectorAll(".added.name").length == 0) {
                        editor.setValue(generatedCodeZeroParameter);
                        addedCustomEventName = ""
                        addedEventParameterNames = []
                        addedEventParameterValues = []
                    } else {
                        editor.setValue(generatedCodeOnePlusParameter);
                        addedCustomEventName = ""
                        addedEventParameterNames = []
                        addedEventParameterValues = []
                    }

                    break

                case "gtag":
                    for (let eventParameterName = 0; eventParameterName < codeGeneratorForm.querySelectorAll(".added.name").length; eventParameterName++) {
                        addedEventParameterNames.push(codeGeneratorForm.querySelectorAll(".added.name")[eventParameterName].value)
                    }
                    for (let eventParameterValue = 0; eventParameterValue < codeGeneratorForm.querySelectorAll(".added.value").length; eventParameterValue++) {
                        addedEventParameterValues.push(codeGeneratorForm.querySelectorAll(".added.value")[eventParameterValue].value)
                    }

                    let addSectionArrayGtag = []
                    let addSectionGtag = ""

                    if (addedEventParameterNames.length == 1) {
                        for (let addedEventParameterName = 0; addedEventParameterName < addedEventParameterNames.length; addedEventParameterName++) {
                            for (let addedEventParameterValue = 0; addedEventParameterValue < addedEventParameterValues.length; addedEventParameterValue++) {
                                addSectionArrayGtag.push(`'${addedEventParameterNames[addedEventParameterName]}': '${addedEventParameterValues[addedEventParameterValue]}'
                                
                                `)
                            }
                        }
                        addSectionGtag = addSectionArrayGtag.join("")
                    } else {
                        for (let addedEventParameterName = 0; addedEventParameterName < addedEventParameterNames.length; addedEventParameterName++) {
                            addSectionArrayGtag.push(`'${addedEventParameterNames[addedEventParameterName]}': '${addedEventParameterValues[addedEventParameterName]}',
                            
                            `)

                            if (addedEventParameterName == addedEventParameterNames.length - 1) {
                                addSectionArrayGtag[
                                    addSectionArrayGtag.length - 1
                                ] = `'${addedEventParameterNames[addedEventParameterName]}': '${addedEventParameterValues[addedEventParameterName]}'
                                
                                `
                            }
                        }
                        addSectionGtag = addSectionArrayGtag.join("")
                    }

                    let generatedCodeZeroParameterGtag = `
gtag('event', '${addedCustomEventName}');
                    `

                    let generatedCodeOnePlusParameterGtag = `
gtag('event', '${addedCustomEventName}', {
    ${addSectionGtag}
    }
);
                    `

                    if (codeGeneratorForm.querySelectorAll(".added.name").length == 0) {
                        editor.setValue(generatedCodeZeroParameterGtag)
                        addedCustomEventName = ""
                        addedEventParameterNames = []
                        addedEventParameterValues = []
                    } else {
                        editor.setValue(generatedCodeOnePlusParameterGtag);
                        addedCustomEventName = ""
                        addedEventParameterNames = []
                        addedEventParameterValues = []
                    }

                    break

                case "API":
                    for (let eventParameterName = 0; eventParameterName < codeGeneratorForm.querySelectorAll(".added.name").length; eventParameterName++) {
                        addedEventParameterNames.push(codeGeneratorForm.querySelectorAll(".added.name")[eventParameterName].value)
                    }
                    for (let eventParameterValue = 0; eventParameterValue < codeGeneratorForm.querySelectorAll(".added.value").length; eventParameterValue++) {
                        addedEventParameterValues.push(codeGeneratorForm.querySelectorAll(".added.value")[eventParameterValue].value)
                    }

                    let addSectionArrayApi = []
                    let addSectionApi = ""

                    if (addedEventParameterNames.length == 1) {
                        for (let addedEventParameterName = 0; addedEventParameterName < addedEventParameterNames.length; addedEventParameterName++) {
                            for (let addedEventParameterValue = 0; addedEventParameterValue < addedEventParameterValues.length; addedEventParameterValue++) {
                                addSectionArrayApi.push(`'${addedEventParameterNames[addedEventParameterName]}': '${addedEventParameterValues[addedEventParameterValue]}'
                                
                                `)
                            }
                        }
                        addSectionApi = addSectionArrayApi.join("")
                    } else {
                        for (let addedEventParameterName = 0; addedEventParameterName < addedEventParameterNames.length; addedEventParameterName++) {
                            addSectionArrayApi.push(`'${addedEventParameterNames[addedEventParameterName]}': '${addedEventParameterValues[addedEventParameterName]}',
                            
                            `)

                            if (addedEventParameterName == addedEventParameterNames.length - 1) {
                                addSectionArrayApi[
                                    addSectionArrayApi.length - 1
                                ] = `'${addedEventParameterNames[addedEventParameterName]}': '${addedEventParameterValues[addedEventParameterName]}'
                                
                                `
                            }
                        }
                        addSectionApi = addSectionArrayApi.join("")
                    }

                    let generatedCodeZeroParameterApi = `
'const measurement_id' = 'G-XXXXXXXXXX';
'const api_secret' = 'secret_value';
fetch(\`https://www.google-analytics.com/mp/collect?measurement_id=\${measurement_id}&api_secret=\${api_secret}\`, {
    method: "POST", 
    body: JSON.stringify({ 
        client_id: 'XXXXXXXXXX.YYYYYYYYYY', 
        events: [{ 
            name: '${addedCustomEventName}'            
            }] 
        }) 
});
                    `

                    let generatedCodeOnePlusParameterApi = `
'const measurement_id' = 'G-XXXXXXXXXX';
'const api_secret' = 'secret_value';
fetch(\`https://www.google-analytics.com/mp/collect?measurement_id=\${measurement_id}&api_secret=\${api_secret}\`, {
    method: "POST", 
    body: JSON.stringify({ 
        client_id: 'XXXXXXXXXX.YYYYYYYYYY', 
        events: [{ 
            name: '${addedCustomEventName}', 
                params: { 
                    ${addSectionApi}
                } 
            }] 
        }) 
});
                    `

                    if (codeGeneratorForm.querySelectorAll(".added.name").length == 0) {
                        editor.setValue(generatedCodeZeroParameterApi);
                        addedCustomEventName = ""
                        addedEventParameterNames = []
                        addedEventParameterValues = []
                    } else {
                        editor.setValue(generatedCodeOnePlusParameterApi);
                        addedCustomEventName = ""
                        addedEventParameterNames = []
                        addedEventParameterValues = []
                    }

                    break
            }
            break
    }

    if (chosentEventType == "all_properties" || chosentEventType == "SaaS" || chosentEventType == "ecommerce") {
        window.dataLayer = window.dataLayer || []
        window.dataLayer.push({
            event: "generate_code_sample",
            custom_code_type: chosentEventType,
            custom_code_name: chosenEventName,
            tracking_medium: chosenTrackingMedium,
        });
        analytics.track("Generated Code Sample", {
            category: chosentEventType,
            name: chosenEventName,
            medium: chosenTrackingMedium
        });
    } else {
        window.dataLayer = window.dataLayer || []
        window.dataLayer.push({
            event: "generate_code_sample",
            custom_code_type: chosentEventType,
            custom_code_name: codeGeneratorForm.elements["custom_event_name"].value,
            tracking_medium: chosenTrackingMedium,
            custom_event_parameters: document.querySelectorAll("input.added.name").length
        });
        analytics.track("Generated Code Sample", {
            category: chosentEventType,
            name: codeGeneratorForm.elements["custom_event_name"].value,
            medium: chosenTrackingMedium,
            generated_paramerters: document.querySelectorAll("input.added.name").length
        });
    }

    //Change the upper window text to match the name of the requested event
    const upperWindowText = document.querySelector('.upper_window > p');
    upperWindowText.innerText = `${chosenEventName} Event Tracking Code`.toUpperCase();
})
