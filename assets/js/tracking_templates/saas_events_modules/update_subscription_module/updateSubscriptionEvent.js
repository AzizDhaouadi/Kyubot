let dataLayerUpdateSubscriptionEvent = `
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        
        'event': 'update_subscription',
        
        'currency': 'USD',
        
        'value': 22,
        
        'date': '1970-01-01',
        
        'next_bill_date': '1971-01-01',
        
        'payment_type': 'Credit Card',
        
        'organization_id': 'orgNum1'
        
        'coupon': 'renew_25_off'
        
      });`

let gtagUpdateSubscriptionEvent = `
    gtag('event', 'update_subscription', {
        
        'currency': 'USD',
        
        'value': 22,
        
        'date': '1970-01-01',
        
        'next_bill_date': '1971-01-01',
        
        'payment_type': 'Credit Card',
        
        'organization_id': 'orgNum1'
        
        'coupon': 'renew_25_off'
        
    });`

let apiUpdateSubscriptionEvent = `
'const measurement_id' = 'G-XXXXXXXXXX';

'const api_secret' = 'XXXXXXXXXXXXXXX';

fetch(\`https://www.google-analytics.com/mp/collect?measurement_id=\${measurement_id}&api_secret=\${api_secret}\`, {
  
  method: "POST",
  
  body: JSON.stringify({
    
    client_id: 'XXXXXXXXXX.YYYYYYYYYY',
    
    events: [{
      
      name: 'update_subscription',
      
      params: {
        
        'currency': 'USD',
        
        'value': 22,
        
        'date': '1970-01-01',
        
        'next_bill_date': '1971-01-01',
        
        'payment_type': 'Credit Card',
        
        'organization_id': 'orgNum1'
        
        'coupon': 'renew_25_off'
        
      }
      
    }]
      
});`

export { dataLayerUpdateSubscriptionEvent, gtagUpdateSubscriptionEvent, apiUpdateSubscriptionEvent };