let dataLayerRenewSubscriptionEvent = `
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        
        'event': 'renew_subscription',
        
        'date': '1970-01-01',
        
        'organization_id': 'orgNum1'
        
      });`

let gtagRenewSubscriptionEvent = `
    gtag('event', 'renew_subscription', {
        
        'date': '1970-01-01',
        
        'organization_id': 'orgNum1'
        
    });`

let apiRenewSubscriptionEvent = `
'const measurement_id' = 'G-XXXXXXXXXX';

'const api_secret' = 'XXXXXXXXXXXXXXX';

fetch(\`https://www.google-analytics.com/mp/collect?measurement_id=\${measurement_id}&api_secret=\${api_secret}\`, {
  
  method: "POST",
  
  body: JSON.stringify({
    
    client_id: 'XXXXXXXXXX.YYYYYYYYYY',
    
    events: [{
      
      name: 'renew_subscription',
      
      params: {
        
        'date': '1970-01-01',
        
        'organization_id': 'orgNum1'
        
      }
      
    }]
      
});`

export { dataLayerRenewSubscriptionEvent, gtagRenewSubscriptionEvent, apiRenewSubscriptionEvent };