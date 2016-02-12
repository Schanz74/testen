/**
 * Ajax ohne Framework
 */

function getXMLHTTPObject() {
	
	var resObject = null;
	try {
		
		resObjcet = new ActiveXObject("Microsoft.XMLHTTP");
	}
	catch(Error) {
		
		try {
			
			resObject = new ActiveXObject("MSXML2.XMLHTTP");
		}
		catch(Error) {
			
			resObject = new XMLHTTPRequest();
		}
	}
}


/**
 * DEMO
 */
function demo() {}