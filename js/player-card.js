// create add even listner for selected button 
document.getElementById('btn-player1').addEventListener('click',function(){
    // get player list 
    const playerField = document.getElementById('player-list');
    // find the total player in the list 
    const totalPlayer = playerField.getElementsByTagName('li').length;
    // cheak the number of player is less than 5 or not 
    if(totalPlayer < 5){
        // if less than 5 then call the selectedPlayer function
        
        selectedPlayer('player1','btn-player1', playerField);
    
    }
    else{
        // else give an alert
        alert('You already Select 5 palyer');
    }
    
});
// similar work for other player 
document.getElementById('btn-player2').addEventListener('click',function(){
    const playerField = document.getElementById('player-list');
    const totalPlayer = playerField.getElementsByTagName('li').length;
    
    if(totalPlayer < 5){
       
        selectedPlayer('player2','btn-player2', playerField);

        
    
    }
    else{
        alert('You already Select 5 palyer');
    }
    
});
document.getElementById('btn-player3').addEventListener('click',function(){
    const playerField = document.getElementById('player-list');
    const totalPlayer =playerField.getElementsByTagName('li').length;
    
    if(totalPlayer < 5){
       
        selectedPlayer('player3','btn-player3', playerField);

        
    
    }
    else{
        alert('You already Select 5 palyer');
    }
    
});
document.getElementById('btn-player4').addEventListener('click',function(){
    const playerField = document.getElementById('player-list');
    const totalPlayer = playerField.getElementsByTagName('li').length;
    
    if(totalPlayer < 5){
        
        selectedPlayer('player4','btn-player4', playerField);

        
    
    }
    else{
        alert('You already Select 5 palyer');
    }
    
});
document.getElementById('btn-player5').addEventListener('click',function(){
    const playerField = document.getElementById('player-list');
    const totalPlayer = playerField.getElementsByTagName('li').length;
    
    if(totalPlayer < 5){
        
        selectedPlayer('player5','btn-player5', playerField);

        
    
    }
    else{
        alert('You already Select 5 palyer');
    }
    
});
document.getElementById('btn-player6').addEventListener('click',function(){
    const playerField = document.getElementById('player-list');
    const totalPlayer =playerField.getElementsByTagName('li').length;
    
    if(totalPlayer < 5){
       
        selectedPlayer('player6','btn-player6', playerField);

        
    
    }
    else{
        alert('You already Select 5 palyer');
    }
    
});

