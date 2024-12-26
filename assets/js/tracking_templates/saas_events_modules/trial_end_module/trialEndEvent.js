let dataLayerTrialEndEvent = `
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        
        'event': 'trial_end',
        
        'start_date': '1970-01-01',
        
        'end_date': '1970-01-02',
        
        'plan_name': 'Premium'
        
      });`

let gtagTrialEndEvent = `
    gtag('event', 'trial_end', {
        
        'start_date': '1970-01-01',
        
        'end_date': '1970-01-02',
        
        'plan_name': 'Premium'
        
    });`

let apiTrialEndEvent = `
'const measurement_id' = 'G-XXXXXXXXXX';

'const api_secret' = 'XXXXXXXXXXXXXXX';

fetch(\`https://www.google-analytics.com/mp/collect?measurement_id=\${measurement_id}&api_secret=\${api_secret}\`, {
  
  method: "POST",
  
  body: JSON.stringify({
    
    client_id: 'XXXXXXXXXX.YYYYYYYYYY',
    
    events: [{
      
      name: 'trial_end',
      
      params: {
        
        'start_date': '1970-01-01',
        
        'end_date': '1970-01-02',
        
        'plan_name': 'Premium'
        
      }
      
    }]
      
});`

export { dataLayerTrialEndEvent, gtagTrialEndEvent, apiTrialEndEvent };