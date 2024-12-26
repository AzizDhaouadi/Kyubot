let dataLayerLoginEvent = `
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        'event': 'login',
        'method': 'google'
    });`;

let gtagLoginEvent = `
    gtag('event', 'login', {
        'method': 'google'
    });`;

let apiLoginEvent = `
'const measurement_id' = 'G-XXXXXXXXXX';
'const api_secret' = 'secret_value';

fetch(\`https://www.google-analytics.com/mp/collect?measurement_id=\${measurement_id}&api_secret=\${api_secret}\`, {
  method: "POST",
  body: JSON.stringify({ 
    client_id: 'XXXXXXXXXX.YYYYYYYYYY', 
    events: [{ 
      name: 'login', 
      params: { 
        'method': 'google' 
      } 
    }] 
  }) 
});`;

export { dataLayerLoginEvent, gtagLoginEvent, apiLoginEvent };