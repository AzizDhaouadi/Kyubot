let dataLayerSelectContentEvent = `
    window.dataLayer = window.dataLayer || [];
    
    window.dataLayer.push({
        
        'event': 'select_content',
        
        'content_type': 'article',
        
        'item_id': 'CT_001'
        
      });`

let gtagSelectContentEvent = `
    gtag('event', 'select_item', {
        
        'content_type': 'article',
        
        'item_id': 'CT_001'<span>
        
    });`

let apiSelectContentEvent = `
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
        
        'item_id': 'CT_001'
        
      }
      
    }]
      
});`

export { dataLayerSelectContentEvent, gtagSelectContentEvent, apiSelectContentEvent };