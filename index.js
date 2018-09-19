// Wrap wrapper around nodes
// Just pass a collection of nodes, and a wrapper element
module.exports = function wrapAll(nodes, wrapper) {
	// Cache the current parent and previous sibling of the first node.
	var parent = nodes[0].parentNode;
	var previousSibling = nodes[0].previousSibling;

	// Place each node in wrapper.
	//  - If nodes is an array, we must increment the index we grab from 
	//    after each loop.
	//  - If nodes is a NodeList, each node is automatically removed from 
	//    the NodeList when it is removed from its parent with appendChild.
	for (var i = 0; nodes.length - i; wrapper.firstChild === nodes[0] && i++) {
			wrapper.appendChild(nodes[i]);
	}

	// Place the wrapper just after the cached previousSibling
	parent.insertBefore(wrapper, previousSibling.nextSibling);

	return wrapper;
}
