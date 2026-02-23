/* ============================================
   KATEGORIEN UND FRAGEN DATEN - 70 FRAGEN
   Optimiert für ältere Menschen
   Fokus: Emotionale Tiefe statt Chronologie
   ============================================ */

const CATEGORIES = [
    {
        id: 'roots-beginnings',
        name: 'Wurzeln & Anfänge',
        icon: '🌱',
        description: 'Wo kommst du her? Wie begann dein Leben? Die Kindheit formt uns mehr, als wir oft ahnen.',
        questions: [
            'Wo bist du geboren und aufgewachsen? Beschreibe dein Elternhaus – nicht nur das Gebäude, sondern wie es sich anfühlte.',
            'Wie viele Geschwister hattest du? Was war deine Rolle unter ihnen?',
            'Beschreibe deine Eltern als Menschen. Was hast du an ihnen besonders geschätzt?',
            'Was war dein Lieblingsspiel als Kind? Mit wem hast du es gespielt?',
            'Hattest du einen besten Freund oder eine beste Freundin in der Kindheit? Was ist aus dieser Freundschaft geworden?',
            'Gab es einen Erwachsenen außerhalb deiner Familie, der an dich geglaubt hat? Was hat das mit dir gemacht?',
            'Was wolltest du als Kind werden? Was hat dich daran fasziniert?',
            'Gab es einen Ort aus deiner Kindheit, der dir heilig war? Einen Rückzugsort, einen geheimen Platz?',
            'Welches Ereignis aus deiner Kindheit hat dich am meisten geprägt?',
        ]
    },
    {
        id: 'love-relationships',
        name: 'Liebe & Beziehungen',
        icon: '❤️',
        description: 'Die Menschen, die dein Herz berührt haben. Liebe in all ihren Formen – die leichte und die schwere.',
        questions: [
            'Wer war deine erste große Liebe? Wie hast du dich gefühlt, wenn du an sie oder ihn gedacht hast?',
            'Wie hast du deinen Lebenspartner oder deine Lebenspartnerin kennengelernt? Erzähle die ganze Geschichte.',
            'Wann hast du gewusst: Das ist der oder die Richtige? Gab es einen bestimmten Moment?',
            'Beschreibe eure Hochzeit – oder warum ihr euch entschieden habt, nicht zu heiraten.',
            'Wann hast du gespürt, dass dein Partner oder deine Partnerin dich wirklich versteht?',
            'Was war der schwerste Moment in eurer Beziehung? Wie habt ihr ihn überstanden?',
            'Welches war euer Lieblingslied oder euer besonderer Ort? Warum gerade dieser?',
            'Was vermisst du am meisten, wenn du an eure gemeinsame Zeit denkst?',
            'Gab es eine Freundschaft, die so tief war wie Familie? Erzähle von diesem Menschen.',
            'Was hast du über die Liebe gelernt, das du früher nicht wusstest?',
        ]
    },
    {
        id: 'family-children',
        name: 'Familie & Kinder',
        icon: '👨👩<br>👧👦',
        description: 'Die nächste Generation. Was es bedeutet, Verantwortung für ein anderes Leben zu tragen.',
        questions: [
            'Wolltest du immer Kinder haben? Oder kam es anders als geplant?',
            'Beschreibe den Moment, als du zum ersten Mal Mutter oder Vater wurdest. Was hast du gefühlt?',
            'Was hat dich an der Erziehung am meisten überrascht?',
            'Welche Werte wolltest du deinen Kindern unbedingt mitgeben? Ist es dir gelungen?',
            'Gab es einen Moment, in dem dein Kind dir etwas beigebracht hat – ohne es zu wissen?',
            'Was war der stolzeste Moment, den du als Elternteil erlebt hast?',
            'Wenn du Großeltern bist: Was ist das Schönste daran? Was ist anders als beim eigenen Kind?',
            'Gibt es etwas, das du deinen Kindern oder Enkeln gerne noch sagen möchtest?',
        ]
    },
    {
        id: 'work-creation',
        name: 'Arbeit & Schaffen',
        icon: '💼',
        description: 'Was du geschaffen hast. Die Arbeit deiner Hände und deines Geistes.',
        questions: [
            'Gab es einen Traum, den du nicht verwirklichen konntest? Wie gehst du heute damit um?',
            'Wann hast du gemerkt, dass dir deine Arbeit gut von der Hand geht?',
            'Was an deiner Arbeit hat dir Sinn gegeben?',
            'Gab es einen Kollegen oder Mentor, der dich besonders geprägt hat? Was hast du von ihm oder ihr gelernt?',
            'Was war dein größter beruflicher Erfolg? Was bedeutete er dir wirklich?',
            'Wie hast du Beruf und Familie unter einen Hut gebracht?',
            'Wenn du nochmal von vorne anfangen könntest – welchen Beruf würdest du wählen? Warum?',
            'Was hast du vermisst, als du aufgehört hast zu arbeiten?',
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
            'Wie habt ihr als Familie gegessen? Gab es Rituale oder einen festen Platz für jeden?',
            'Welche Angewohnheit hattest du, die andere lustig oder eigenartig fanden?',
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
            'Welches Buch oder welcher Film hat dich am tiefsten berührt? Warum?',
            'Beschreibe die schönste Reise deines Lebens – nicht nur, was du gesehen hast, sondern wie du dich gefühlt hast.',
            'Gab es einen Sport oder eine Aktivität, bei der du dich richtig lebendig gefühlt hast?',
            'Warst du Mitglied in einem Verein oder einer Gemeinschaft? Was hat dir das gegeben?',
            'Hattest du ein Talent oder eine Fertigkeit, auf die du stolz warst?',
            'Wann hast du dich das letzte Mal wie ein Kind gefreut?',
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
            'Welche schwierigen Zeiten hast du durchgemacht? Wie haben sie dich verändert?',
            'Welcher Verlust hat dich am meisten getroffen? Wie bist du mit der Trauer umgegangen?',
            'Wer oder was hat dir in den schwersten Zeiten Kraft gegeben?',
            'Was hast du aus den schwierigsten Zeiten gelernt, das du sonst nie gelernt hättest?',
            'Gibt es etwas, das du bereust – oder das du heute anders machen würdest?',
            'Wem hast du vergeben, obwohl es schwer war?',
            'Gab es Zeiten, in denen du dich einsam gefühlt hast? Was hat dir dann geholfen?',
            'Was ist das Mutigste, das du je getan hast – nicht körperlich, sondern emotional?',
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
            'Gibt es Worte, die du jemandem noch sagen möchtest?',
            'Was würdest du deinem 20-jährigen Ich raten?',
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
            'Gab es Dinge, die damals nicht erlaubt oder üblich waren, die du gerne getan hättest?',
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
            const stream = await navigator.mediaDevices.getUserMedia({
                audio: {
                    echoCancellation: true,
                    noiseSuppression: true,
                    autoGainControl: true
                }
            });

            // Fix für Samsung/Android "Micky Maus/Donald Duck" Stimme
            // Erzwingt einen korrekten Codec und verhindert Sample-Rate-Fehler
            const mimeTypes = [
                'audio/webm;codecs=opus',
                'audio/webm',
                'audio/mp4',
                'audio/ogg;codecs=opus'
            ];

            let options = {};
            for (const mimeType of mimeTypes) {
                if (MediaRecorder.isTypeSupported(mimeType)) {
                    options.mimeType = mimeType;
                    break;
                }
            }

            this.mediaRecorder = new MediaRecorder(stream, options);
            this.audioChunks = [];
            this.recordingStartTime = Date.now();
            this.isRecording = true;

            this.mediaRecorder.ondataavailable = (event) => {
                this.audioChunks.push(event.data);
            };

            this.mediaRecorder.onstop = () => {
                const mimeType = this.mediaRecorder.mimeType || 'audio/webm';
                let ext = 'webm';
                if (mimeType.includes('mp4') || mimeType.includes('m4a')) ext = 'm4a';
                if (mimeType.includes('ogg')) ext = 'ogg';

                this.audioBlob = new Blob(this.audioChunks, { type: mimeType });
                this.audioExtension = ext;
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

    getAudioExtension() {
        return this.audioExtension || 'webm';
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
        this.answeredQuestions = {}; // { question_id: file_path }
        this.speakerId = null;
    }

    setSpeaker(speakerId) {
        this.speakerId = speakerId;
    }

    async loadData() {
        if (!this.speakerId) return;
        try {
            const res = await fetch(`/api/answers/${this.speakerId}`);
            if (res.ok) {
                const data = await res.json();
                this.answeredQuestions = data.answeredQuestions || {};
            }
        } catch (error) {
            console.error('Fehler beim Laden der Antworten:', error);
        }
    }

    _getGlobalQuestionId(categoryId, questionIndex) {
        let globalQuestionNumber = 1;
        for (let i = 0; i < CATEGORIES.length; i++) {
            if (CATEGORIES[i].id === categoryId) {
                globalQuestionNumber += questionIndex;
                break;
            }
            globalQuestionNumber += CATEGORIES[i].questions.length;
        }
        return globalQuestionNumber;
    }

    async saveRecording(categoryId, questionIndex, audioBlob, audioExtension, sperreBis, emotion) {
        if (!this.speakerId) {
            alert('Nicht angemeldet!');
            return;
        }

        const questionId = this._getGlobalQuestionId(categoryId, questionIndex);

        const formData = new FormData();
        formData.append('speakerId', this.speakerId);
        formData.append('questionId', questionId);
        formData.append('audio', audioBlob, `aufnahme.${audioExtension || 'webm'}`); // multer erwartet den key 'audio'
        if (sperreBis) {
            formData.append('sperreBis', sperreBis);
        }
        if (emotion) {
            formData.append('emotion', emotion);
        }

        try {
            const tempBtn = document.querySelector('.playback-actions .btn-primary');
            if (tempBtn) tempBtn.innerText = "Lädt hoch...";

            // Zum Backend senden
            const res = await fetch('/api/answers', {
                method: 'POST',
                body: formData
            });

            if (!res.ok) {
                console.error("Fehler beim Hochladen:", await res.text());
                alert("Upload-Fehler");
                return;
            }
        } catch (error) {
            console.error('Fehler beim Speichern:', error);
            alert('Fehler beim Speichern der Aufnahme!');
            return;
        }

        // Neu laden, um den aktuellen Filepath vom Server zu holen
        await this.loadData();
    }

    getRecordings(categoryId, questionIndex) {
        const qId = this._getGlobalQuestionId(categoryId, questionIndex);
        if (this.answeredQuestions[qId] && this.answeredQuestions[qId].length > 0) {
            return this.answeredQuestions[qId].map(record => ({
                data: record.file_path, // null wenn gesperrt
                isRemote: true,
                createdAt: record.created_at,
                id: record.id,
                is_locked: record.is_locked,
                sperre_bis: record.sperre_bis,
                emotion: record.emotion
            }));
        }
        return [];
    }

    async deleteRecordingById(recordId) {
        if (!this.speakerId) {
            alert('Nicht angemeldet!');
            return false;
        }

        try {
            const res = await fetch(`/api/answers/${recordId}`, {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ speakerId: this.speakerId })
            });

            if (!res.ok) {
                const data = await res.json();
                console.error("Fehler beim Löschen:", data.error);
                alert("Löschen fehlgeschlagen: " + (data.error || "Unbekannter Fehler"));
                return false;
            }

            await this.loadData();
            return true;
        } catch (error) {
            console.error('Fehler beim Löschen:', error);
            alert('Fehler beim Löschen der Aufnahme!');
            return false;
        }
    }

    hasRecording(categoryId, questionIndex) {
        const qId = this._getGlobalQuestionId(categoryId, questionIndex);
        return this.answeredQuestions[qId] && this.answeredQuestions[qId].length > 0;
    }
}

/* ============================================
   APP STATE & INITIALIZATION
   ============================================ */

let currentCategory = null;
let audioRecorder = null;
let storageManager = null;
let currentRecordingQuestion = null;
let isZuhoererGlobal = false;
let currentLoginRole = 'erzaehler';

function initApp() {
    audioRecorder = new AudioRecorder();
    storageManager = new StorageManager();
}

/* ============================================
   UI FUNCTIONS - NAVIGATION
   ============================================ */

function startApp() {
    document.getElementById('intro-page').style.display = 'none';
    document.getElementById('login-page').style.display = 'block';
    setTimeout(() => {
        const input = document.getElementById('auth-email');
        if (input) input.focus();
    }, 100);
}

let currentLoginMode = 'login'; // 'login' oder 'register'

function switchLoginTab(mode) {
    currentLoginMode = mode;

    const tabLogin = document.getElementById('tab-login');
    const tabRegister = document.getElementById('tab-register');
    const btnSubmit = document.getElementById('btn-auth-submit');
    const feldRepeat = document.getElementById('feld-password-repeat');
    const forgotContainer = document.getElementById('forgot-password-container');
    const subtitle = document.getElementById('login-subtitle');
    const errorEl = document.getElementById('auth-error');

    errorEl.style.display = 'none';

    if (mode === 'login') {
        tabLogin.style.background = 'var(--accent-color)';
        tabRegister.style.background = 'var(--secondary-color)';
        btnSubmit.innerText = 'Anmelden';
        feldRepeat.style.display = 'none';
        forgotContainer.style.display = 'block';
        subtitle.innerText = 'Melde dich an, um weiterzuerzählen.';
    } else {
        tabRegister.style.background = 'var(--accent-color)';
        tabLogin.style.background = 'var(--secondary-color)';
        btnSubmit.innerText = 'Registrieren';
        feldRepeat.style.display = 'block';
        forgotContainer.style.display = 'none';
        subtitle.innerText = 'Willkommen. Erstelle ein neues Konto.';
    }
}

async function submitAuth() {
    const email = document.getElementById('auth-email').value.trim();
    const password = document.getElementById('auth-password').value;
    const errorEl = document.getElementById('auth-error');

    if (!email || !password) {
        errorEl.textContent = 'Bitte E-Mail und Passwort eingeben.';
        errorEl.style.display = 'block';
        return;
    }

    if (currentLoginMode === 'register') {
        const passwordRepeat = document.getElementById('auth-password-repeat').value;
        if (password !== passwordRepeat) {
            errorEl.textContent = 'Die Passwörter stimmen nicht überein.';
            errorEl.style.display = 'block';
            return;
        }
    }

    errorEl.style.display = 'none';
    const endpoint = currentLoginMode === 'login' ? '/api/login' : '/api/register';

    try {
        const res = await fetch(endpoint, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        });
        const data = await res.json();

        if (res.ok) {
            storageManager.setSpeaker(data.speakerId);
            isZuhoererGlobal = data.isZuhoerer;

            localStorage.setItem('speakerAuth', JSON.stringify({
                speakerId: data.speakerId,
                isZuhoerer: data.isZuhoerer,
                vorname: data.vorname || null,
                email: email,
                emailVerified: data.emailVerified !== false
            }));

            await storageManager.loadData();
            showNotification(data.message || 'Erfolgreich.');

            document.getElementById('login-page').style.display = 'none';

            if (data.emailVerified === false) {
                document.getElementById('verify-email-display').textContent = email;
                document.getElementById('email-verify-modal').style.display = 'flex';
            } else if (data.needsProfile) {
                document.getElementById('onboarding-modal').style.display = 'flex';
            } else {
                showCategoriesPage(data.vorname);
            }
        } else {
            errorEl.textContent = data.error || 'Ein Fehler ist aufgetreten.';
            errorEl.style.display = 'block';
        }
    } catch (e) {
        errorEl.textContent = 'Verbindungsfehler zum Server.';
        errorEl.style.display = 'block';
    }
}

