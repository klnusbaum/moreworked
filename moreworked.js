walk(document.body);

function walk(node)  
{
	var child, next;

	switch ( node.nodeType )  
	{
		case 1: 
		case 9:  
		case 11: 
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling; 
				walk(child);
				child = next;
			}
			break;

		case 3: 
			handleText(node);
			break;
	}
}

function handleText(textNode) 
{
	var v = textNode.nodeValue;

	v = v.replace(/\bopen sourced\b/g, "more worked");
	v = v.replace(/\bopen-sourced\b/g, "more-worked");
	v = v.replace(/\bopen source\b/g, "more work");
	v = v.replace(/\bopen-source\b/g, "more-work");

	v = v.replace(/\bOpen Sourced\b/g, "More Worked");
	v = v.replace(/\bOpen-Sourced\b/g, "More-Worked");
	v = v.replace(/\bOpen Source\b/g, "More Work");
	v = v.replace(/\bOpen-Source\b/g, "More-Work");
	
	v = v.replace(/\bOpen sourced\b/g, "More worked");
	v = v.replace(/\bOpen-sourced\b/g, "More-worked");
	v = v.replace(/\bOpen source\b/g, "More work");
	v = v.replace(/\bOpen-source\b/g, "More-work");
		
	textNode.nodeValue = v;
}
