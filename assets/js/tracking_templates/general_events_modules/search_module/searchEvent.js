let dataLayerSearchEvent = `
    window.dataLayer = window.dataLayer || [];
    
    window.dataLayer.push({
        
        'event': 'search',
        
        'search_term': 'Datakyu'
        
      });`

let gtagSearchEvent = `
    gtag('event', 'search', {
        
        'search_term': 'Datakyu'
        
    });`

let apiSearchEvent = `
'const measurement_id' = 'G-XXXXXXXXXX';

'const api_secret' = 'XXXXXXXXXXXXXXX';

fetch(\`https://www.google-analytics.com/mp/collect?measurement_id=\${measurement_id}&api_secret=\${api_secret}\`, {
  
  method: "POST",
  
  body: JSON.stringify({
    
    client_id: 'XXXXXXXXXX.YYYYYYYYYY',
    
    events: [{
      
      name: 'search',
      
      params: {
        
        'search_term': 'Datakyu',
        
      }
      
    }]
      
});`

export { dataLayerSearchEvent, gtagSearchEvent, apiSearchEvent };