async function forgotPassword() {
    const email = document.getElementById('auth-email').value.trim();
    const errorEl = document.getElementById('auth-error');
    const msgEl = document.getElementById('forgot-password-message');

    if (!email) {
        errorEl.textContent = 'Bitte gib deine E-Mail oben ein, um das Passwort zurückzusetzen.';
        errorEl.style.display = 'block';
        return;
    }

    try {
        const res = await fetch('/api/forgot-password', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email })
        });
        const data = await res.json();

        if (res.ok) {
            msgEl.textContent = data.message || 'Passwort zurückgesetzt. Prüfe deine E-Mails.';
            msgEl.style.display = 'block';
            errorEl.style.display = 'none';
        } else {
            errorEl.textContent = data.error || 'Fehler beim Zurücksetzen.';
            errorEl.style.display = 'block';
        }
    } catch (e) {
        errorEl.textContent = 'Verbindungsfehler.';
        errorEl.style.display = 'block';
    }
}

async function submitOnboarding() {
    const vorname = document.getElementById('onboarding-vorname').value.trim();
    const nachname = document.getElementById('onboarding-nachname').value.trim();
    const geburtsdatum = document.getElementById('onboarding-geburtsdatum').value;
    const errorEl = document.getElementById('onboarding-error');

    if (!vorname || !nachname || !geburtsdatum) {
        errorEl.textContent = 'Bitte alle Felder ausfüllen.';
        errorEl.style.display = 'block';
        return;
    }

    try {
        const res = await fetch('/api/update-profile', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                speakerId: storageManager.speakerId,
                vorname,
                nachname,
                geburtsdatum
            })
        });

        const data = await res.json();
        if (res.ok) {
            document.getElementById('onboarding-modal').style.display = 'none';
            // Update auth in local storage
            let auth = JSON.parse(localStorage.getItem('speakerAuth')) || {};
            auth.vorname = data.vorname;
            localStorage.setItem('speakerAuth', JSON.stringify(auth));

            showCategoriesPage(data.vorname);
            showNotification('Profil erfolgreich gespeichert!');
        } else {
            errorEl.textContent = data.error || 'Fehler beim Speichern.';
            errorEl.style.display = 'block';
        }
    } catch (e) {
        errorEl.textContent = 'Verbindungsfehler.';
        errorEl.style.display = 'block';
    }
}

