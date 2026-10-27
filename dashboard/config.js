// TETAPAN DASHBOARD
// tahun : senarai tahun yang dipaparkan.
// pusat : (pilihan) pautan Web App Apps Script supaya pautan yang ditetapkan dalam panel admin dikongsi kepada semua guru.
//         Biarkan kosong untuk menyimpan pada peranti sendiri sahaja.
// idAdminSha256: (pilihan, mod tanpa pusat) cap SHA-256 bagi ID admin supaya semua peranti guna ID yang sama. Jika kosong, ID pertama yang dimasukkan pada sesuatu peranti menjadi ID admin peranti itu.
// tetapan: pautan CSV (Terbitkan ke web) bagi tab "Tetapan" dalam Google Sheet tetapan. Dashboard membaca pautan analisis dari tab ini, jadi pautan boleh dikemas kini bila-bila masa tanpa deploy semula.
// pautan: (pilihan) pautan tetap. Biasanya tidak perlu, kerana pautan boleh ditetapkan melalui panel admin (ikon gear).
const CONFIG={
  tahun:[2026,2027,2028],
  pusat:'',
  tetapan:'',
  idAdminSha256:'',
  pautan:{}
};
