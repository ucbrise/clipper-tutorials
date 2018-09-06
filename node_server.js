const http = require('http');
const fs = require('fs');
var csvWriter = require('csv-write-stream')
const port = 8080

const requestHandler = (request, response) => {
	response.setHeader('Access-Control-Allow-Origin', '*');
	response.setHeader("Access-Control-Allow-Headers", "*");
	console.log(request.method)
	if(request.method =="POST"){
		var body = "";
		  request.on('data', function (chunk) {
		    body += chunk;
		  });
		  request.on('end', function () {
		    console.log('body: ' + body);
		    var jsonObj = JSON.parse(body);
		  	console.log(jsonObj);
		  	var toWrite = [jsonObj['label'], jsonObj['leftPaddle_y'], jsonObj['ball_x'], jsonObj['ball_y'], jsonObj['ball_dx'], jsonObj['ball_dy'], jsonObj['ball_x_prev'], jsonObj['ball_y_prev']]
		  	// toWrite += jsonObj['label']+","+jsonObj['leftPaddle_y']+","+jsonObj['ball_x'] +","+jsonObj['ball_y'] +","+jsonObj['ball_dx']+","+jsonObj['ball_dy'] +","+jsonObj['ball_x_prev']+","+jsonObj['ball_y_prev']
		  	// write to a  file named output.txt

		  	// var writer = csvWriter({ headers: ["label","paddle_y","0","ball_x","ball_y","ball_dx","ball_dy","x_prev","y_prev"]})
			var writer = csvWriter({sendHeaders: false})
			writer.pipe(fs.createWriteStream('out.csv', {flags: 'a'}))
			writer.write(jsonObj)
			writer.end()
			// csv.from(line).to(fs.createWriteStream(path, {flags: 'a'}))
			// fs.createWriteStream('output.csv', toWrite, (err) => {  
			//     // throws an error, you could also catch it here
			//     if (err) throw err;

			//     // success case, the file was saved
			//     console.log('Lyric saved!');
			// });
		  })		
		response.end("Data recorded")
	}
	else{
		// console.log(request.url)
		console.log("expecting OPTIONS")
		console.log(request.method)
		console.log("end response")
		response.end('Hello World\n');
	}
	
	
	
}

const server = http.createServer(requestHandler)

server.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})
