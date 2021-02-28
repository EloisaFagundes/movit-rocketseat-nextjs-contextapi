import Document, {Html, Head, Main, NextScript} from 'next/document';

export default class MyDocument extends Document {
    render() {
        return(
            <Html>
                <Head>
                <title>MOV.it</title>
                <link rel="shoetcut icon" href="favicon.png" type="image/png" />
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Rajdhani:wght@600&display=swap" rel="stylesheet" />
                <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" /> 
                </Head>
                <body>
                    <Main/>
                    <NextScript />
                </body>
            </Html>
        );
    }
}