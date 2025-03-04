const message = document.getElementById('message');
const inputContainer = document.getElementById('input-container');
const submitBtn = document.getElementById('submit-btn');
const videoElement = document.getElementById('bg-video');
const audioElement = document.getElementById('bg-audio');
const frequencyDescription = document.getElementById('frequency-description');
const bgBackground = document.getElementById('bg-background');

async function typeMessage(element, text, speed = 100) {
  element.textContent = '';
  for (let i = 0; i < text.length; i++) {
    element.textContent += text[i];
    await new Promise(resolve => setTimeout(resolve, speed));
  }
  await new Promise(resolve => setTimeout(resolve, 500));
}

async function startIntro() {
  await typeMessage(message, 'welcome to dynamic healing', 100);
  await new Promise(resolve => setTimeout(resolve, 2000));
  await typeMessage(message, 'enter numbers between 1-15 in both boxes and let your frequency find you', 80);

  await new Promise(resolve => setTimeout(resolve, 3000));

  message.style.opacity = 0;
  bgBackground.style.opacity = 0;

  inputContainer.style.opacity = 1;
  inputContainer.style.pointerEvents = 'all';
}

startIntro();

submitBtn.addEventListener('click', () => {
  const input1 = parseInt(document.getElementById('input1').value);
  const input2 = parseInt(document.getElementById('input2').value);

  if (isNaN(input1) || isNaN(input2) || input1 < 1 || input1 > 15 || input2 < 1 || input2 > 15) {
    alert('Please enter valid numbers between 1 and 15.');
    return;
  }

  const sum = input1 + input2;
  playMedia(sum);
});


function playMedia(sum) {
  const mediaLibrary = {
    2: { video: 'images/value2.mp4', audio: 'audio/174hzA1.mp3', description: '174hz- Grounding and calming' },
    3: { video: 'images/value3.mp4', audio: 'audio/285hzA2.mp3', description: '285hz- Tissue healing and restoration' },
    4: { video: 'images/value4.mp4', audio: 'audio/396hzA3.mp3', description: '396hz- Releasing fear and guilt' },
    5: { video: 'images/value5.mp4', audio: 'audio/417hzA4.mp3', description: '417hz- Cleansing negative energy' },
    6: { video: 'images/value6.mp4', audio: 'audio/432hzA5.mp3', description: '432hz- Natural harmony and deep peace' },
    7: { video: 'images/value7.mp4', audio: 'audio/528hzA6.mp3', description: '528hz- Repair and transformation' },
    8: { video: 'images/value8.mp4', audio: 'audio/639hzA7.mp3', description: '639hz- Connection and relationship healing' },
    9: { video: 'images/value9.mp4', audio: 'audio/741hzA8.mp3', description: '741hz- Detoxification and inner cleansing' },
    10: { video: 'images/value10.mp4', audio: 'audio/852hzA9.mp3', description: '852hz- Spiritual awakening and intuition' },
    11: { video: 'images/value11.mp4', audio: 'audio/963hzA10.mp3', description: '963hz- Pineal gland activation' },
    12: { video: 'images/value12.mp4', audio: 'audio/111hzA11.mp3', description: '111hz- Cellular rejuvination and grounding' },
    13: { video: 'images/value13.mp4', audio: 'audio/222hzA12.mp3', description: '222hz- Emotional balance and harmony' },
    14: { video: 'images/value14.mp4', audio: 'audio/333hzA13.mp3', description: '333hz- Creativity and growth' },
    15: { video: 'images/value15.mp4', audio: 'audio/444hzA14.mp3', description: '444hz- Spiritual protection' },
    16: { video: 'images/value16.mp4', audio: 'audio/555hzA15.mp3', description: '555hz- Change and transformation' },
    17: { video: 'images/value17.mp4', audio: 'audio/666hzA16.mp3', description: '666hz- Inner alignment and flow' }, 
    18: { video: 'images/value18.mp4', audio: 'audio/777hzA17.mp3', description: '777hz- Wisdom and elightenment' }, 
    19: { video: 'images/value19.mp4', audio: 'audio/888hzA18.mp3', description: '888hz- Abundance and energettic flow' }, 
    20: { video: 'images/value20.mp4', audio: 'audio/999hzA19.mp3', description: '999hz- Reflection of life' }, 
    21: { video: 'images/value21.mp4', audio: 'audio/666hzA16.mp3', description: '108hz- Universal connection and meditation ' }, 
    22: { video: 'images/value22.mp4', audio: 'audio/666hzA16.mp3', description: '272hz- Emotional release and restoration' }, 
    23: { video: 'images/value23.mp4', audio: 'audio/666hzA16.mp3', description: '320hz- Motivation and personal power' }, 
    24: { video: 'images/value24.mp4', audio: 'audio/666hzA16.mp3', description: '384hz- Communication and truth' }, 
    25: { video: 'images/value25.mp4', audio: 'audio/666hzA16.mp3', description: '426hz- Insight and clarity, truth yourself' }, 
    26: { video: 'images/value26.mp4', audio: 'audio/666hzA16.mp3', description: '480hz- Spiritual recognition and alignment of priorities' }, 
    27: { video: 'images/value27.mp4', audio: 'audio/666hzA16.mp3', description: '5280hz- Deep cellular healing' }, 
    28: { video: 'images/value28.mp4', audio: 'audio/666hzA16.mp3', description: '714hz- Energy renewal and spiritual recharge' }, 
    29: { video: 'images/value29.mp4', audio: 'audio/666hzA16.mp3', description: '8888hz- Infinite expansion and flow' }, 
    30: { video: 'images/value30.mp4', audio: 'audio/666hzA16.mp3', description: '440hz- Stabilization and clarity' }, 
};

if (mediaLibrary[sum]) {
  videoElement.src = mediaLibrary[sum].video;
  audioElement.src = mediaLibrary[sum].audio;
  frequencyDescription.textContent = mediaLibrary[sum].description;

  videoElement.style.opacity = 1;
  videoElement.style.zIndex = 0;
  audioElement.play();
  videoElement.play();
  frequencyDescription.style.opacity = 1;
} else {
  alert('No media available for this sum.');
}
}