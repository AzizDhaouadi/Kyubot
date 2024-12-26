let dataLayerCreateAccountEvent = `
    window.dataLayer = window.dataLayer || [];
    
    window.dataLayer.push({
        
        'event': 'create_account',
        
        'organization_id': 'orgNum1'
        
    });`;

let gtagCreateAccountEvent = `
    gtag('event', 'create_account', {
        
        'organization_id': 'orgNum1'
        
    });`;

let apiCreateAccountEvent = `
'const measurement_id' = 'G-XXXXXXXXXX';

'const api_secret' = 'secret_value';


fetch(\`https://www.google-analytics.com/mp/collect?measurement_id=\${measurement_id}&api_secret=\${api_secret}\`, {
  method: "POST", 
  body: JSON.stringify({ 
    client_id: 'XXXXXXXXXX.YYYYYYYYYY', 
    events: [{ 
      name: 'create_account', 
      params: { 
        'organization_id': 'orgNum1' 
      } 
    }] 
  }) 
});`;

export { dataLayerCreateAccountEvent, gtagCreateAccountEvent, apiCreateAccountEvent };