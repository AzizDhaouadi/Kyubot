let dataLayerSignUpEvent = `
    window.dataLayer = window.dataLayer || [];
    
    window.dataLayer.push({
        
        'event': 'sign_up',
        
        'method': 'Apple'
        
      });`

let gtagSignUpEvent = `
    gtag('event', 'sign_up', {
        
        'method': 'Apple'
    });`

let apiSignUpEvent = `
'const measurement_id' = 'G-XXXXXXXXXX';

'const api_secret' = 'XXXXXXXXXXXXXXX';

fetch(\`https://www.google-analytics.com/mp/collect?measurement_id=\${measurement_id}&api_secret=\${api_secret}\`, {
  
  method: "POST",
  
  body: JSON.stringify({
    
    client_id: 'XXXXXXXXXX.YYYYYYYYYY',
    
    events: [{
      
      name: 'sign_up',
      
      params: {
        
        'method': 'Apple',
        
      }
      
    }]
      
});`

export { dataLayerSignUpEvent, gtagSignUpEvent, apiSignUpEvent };