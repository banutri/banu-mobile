// initializing floating Button
$(document).ready(function () {

    // glbal config for modal
    $('.modal').modal({
        opacity: 0.5,
        endingTop: "30%"
    });
    // end

    


   

    $('.input-bayar').on('submit',(e)=>{
        e.preventDefault();
        var bayar = $(this).find('input[name="bayar"]').val();
        console.log(bayar);
        hitung_pembayaran(bayar);
    });


});


function hitung_pembayaran(bayar)
{
    bayar = parseInt(bayar);
    var total = 20000;

    // get instance modalBayar
    var instance = M.Modal.getInstance($('#modalBayar'));
    instance.close();
    // end get instance

    var ints = M.Modal.getInstance($('#modalKembalian'));
    ints.open();

}



function angka_koma(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
