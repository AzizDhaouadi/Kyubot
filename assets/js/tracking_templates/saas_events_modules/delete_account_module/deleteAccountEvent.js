let dataLayerDeleteAccountEvent = `
    window.dataLayer = window.dataLayer || [];
    
    window.dataLayer.push({
        
        'event': 'delete_account',
        
        'organization_id': 'orgNum1'
        
    });`;

let gtagDeleteAccountEvent = `
    gtag('event', 'delete_account', {
        
        'organization_id': 'orgNum1'
        
    });`;

let apiDeleteAccountEvent = `
'const measurement_id' = 'G-XXXXXXXXXX';

'const api_secret' = 'secret_value';

fetch(\`https://www.google-analytics.com/mp/collect?measurement_id=\${measurement_id}&api_secret=\${api_secret}\`, {
  method: "POST", 
  body: JSON.stringify({ 
    client_id: 'XXXXXXXXXX.YYYYYYYYYY', 
    events: [{ 
      name: 'delete_account', 
      params: { 
        'organization_id': 'orgNum1' 
      } 
    }] 
  }) 
});`;

export { dataLayerDeleteAccountEvent, gtagDeleteAccountEvent, apiDeleteAccountEvent };