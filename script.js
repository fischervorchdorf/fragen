/* ============================================
   KATEGORIEN UND FRAGEN DATEN - 95 FRAGEN
   ============================================ */

const CATEGORIES = [
    {
        id: 'roots-beginnings',
        name: 'Wurzeln & Anfänge',
        icon: '🌱',
        description: 'Wo kommst du her? Wie begann dein Leben? Die Kindheit formt uns mehr, als wir oft ahnen.',
        questions: [
            'Wo bist du geboren und aufgewachsen? Beschreibe dein Elternhaus – nicht nur das Gebäude, sondern wie es sich anfühlte.',
            'Wie viele Geschwister hattest du? Was war deine Rolle unter ihnen – der Beschützer, der Träumer, der Rebell?',
            'Beschreibe deine Eltern als Menschen. Was hast du an ihnen geliebt? Was hat dich an ihnen verletzt?',
            'Was war dein Lieblingsspiel als Kind? Mit wem hast du es gespielt?',
            'Hattest du einen besten Freund oder eine beste Freundin in der Kindheit? Was ist aus dieser Freundschaft geworden?',
            'Gab es einen Erwachsenen außerhalb deiner Familie, der an dich geglaubt hat? Was hat das mit dir gemacht?',
            'Was wolltest du als Kind werden? Was hat dich daran fasziniert?',
            'Gab es einen Ort aus deiner Kindheit, der dir heilig war? Einen Rückzugsort, einen geheimen Platz?',
            'Welches Ereignis aus deiner Kindheit hat dich am meisten geprägt – im Guten oder im Schweren?',
            'Wann hast du als Kind zum ersten Mal echte Angst gespürt? Was ist passiert?',
        ]
    },
    {
        id: 'love-relationships',
        name: 'Liebe & Beziehungen',
        icon: '❤️',
        description: 'Die Menschen, die dein Herz berührt haben. Liebe in all ihren Formen – die leichte und die schwere.',
        questions: [
            'Wer war deine erste große Liebe? Wie hast du dich gefühlt, wenn du an sie oder ihn gedacht hast?',
            'Wie hast du deinen Lebenspartner kennengelernt? Erzähle die ganze Geschichte.',
            'Wann hast du gewusst: Das ist der oder die Richtige? Gab es einen bestimmten Moment?',
            'Beschreibe eure Hochzeit – oder warum ihr euch entschieden habt, nicht zu heiraten.',
            'Gab es einen Moment, in dem du wusstest: Dieser Mensch sieht mich wirklich, so wie ich bin?',
            'Was war der schwerste Moment in eurer Beziehung? Wie habt ihr ihn überstanden?',
            'Welches war euer Lieblingslied oder euer besonderer Ort? Warum gerade dieser?',
            'Was vermisst du am meisten, wenn du an eure gemeinsame Zeit denkst?',
            'Gab es eine Freundschaft, die so tief war wie Familie? Erzähle von diesem Menschen.',
            'Was würdest du heute deinem jüngeren Ich über die Liebe sagen?',
        ]
    },
    {
        id: 'family-children',
        name: 'Familie & Kinder',
        icon: '👨‍👩‍👧‍👦',
        description: 'Die nächste Generation. Was es bedeutet, Verantwortung für ein anderes Leben zu tragen.',
        questions: [
            'Wolltest du immer Kinder haben? Oder kam es anders als geplant?',
            'Beschreibe den Moment, als du zum ersten Mal Mutter oder Vater wurdest. Was hast du gefühlt?',
            'Was hat dich an der Erziehung am meisten überrascht? Was war anders, als du es dir vorgestellt hattest?',
            'Welche Werte wolltest du deinen Kindern unbedingt mitgeben? Ist es dir gelungen?',
            'Gab es einen Moment, in dem dein Kind dir etwas beigebracht hat – ohne es zu wissen?',
            'Was war der stolzeste Moment, den du als Elternteil erlebt hast?',
            'Wenn du Großeltern bist: Was ist das Schönste daran? Was ist anders als beim eigenen Kind?',
            'Was hast du deinen Kindern nie gesagt, obwohl du es wolltest?',
        ]
    },
    {
        id: 'work-creation',
        name: 'Arbeit & Schaffen',
        icon: '💼',
        description: 'Was du geschaffen hast. Die Arbeit deiner Hände und deines Geistes.',
        questions: [
            'Musstest du einen Traum aufgeben, um praktisch zu sein? Welchen? Trauerst du ihm nach?',
            'Wann hast du zum ersten Mal gespürt: Das kann ich. Das bin ich.',
            'Was an deiner Arbeit hat dir Sinn gegeben – und was hat dir Kraft geraubt?',
            'Gab es einen Kollegen oder Mentor, der dich besonders geprägt hat? Was hast du von ihm gelernt?',
            'Was war dein größter beruflicher Erfolg? Was bedeutete er dir wirklich?',
            'Wie hast du Beruf und Familie unter einen Hut gebracht? Was hast du dafür geopfert?',
            'Wenn du nochmal von vorne anfangen könntest – welchen Beruf würdest du wählen? Warum?',
            'Was hast du vermisst, als du aufgehört hast zu arbeiten? Was hat dich überrascht?',
        ]
    },
    {
        id: 'daily-routines',
        name: 'Alltag & Rituale',
        icon: '🏠',
        description: 'Die kleinen Gewohnheiten, die ein Leben ausmachen. Das Gewöhnliche, das eigentlich das Besondere ist.',
        questions: [
            'Wie sah dein perfekter Sonntagmorgen aus?',
            'Gab es einen Moment am Tag, der nur dir gehörte – wo du ganz bei dir warst?',
            'Wie hast du Weihnachten oder andere wichtige Feste gefeiert? Welche Tradition war dir am wichtigsten?',
            'Gab es ein Rezept oder Gericht, das nur du so kochen konntest? Von wem hast du es gelernt?',
            'Hattest du einen Garten? Was war deine Lieblingspflanze? Warum gerade diese?',
            'Wie habt ihr als Familie gegessen? Gab es Regeln, Rituale, einen festen Platz für jeden?',
            'Welche Angewohnheit hattest du, die andere lustig oder eigenartig fanden?',
            'Worüber hast du nachts manchmal nachgedacht, wenn du nicht schlafen konntest?',
            'Gab es Familientraditionen, die dir besonders wichtig waren? Welche hast du weitergegeben?',
            'Was waren die kleinen, unscheinbaren Momente, die deinen Alltag schön gemacht haben?',
        ]
    },
    {
        id: 'joy-passion',
        name: 'Freude & Leidenschaft',
        icon: '🎨',
        description: 'Was dich zum Leuchten gebracht hat. Die Dinge, bei denen du die Zeit vergessen hast.',
        questions: [
            'Was war dein liebstes Hobby? Wie bist du dazu gekommen? Was hat es dir bedeutet?',
            'Welche Musik hast du geliebt? Gab es ein Lied, das dein Lied war?',
            'Welches Buch oder welcher Film hat dich am tiefsten berührt? Warum gerade dieses?',
            'Beschreibe die schönste Reise deines Lebens. Nicht nur, was du gesehen hast – sondern wie du dich gefühlt hast.',
            'Gab es einen Sport oder eine Aktivität, bei der du dich richtig lebendig gefühlt hast?',
            'Warst du Mitglied in einem Verein oder einer Gemeinschaft? Was hat dir das gegeben?',
            'Hattest du ein Talent oder eine Fertigkeit, auf die du stolz warst?',
            'Wann hast du dich das letzte Mal wie ein Kind gefreut – ohne Grund, einfach so?',
            'Was war das beste Geschenk, das du je bekommen hast – und warum war es so besonders?',
            'Was hat dich zum Lachen gebracht? Wer konnte dich aufheitern, wenn dir nicht danach war?',
        ]
    },
    {
        id: 'hardship-strength',
        name: 'Tiefe & Kraft',
        icon: '⚡',
        description: 'Die Momente, die dich gefordert haben – und gezeigt haben, wer du wirklich bist.',
        questions: [
            'Was war die größte Herausforderung deines Lebens? Wie hast du sie gemeistert?',
            'Hast du Krieg, Flucht oder schwere wirtschaftliche Zeiten erlebt? Wie haben sie dich verändert?',
            'Welcher Verlust hat dich am meisten getroffen? Wie bist du mit der Trauer umgegangen?',
            'Gab es einen Moment, in dem du dachtest, du kannst nicht mehr weitermachen? Was hat dich gehalten?',
            'Wer oder was hat dir in den schwersten Zeiten Kraft gegeben?',
            'Was hast du aus den schwierigsten Zeiten gelernt, das du sonst nie gelernt hättest?',
            'Gibt es etwas, das du bereust – oder das du heute anders machen würdest?',
            'Wem hast du vergeben, obwohl es schwer war? Wer hat dir vergeben?',
            'Wann hast du dich am einsamsten gefühlt in deinem Leben?',
            'Wie hast du gelernt, mit Abschied umzugehen?',
            'Was ist das Mutigste, das du je getan hast – nicht körperlich, sondern emotional?',
            'Wann hast du geweint vor Glück? Wann vor Trauer?',
        ]
    },
    {
        id: 'wisdom-sharing',
        name: 'Weisheit & Vermächtnis',
        icon: '💭',
        description: 'Was du aus dem Leben gelernt hast. Deine Essenz – das, was bleibt.',
        questions: [
            'Was ist dir im Leben wirklich wichtig geworden – jenseits dessen, was man dir beigebracht hat?',
            'Woran glaubst du? Was gibt deinem Leben Sinn?',
            'Was bedeutet für dich ein gutes, erfülltes Leben?',
            'Welches war die wichtigste Entscheidung deines Lebens? Wie hat sie alles verändert?',
            'Was würdest du jungen Menschen heute mit auf den Weg geben?',
            'Worauf bist du in deinem Leben am meisten stolz?',
            'Was möchtest du, dass man sich über dich erinnert?',
            'Wenn du noch einen Wunsch frei hättest – welcher wäre das?',
            'Gibt es Worte, die du jemandem noch sagen möchtest, bevor es zu spät ist?',
            'Was an dir verstehen die meisten Menschen nicht?',
            'Wenn du einen Brief an dich selbst mit 20 schreiben könntest – was würdest du sagen?',
        ]
    },
    {
        id: 'senses-memories',
        name: 'Sinne & Erinnerung',
        icon: '🌸',
        description: 'Die Details, die Erinnerungen lebendig machen. Gerüche, Klänge, Bilder – Fenster in die Vergangenheit.',
        questions: [
            'Welcher Geruch bringt dich sofort zurück in deine Kindheit?',
            'Was war dein absolutes Lieblingsgericht? Wer hat es gekocht? Wie hat es geschmeckt?',
            'Welches Geräusch oder welche Musik versetzt dich sofort in eine bestimmte Zeit zurück?',
            'Beschreibe einen Ort, an dem du dich immer geborgen gefühlt hast.',
            'Welche Jahreszeit mochtest du am liebsten? Warum?',
            'Gibt es einen Moment, den nur du kennst – den du noch nie jemandem erzählt hast?',
            'Was war der schönste Sonnenaufgang oder Sonnenuntergang, den du je gesehen hast?',
            'Was vermisst du aus früheren Zeiten am meisten?',
            'Wenn du eine einzige Erinnerung für immer festhalten könntest – welche wäre es?',
        ]
    },
    {
        id: 'time-change',
        name: 'Zeit & Wandel',
        icon: '⏰',
        description: 'Wie sich die Welt verändert hat – und du mit ihr. Dein Platz in der Geschichte.',
        questions: [
            'Was hat sich in der Welt verändert, das dich traurig macht? Was macht dich hoffnungsvoll?',
            'Gibt es einen Ort, der nicht mehr existiert, den du aber immer noch in dir trägst?',
            'Was war früher wirklich besser? Was ist heute besser?',
            'Welches historische Ereignis hat dich am meisten bewegt oder beunruhigt?',
            'Was durftest du nicht sein oder tun, weil es sich nicht gehörte? Wie hast du dich dabei gefühlt?',
            'Was würdest du den Menschen in 50 oder 100 Jahren gerne erzählen?',
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
                this.audioBlob = new Blob(this.audioChunks, { type: 'audio/webm' });
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
                <button class="btn-download" onclick="downloadRecording('${currentCategory.id}', ${index})">
                    ⬇️ Herunterladen
                </button>
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

function downloadRecording(categoryId, questionIndex) {
    const recording = storageManager.getRecording(categoryId, questionIndex);
    if (!recording) {
        alert('Keine Aufnahme vorhanden!');
        return;
    }

    // Finde die Kategorie und Frage
    const category = CATEGORIES.find(c => c.id === categoryId);
    if (!category) return;

    // Berechne die globale Fragennummer (alle Kategorien vor dieser + Index in dieser Kategorie)
    let globalQuestionNumber = 1;
    for (let i = 0; i < CATEGORIES.length; i++) {
        if (CATEGORIES[i].id === categoryId) {
            globalQuestionNumber += questionIndex;
            break;
        }
        globalQuestionNumber += CATEGORIES[i].questions.length;
    }

    // Erstelle Dateinamen
    const fileName = `Mein Gedächtnis - Frage ${globalQuestionNumber}.webm`;

    // Konvertiere Base64-Daten zu Blob
    const byteCharacters = atob(recording.data.split(',')[1]);
    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);
    const blob = new Blob([byteArray], { type: 'audio/webm' });

    // Erstelle Download-Link
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    showNotification(`✓ ${fileName} heruntergeladen!`);
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
