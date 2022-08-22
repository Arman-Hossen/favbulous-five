// calculate button to find total player cost 
document.getElementById('btn-calculate').addEventListener('click',function(){
    // set per player cost 
    const perPlayerAmount = getInputFieldValueById('player-amount');
    // the input value is number or nor
    if(isNaN(perPlayerAmount)){
        // if text value isnot number then give alert 
        alert('input a valid Number');
        return;
      }
      // find the number of player
      const playerField = document.getElementById('player-list');
      const totalPlayer = playerField.getElementsByTagName('li').length;
      // get the total cost 
      const totalPlayerExpence = perPlayerAmount * totalPlayer;
      // set the total cost 

      setTextElementValueById('total-expence', totalPlayerExpence);
    
});
// add even listner for find total cost 
document.getElementById('btn-total').addEventListener('click',function(){
    //get the cost of manager
    const managerCost = getInputFieldValueById('manager-cost');
    // check number or nor
    if(isNaN(managerCost)){
        alert('input a valid Number');
        return;
      }
      // get the cost of coach
    const coachCost = getInputFieldValueById('coach-cost');
    // check number or not
      if(isNaN(coachCost)){
          alert('input a valid Number');
          return;
        } 
        // get total player cost 
    const playerTotalcost = getElementValueById('total-expence') ;
    // add all the value
    const totalCost = managerCost + coachCost + playerTotalcost;
    // show the result
    setTextElementValueById('total-cost', totalCost);


});