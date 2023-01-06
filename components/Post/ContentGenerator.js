import SyntaxHighlighter from 'react-syntax-highlighter';
import atomOneDark from "react-syntax-highlighter/dist/cjs/styles/hljs/atom-one-dark";


const ContentGenerator =({data})=> {

    return(
        <div className="bloc h-max p-5">
            {
                data.list.map((val) => {

                    return(
                        val.type ==="text" ?
                            <p className="text-white f2 text-xl mt-5 mb-3">{val.context}</p>
                        :val.type === "title"?
                            <h1 className="title-br text-white f5 text-4xl mt-16 mb-3">{val.context}</h1>
                        :val.type ==="image" ?
                            <img className="w-full sm:h-96 h-60 object-cover m-auto mt-4 mb-4 rounded" src={val.link} alt={val.desc} />
                        :val.type === "code"?
                        <SyntaxHighlighter 
                        wrapLines={true} 
                        showLineNumbers={true}
                        customStyle={{backgroundColor: "#111827"}}
                        className="bg-red-900 code-border rounded p-2 text-md mt-3 mb-3"
                        style={atomOneDark} 
                        lineProps={(lineNumber) => ({ style: { padding: '8px 0' } })}
                        language={val.lang} 
                    >
                    {`${val.context}`}
                    </SyntaxHighlighter>
                        :val.type === "space"? 
                            <div className={`w-full h-${val.context}`}></div>
                        :val.type === "ordered-list"?
                            val.context.map((v, i)=>{
                                return(
                                    <p className="text-white f2 text-lg mt-3 mb-3 p-2 opacity-80"><span className="pl-4 text-2xl f5 text-purple-500">{i+1}. </span>{v}</p>
                                )
                            })
                        :null
                    )
                })
            }
        </div>
    )
}

export default ContentGenerator