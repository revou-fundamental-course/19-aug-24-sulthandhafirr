function formValidation(){
    let name = document.getElementById("name").value;
    let pesan = document.getElementById("pesan").value;
    if(name == '' || pesan == ""){
        alert('Formnya kosong');
        document.getElementById('result').innerHTML = '-';
    }else{
        document.getElementById('result').innerText = 'Form berhasil terkirim';
    }
    console.log(name);
    console.log(pesan);
}