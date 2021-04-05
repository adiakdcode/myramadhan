const blink = 270; 
var www = setInterval(function () {
    var ele = document.getElementById('countdown');
    ele.style.visibility = (ele.style.visibility == 'hidden' ? '' : 'hidden');
}, blink);

const blink2 = 198; 
var www2 = setInterval(function () {
    var ele2 = document.getElementById('countdown2');
    ele2.style.visibility = (ele2.style.visibility == 'hidden' ? '' : 'hidden');
}, blink2);


/*new Typed('#typed',{
    strings : ['Selamat menjalani ibadah Puasa, Jaga Mata, Jaga Mulut, Jaga Telinga, Isi Galeri jangan lupa awkwk'],
    typeSpeed : 40,
    delaySpeed : 70,
    loop : true
});*/
new Typed('#typedq',{
    strings : ['Sekedar Memberitahukan dan Mengingatkan saja, Bahwasannya Bulan Ramadhan Kurang dari : '],
    typeSpeed : 70,
    delaySpeed : 70,
    loop : true
});
