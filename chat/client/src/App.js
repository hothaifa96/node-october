import "./App.css";
import io from 'socket.io-client'
import {useState ,useEffect} from 'react'

const socket = io.connect("http://localhost:3030")

function App() {

    const [input, setinput] = useState('');
    const [messages, setmessages] = useState();
    const [room, setroom] = useState();

    const sendMessage=()=>{
        socket.emit('sendMessage',{message:input,room})
    }

    useEffect(() => {
        socket.on('receiveMessage',(data)=>{
        setmessages(data.message)
    })
    });

    return (
        <div className="App">
            <header className="App-header">
                <div class="card">
                    <div class="chat-header">Chat</div>
                    <div class="chat-window">
                         <p>{messages}</p>
                    </div>
                    <div class="chat-input"> 
                        <input onChange={(ev)=>setinput(ev.target.value)} type="text" name="text" class="input" placeholder="Type here..." />
                        <input onChange={(ev)=>setroom(ev.target.value)} type="number" required name="text" class="input" placeholder="Room" />
                        <button class="send-button" onClick={sendMessage} ></button>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default App;
