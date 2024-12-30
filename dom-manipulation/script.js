// Basic DOM manipulation - Changed the Link text and it href
const link = document.querySelector("a");
link.textContent = "Mozilla Developer Network";
link.href = "https://developer.mozilla.org";


// Creating and placing new nodes - creates para and attaches to "sect"
const sect = document.querySelector("section");

const para = document.createElement("p");
para.textContent = "We hope you enjoyed the ride.";
sect.appendChild(para);

//  creates textNode and attaches it to the bottom of the p tag
const text = document.createTextNode("- the premier source for web development knowledge",);
const linkPara = document.querySelector("p");
linkPara.appendChild(text)


// Moving and removing elements - This moves the paragraph down to the bottom of the section
//  if you want a a clone and add it use ''' Node.cloneNode()'''
sect.appendChild(linkPara)


//  This is how you remove a node

// this is how you do it when you have a reference to the node and it's parent already
	// sect.removeChild(linkPara);

//  This is how you remove the node based only on a reference to itself
	// linkPara.remove()

	