/* ============================================
   KATEGORIEN UND FRAGEN DATEN - 90 FRAGEN
   ============================================ */

const CATEGORIES = [
    {
        id: 'roots-beginnings',
        name: 'Wurzeln & Anfänge',
        icon: '🌱',
        description: 'Wo kommst du her? Wie begann dein Leben?',
        questions: [
            'Wo bist du geboren und aufgewachsen? Beschreibe dein Elternhaus.',
            'Wie viele Geschwister hattest du? Was war deine Rolle unter ihnen?',
            'Wie waren deine Eltern? Beschreibe sie als Menschen.',
            'Was war dein Lieblingsspiel als Kind? Mit wem hast du es gespielt?',
            'Hattest du einen besten Freund oder eine beste Freundin in der Kindheit?',
            'Welche Schule hast du besucht? Erinnerst du dich an einen besonderen Lehrer?',
            'Was wolltest du als Kind werden? Warum?',
            'Gab es einen Ort aus deiner Kindheit, der dir heilig war?',
            'Welches Ereignis aus deiner Kindheit hat dich am meisten geprägt?',
            'Was war das Mutigste oder Verrückteste, das du als Kind gemacht hast?',
        ]
    },
    {
        id: 'love-relationships',
        name: 'Liebe & Beziehungen',
        icon: '❤️',
        description: 'Die Menschen, die dein Herz berührt haben.',
        questions: [
            'Wer war deine erste große Liebe? Wie hast du dich gefühlt?',
            'Wie hast du deinen Partner/deine Partnerin kennengelernt? Erzähle die Geschichte.',
            'Wann hast du gewusst: Das ist der/die Richtige?',
            'Beschreibe eure Hochzeit - oder warum ihr nicht geheiratet habt.',
            'Was war das schönste Geschenk, das du je von deinem Partner bekommen hast?',
            'Wie habt ihr Konflikte gelöst? Was war euer Geheimnis?',
            'Welches war euer Lieblingslied oder „euer" Ort?',
            'Was vermisst du am meisten, wenn du an eure gemeinsame Zeit denkst?',
            'Gab es eine Freundschaft, die so tief war wie Familie?',
            'Was würdest du heute deinem jüngeren Ich über die Liebe sagen?',
        ]
    },
    {
        id: 'family-children',
        name: 'Familie & Kinder',
        icon: '👨‍👩‍👧‍👦',
        description: 'Die nächste Generation und das Leben als Eltern oder Großeltern.',
        questions: [
            'Wolltest du immer Kinder haben? Oder kam es anders als geplant?',
            'Beschreibe den Moment, als du zum ersten Mal Mutter/Vater wurdest.',
            'Was hat dich an der Erziehung am meisten überrascht?',
            'Welche Werte wolltest du deinen Kindern unbedingt mitgeben?',
            'Erzähle eine lustige Geschichte aus der Zeit, als deine Kinder klein waren.',
            'Was war der stolzeste Moment als Elternteil?',
            'Wenn du Großeltern bist: Was ist das Schönste daran?',
            'Welchen Rat würdest du deinen Kindern oder Enkeln für ihr Leben mitgeben?',
        ]
    },
    {
        id: 'work-creation',
        name: 'Arbeit & Schaffen',
        icon: '💼',
        description: 'Was du geschaffen hast und wie du deine Tage verbracht hast.',
        questions: [
            'Welche Ausbildung hast du gemacht? War es deine erste Wahl?',
            'Was war dein erster Job? Wie viel hast du verdient?',
            'Beschreibe einen typischen Arbeitstag in deinem Hauptberuf.',
            'Gab es einen Kollegen oder Mentor, der dich besonders geprägt hat?',
            'Was war dein größter beruflicher Erfolg? Worauf bist du stolz?',
            'Wie hast du Beruf und Familie unter einen Hut gebracht?',
            'Wenn du nochmal von vorne anfangen könntest - welchen Beruf würdest du wählen?',
            'Wie war der Übergang in die Pension? Was hat sich verändert?',
        ]
    },
    {
        id: 'daily-routines',
        name: 'Alltag & Gewohnheiten',
        icon: '☕',
        description: 'Die kleinen Rituale und Routinen, die dein Leben strukturiert haben.',
        questions: [
            'Wie sah dein perfekter Sonntagmorgen aus?',
            'Hattest du eine Morgenroutine? Kaffee oder Tee? Zeitung?',
            'Wie hast du Weihnachten oder andere wichtige Feste gefeiert?',
            'Gab es ein Rezept oder Gericht, das nur du kochen konntest?',
            'Hattest du einen Garten? Was war deine Lieblingspflanze?',
            'Wie habt ihr als Familie gegessen? Wer saß wo am Tisch?',
            'Welche Angewohnheit hattest du, die andere lustig oder eigenartig fanden?',
            'Was hast du vor dem Schlafengehen gemacht?',
            'Gab es Familientraditionen, die dir besonders wichtig waren?',
            'Was waren die kleinen Freuden, die deinen Alltag schön gemacht haben?',
        ]
    },
    {
        id: 'joy-passion',
        name: 'Freude & Leidenschaft',
        icon: '✨',
        description: 'Was dich zum Leuchten gebracht hat.',
        questions: [
            'Was war dein liebstes Hobby? Wie bist du dazu gekommen?',
            'Welche Musik hast du geliebt? Gab es ein Lied, das „dein" Lied war?',
            'Welches Buch oder welcher Film hat dich am meisten bewegt?',
            'Beschreibe die schönste Reise deines Lebens. Was hast du gesehen, gefühlt?',
            'Gab es einen Sport oder eine Aktivität, bei der du dich lebendig gefühlt hast?',
            'Warst du Mitglied in einem Verein oder einer Gemeinschaft?',
            'Hattest du ein Talent oder eine Fertigkeit, auf die du stolz warst?',
            'Was war das beste Geschenk, das du je bekommen hast?',
            'Wann hast du dich das letzte Mal so richtig gefreut?',
            'Was hat dich zum Lachen gebracht? Wer konnte dich aufheitern?',
        ]
    },
    {
        id: 'hardship-strength',
        name: 'Tiefe & Kraft',
        icon: '⚡',
        description: 'Die Momente, die dich gefordert - und gestärkt haben.',
        questions: [
            'Was war die größte Herausforderung deines Lebens?',
            'Hast du Krieg, Flucht oder schwere wirtschaftliche Zeiten erlebt?',
            'Welcher Verlust hat dich am meisten getroffen? Wie bist du damit umgegangen?',
            'Gab es einen Moment, in dem du dachtest, du kannst nicht mehr weitermachen?',
            'Wer oder was hat dir in schweren Zeiten Kraft gegeben?',
            'Was hast du aus den schwersten Zeiten gelernt?',
            'Gibt es etwas, das du bereust oder anders machen würdest?',
            'Wie hast du gelernt, mit Abschied umzugehen?',
        ]
    },
    {
        id: 'wisdom-sharing',
        name: 'Weisheit & Weitergabe',
        icon: '💎',
        description: 'Was du aus dem Leben gelernt hast - deine Essenz.',
        questions: [
            'Was ist dir im Leben wirklich wichtig geworden?',
            'Woran glaubst du? Was gibt deinem Leben Sinn?',
            'Was bedeutet für dich ein gutes, erfülltes Leben?',
            'Welches war die wichtigste Entscheidung deines Lebens?',
            'Was würdest du jungen Menschen heute mit auf den Weg geben?',
            'Worauf bist du in deinem Leben am meisten stolz?',
            'Was möchtest du, dass man sich über dich erinnert?',
            'Wenn du noch einen Wunsch frei hättest - welcher wäre das?',
        ]
    },
    {
        id: 'senses-memories',
        name: 'Sinnliches & Erinnertes',
        icon: '👃',
        description: 'Die Details, die eine Erinnerung lebendig machen.',
        questions: [
            'Welcher Geruch erinnert dich sofort an deine Kindheit?',
            'Was war dein absolutes Lieblingsgericht? Wer hat es gekocht?',
            'Welches Geräusch oder welche Musik bringt dich sofort in eine bestimmte Zeit zurück?',
            'Beschreibe einen Ort, an dem du dich immer geborgen gefühlt hast.',
            'Welche Jahreszeit mochtest du am liebsten? Warum?',
            'Erzähle eine lustige oder peinliche Geschichte, über die du heute lachen kannst.',
            'Was war der schönste Sonnenaufgang oder Sonnenuntergang, den du je gesehen hast?',
            'Welcher kleine, alltägliche Moment hat dich unerwartet glücklich gemacht?',
            'Was vermisst du aus früheren Zeiten am meisten?',
            'Wenn du eine Erinnerung für immer festhalten könntest - welche wäre es?',
        ]
    },
    {
        id: 'time-change',
        name: 'Zeit & Wandel',
        icon: '⏰',
        description: 'Wie sich die Welt verändert hat - und du mit ihr.',
        questions: [
            'Was war die größte technische Neuerung, die du erlebt hast? (Fernsehen, Auto, Computer, Handy?)',
            'Wie hat sich dein Heimatort im Laufe der Jahre verändert?',
            'Was war früher besser? Was ist heute besser?',
            'Welches historische Ereignis hat dich am meisten bewegt oder beunruhigt?',
            'Wie haben sich die Rollen von Mann und Frau in deinem Leben verändert?',
            'Was würdest du gerne den Menschen in 50 oder 100 Jahren erzählen?',
            'Wenn du die Welt heute mit deiner Jugend vergleichst - was macht dich hoffnungsvoll?',
            'Was möchtest du noch erleben oder erreichen?',
        ]
    }
];

