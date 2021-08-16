document.getElementById('user-input').addEventListener('submit', function (e) {
  e.preventDefault()

  if (document.getElementById('input').value === '') {
    alert('Must input number')
    return
  }

  const number = Number(document.getElementById('input').value)

  if (isNaN(number)) {
    alert('Must input number')
    return
  }

  document.getElementById('answer').textContent = number
})
