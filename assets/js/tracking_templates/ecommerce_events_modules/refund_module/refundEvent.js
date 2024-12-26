let dataLayerRefundEvent = `
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        
        'event': 'refund',
        
        'transaction_id': 'L_12345',
        
        'affiliation': 'Datakyu',
        
        'value': 25.42,
        
        'tax': 4.90,
        
        'shipping': 5.99,
        
        'currency': 'USD',
        
        'items': [
            
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
              }
        ]

    });`

let gtagRefundEvent = `
  
gtag("event", "refund", {
  
  transaction_id: "T_12345",
  
  affiliation: "Google Merchandise Store",
  
  value: 25.42,
  
  tax: 4.90,
  
  shipping: 5.99,
  
  currency: "USD",
  
  coupon: "SUMMER_SALE",
  
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
  
});
`;

let apiRefundEvent = `
'const measurement_id' = 'G-XXXXXXXXXX';

'const api_secret' = 'XXXXXXXXXXXXXXX';

fetch(\`https://www.google-analytics.com/mp/collect?measurement_id=\${measurement_id}&api_secret=\${api_secret}\`, {
  
  method: "POST",
  
  body: JSON.stringify({
    
    client_id: 'XXXXXXXXXX.YYYYYYYYYY',
    
    events: [{
      name: 'refund',
      params: {
        'transaction_id': 'L_12345',
        
        'affiliation': 'Datakyu',
        
        'value': 25.42,
        
        'tax': 4.90,
        
        'shipping': 5.99,
        
        'currency': 'USD',
        
        'items': [
            
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
                
              }
        ]
      }
    }]
  })
});`

export { dataLayerRefundEvent, gtagRefundEvent, apiRefundEvent };