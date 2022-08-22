
function selectedPlayer(player,button,playerField){
   
    const SelectedPlayer = document.getElementById(player);
    const selectedPlayerName = SelectedPlayer.innerText;
    const deleteButton = document.getElementById(button);
    deleteButton.setAttribute('disabled', true);
    
    
        const li = document.createElement('li');
        li.innerHTML=`
        ${selectedPlayerName}
        `;
        playerField.appendChild(li);
       
}

function getInputFieldValueById(inputId){
    const inputField = document.getElementById(inputId);

    const inputFieldValue = parseInt(inputField.value);

    // inputField.value='';

    return inputFieldValue;

}
function setTextElementValueById(elementId, newValue){
    const textElement = document.getElementById(elementId);

    textElement.innerText = newValue;

}

function getElementValueById(elementId){

    const textElement = document.getElementById(elementId);

    const textElementValue = parseInt(textElement.innerText);

    return textElementValue;

}

