// function for find the selected player
function selectedPlayer(player,button,playerField){

    // get the player name
    const SelectedPlayer = document.getElementById(player);
    const selectedPlayerName = SelectedPlayer.innerText;
    // disabled the slected button
    const deleteButton = document.getElementById(button);
    deleteButton.setAttribute('disabled', true);

    // add slected player in the list 
    const li = document.createElement('li');
    li.innerHTML=`
     ${selectedPlayerName}
    `;
    playerField.appendChild(li);
       
}
// function for get the value from input feild

function getInputFieldValueById(inputId){
    const inputField = document.getElementById(inputId);

    const inputFieldValue = parseInt(inputField.value);

    // inputField.value='';

    return inputFieldValue;

}
// fuction for set new vale in the text.
function setTextElementValueById(elementId, newValue){
    const textElement = document.getElementById(elementId);

    textElement.innerText = newValue;

}
// function for get the value from text

function getElementValueById(elementId){

    const textElement = document.getElementById(elementId);

    const textElementValue = parseInt(textElement.innerText);

    return textElementValue;

}

