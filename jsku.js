function satu()
{
    //text1=formku.txtinput.value;
    text1=document.getElementById("txtinput").value;
    document.title='BERUBAH ';
    document.write('<h1>'+text1+'</h1>');
    alert('hai...');
}

function cek()
{
    if (fku.txtuser.value=="")
    {
        window.alert('Username tidak boleh kosong');
        window.location.reload(true);
    }
    if (fku.txtpass1.value != fku.txtpass2.value)
    {
        window.alert('Re-Type dan New Pass tidak sesuai !');
        window.location.reload(true);
    }
}
