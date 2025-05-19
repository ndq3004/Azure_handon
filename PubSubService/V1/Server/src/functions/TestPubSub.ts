import { app, HttpRequest, HttpResponseInit, InvocationContext } from "@azure/functions";
import { WebPubSubServiceClient } from "@azure/web-pubsub";

export async function TestPubSub(request: HttpRequest, context: InvocationContext): Promise<HttpResponseInit> {
    context.log(`Http function processed request for url "${request.url}"`);

    const client = new WebPubSubServiceClient(process.env.WebPubSubConnectionString, "Hub");
    // below code will not await for each of command inside foreach
    // Array.from({length: 100}, (_, i) => i + 1).forEach(async id => {
    //     await client.sendToAll("new messages! " + id);
    //     console.log("Sent " + 1)
    // });

    for(let i = 1; i <= 100; i++) {
        await client.sendToAll("new messages! " + i);
        console.log("Sent " + i);
    }

    console.log("Done!")

    return { body: "sent all messages" };
};

app.http('TestPubSub', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: TestPubSub
});
