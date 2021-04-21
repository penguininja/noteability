import logo from './logo.svg';
import './App.css';
import React, { Component } from "react";
import { useEffect } from "react";

function CreateNotes() {
	const n = 17
	var notes = [];
	for (var i = 1; i < (n + 1); i++) {
	    // note: we are adding a key prop here to allow react to uniquely identify each
	    // element in this array. see: https://reactjs.org/docs/lists-and-keys.html
	    notes.push(	
			<li>
				<audio preload="auto" id={"note-" + i}>
	            	<source src={"/notes/noteability" + i + ".mp3"}></source>
				</audio>
			</li>
		);
	}
	return <ul className="notes">{notes}</ul>;
}

function playAudio(num) {
	const audioId = "note-" + num
	const audioEl = document.getElementById(audioId)
	audioEl.pause()
	audioEl.currentTime = 0
	audioEl.play()
}

function HandleKeypress() {
	
	const key1 = 49;
	const key2 = 50;
	const key3 = 51;
	const key4 = 52;
	const key5 = 53;
	const key6 = 54;
	const key7 = 55;
	const key8 = 56;
	const key9 = 57;
	const key0 = 48;
	const keyq = 81;
	const keyw = 87;
	const keye = 69;
	const keyr = 82;
	const keyt = 84;
	const keyy = 89;
	const keyu = 85;																

	useEffect(() => {
		function handleKeyDown(e) {
			switch(e.keyCode) {
		    	case key1:
 					playAudio(1)
					break
				case key2:
 					playAudio(2)
					break
				case key3:
 					playAudio(3)
					break
				case key4:
 					playAudio(4)
					break
				case key5:
 					playAudio(5)
					break
				case key6:
					playAudio(6)
					break
				case key7:
 					playAudio(7)
					break
				case key8:
 					playAudio(8)
					break
				case key9:
 					playAudio(9)
					break
				case key0:
 					playAudio(10)
					break
				case keyq:
 					playAudio(11)
					break
				case keyw:
 					playAudio(12)
					break
				case keye:
 					playAudio(13)
					break
				case keyr:
 					playAudio(14)
					break
				case keyt:
 					playAudio(15)
					break
				case keyy:
					playAudio(16)
					break
				case keyu:
 					playAudio(17)
					break
			}
		}	

  		document.addEventListener('keydown', handleKeyDown);

  		// Don't forget to clean up
  		return function cleanup() {
    		document.removeEventListener('keydown', handleKeyDown);
  		}
	}, []);
	
	return null;
}

function Key(props) {
	return (
		<li className="keyboard__key-item">
			<button className={"keyboard__key keyboard__key--" + props.color} onClick={() => playAudio(props.num)}>
				<span className={"keyboard__key-label keyboard__key-label--" + props.color}>
					<span className="keyboard__key-label-inner">{props.num}</span>
				</span>
			</button>	
		</li>
	);
}

function Keyboard(props) {
	return (
		<ul className="keyboard">
			<Key num="1" color="white"/>
			<Key num="2" color="black"/>
			<Key num="3" color="white"/>		
			<Key num="4" color="black"/>		
			<Key num="5" color="white"/>
			<Key num="6" color="white"/>
			<Key num="7" color="black"/>
			<Key num="8" color="white"/>		
			<Key num="9" color="black"/>		
			<Key num="10" color="white"/>				
			<Key num="11" color="black"/>
			<Key num="12" color="white"/>
			<Key num="13" color="white"/>		
			<Key num="14" color="black"/>		
			<Key num="15" color="white"/>
			<Key num="16" color="black"/>
			<Key num="17" color="white"/>		
		</ul>
	);
}

const cardCategory = "Standards"
const cardTitle = "Don't Cry For Me, Argentina"
const cardNotesPiano = "5-5 5 5-6 8 10 8-----8 10 10-8 13-8-6-5"
const cardNotes = cardNotesPiano
const cardNotesKeyboard = cardNotesPiano.replaceAll('10', '0')
								.replaceAll('11', 'Q')
								.replace('12', 'W')
								.replace('13', 'E')
								.replace('14', 'R')
								.replace('15', 'T')
								.replace('16', 'Y')
								.replace('17', 'U')
var cardModeKeyboard = false

class Cards extends React.Component {
	
    state = {
		cardNotes: cardNotesPiano
    }	
	
	toggleMode() {
		if (cardModeKeyboard == false) {
			this.setState({cardNotes: cardNotesKeyboard})	
			cardModeKeyboard = true
		}
		else {
			this.setState({cardNotes: cardNotesPiano})		
			cardModeKeyboard = false
		}
	}
	
  	render() {
		return (
			<div className="card__cards">
				<div className="card__card">
		   	 		<div className="card__category">{cardCategory}</div>
					<h2 className="card__title">{cardTitle}</h2>
					<div className="card__notes">{this.state.cardNotes}</div>
					<button className="button" onClick={this.toggleMode.bind(this)}>Toggle Note Mode</button>
				</div>
			</div>
		);
	}
}

function App() {
	return (
    	<div className="App">
      		<header className="App-header">
	  			<h1 className="title">Noteability</h1>
		  	</header>
		  	<Cards/>
			<Keyboard/>
			<CreateNotes/>
			<HandleKeypress/>
		</div>
	);
}

export default App;