// Helper um auf die Kategorienseite zu wechseln (nach Login oder Verifizieren/Skippen)
function showCategoriesPage(vorname) {
    document.getElementById('email-verify-modal').style.display = 'none';
    document.getElementById('categories-page').style.display = 'block';

    const titleEl = document.querySelector('#categories-page .header h2');
    if (isZuhoererGlobal) {
        titleEl.textContent = `Die Lebensgeschichte von ${vorname}`;
        document.getElementById('profil-btn-container').innerHTML = `
            <button class="btn-secondary" onclick="logoutUser()"
                style="padding: 6px 15px; font-size: 0.85rem; border: none; background: #fee2e2; color: #b91c1c;">Abmelden</button>
        `;
    } else {
        titleEl.textContent = 'Deine Lebensgeschichte';
        document.getElementById('profil-btn-container').innerHTML = `
            <button class="btn-secondary" onclick="document.getElementById('invite-listener-modal').style.display='flex';"
                style="padding: 6px 15px; font-size: 0.85rem; border: none; background: #e2e8f0; color: var(--primary-color);">💌 Einladen</button>
            <button class="btn-secondary" onclick="openProfileModal()"
                style="padding: 6px 15px; font-size: 0.85rem; border: none; background: #e2e8f0; color: var(--primary-color);">⚙️ Passwort</button>
            <button class="btn-secondary" onclick="logoutUser()"
                style="padding: 6px 15px; font-size: 0.85rem; border: none; background: #fee2e2; color: #b91c1c;">Abmelden</button>
        `;
    }

    renderCategories();
}

