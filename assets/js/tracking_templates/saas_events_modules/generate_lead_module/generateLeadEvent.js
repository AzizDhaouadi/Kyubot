let dataLayerGenerateLeadEvent = `
    window.dataLayer = window.dataLayer || [];
    
    window.dataLayer.push({
        
        'event': 'generate_lead',
        
        'currency': 'USD',
        
        'value': 22,
        
        'campaign': 'Paid Search Lead Gen'
        
    });`;

let gtagGenerateLeadEvent = `
    gtag('event', 'generate_lead', {
        
        'event': 'generate_lead',
        
        'currency': 'USD',
        
        'value': 22,
        
        'campaign': 'Paid Search Lead Gen'
        
    });`;

let apiGenerateLeadEvent = `
'const measurement_id' = 'G-XXXXXXXXXX';

'const api_secret' = 'secret_value';

fetch(\`https://www.google-analytics.com/mp/collect?measurement_id=\${measurement_id}&api_secret=\${api_secret}\`, {
  method: "POST", 
  body: JSON.stringify({ 
    client_id: 'XXXXXXXXXX.YYYYYYYYYY', 
    events: [{ 
      name: 'generate_lead', 
      params: { 
        'currency': 'USD',
        
        'value': 22,
        
        'campaign': 'Paid Search Lead Gen'
        
      } 
    }] 
  }) 
});`;

export { dataLayerGenerateLeadEvent, gtagGenerateLeadEvent, apiGenerateLeadEvent };