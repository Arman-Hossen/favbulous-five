document.getElementById('btn-player1').addEventListener('click',function(){
    const playerField = document.getElementById('player-list');
    const totalPlayer = playerField.getElementsByTagName('li').length;
    console.log(totalPlayer);
    if(totalPlayer < 5){
        // const SelectedPlayer = document.getElementById('player1');
        // const deleteButton = document.getElementById('btn-player1');
        selectedPlayer('player1','btn-player1', playerField);
    
    }
    else{
        alert('You already Select 5 palyer');
    }
    
});
document.getElementById('btn-player2').addEventListener('click',function(){
    const playerField = document.getElementById('player-list');
    const totalPlayer = playerField.getElementsByTagName('li').length;
    console.log(totalPlayer);
    if(totalPlayer < 5){
        // const SelectedPlayer = document.getElementById('player1');
        // const deleteButton = document.getElementById('btn-player1');
        selectedPlayer('player2','btn-player2', playerField);

        
    
    }
    else{
        alert('You already Select 5 palyer');
    }
    
});
document.getElementById('btn-player3').addEventListener('click',function(){
    const playerField = document.getElementById('player-list');
    const totalPlayer =playerField.getElementsByTagName('li').length;
    console.log(totalPlayer);
    if(totalPlayer < 5){
        // const SelectedPlayer = document.getElementById('player1');
        // const deleteButton = document.getElementById('btn-player1');
        selectedPlayer('player3','btn-player3', playerField);

        
    
    }
    else{
        alert('You already Select 5 palyer');
    }
    
});
document.getElementById('btn-player4').addEventListener('click',function(){
    const playerField = document.getElementById('player-list');
    const totalPlayer = playerField.getElementsByTagName('li').length;
    console.log(totalPlayer);
    if(totalPlayer < 5){
        // const SelectedPlayer = document.getElementById('player1');
        // const deleteButton = document.getElementById('btn-player1');
        selectedPlayer('player4','btn-player4', playerField);

        
    
    }
    else{
        alert('You already Select 5 palyer');
    }
    
});
document.getElementById('btn-player5').addEventListener('click',function(){
    const playerField = document.getElementById('player-list');
    const totalPlayer = playerField.getElementsByTagName('li').length;
    console.log(totalPlayer);
    if(totalPlayer < 5){
        // const SelectedPlayer = document.getElementById('player1');
        // const deleteButton = document.getElementById('btn-player1');
        selectedPlayer('player5','btn-player5', playerField);

        
    
    }
    else{
        alert('You already Select 5 palyer');
    }
    
});
document.getElementById('btn-player6').addEventListener('click',function(){
    const playerField = document.getElementById('player-list');
    const totalPlayer =playerField.getElementsByTagName('li').length;
    console.log(totalPlayer);
    if(totalPlayer < 5){
        // const SelectedPlayer = document.getElementById('player1');
        // const deleteButton = document.getElementById('btn-player1');
        selectedPlayer('player6','btn-player6', playerField);

        
    
    }
    else{
        alert('You already Select 5 palyer');
    }
    
});

