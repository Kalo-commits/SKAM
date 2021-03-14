var check = function() {
    var bt = document.getElementById('signed');
    if (document.getElementById('password').value == document.getElementById('confirm_password').value) {
      	document.getElementById('message').style.color = '#4CAF50';
      	document.getElementById('message').innerHTML = 'Matching';
      	bt.disabled = false;
    } else {
      	document.getElementById('message').style.color = 'red';
      	document.getElementById('message').innerHTML = 'Not matching';
      	bt.disabled = true;
    }
}
