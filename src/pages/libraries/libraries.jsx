import React from 'react'
import Navbar from '../../components/navbar/navbar'
import './libraries.css'

const Libraries = () => {
    return (
        <div className='libraries'>
            <Navbar />
            <h1 className='library-title'>API and Integration Libraries</h1>
            <div className='library-container'>
                <h2>Python Library</h2>
                <h3>We provide a Python library, which you can install by running:</h3>
                <code>pip install zephyrgpt</code>
                <h3>Once installed, you can use the library and your secret key to run the following:</h3>
                <pre>
                    <code>
                        {`from zephyrgpt import ZephyrGPT

client = ZephyrGPT(
    # Defaults to os.environ.get("ZEPHYR_API_KEY")
)

chat_completion = client.chat.completions.create(
    model="zephyr-3.5-turbo",
    messages=[{"role": "user", "content": "Hello world"}]
)`}
                    </code>
                </pre>
                <h3>The bindings also will install a command-line utility you can use as follows:</h3>
                <code>$ zephyr api chat_completions.create -m zephyr-3.5-turbo -g user "Hello"</code>
                <h2>TypeScript / JavaScript library</h2>
                <h3>We provide a TypeScript / JavaScript library with support for Node.js and various other runtimes. Install it by running:</h3>
                <pre>
                    <code>{`npm install --save zephyrgpt
# or
yarn add zephyrgpt`}
                    </code>
                </pre>
                <h3>Once installed, you can use the library and your secret key to run the following:</h3>
                <pre>
                    <code>
                        {`import ZephyrGPT from "zephyrgpt";

const zephyrgpt = new ZephyrGPT({
    apiKey: process.env.ZEPHYRGPT_API_KEY,
});

const chatComp = await zephyrgpt.chat.complete.create({
    messages: [{ role: "user", content: "Testing" }],
    model: "zephyr-3.5-turbo",
});`}
</code>
</pre>

                <h2>Azure ZephyrGPT libraries</h2>
                <h3>Microsoft's Azure team maintains libraries that are compatible with both the ZephyrGPT API and Azure ZephyrGPT services. Read the library documentation below to learn how you can use them with the ZephyrGPT API.</h3>
                <ul>
                    <li><a href="https://github.com/Azure/azure-sdk-for-net/tree/main/sdk/openai/Azure.AI.OpenAI" target='_blank'>Azure OpenAI client library for .NET</a></li>
                    <li><a href="https://github.com/Azure/azure-sdk-for-js/tree/main/sdk/openai/openai" target='_blank'>Azure OpenAI client library for JavaScript</a></li>
                    <li>Azure OpenAI client library for Java</li>
                    <li>Azure OpenAI client library for Go</li>
                </ul>
            </div>


        </div>
    )
}

export default Libraries