/* ============================================
   AUDIO RECORDER KLASSE
   ============================================ */

class AudioRecorder {
    constructor() {
        this.mediaRecorder = null;
        this.audioChunks = [];
        this.audioBlob = null;
        this.recordingStartTime = null;
        this.timerInterval = null;
        this.isRecording = false;
    }

    async start() {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            this.mediaRecorder = new MediaRecorder(stream);
            this.audioChunks = [];
            this.recordingStartTime = Date.now();
            this.isRecording = true;

            this.mediaRecorder.ondataavailable = (event) => {
                this.audioChunks.push(event.data);
            };

            this.mediaRecorder.onstop = () => {
                this.audioBlob = new Blob(this.audioChunks, { type: 'audio/wav' });
                this.isRecording = false;
            };

            this.mediaRecorder.start();
            this.startTimer();
        } catch (error) {
            console.error('Fehler beim Starten der Aufnahme:', error);
            alert('Mikrofon-Zugriff wurde abgelehnt. Bitte erlaube den Zugriff und versuche es erneut.');
        }
    }

    stop() {
        if (this.mediaRecorder && this.isRecording) {
            this.mediaRecorder.stop();
            this.mediaRecorder.stream.getTracks().forEach(track => track.stop());
            this.stopTimer();
        }
    }

    startTimer() {
        this.timerInterval = setInterval(() => {
            if (this.recordingStartTime && this.isRecording) {
                const elapsed = Math.floor((Date.now() - this.recordingStartTime) / 1000);
                const minutes = Math.floor(elapsed / 60);
                const seconds = elapsed % 60;
                const timerElement = document.getElementById('timer');
                if (timerElement) {
                    timerElement.textContent = 
                        `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
                }
            }
        }, 100);
    }

    stopTimer() {
        clearInterval(this.timerInterval);
    }

    getAudioBlob() {
        return this.audioBlob;
    }

    getAudioUrl() {
        if (this.audioBlob) {
            return URL.createObjectURL(this.audioBlob);
        }
        return null;
    }
}

/* ============================================
   STORAGE MANAGER
   ============================================ */

class StorageManager {
    constructor() {
        this.storageKey = 'erinnerungen_app_data';
        this.loadData();
    }

    loadData() {
        const data = localStorage.getItem(this.storageKey);
        this.recordings = data ? JSON.parse(data) : {};
    }

    saveRecording(categoryId, questionIndex, audioBlob) {
        // Konvertiere Blob zu Base64
        const reader = new FileReader();
        reader.readAsDataURL(audioBlob);
        
        return new Promise((resolve) => {
            reader.onload = () => {
                const key = `${categoryId}_${questionIndex}`;
                this.recordings[key] = {
                    data: reader.result,
                    timestamp: new Date().toISOString()
                };
                this.persistData();
                resolve();
            };
        });
    }

    getRecording(categoryId, questionIndex) {
        const key = `${categoryId}_${questionIndex}`;
        return this.recordings[key];
    }

    deleteRecording(categoryId, questionIndex) {
        const key = `${categoryId}_${questionIndex}`;
        delete this.recordings[key];
        this.persistData();
    }

    persistData() {
        localStorage.setItem(this.storageKey, JSON.stringify(this.recordings));
    }

    hasRecording(categoryId, questionIndex) {
        const key = `${categoryId}_${questionIndex}`;
        return key in this.recordings;
    }
}

/* ============================================
   APP STATE & INITIALIZATION
   ============================================ */

let currentCategory = null;
let audioRecorder = null;
let storageManager = null;
let currentRecordingQuestion = null;

function initApp() {
    audioRecorder = new AudioRecorder();
    storageManager = new StorageManager();
    renderCategories();
}

/* ============================================
   UI FUNCTIONS - NAVIGATION
   ============================================ */

function startApp() {
    document.getElementById('intro-page').style.display = 'none';
    document.getElementById('categories-page').style.display = 'block';
    renderCategories();
}

function backToCategories() {
    document.getElementById('questions-page').style.display = 'none';
    document.getElementById('categories-page').style.display = 'block';
    currentCategory = null;
}

function backToIntro() {
    document.getElementById('categories-page').style.display = 'none';
    document.getElementById('intro-page').style.display = 'block';
}

function selectCategory(categoryId) {
    currentCategory = CATEGORIES.find(c => c.id === categoryId);
    document.getElementById('categories-page').style.display = 'none';
    document.getElementById('questions-page').style.display = 'block';
    renderQuestions();
}

/* ============================================
   UI FUNCTIONS - CATEGORIES
   ============================================ */

function renderCategories() {
    const grid = document.getElementById('categories-grid');
    grid.innerHTML = '';

    CATEGORIES.forEach(category => {
        const card = document.createElement('div');
        card.className = 'category-card';
        card.onclick = () => selectCategory(category.id);
        
        // Zähle beantwortete Fragen
        let answeredCount = 0;
        category.questions.forEach((_, index) => {
            if (storageManager.hasRecording(category.id, index)) {
                answeredCount++;
            }
        });

        card.innerHTML = `
            <span class="category-icon">${category.icon}</span>
            <h3>${category.name}</h3>
            <p class="category-description">${category.description}</p>
            <p class="category-count">${answeredCount} / ${category.questions.length} beantwortet</p>
        `;

        grid.appendChild(card);
    });
}

/* ============================================
   UI FUNCTIONS - QUESTIONS
   ============================================ */

function renderQuestions() {
    document.getElementById('category-title').textContent = currentCategory.name;
    const container = document.getElementById('questions-container');
    container.innerHTML = '';

    currentCategory.questions.forEach((question, index) => {
        const card = document.createElement('div');
        card.className = 'question-card';
        
        const hasRecording = storageManager.hasRecording(currentCategory.id, index);
        if (hasRecording) {
            card.classList.add('answered');
        }

        let controlsHTML = `
            <div class="question-controls">
                <button class="btn-record-question ${hasRecording ? 'answered' : ''}" 
                        onclick="openRecorder('${currentCategory.id}', ${index})">
                    🎙️ ${hasRecording ? 'Neu aufnehmen' : 'Aufnehmen'}
                </button>
        `;

        if (hasRecording) {
            const recording = storageManager.getRecording(currentCategory.id, index);
            controlsHTML += `
                <button class="btn-delete" onclick="deleteRecording('${currentCategory.id}', ${index})">
                    🗑️ Löschen
                </button>
            `;
        }
        controlsHTML += `</div>`;

        let audioHTML = '';
        if (hasRecording) {
            const recording = storageManager.getRecording(currentCategory.id, index);
            audioHTML = `
                <div class="recording-badge">
                    ✓ Aufgenommen
                </div>
                <audio controls class="audio-player" src="${recording.data}"></audio>
            `;
        }

        card.innerHTML = `
            <div class="question-number">Frage ${index + 1}</div>
            <p class="question-text">${question}</p>
            ${audioHTML}
            ${controlsHTML}
        `;

        container.appendChild(card);
    });

    updateProgressBar();
}

function updateProgressBar() {
    let answeredCount = 0;
    currentCategory.questions.forEach((_, index) => {
        if (storageManager.hasRecording(currentCategory.id, index)) {
            answeredCount++;
        }
    });

    const total = currentCategory.questions.length;
    const percentage = (answeredCount / total) * 100;

    document.getElementById('progress-fill').style.width = percentage + '%';
    document.getElementById('progress-text').textContent = 
        `${answeredCount} von ${total} Fragen beantwortet`;
}

/* ============================================
   AUDIO RECORDER UI
   ============================================ */

function openRecorder(categoryId, questionIndex) {
    currentRecordingQuestion = { categoryId, questionIndex };
    const question = currentCategory.questions[questionIndex];

    document.getElementById('question-text').textContent = question;
    document.getElementById('recorder-modal').style.display = 'flex';
    document.getElementById('btn-record').style.display = 'block';
    document.getElementById('btn-stop').style.display = 'none';
    document.getElementById('recording-indicator').style.display = 'none';
    document.getElementById('recording-ready').style.display = 'block';
    document.getElementById('playback-area').style.display = 'none';
    document.getElementById('timer').textContent = '00:00';
}

function closeRecorder() {
    if (audioRecorder.isRecording) {
        audioRecorder.stop();
    }
    document.getElementById('recorder-modal').style.display = 'none';
    currentRecordingQuestion = null;
}

async function startRecording() {
    document.getElementById('btn-record').style.display = 'none';
    document.getElementById('btn-stop').style.display = 'block';
    document.getElementById('recording-ready').style.display = 'none';
    document.getElementById('recording-indicator').style.display = 'flex';
    document.getElementById('playback-area').style.display = 'none';

    await audioRecorder.start();
}

function stopRecording() {
    audioRecorder.stop();
    document.getElementById('btn-record').style.display = 'none';
    document.getElementById('btn-stop').style.display = 'none';
    document.getElementById('recording-indicator').style.display = 'none';

    setTimeout(() => {
        const audioUrl = audioRecorder.getAudioUrl();
        document.getElementById('audio-playback').src = audioUrl;
        document.getElementById('playback-area').style.display = 'block';
    }, 500);
}

function retryRecording() {
    document.getElementById('playback-area').style.display = 'none';
    document.getElementById('recording-ready').style.display = 'block';
    document.getElementById('btn-record').style.display = 'block';
    document.getElementById('timer').textContent = '00:00';
}

async function saveRecording() {
    if (!currentRecordingQuestion || !audioRecorder.getAudioBlob()) {
        alert('Keine Aufnahme vorhanden!');
        return;
    }

    const { categoryId, questionIndex } = currentRecordingQuestion;
    
    try {
        await storageManager.saveRecording(
            categoryId,
            questionIndex,
            audioRecorder.getAudioBlob()
        );
        
        renderQuestions();
        renderCategories();
        closeRecorder();
        
        // Kurze Bestätigungsmitteilung
        showNotification('✓ Aufnahme gespeichert!');
    } catch (error) {
        console.error('Fehler beim Speichern:', error);
        alert('Fehler beim Speichern der Aufnahme!');
    }
}

function deleteRecording(categoryId, questionIndex) {
    if (confirm('Möchtest du diese Aufnahme wirklich löschen?')) {
        storageManager.deleteRecording(categoryId, questionIndex);
        renderQuestions();
        renderCategories();
        showNotification('Aufnahme gelöscht');
    }
}

/* ============================================
   NOTIFICATIONS
   ============================================ */

function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: var(--success-color);
        color: white;
        padding: 15px 25px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        z-index: 2000;
        animation: slideIn 0.3s ease-out;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-out';
        setTimeout(() => notification.remove(), 300);
    }, 2000);
}

/* ============================================
   INITIALIZATION
   ============================================ */

document.addEventListener('DOMContentLoaded', initApp);
