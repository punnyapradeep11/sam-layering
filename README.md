# sam-layering


1. npm install -g aws-sam-local
2. Lambda function can be invoked by: 

    echo '{"message": "Hello world" }' | sam local invoke "helloworld"
    
3. To run API Gateway locally:

    sam local start-api



