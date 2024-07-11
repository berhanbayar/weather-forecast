function epochToDate(epochTime) {
    const date = new Date(epochTime * 1000); // Epoch time'ı milisaniyeye çevirmek için 1000 ile çarpıyoruz

    const day = String(date.getDate()).padStart(2, '0'); // Gün bilgisini alıp iki haneli olacak şekilde formatlıyoruz
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Ay bilgisini alıp iki haneli olacak şekilde formatlıyoruz
    const year = date.getFullYear(); // Yıl bilgisini alıyoruz

    return `${day}.${month}.${year}`; // İstenilen formatta döndürüyoruz
}