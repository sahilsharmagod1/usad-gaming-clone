function playColorGame() {
  document.body.innerHTML = `
    <h1>Choose Your Color</h1>
    <div id="color-options">
      <button onclick="chooseColor('Red')" style="background-color:red;">Red</button>
      <button onclick="chooseColor('Green')" style="background-color:green;">Green</button>
      <button onclick="chooseColor('Violet')" style="background-color:purple;">Violet</button>
    </div>
    <p id="result"></p>
  `;
}

function chooseColor(color) {
  const colors = ['Red', 'Green', 'Violet'];
  const randomIndex = Math.floor(Math.random() * colors.length);
  const winningColor = colors[randomIndex];

  let message = '';
  if (color === winningColor) {
    message = `You won! Winning color is ${winningColor}`;
  } else {
    message = `You lost! Winning color is ${winningColor}`;
  }

  document.getElementById('result').innerText = message;
}
