document.getElementById('btn-calculate').addEventListener('click',function(){
    const perPlayerAmount = getInputFieldValueById('player-amount');
    if(isNaN(perPlayerAmount)){
        alert('input a valid Number');
        return;
      }
      const playerField = document.getElementById('player-list');
      const totalPlayer = playerField.getElementsByTagName('li').length;
      const totalPlayerExpence = perPlayerAmount * totalPlayer;

      setTextElementValueById('total-expence', totalPlayerExpence);
    
});

document.getElementById('btn-total').addEventListener('click',function(){
    const managerCost = getInputFieldValueById('manager-cost');
    if(isNaN(managerCost)){
        alert('input a valid Number');
        return;
      }
    const coachCost = getInputFieldValueById('coach-cost');
      if(isNaN(coachCost)){
          alert('input a valid Number');
          return;
        } 
    const playerTotalcost = getElementValueById('total-expence') ;

    const totalCost = managerCost + coachCost + playerTotalcost;
    setTextElementValueById('total-cost', totalCost);


});