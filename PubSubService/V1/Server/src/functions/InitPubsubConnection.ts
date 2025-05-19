import { app, HttpRequest, HttpResponseInit, InvocationContext } from "@azure/functions";
import { WebPubSubServiceClient } from "@azure/web-pubsub";

export async function InitPubsubConnection(request: HttpRequest, context: InvocationContext): Promise<HttpResponseInit> {
    context.log(`Http function processed request for url "${request.url}" ${process.env.WebPubSubConnectionString}`);

    const name = request.query.get('name') || await request.text() || 'world';
    const client = new WebPubSubServiceClient(process.env.WebPubSubConnectionString, "newhub");
    var serviceUri = await client.getClientAccessToken({expirationTimeInMinutes: 10});
    console.log(serviceUri);
    return { body: serviceUri.url };
};

app.http('InitPubsubConnection', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: InitPubsubConnection
});
