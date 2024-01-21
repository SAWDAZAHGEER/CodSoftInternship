function removeLastCharacter() {
    var inputValue = form1.i.value;
    if (inputValue.length !== 0) {
        form1.i.value = inputValue.substring(0, inputValue.length - 1);
    }
}
