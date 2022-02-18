(async function(){
    await import("https://code.jquery.com/jquery-3.6.0.js")
    let keyWords = await fetch("https://kroljango13.github.io/PolskiScript/KeyWords.json").then(x => x.json());
    
    window.compilePolski = (code) => {
        for(var keyWord in keyWords){
            code = code.replaceAll(keyWord,keyWords[keyWord])
        }
        return code;
    }
    
    window.evalPolski = (code) => $.globalEval(compilePolski(code))
})();
