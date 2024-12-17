// LOREM HIPSUM
async function hipsum(numberOfSentences = 3){
    const params = {
        type: "hipster-centric",
        sentences: numberOfSentences
    };
    const baseUrl = "http://hipsum.co/api/";
    const url = new URL(baseUrl);
    url.search = new URLSearchParams(params);

    const response = await fetch(url);
    const reader = response.body.getReader();
    const decoder = new TextDecoder("utf-8");
    let result = '';
    let done = false;

    while (!done) {
        const { value, done: streamDone } = await reader.read();
        done = streamDone;
        if (value) {
            result += decoder.decode(value, { stream: !done });
        }
    }
    return result;
}

const sentences = process.argv[2] || 2;

async function main() {
    const result = await hipsum({ type: "hipster-centric", sentences });
    console.log(result);
}

module.exports = {hipsum}