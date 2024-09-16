import { useState } from 'preact/hooks'
import preactLogo from './assets/preact.svg'
import viteLogo from '/vite.svg'
import './app.css'
import axios from 'axios';

export function App() {
  const [question, setQustion] = useState("");
  const [answer, setAnswer] = useState("");

  async function generateAnswer() {
    setAnswer("loading...");
    const response = await axios({
      url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyBCQKu2sNf9LTotFZkpIVJXeyoyiYEA6Aw",
      method: "post",
      data: {
        "contents": [{ "parts": [{ "text": question }] }]
      }
    })
    setAnswer(response['data']['candidates'][0]['content']['parts'][0]['text']);
  }

  return (
    <>
      <h1>Gemini AI</h1><br />
      <textarea
        value={question}
        onChange={(e) => setQustion(e.target.value)}
        
      ></textarea><br />
      <button onClick={generateAnswer}>Generate answer</button><br />
      <p>{answer}</p>
    </>
  )
}
