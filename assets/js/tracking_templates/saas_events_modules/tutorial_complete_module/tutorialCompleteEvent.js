let dataLayerTutorialCompleteEvent = `
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        
        'event': 'tutorial_complete',
        
        'tutorial_id': 'tut_001',
        
        'tutorial_name': 'how_to_use_our_tool'
        
      });`

let gtagTutorialCompleteEvent = `
    gtag('event', 'tutorial_complete', {
        
        'tutorial_id': 'tut_001',
        
        'tutorial_name': 'how_to_use_our_tool'
        
    });`

let apiTutorialCompleteEvent = `
'const measurement_id' = 'G-XXXXXXXXXX';

'const api_secret' = 'XXXXXXXXXXXXXXX';

fetch(\`https://www.google-analytics.com/mp/collect?measurement_id=\${measurement_id}&api_secret=\${api_secret}\`, {
  
  method: "POST",
  
  body: JSON.stringify({
    
    client_id: 'XXXXXXXXXX.YYYYYYYYYY',
    
    events: [{
      
      name: 'tutorial_complete',
      
      params: {
        
        'tutorial_id': 'tut_001',
        
        'tutorial_name': 'how_to_use_our_tool'
        
      }
      
    }]
      
});`

export { dataLayerTutorialCompleteEvent, gtagTutorialCompleteEvent, apiTutorialCompleteEvent };