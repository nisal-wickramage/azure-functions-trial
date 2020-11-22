module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    if (req.query.name || (req.body && req.body.name)) {
        // Add a message to the Storage queue,
        // which is the name passed to the function.
        context.bindings.product = {
            name: (req.query.name || req.body && req.body.name),
            time: '2020-11-22'
        };
        context.res = {
            // status: 200, /* Defaults to 200 */
            status: 200,
            body: "Hello " + (req.query.name || req.body.name)
        };
    }
    else {
        context.res = {
            status: 400,
            body: "Please pass a name on the query string or in the request body"
        };
    }
}