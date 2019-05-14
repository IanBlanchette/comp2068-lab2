const handleHTTP = (request, response) =>
{
	const query = request.query; 
	response.send(`x + y = result`);
}

module.exports = handleHTTP;