function closeInviteModal() {
    document.getElementById('invite-listener-modal').style.display = 'none';
}

async function sendInvite() {
    const email = document.getElementById('invite-email').value.trim();
    const errorEl = document.getElementById('invite-error');
    const successEl = document.getElementById('invite-success');

    errorEl.style.display = 'none';
    successEl.style.display = 'none';

    if (!email) {
        errorEl.textContent = 'Bitte eine E-Mail eingeben.';
        errorEl.style.display = 'block';
        return;
    }

    try {
        const res = await fetch('/api/invite-listener', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ speakerId: storageManager.speakerId, email })
        });
        const data = await res.json();

        if (res.ok) {
            successEl.textContent = 'Einladung erfolgreich versendet!';
            successEl.style.display = 'block';
            document.getElementById('invite-email').value = '';
            setTimeout(() => {
                closeInviteModal();
                successEl.style.display = 'none';
            }, 2000);
        } else {
            errorEl.textContent = data.error || 'Fehler beim Senden.';
            errorEl.style.display = 'block';
        }
    } catch (e) {
        errorEl.textContent = 'Verbindungsfehler.';
        errorEl.style.display = 'block';
    }
}

function logoutUser() {
    storageManager.setSpeaker(null);
    localStorage.removeItem('speakerAuth'); // Clear the saved session
    document.getElementById('categories-page').style.display = 'none';
    document.getElementById('questions-page').style.display = 'none';
    document.getElementById('profile-modal').style.display = 'none';

    // Formulare zurücksetzen
    document.getElementById('auth-email').value = '';
    document.getElementById('auth-password').value = '';
    document.getElementById('auth-password-repeat').value = '';

    document.getElementById('intro-page').style.display = 'block';
    showNotification('Sicher abgemeldet.');
}

