let dataLayerAddUserEvent = `
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        
        'event': 'add_user',
        
        'users_per_account': 3,
        
        'plan_name': 'Premium',
        
        'date': '1970-01-01'
        
      });`

let gtagAddUserEvent = `
    gtag('event', 'add_user', {
        
        'users_per_account': 3,
        
        'plan_name': 'Premium',
        
        'date': '1970-01-01'
        
    });`

let apiAddUserEvent = `
'const measurement_id' = 'G-XXXXXXXXXX';

'const api_secret' = 'XXXXXXXXXXXXXXX';

fetch(\`https://www.google-analytics.com/mp/collect?measurement_id=\${measurement_id}&api_secret=\${api_secret}\`, {
  
  method: "POST",
  
  body: JSON.stringify({
    
    client_id: 'XXXXXXXXXX.YYYYYYYYYY',
    
    events: [{
      
      name: 'add_user',
      
      params: {
        
        'users_per_account': 3,
        
        'plan_name': 'Premium',
        
        'date': '1970-01-01'
        
      }
      
    }]
      
});`

export { dataLayerAddUserEvent, gtagAddUserEvent, apiAddUserEvent };