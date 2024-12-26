let dataLayerRemoveUserEvent = `
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        
        'event': 'remove_user',
        
        'users_per_account': 3,
        
        'plan_name': 'Premium',
        
        'date': '1970-01-01'
        
      });`

let gtagRemoveUserEvent = `
    gtag('event', 'remove_user', {
        
        'users_per_account': 3,
        
        'plan_name': 'Premium',
        
        'date': '1970-01-01'
        
    });`

let apiRemoveUserEvent = `
'const measurement_id' = 'G-XXXXXXXXXX';

'const api_secret' = 'XXXXXXXXXXXXXXX';

fetch(\`https://www.google-analytics.com/mp/collect?measurement_id=\${measurement_id}&api_secret=\${api_secret}\`, {
  
  method: "POST",
  
  body: JSON.stringify({
    
    client_id: 'XXXXXXXXXX.YYYYYYYYYY',
    
    events: [{
      
      name: 'remove_user',
      
      params: {
        
        'users_per_account': 3,
        
        'plan_name': 'Premium',
        
        'date': '1970-01-01'
        
      }
      
    }]
      
});`

export { dataLayerRemoveUserEvent, gtagRemoveUserEvent, apiRemoveUserEvent };