async function openProfileModal() {
    document.getElementById('profile-new-password').value = '';
    document.getElementById('profile-old-password').value = '';
    document.getElementById('profile-error').style.display = 'none';
    document.getElementById('profile-success').style.display = 'none';
    document.getElementById('profile-forgot-message').style.display = 'none';
    document.getElementById('profile-modal').style.display = 'flex';

    // Eingeladene Zuhörer laden
    const listEl = document.getElementById('listeners-list');
    listEl.innerHTML = '<p style="text-align:center;padding:10px 0;">Wird geladen…</p>';
    try {
        const res = await fetch(`/api/listeners/${storageManager.speakerId}`);
        const data = await res.json();
        if (data.listeners && data.listeners.length > 0) {
            listEl.innerHTML = data.listeners.map(l => {
                const date = new Date(l.created_at).toLocaleDateString('de-DE', {
                    day: '2-digit', month: '2-digit', year: 'numeric'
                });
                const time = new Date(l.created_at).toLocaleTimeString('de-DE', {
                    hour: '2-digit', minute: '2-digit'
                });
                return `<div style="display:flex;justify-content:space-between;align-items:center;padding:8px 0;border-bottom:1px solid #f0f0f0;">
                    <span>✉️ ${l.email}</span>
                    <span style="font-size:0.8rem;color:#9ca3af;">📅 ${date} ${time}</span>
                </div>`;
            }).join('');
        } else {
            listEl.innerHTML = '<p style="color:#9ca3af;font-size:0.85rem;padding:8px 0;">Noch niemanden eingeladen.</p>';
        }
    } catch (e) {
        listEl.innerHTML = '<p style="color:red;font-size:0.85rem;">Fehler beim Laden.</p>';
    }
}

function closeProfileModal() {
    document.getElementById('profile-modal').style.display = 'none';
}

async function saveProfilePins() {
    const errorEl = document.getElementById('profile-error');
    const successEl = document.getElementById('profile-success');
    const newPassword = document.getElementById('profile-new-password').value.trim();
    const oldPassword = document.getElementById('profile-old-password').value.trim();

    errorEl.style.display = 'none';
    successEl.style.display = 'none';

    if (!newPassword || !oldPassword) {
        errorEl.textContent = 'Bitte beide Felder ausfüllen.';
        errorEl.style.display = 'block';
        return;
    }

    try {
        const res = await fetch('/api/change-password', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                speakerId: storageManager.speakerId,
                oldPassword,
                newPassword
            })
        });

        const data = await res.json();
        if (res.ok) {
            successEl.textContent = '✓ Passwort erfolgreich geändert.';
            successEl.style.display = 'block';
            document.getElementById('profile-old-password').value = '';
            document.getElementById('profile-new-password').value = '';
        } else {
            errorEl.textContent = data.error || 'Fehler beim Speichern.';
            errorEl.style.display = 'block';
        }
    } catch (e) {
        errorEl.textContent = 'Verbindungsfehler.';
        errorEl.style.display = 'block';
    }
}

