function volume_sphere() {
    //Write your code hereconst radiusInput = document.getElementById('radius').value;
  const radius = parseFloat(radiusInput);
  const volumeField = document.getElementById('volume');

  // Validate input: must be a non-negative number
  if (isNaN(radius) || radius < 0) {
    volumeField.value = 'NaN';
    return false;
  }

  // Calculate volume of the sphere: V = (4/3) * π * r³
  const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

  // Round to 4 decimal places and display
  volumeField.value = volume.toFixed(4);

  return false; 
  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
