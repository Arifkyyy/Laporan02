// Fungsi untuk menyembunyikan/menampilkan konten
function toggleContent(id) {
  const element = document.getElementById(id);
  if (confirm(`Apakah Anda ingin menyembunyikan konten ini?`)) {
    element.style.display = element.style.display === 'none' ? 'block' : 'none';
  }
}

// Fungsi untuk mengganti mode tampilan
function toggleMode() {
  const body = document.body;
  const button = document.getElementById('modeToggle');

  if (body.classList.contains('messy')) {
    body.classList.remove('messy');
    button.textContent = 'Ganti Mode Tampilan';
  } else {
    body.classList.add('messy');
    button.textContent = 'Kembali ke Mode Rapi';
  }
}
