function submitted(){
    let searchBox = document.getElementById('SearchBox');
    let formValue = searchBox.value;

    if(formValue === undefined || formValue === null || formValue === '') {
        alert('No value submitted.');
        return false;
    }

    let paragraph = document.getElementById('panel');
    paragraph.textContent = `${formValue} would be submitted to the server.`;

    //Prevent and actual form submit. This is a demo.
    return false;
}