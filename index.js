
const NOTES = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
const BLACK_KEYS = ['C#', 'D#', 'F#', 'G#', 'A#'];
let showNotes = true;
const KEYS = [
    { note: 'C', audio: '28.mp3' },
    { note: 'C#', audio: '29.mp3' },
    { note: 'D', audio: '30.mp3' },
    { note: 'D#', audio: '31.mp3' },
    { note: 'E', audio: '32.mp3' },
    { note: 'F', audio: '33.mp3' },
    { note: 'F#', audio: '34.mp3' },
    { note: 'G', audio: '35.mp3' },
    { note: 'G#', audio: '36.mp3' },
    { note: 'A', audio: '37.mp3' },
    { note: 'A#', audio: '38.mp3' },
    { note: 'B', audio: '39.mp3' },
    { note: 'C', audio: '40.mp3' },
    { note: 'C#', audio: '41.mp3' },
    { note: 'D', audio: '42.mp3' },
    { note: 'D#', audio: '43.mp3' },
    { note: 'E', audio: '44.mp3' },
    { note: 'F', audio: '45.mp3' },
    { note: 'F#', audio: '46.mp3' },
    { note: 'G', audio: '47.mp3' },
    { note: 'G#', audio: '48.mp3' },
    { note: 'A', audio: '49.mp3' },
    { note: 'A#', audio: '50.mp3' },
    { note: 'B', audio: '51.mp3' },
    { note: 'C', audio: '52.mp3' },
    { note: 'C#', audio: '53.mp3' },
    { note: 'D', audio: '54.mp3' },
    { note: 'D#', audio: '55.mp3' },
    { note: 'E', audio: '56.mp3' },
    { note: 'F', audio: '57.mp3' },
    { note: 'F#', audio: '58.mp3' },
    { note: 'G', audio: '59.mp3' },
    { note: 'G#', audio: '60.mp3' },
    { note: 'A', audio: '61.mp3' },
    { note: 'A#', audio: '62.mp3' },
    { note: 'B', audio: '63.mp3' }
];

function createPiano() {
    const pianoEl = document.getElementById('piano');
    
    for (let octave = 1; octave <= 3; octave++) {
        NOTES.forEach((note) => {
            const isBlackKey = BLACK_KEYS.includes(note);

            if (isBlackKey) {
                const blackKey = document.createElement('div');
                blackKey.className = 'black-key';
                blackKey.textContent = showNotes ? note : '';
                
                const wrapper = pianoEl.lastChild;
                if (wrapper) {
                    wrapper.appendChild(blackKey);
                }
            } else {
                const wrapper = document.createElement('div');
                wrapper.className = 'key-wrapper';

                const whiteKey = document.createElement('div');
                whiteKey.className = 'white-key';
                whiteKey.textContent = showNotes ? note : '';

                wrapper.appendChild(whiteKey);
                pianoEl.appendChild(wrapper);
            }
        });
    }
}

document.querySelector('.btn-hide').addEventListener('click', function(e) {
    showNotes = !showNotes;
    e.target.textContent = showNotes ? 'Hide note names' : 'Show note names';
    
    document.querySelectorAll('.white-key, .black-key').forEach(key => {
        key.textContent = showNotes ? key.textContent.replace('', NOTES[Math.floor(Math.random() * NOTES.length)]) : '';
    });
    
    createPiano();
});

createPiano();
function activateKeys() {
    const keys = document.querySelectorAll('.white-key, .black-key');

    keys.forEach(key => {
        key.addEventListener('click', () => {
         const note=key.textContent;
         const result = KEYS.find(ky => ky.note == note);
       const audio=new Audio(result.audio);
       audio.play();
         
        });
    });
}
activateKeys();