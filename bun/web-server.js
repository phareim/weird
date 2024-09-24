import { serve } from "bun";
let count = 0;
const html = (c) => `
<!DOCTYPE html>
<html>
<head>
    <title>Bun-server</title>
</head>
<body>
    <h1>Hello, Bun!</h1>
    <p>Count: ${c}</p>
</body>
</html>
`;

serve({
    fetch(req) {
        return new Response(html(++count), {
            status: 200,
            headers: {
                "Content-Type": "text/html; charset=utf-8"
            }
        });
    },
    port: 3333
});