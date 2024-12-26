let dataLayerBeginCheckoutEvent = `
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        
        'event': 'begin_checkout',
        
        'currency': 'USD',
        
        'value': 9.99,
        
        'coupon': 'Summer_Fun',
        
        items: [
        
        {
            
            item_id: "SKU_12345",
            
            item_name: "Stan and Friends Tee",
            
            affiliation: "Google Merchandise Store",
            
            coupon: "SUMMER_FUN",
            
            currency: "USD",
            
            discount: 2.22,
            
            index: 0,
            
            item_brand: "Google",
            
            item_category: "Apparel",
            
            item_category2: "Adult",
            
            item_category3: "Shirts",
            
            item_category4: "Crew",
            
            item_category5: "Short sleeve",
            
            item_list_id: "related_products",
            
            item_list_name: "Related Products",
            
            item_variant: "green",
            
            price: 9.99,
            
            quantity: 1
            
        }]
        
      });`

let gtagBeginCheckoutEvent = `
    gtag('event', 'begin_checkout', {
        
        'currency': 'USD',
        
        'value': 9.99,
        
        'coupon': 'Summer_Fun',
        
        items: [
        
        {
            
            item_id: "SKU_12345",
            
            item_name: "Stan and Friends Tee",
            
            affiliation: "Google Merchandise Store",
            
            coupon: "SUMMER_FUN",
            
            currency: "USD",
            
            discount: 2.22,
            
            index: 0,
            
            item_brand: "Google",
            
            item_category: "Apparel",
            
            item_category2: "Adult",
            
            item_category3: "Shirts",
            
            item_category4: "Crew",
            
            item_category5: "Short sleeve",
            
            item_list_id: "related_products",
            
            item_list_name: "Related Products",
            
            item_variant: "green",
            
            price: 9.99,
            
            quantity: 1
            
        }]
    });`

let apiBeginCheckoutEvent = `
'const measurement_id' = 'G-XXXXXXXXXX';

'const api_secret' = 'XXXXXXXXXXXXXXX';

fetch(\`https://www.google-analytics.com/mp/collect?measurement_id=\${measurement_id}&api_secret=\${api_secret}\`, {
  
  method: "POST",
  g
  body: JSON.stringify({
    
    client_id: 'XXXXXXXXXX.YYYYYYYYYY',
    
    events: [{
      
      name: 'begin_checkout',
      
      params: {
        
        'currency': 'USD',
        
        'value': 22.3,
        
        'payment_type': 'Credit Card',
        
        'coupon': 'Summer_Fun',
        
        items: [
        
        {
            
            item_id: "SKU_12345",
            
            item_name: "Stan and Friends Tee",
            
            affiliation: "Google Merchandise Store",
            
            coupon: "SUMMER_FUN",
            
            currency: "USD",
            
            discount: 2.22,
            
            index: 0,
            
            item_brand: "Google",
            
            item_category: "Apparel",
            
            item_category2: "Adult",
            
            item_category3: "Shirts",
            
            item_category4: "Crew",
            
            item_category5: "Short sleeve",
            
            item_list_id: "related_products",
            
            item_list_name: "Related Products",
            
            item_variant: "green",
            
            price: 9.99,
            
            quantity: 1
            
        }]
        
      }
      
    }]
      
});`

export { dataLayerBeginCheckoutEvent, gtagBeginCheckoutEvent, apiBeginCheckoutEvent };