async function profileForgotPassword() {
    const msgEl = document.getElementById('profile-forgot-message');
    const errorEl = document.getElementById('profile-error');
    msgEl.style.display = 'none';
    errorEl.style.display = 'none';

    // E-Mail aus dem localStorage holen
    const auth = JSON.parse(localStorage.getItem('speakerAuth') || '{}');
    const email = auth.email;

    if (!email) {
        errorEl.textContent = 'Keine E-Mail-Adresse bekannt. Bitte melde dich ab und nutze "Passwort vergessen" auf der Loginseite.';
        errorEl.style.display = 'block';
        return;
    }

    try {
        const res = await fetch('/api/forgot-password', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email })
        });
        const data = await res.json();
        if (res.ok) {
            msgEl.textContent = `✓ Ein neues Passwort wurde an ${email} gesendet.`;
            msgEl.style.display = 'block';
        } else {
            errorEl.textContent = data.error || 'Fehler beim Zurücksetzen.';
            errorEl.style.display = 'block';
        }
    } catch (e) {
        errorEl.textContent = 'Verbindungsfehler.';
        errorEl.style.display = 'block';
    }
}

async function verifyEmailCode() {
    const code = document.getElementById('verify-code').value.trim();
    const errorEl = document.getElementById('verify-error');
    if (!code) return;

    try {
        const res = await fetch('/api/verify-email', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ speakerId: storageManager.speakerId, code })
        });
        const data = await res.json();

        if (res.ok) {
            showNotification('E-Mail erfolgreich verifiziert!');
            const vorname = document.getElementById('login-vorname').value.trim() || 'Erzähler';
            showCategoriesPage(vorname);
        } else {
            errorEl.textContent = data.error || 'Fehler beim Verifizieren.';
            errorEl.style.display = 'block';
        }
    } catch (e) {
        errorEl.textContent = 'Verbindungsfehler.';
        errorEl.style.display = 'block';
    }
}

async function resendEmailCode() {
    const errorEl = document.getElementById('verify-error');
    errorEl.style.display = 'none';

    try {
        const res = await fetch('/api/resend-verification', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ speakerId: storageManager.speakerId })
        });
        const data = await res.json();

        if (res.ok) {
            showNotification('Neuer Code wurde gesendet.');
        } else {
            errorEl.textContent = data.error || 'Fehler beim Senden.';
            errorEl.style.display = 'block';
        }
    } catch (e) {
        errorEl.textContent = 'Verbindungsfehler.';
        errorEl.style.display = 'block';
    }
}

function skipVerification() {
    const vorname = document.getElementById('login-vorname').value.trim() || 'Erzähler';
    showCategoriesPage(vorname);
    // Info-Toast
    showNotification('E-Mail kann später noch verifiziert werden.', 4000);
}



function backToCategories() {
    document.getElementById('questions-page').style.display = 'none';
    document.getElementById('categories-page').style.display = 'block';
    currentCategory = null;
}

