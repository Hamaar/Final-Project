var inputHamaar = document.formTampilHamaar.inputHamaar;
function hitung(num) {
 inputHamaar.value += num;
}
function samaDengan() {
 inputHamaar.value = eval(inputHamaar.value);
}
function hapus() {
 inputHamaar.value = inputHamaar.value.substr(0,inputHamaar.value.length-1);
}
function hapusSemua() {
 inputHamaar.value = "";
}