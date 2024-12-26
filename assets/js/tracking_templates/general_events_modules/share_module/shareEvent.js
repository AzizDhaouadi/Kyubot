let dataLayerShareEvent = `
    window.dataLayer = window.dataLayer || [];
    
    window.dataLayer.push({
        
        'event': 'select_content',
        
        'content_type': 'article',
        
        'item_id': 'CT_001',
        
        'method':'facebook_link'
        
      });`

let gtagShareEvent = `
    gtag('event', 'select_item', {
        
        'content_type': 'article',
        
        'item_id': 'CT_001'<span>,
        
        'method':'facebook_link'
        
    });`

let apiShareEvent = `
'const measurement_id' = 'G-XXXXXXXXXX';

'const api_secret' = 'XXXXXXXXXXXXXXX';

fetch(\`https://www.google-analytics.com/mp/collect?measurement_id=\${measurement_id}&api_secret=\${api_secret}\`, {
  
  method: "POST",
  
  body: JSON.stringify({
    
    client_id: 'XXXXXXXXXX.YYYYYYYYYY',
    
    events: [{ 
      name: 'select_item',
      
      params: {
        
        'content_type': 'article',
        
        'item_id': 'CT_001',
        
        'method':'facebook_link'
        
      } 
    }] 
});`

export { dataLayerShareEvent, gtagShareEvent, apiShareEvent };