export const emailTemplate = (name: string, email: string, message: string) => (
    `<!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Email Template</title>
                <style>
                    body {
                        font-family: Arial, Helvetica, sans-serif;
                        font-size: 16px;
                        line-height: 1.5;
                        color: #333;
                    }
                    h1 {
                        font-size: 2rem;
                        line-height: 1.2;
                        margin-bottom: 1rem;
                    }
                    p {
                        margin-bottom: 1rem;
                    }
                    .container {
                        max-width: 800px;
                        margin: auto;
                        padding: 1rem;
                    }
                </style>
            </head>
            <body>
                <div class="container">
                    <h1>You have a new message from your website</h1>
                    <p><strong>Name: </strong> ${name}</p>
                    <p><strong>Email: </strong> ${email}</p>
                    <p><strong>Message: </strong> ${message}</p>
                </div>
            </body>
        </html>`
);