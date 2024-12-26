let dataLayerCancelSubscriptionEvent = `
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        
        'event': 'cancel_susbcription',
        
        'date': '1970-01-01',
        
        'organization_id': 'orgNum1'
        
      });`

let gtagCancelSubscriptionEvent = `
    gtag('event', 'cancel_subscription', {
        
        'date': '1970-01-01',
        
        'organization_id': 'orgNum1'
        
    });`

let apiCancelSubscriptionEvent = `
'const measurement_id' = 'G-XXXXXXXXXX';

'const api_secret' = 'XXXXXXXXXXXXXXX';

fetch(\`https://www.google-analytics.com/mp/collect?measurement_id=\${measurement_id}&api_secret=\${api_secret}\`, {
  
  method: "POST",
  
  body: JSON.stringify({
    
    client_id: 'XXXXXXXXXX.YYYYYYYYYY',
    
    events: [{
      
      name: 'cancel_subscription',
      
      params: {
        
        'date': '1970-01-01',
        
        'organization_id': 'orgNum1'
        
      }
      
    }]
      
});`

export { dataLayerCancelSubscriptionEvent, gtagCancelSubscriptionEvent, apiCancelSubscriptionEvent };