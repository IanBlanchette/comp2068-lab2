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

const validMethod = ['add', 'subtract', 'multiply', 'divide'];

const handleHTTP = (request, response) =>
{
	const query = request.query;
	const x = parseInt(query.x);
	const y = parseInt(query.y);
	const method = query.method; 

	if (isNaN(x) || isNaN(y))
	{
		return response.send('Both x and y must be a number');
	}

	if(!method || !validMethod.includes(method.toLowerCase()))
	{
		return response.send('Method must be included');
	}
	const result = doMath(method, x, y);

	response.send(`${x} ${result.operation} ${y} = ${result.result}`);
};

module.exports = handleHTTP;
