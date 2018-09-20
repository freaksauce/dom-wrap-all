[![Build Status](https://travis-ci.org/freaksauce/dom-wrap-all.svg?branch=master)](https://travis-ci.org/freaksauce/dom-wrap-all)

# dom-wrap-all
Wrap multiple DOM nodes with a wrapper element.

## Installation
```
npm i dom-wrap-all
```

## Usage
Given the following markup:
```
<p>1</p>
<p id="message">Hello, world!</p>
<p>2</p>
<p>3</p>
<li>Apples</li><li>Bananas</li>
<p>4</p>
<li>Cherries</li>
<p>5</p>
<li>Dates</li>
<p>6</p>
```

```
import wrapAll from 'dom-wrap-all'

var fruits = document.getElementsByTagName('li');
var ol = document.createElement('ol');
wrapAll(fruits, ol);
```

### outputs
```
<p>1</p>
<p id="message">Hello, world!</p>
<p>2</p>
<p>3</p>
<ol>
	<li>Apples</li>
	<li>Bananas</li>
	<li>Cherries</li>
	<li>Dates</li>
</ol>
<p>4</p>
<p>5</p>
<p>6</p>
```

[![Donate with Bitcoin](https://en.cryptobadges.io/badge/big/15H4Wbpmqa6rp8wLRP2atWVhfemUhKjHbn)](https://en.cryptobadges.io/donate/15H4Wbpmqa6rp8wLRP2atWVhfemUhKjHbn)