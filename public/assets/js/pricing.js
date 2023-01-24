"use strict";

/* ======= Plan Switch ======= */
const pricingSwitchers = document.querySelectorAll('#plan-switch .radio-switch-input');
const allPricingPlanItems = document.querySelectorAll('#plan-items .plan-cost-option');


pricingSwitchers.forEach((pricingSwitcher) => {
	
  pricingSwitcher.addEventListener('change', () => {
	    
	    //Hide all pricing plan figures
	    allPricingPlanItems.forEach(item => { item.style.display = "none" });
	  
	    
	    //Show selected pricing plan figures
	    let isChecked= pricingSwitcher.checked;
	    let dataPlan = pricingSwitcher.getAttribute('data-plan-cost');
	    
		if(isChecked){ 
			
		  //console.log('checked');
		  //console.log(dataPlan);
		  
		  let selectedPricingPlanItems = document.querySelectorAll('#plan-items' + ' .' + dataPlan );
		  
		  selectedPricingPlanItems.forEach(item => { item.style.display = "block" });
		  
		}

    
    });
});



/* ======= Popover ======= */
var popoverTriggerList = [].slice.call(document.querySelectorAll('.info-popover-trigger'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
})


