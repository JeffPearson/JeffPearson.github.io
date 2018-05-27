var range = document.querySelector('.inputRange');
var field = document.getElementById('num1');

range.addEventListener('input', function (e) {
  field.value = e.target.value;
});
field.addEventListener('input', function (e) {
  range.value = e.target.value;
});