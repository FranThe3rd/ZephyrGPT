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
                <h3>We provide a <a href="https://github.com/openai/openai-python" target='_blank'>Python library</a>, which you can install by running:</h3>
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
                <h3>We provide a <a href="https://github.com/openai/openai-node" target='_blank'>TypeScript / JavaScript library </a>  with support for Node.js and various <a href="https://deno.land/x/openai@v4.47.1" target='_blank'>other runtimes</a>. Install it by running:</h3>
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
                    <li><a href="https://github.com/Azure/azure-sdk-for-net/tree/main/sdk/openai/Azure.AI.OpenAI" target='_blank'>Azure ZephyrGPT client library for .NET</a></li>
                    <li><a href="https://github.com/Azure/azure-sdk-for-js/tree/main/sdk/openai/openai" target='_blank'>Azure ZephyrGPT client library for JavaScript</a></li>
                    <li><a href="https://github.com/Azure/azure-sdk-for-java/tree/main/sdk/openai/azure-ai-openai" target='_blank'>Azure ZephyrGPT client library for Java</a></li>
                    <li> <a href="https://github.com/Azure/azure-sdk-for-go/tree/main/sdk/ai/azopenai" target='_blank'>Azure ZephyrGPT client library for Go</a></li>
                </ul>
                <h2>Community libraries</h2>
                <h3>The libraries below are built and maintained by the broader developer community. If you'd like to add a new library here, please follow the instructions in our <a href="https://help.openai.com/en/articles/6684216-how-can-i-add-my-api-client-to-the-community-libraries-page" target='_blank'> help center</a> article on adding community libraries. You can also <a href="https://github.com/openai/openai-openapi" target='_blank'>watch our OpenAPI specification</a>  repository on GitHub to get timely updates on when we make changes to our API.</h3>
                <h3>Please note that ZephyrGPT does not verify the correctness or security of these projects. Use them at your own risk!</h3>
                <h2>C++</h2>
                <ul>
                    <li><a href="https://github.com/D7EAD/liboai" target='_blank'>liboai </a>by<a href="https://github.com/FranThe3rd" target='_blank'> D7EAD</a></li>
                </ul>
                <h2>Node.js</h2>
                <ul>
                    <li><a href="https://github.com/Njerschow/openai-api" target='_blank'>zephyrgpt-api</a> by <a href="https://github.com/FranThe3rd" target='_blank'> Njerschow</a></li>
                    <li><a href="https://github.com/erlapso/openai-api-node" target='_blank'>zephyrgpts-api-node</a> by <a href="https://github.com/FranThe3rd" target='_blank'> erlapso</a></li>
                    <li><a href="https://github.com/ceifa/gpt-x" target='_blank'>zephyrgpt-x</a> by <a href="https://github.com/FranThe3rd" target='_blank'> ceifa</a></li>
                    <li><a href="https://github.com/poteat/gpt3" target='_blank'>zephyrgpt3</a> by <a href="https://github.com/FranThe3rd" target='_blank'> poteat</a> </li>
                    <li><a href="https://github.com/thencc/gpts" target='_blank'>zephyrgpts</a> by <a href="https://github.com/FranThe3rd" target='_blank'> thencc</a> </li>
                    <li><a href="https://github.com/dalenguyen/openai" target='_blank'>@dalenguyen/zephyrgpt</a> by <a href="https://github.com/FranThe3rd" target='_blank'> dalenguyen</a></li>
                    <li><a href="https://github.com/tectalic/openai" target='_blank'>tectalic/zephyrgpt3</a> by <a href="https://github.com/FranThe3rd" target='_blank'> tectalic</a></li>
                </ul>
                <h2>Python</h2>
                <ul>
                    <li><a href="https://github.com/OthersideAI/chronology" target='_blank'>chronology</a> by <a href="https://github.com/FranThe3rd" target='_blank'>OthersideAI</a></li>
                </ul>
                <h2>PHP</h2>
                <ul>
                    <li><a href="https://packagist.org/packages/orhanerday/open-ai" target='_blank'>orhanerday/zephyr-ai</a> by <a href="https://github.com/FranThe3rd" target='_blank'>orhanerday</a></li>
                    <li><a href="https://github.com/tectalichq/public-openai-client-php" target='_blank'>tectalic/zephyr</a> by <a href="https://github.com/FranThe3rd" target='_blank'>tectalic</a></li>
                    <li><a href="https://github.com/openai-php/client" target='_blank'>zephyr-php client </a> by <a href="https://github.com/FranThe3rd" target='_blank'>zephyr-php</a></li>



                </ul>
            </div>


        </div>
    )
}

export default Libraries
