export const handler = async (event: any) => {
    console.log("Received event:", JSON.stringify(event, null, 2));

    // Your logic here

    return {
        statusCode: 200,
        body: JSON.stringify({
            message: "Hello from Lambda!!",
            input: event,
        }),
    };
};