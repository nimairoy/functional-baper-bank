document.getElementById('withdrawButton').addEventListener('click', function(){
        const withdrawInput = getValueFromInput('withdrawInput');
        const withdrawTextField = setInputValueOnTextField('withdrawText');
        // calculate the value 
        const currentWithdraw = withdrawTextField + withdrawInput;
        // set the value into current deposit text field 
        setAndShowTheValueOnTextField('withdrawText', currentWithdraw);
        // set value into the total text field 
        const totalTextField = setInputValueOnTextField('totalBalance');
        const currentTotal = totalTextField - withdrawInput;
        // show the total value 
        setAndShowTheValueOnTextField('totalBalance', currentTotal);        

})