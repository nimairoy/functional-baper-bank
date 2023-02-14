
document.getElementById('dipositButton').addEventListener('click', function(){
    const dipositInput = getValueFromInput('depositInput');
    const textField = setInputValueOnTextField('depositText');
    // calculate the value 
    const currentDeposit = textField + dipositInput;
    // set the value into text field 
    setAndShowTheValueOnTextField('depositText', currentDeposit);
    // set the value into total balance text field
    const totalTextField = setInputValueOnTextField('totalBalance');
    const currentTotal = totalTextField + dipositInput;
     // set the total balance into the text field 
     setAndShowTheValueOnTextField('totalBalance', currentTotal);
})