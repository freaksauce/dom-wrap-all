var wrapAll = require('./index.js')
document.body.innerHTML = `<p>1</p>
                          <p id="message">Hello, world!</p>
                          <p>2</p>
                          <p>3</p>
                          <li>Apples</li><li>Bananas</li>
                          <p>4</p>
                          <li>Cherries</li>
                          <p>5</p>
                          <li>Dates</li>
                          <p>6</p>`;

test('test wrapAll', function() {
  var fruits = document.getElementsByTagName('li');
  var ol = document.createElement('ol');
  wrapAll(fruits, ol);
  var newList = document.querySelectorAll('ol li');
  expect(newList[0].innerHTML).toBe('Apples');
  expect(newList[2].innerHTML).toBe('Cherries');
})