let dataLayerTutorialBeginEvent = `
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        
        'event': 'tutorial_begin',
        
        'tutorial_id': 'tut_001',
        
        'tutorial_name': 'how_to_use_our_tool'
        
      });`

let gtagTutorialBeginEvent = `
    gtag('event', 'tutorial_begin', {
        
        'tutorial_id': 'tut_001',
        
        'tutorial_name': 'how_to_use_our_tool'
        
    });`

let apiTutorialBeginEvent = `
'const measurement_id' = 'G-XXXXXXXXXX';

'const api_secret' = 'XXXXXXXXXXXXXXX';

fetch(\`https://www.google-analytics.com/mp/collect?measurement_id=\${measurement_id}&api_secret=\${api_secret}\`, {
  
  method: "POST",
  
  body: JSON.stringify({
    
    client_id: 'XXXXXXXXXX.YYYYYYYYYY',
    
    events: [{
      
      name: 'tutorial_begin',
      
      params: {
        
        'tutorial_id': 'tut_001',
        
        'tutorial_name': 'how_to_use_our_tool'
        
      }
      
    }]
      
});`

export { dataLayerTutorialBeginEvent, gtagTutorialBeginEvent, apiTutorialBeginEvent };