function backToIntro() {
    document.getElementById('categories-page').style.display = 'none';
    document.getElementById('login-page').style.display = 'none';
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

        let controlsHTML = '';
        if (!isZuhoererGlobal) {
            controlsHTML = `
                <div class="question-controls" style="margin-top: 20px;">
                    <button class="btn-record-question ${hasRecording ? 'answered' : ''}" 
                            onclick="openRecorder('${currentCategory.id}', ${index})">
                        🎙️ ${hasRecording ? 'Neue Perspektive hinzufügen (Heute)' : 'Antwort aufnehmen'}
                    </button>
                </div>
            `;
        }

        let timelineHTML = '';
        if (hasRecording) {
            const recordings = storageManager.getRecordings(currentCategory.id, index);

            timelineHTML += `<div class="timeline" style="margin-top: 15px; border-left: 2px solid var(--accent-color); padding-left: 15px;">`;

            const emotionLabels = {
                'stolz': '🌟 Mächtig stolz',
                'liebevoll': '❤️ Voller Liebe',
                'nostalgisch': '🕰️ Etwas nostalgisch',
                'lustig': '😂 Herrlich lustig',
                'schwer': '⛈️ Eine schwere Zeit',
                'dankbar': '🙏 Sehr dankbar'
            };

            recordings.forEach((rec, recIndex) => {
                const dateObj = new Date(rec.createdAt);
                const dateString = dateObj.toLocaleDateString('de-DE', { day: '2-digit', month: '2-digit', year: 'numeric' });
                const timeString = dateObj.toLocaleTimeString('de-DE', { hour: '2-digit', minute: '2-digit' });

                const emotionBadgeHTML = rec.emotion ? `
                    <div style="display:inline-block; margin-bottom: 5px; margin-left: 10px; padding: 2px 8px; border-radius: 12px; font-size: 0.75rem; background-color: #f0f0f0; border: 1px solid #ddd; color: #555;">
                        ${emotionLabels[rec.emotion] || rec.emotion}
                    </div>
                ` : '';

                if (rec.is_locked) {
                    const unlockDateObj = new Date(rec.sperre_bis);
                    const unlockString = unlockDateObj.toLocaleDateString('de-DE', { day: '2-digit', month: '2-digit', year: 'numeric' });

                    timelineHTML += `
                        <div class="timeline-item" style="margin-bottom: 20px;">
                            <span style="font-size: 0.85rem; color: var(--text-light); font-weight: bold;">📅 ${dateString} - ${timeString}</span>
                            <div class="recording-badge" style="display:inline-block; margin-bottom: 5px; margin-left: 10px; background-color: var(--secondary-color);">
                                🔒 Gesperrt
                            </div>
                            ${emotionBadgeHTML}
                            <div style="background: rgba(0,0,0,0.05); padding: 15px; border-radius: 8px; margin-top: 5px;">
                                <p style="margin: 0; color: var(--text-light); font-size: 0.9rem;">
                                    Diese Erinnerung wurde vom Erzähler als Zeitkapsel verschlossen und ist erst ab dem <strong>${unlockString}</strong> hörbar.
                                </p>
                            </div>
                        </div>
                    `;
                } else {
                    timelineHTML += `
                        <div class="timeline-item" style="margin-bottom: 20px;">
                            <span style="font-size: 0.85rem; color: var(--text-light); font-weight: bold;">📅 ${dateString} - ${timeString}</span>
                            <div class="recording-badge" style="display:inline-block; margin-bottom: 5px; margin-left: 10px;">
                                ✓ Archiviert
                            </div>
                            ${emotionBadgeHTML}
                            <audio controls class="audio-player" src="${rec.data}"></audio>
                            <button class="btn-download" style="margin-top: 5px;" onclick="downloadRecording('${currentCategory.id}', ${index}, ${recIndex})">
                                ⬇️ Herunterladen
                            </button>
                            ${!isZuhoererGlobal ? `<button class="btn-secondary" style="margin-top: 5px; background: #fee2e2; color: #b91c1c; border: none; margin-left: 10px;" onclick="deleteRecording(${rec.id})">🗑️ Löschen</button>` : ''}
                        </div>
                    `;
                }
            });

            timelineHTML += `</div>`;
        }

        // Escape simple quotes for the onclick handler
        const escapedQuestion = question.replace(/"/g, '&quot;').replace(/'/g, "\\'");

        card.innerHTML = `
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px;">
                <div class="question-number" style="margin-bottom: 0;">Frage ${index + 1}</div>
            </div>
            <p class="question-text">${question}</p>
            ${timelineHTML}
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
    const audioBlob = audioRecorder.getAudioBlob();
    if (!audioBlob) return;

    if (!currentCategory || currentRecordingQuestion === null) return;

    const sperreBis = document.getElementById('recorder-sperre-bis').value;
    const emotion = document.getElementById('recorder-emotion').value;

    const btn = document.querySelector('.playback-actions .btn-primary');
    if (btn) btn.disabled = true;

    await storageManager.saveRecording(
        currentRecordingQuestion.categoryId,
        currentRecordingQuestion.questionIndex,
        audioBlob,
        audioRecorder.getAudioExtension(),
        sperreBis,
        emotion
    );

    if (btn) btn.disabled = false;

    // Setze die Felder danach wieder zurück
    document.getElementById('recorder-sperre-bis').value = '';
    document.getElementById('recorder-emotion').value = '';

    closeRecorder();
    if (currentCategory) {
        renderQuestions(currentCategory);
    }
    renderCategories();

    // Kurze Bestätigungsmitteilung
    showNotification('✓ Aufnahme gespeichert!');
}

async function deleteRecording(recordId) {
    if (confirm('Möchtest du diese Aufnahme wirklich endgültig löschen? Diese Aktion kann nicht rückgängig gemacht werden.')) {
        const success = await storageManager.deleteRecordingById(recordId);
        if (success) {
            if (currentCategory) {
                renderQuestions();
            }
            renderCategories();
            showNotification('Aufnahme erfolgreich gelöscht');
        }
    }
}

function downloadRecording(categoryId, questionIndex, recordIndex = 0) {
    const recordings = storageManager.getRecordings(categoryId, questionIndex);
    if (!recordings || recordings.length === 0 || !recordings[recordIndex]) {
        alert('Keine Aufnahme vorhanden!');
        return;
    }

    const recording = recordings[recordIndex];

    if (recording.is_locked) {
        alert('Diese Aufnahme ist gesperrt und kann momentan nicht heruntergeladen werden.');
        return;
    }

    // Finde die Kategorie und Frage
    const category = CATEGORIES.find(c => c.id === categoryId);
    if (!category) return;

    // Berechne die globale Fragennummer
    let globalQuestionNumber = 1;
    for (let i = 0; i < CATEGORIES.length; i++) {
        if (CATEGORIES[i].id === categoryId) {
            globalQuestionNumber += questionIndex;
            break;
        }
        globalQuestionNumber += CATEGORIES[i].questions.length;
    }

    const dateObj = new Date(recording.createdAt);
    const dateString = dateObj.toLocaleDateString('de-DE', { year: 'numeric', month: '2-digit', day: '2-digit' }).replace(/\./g, '-');
    const fileNameBase = `Frage ${globalQuestionNumber} - ${dateString}`;

    if (recording.isRemote) {
        // Proxy-Download über das Backend – umgeht CORS von R2
        const proxyUrl = `/api/download/${recording.id}?speakerId=${storageManager.speakerId}`;
        const link = document.createElement('a');
        link.href = proxyUrl;
        link.download = fileNameBase; // Browser verwendet den vom Server gesetzten Dateinamen
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        showNotification('✓ Download gestartet!');
        return;
    }

    const fileName = `${fileNameBase}.mp3`;

    // Alter Code (Base64), falls mal wieder Offline-Fallback eingebaut wird
    const byteCharacters = atob(recording.data.split(',')[1]);
    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);
    const webmBlob = new Blob([byteArray], { type: 'audio/webm' });

    convertWebMToMP3(webmBlob, fileName);
}

function convertWebMToMP3(webmBlob, fileName) {
    const reader = new FileReader();
    reader.onload = function (e) {
        const arrayBuffer = e.target.result;
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();

        audioContext.decodeAudioData(arrayBuffer, function (audioBuffer) {
            // Konvertiere zu MP3 mit lamejs
            const samples = audioBuffer.getChannelData(0);
            const sampleRate = audioBuffer.sampleRate;

            // Konfiguriere MP3-Encoder
            const mp3Encoder = new lamejs.Mp3Encoder(1, sampleRate, 128);
            const mp3Data = [];

            // Encode in Chunks von 1152 samples
            const maxSamples = 1152;
            for (let i = 0; i < samples.length; i += maxSamples) {
                const chunk = samples.subarray(i, Math.min(i + maxSamples, samples.length));
                const mono = Int16Array.from(chunk, x => x < 0 ? x * 0x8000 : x * 0x7FFF);
                const mp3buf = mp3Encoder.encodeBuffer(mono);
                if (mp3buf.length > 0) {
                    mp3Data.push(new Int8Array(mp3buf));
                }
            }

            // Finalisiere die MP3
            const finalData = mp3Encoder.flush();
            if (finalData.length > 0) {
                mp3Data.push(new Int8Array(finalData));
            }

            // Erstelle MP3-Blob und download
            const mp3Blob = new Blob(mp3Data, { type: 'audio/mp3' });
            downloadBlob(mp3Blob, fileName);
            showNotification(`✓ ${fileName} heruntergeladen!`);
        }, function (error) {
            console.error('Fehler beim Dekodieren:', error);
            // Fallback: Download als WebM wenn Konvertierung fehlschlägt
            downloadBlob(webmBlob, fileName.replace('.mp3', '.webm'));
            showNotification('Audio heruntergeladen (WebM-Format)');
        });
    };
    reader.readAsArrayBuffer(webmBlob);
}

function downloadBlob(blob, fileName) {
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
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

async function tryAutoLogin() {
    // Check for listener token in URL
    const urlParams = new URLSearchParams(window.location.search);
    const listenerToken = urlParams.get('listener_token');

    if (listenerToken) {
        try {
            const res = await fetch(`/api/listener-auth/${listenerToken}`);
            const data = await res.json();

            if (res.ok) {
                storageManager.setSpeaker(data.speakerId);
                isZuhoererGlobal = true;
                currentLoginRole = 'zuhoerer';

                await storageManager.loadData();
                document.getElementById('intro-page').style.display = 'none';

                showNotification(`Willkommen! Du hörst die Geschichten von ${data.vorname}.`);
                showCategoriesPage(data.vorname);

                // Remove token from URL for clean history
                window.history.replaceState({}, document.title, window.location.pathname);
                return;
            } else {
                alert(data.error || 'Ungültiger Einladungslink.');
            }
        } catch (e) {
            console.error('Fehler beim Einladungslink:', e);
            alert('Verbindungsfehler beim Prüfen des Einladungslinks.');
        }
    }

    const savedAuthInfo = localStorage.getItem('speakerAuth');
    if (savedAuthInfo) {
        try {
            const auth = JSON.parse(savedAuthInfo);
            if (auth && auth.speakerId) {
                // Restore state
                storageManager.setSpeaker(auth.speakerId);
                isZuhoererGlobal = auth.isZuhoerer;
                currentLoginRole = auth.role || (isZuhoererGlobal ? 'zuhoerer' : 'erzaehler');

                await storageManager.loadData();

                document.getElementById('intro-page').style.display = 'none';

                if (auth.email && auth.emailVerified === false) {
                    document.getElementById('verify-email-display').textContent = auth.email;
                    document.getElementById('email-verify-modal').style.display = 'flex';
                } else if (!isZuhoererGlobal && auth.needsProfile) {
                    document.getElementById('onboarding-modal').style.display = 'flex';
                } else {
                    showCategoriesPage(auth.vorname || 'Speaker');
                }
            }
        } catch (e) {
            console.error('Auto-login failed', e);
            localStorage.removeItem('speakerAuth');
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    initApp();
    tryAutoLogin();
});
