
document.getElementById('accessForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const code = document.getElementById('code').value.trim();
  if (code === '602') {
    window.location.href = 'carta.html';
  } else {
    document.getElementById('errorMsg').textContent = 'Número incorrecto. Inténtalo de nuevo.';
  }
});
