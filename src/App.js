import { child, get, ref } from 'firebase/database';
import React from 'react';
import ReactDOM from 'react-dom/client';
import database from './firebase.js';
import './App.css';


function ImageDisplay(props) {
    return (
        <div id='imageDisplayContainer'> 

            <div className='floatContainer'>
                <h1 className='title'>{props.title}</h1>
                
                <h1 className='subtitle'>{props.subtitle}</h1>
            </div>
            <div className='floatContainer'>
                <span className='helper'></span>
                <img src={props.imageUrl} width='100%' height='auto'/>
            </div>
            
        </div>
    )
}

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            alphabets: [],
            selectedAlphabet: {},
        }
    }

    componentDidMount() {
        const dbRef = ref(database);
        console.log("componentDidMount");

        get(child(dbRef, '1rtwWivo_XjQ5e2N4S2MaxJY2ieYnYrkKmqdUBsFhF-M/Phonics')).then((snapshot) => {
            if (snapshot.exists()) {
                        var values = snapshot.val()
                        this.setState({
                            alphabets: values
                        });
                    } else {
                        console.log("no data available");
                    }
        }).catch((error) => {
            console.log("Error");
        });

        var isPlaying = false;
        document.addEventListener('keydown', (event) => {
            var name = event.key;
            var code = event.code;
            var keyCode = event.keyCode;
        
        
            if (keyCode >= 65 && keyCode <= 90 && !isPlaying) {
        
                let index = keyCode - 65;
                var selectedAlpha = this.state.alphabets[index];
                this.setState({
                    selectedAlphabet: selectedAlpha
                });
        
               var url = selectedAlpha['voiceUrl'];
                var audio = new Audio(url);
                audio.play();
                isPlaying = true;
                audio.addEventListener("ended", function() {
                    isPlaying = false;
                })
            }
            if (name === 'Control') {
              return;
            }
            if (event.ctrlKey) {
              return;
            } else {
            }
          }, false);
    }

    render() {
        return (
            <div className='app' >
                <div className='imageDisplay'>
                    <ImageDisplay 
                        imageUrl={this.state.selectedAlphabet['imageUrl']}
                        title={this.state.selectedAlphabet['title']}
                        subtitle={this.state.selectedAlphabet['subtitle']}
                    />
                </div>  
            </div>
        )
        
    }

    
}

export default App;
