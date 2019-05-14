const doMath = (method, x, y) =>
{
	switch(method.toLowerCase())
	{	
	case 'subtract':
		return { result: x - y, operation: "-"}; 
	case 'multiply':
		return { result: x * y, operation: "x"} 
	case 'divide':
		return { result: x / y, operation: "/"}
	case 'add':
		return { result: x + y, operation: "+"}
	default:
		return 'This is an invalid option';
	}
};

const handleHTTP = (request, response) =>
{
	const query = request.query;
	const x = parseInt(query.x);
	const y = parseInt(query.y);
	const method = query.method; 
	const result = doMath(method, x, y);

	response.send(`${x} ${result.operation} ${y} = ${result.result}`);
};

module.exports = handleHTTP;
