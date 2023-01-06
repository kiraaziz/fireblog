import { useState } from "react"

const Contact =({show})=>{

    const [name, setName] = useState(null)
    const [email, setEmail] = useState(null)
    const [message, setMessage] = useState(null)
    const [code, setCode] = useState(null)
    const [i, setI] = useState(null)

    const Send  =async()=>{

        const sendMessage = await fetch('https://stale-camera.pockethost.io/api/collections/fireBlogMessages/records', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                email: email,
                message: message
            })
          })

          const result = await sendMessage.json()

          setCode(result.code)
          setI("done")
          
    }

    return(
        <section className="p-6 dark:text-gray-100 h-full home-bg ">
            <div className="container bg-gray-900 w-full max-w-xl p-8 mx-auto space-y-6 rounded-md shadow dark:bg-gray-900 ng-untouched ng-pristine ng-valid">
                <h2 className="w-full f4 text-white text-3xl font-bold leading-tight">{show.text}</h2>
                <div>
                    <label for="name" className="f2 text-white opacity-80 block mb-1 ml-1">Name</label>
                    <input value={name} onChange={(e)=>{setName(e.target.value)}} id="name" type="text" placeholder="Your name" required="" className="block w-full bg-gray-800 p-3 f2 text-white opacity-80 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 dark:bg-gray-800" />
                </div>
                <div>
                    <label for="email" className="f2 text-white opacity-80 block mb-1 ml-1">Email</label>
                    <input value={email} onChange={(e)=>{setEmail(e.target.value)}} id="email" type="email" placeholder="Your email" required="" className="bg-gray-800 p-3 f2 text-white opacity-80 block w-full rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 dark:bg-gray-800" />
                </div>
                <div>
                    <label for="message" className=" f2 text-white opacity-80 block mb-1 ml-1">Message</label>
                    <textarea value={message} onChange={(e)=>{setMessage(e.target.value)}} id="message" type="text" placeholder="Message..." className="block w-full bg-gray-800 p-3 f2 text-white opacity-80 rounded autoexpand focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 dark:bg-gray-800"></textarea>
                </div>
                <div>
                    <button type="submit" onClick={()=>{Send()}} className="w-full px-4 py-2 font-bold rounded shadow focus:outline-none f4 text-white bg-purple-500 focus:ring hover:ring focus:ring-opacity-50 dark:bg-violet-400 focus:ring-purple-400 hover:ring-purple-400 dark:text-gray-900">Send</button>
                </div>
                <div>
                    {i && !code && <div className="w-full px-4 py-2 font-bold rounded shadow focus:outline-none f4 text-white bg-green-500 text-center"><a href="/">Message Sended Go To Home Page</a></div>}
                    {code && <div className="w-full px-4 py-2 font-bold rounded shadow focus:outline-none f4 text-white bg-red-500 text-center">Some Thing Is Wrong Try Again</div>}
                </div>
            </div>
        </section>
    )
}

export default Contact