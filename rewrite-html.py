import re

with open('index.html', 'r') as f:
    content = f.read()

# Replace Login Section
login_start_regex = r"<!-- Login Seite -->.*?<div id=\"login-page\" class=\"page\" style=\"display: none;\">"
login_end_regex = r"<!-- Kategorien-Übersicht -->"

new_login_block = """<!-- Login Seite -->
    <div id="login-page" class="page" style="display: none;">
        <div class="header">
            <button class="btn-home" onclick="backToIntro()" title="Zur Startseite">
                <div class="logo-small">totenbilder.at</div>
            </button>
            <h2>Geschichten für die Ewigkeit!</h2>
            <p class="subtitle" id="login-subtitle">Melde dich an, um deine Geschichten zu erzählen.</p>
        </div>

        <div class="intro-container" style="max-width: 500px; padding: 20px;">
            <div class="login-tabs" style="display: flex; gap: 10px; margin-bottom: 20px;">
                <button id="tab-login" class="btn-primary" onclick="switchLoginTab('login')"
                    style="flex: 1; margin: 0; padding: 12px; background: var(--accent-color);">Anmelden</button>
                <button id="tab-register" class="btn-secondary" onclick="switchLoginTab('register')"
                    style="flex: 1; margin: 0; padding: 12px;">Registrieren</button>
            </div>
            
            <div class="intro-content" style="padding: 30px;">
                <div style="margin-bottom: 20px;">
                    <label style="display: block; margin-bottom: 5px;">E-Mail</label>
                    <input type="email" id="auth-email" placeholder="deine@email.at"
                        style="width: 100%; padding: 10px; border: 1px solid #ccc; border-radius: 4px;" required>
                </div>
                
                <div style="margin-bottom: 20px;">
                    <label style="display: block; margin-bottom: 5px;">Passwort</label>
                    <input type="password" id="auth-password" placeholder="Passwort"
                        style="width: 100%; padding: 10px; border: 1px solid #ccc; border-radius: 4px;" required>
                </div>

                <div id="feld-password-repeat" style="margin-bottom: 25px; display: none;">
                    <label style="display: block; margin-bottom: 5px;">Passwort wiederholen</label>
                    <input type="password" id="auth-password-repeat" placeholder="Passwort wiederholen"
                        style="width: 100%; padding: 10px; border: 1px solid #ccc; border-radius: 4px;">
                </div>

                <div id="auth-error" style="color: red; margin-bottom: 15px; display: none;"></div>
                
                <button id="btn-auth-submit" class="btn-primary" onclick="submitAuth()"
                    style="width: 100%; margin: 0; background-color: var(--primary-color);">Anmelden</button>

                <div id="forgot-password-container" style="margin-top: 15px; text-align: center;">
                    <button class="btn-text" onclick="forgotPassword()"
                        style="font-size: 0.85rem; background: none; border: none; color: var(--text-light); text-decoration: underline; cursor: pointer;">Passwort vergessen?</button>
                </div>
                
                <div id="forgot-password-message" style="color: green; margin-top: 15px; font-size: 0.85rem; display: none; text-align: center;"></div>
            </div>
        </div>
    </div>

    <!-- Onboarding Modal (Profil vervollständigen) -->
    <div id="onboarding-modal" class="modal" style="display: none;">
        <div class="modal-content" style="max-width: 400px; text-align: left;">
            <div class="modal-header">
                <h3>Profil vervollständigen</h3>
            </div>
            <div class="modal-body">
                <p style="font-size: 0.95rem; margin-bottom: 20px; color: var(--text-color);">
                    Willkommen! Bitte verrate uns deinen Namen und dein Geburtsdatum, damit wir deine Geschichten richtig zuordnen können.
                </p>
                <div style="margin-bottom: 15px;">
                    <label style="display: block; margin-bottom: 5px;">Vorname</label>
                    <input type="text" id="onboarding-vorname" placeholder="Dein Vorname"
                        style="width: 100%; padding: 10px; border: 1px solid #ccc; border-radius: 4px;" required>
                </div>
                <div style="margin-bottom: 15px;">
                    <label style="display: block; margin-bottom: 5px;">Nachname</label>
                    <input type="text" id="onboarding-nachname" placeholder="Dein Nachname"
                        style="width: 100%; padding: 10px; border: 1px solid #ccc; border-radius: 4px;" required>
                </div>
                <div style="margin-bottom: 20px;">
                    <label style="display: block; margin-bottom: 5px;">Geburtsdatum</label>
                    <input type="date" id="onboarding-geburtsdatum"
                        style="width: 100%; padding: 10px; border: 1px solid #ccc; border-radius: 4px;" required>
                </div>
                <p id="onboarding-error" style="color: red; display: none; margin-bottom: 15px; font-size: 0.85rem;"></p>
                <button class="btn-primary" onclick="submitOnboarding()" style="width: 100%; margin: 0;">Speichern</button>
            </div>
        </div>
    </div>
    
    <!-- Hörer einladen Modal -->
    <div id="invite-listener-modal" class="modal" style="display: none;">
        <div class="modal-content" style="max-width: 400px;">
            <div class="modal-header">
                <h3>Zuhörer einladen</h3>
                <button class="btn-close" onclick="closeInviteModal()">×</button>
            </div>
            <div class="modal-body">
                <p style="font-size: 0.95rem; margin-bottom: 20px; color: var(--text-color);">
                    Lade Freunde oder Familie per E-Mail ein, um deinen Geschichten zuzuhören.
                </p>
                <div style="margin-bottom: 20px;">
                    <label style="display: block; margin-bottom: 5px;">E-Mail Adresse des Zuhörers</label>
                    <input type="email" id="invite-email" placeholder="freund@email.at"
                        style="width: 100%; padding: 10px; border: 1px solid #ccc; border-radius: 4px;" required>
                </div>
                <p id="invite-error" style="color: red; display: none; margin-bottom: 15px; font-size: 0.85rem;"></p>
                <p id="invite-success" style="color: green; display: none; margin-bottom: 15px; font-size: 0.85rem;"></p>
                
                <button class="btn-primary" onclick="sendInvite()" style="width: 100%; margin: 0;">Einladung senden</button>
            </div>
        </div>
    </div>

    """

content = re.sub(login_start_regex + r".*?" + login_end_regex, new_login_block + "\n    <!-- Kategorien-Übersicht -->", content, flags=re.DOTALL)

# Add Invite Button to Categories Page Profile Area
profil_btn_regex = r'<button class="btn-secondary" onclick="openProfileModal\(\)".*?>⚙️\s*PIN ändern</button>'
invite_btn = '<button class="btn-secondary" onclick="openInviteModal()" style="padding: 6px 15px; font-size: 0.85rem; border: none; background: #dcfce7; color: #166534;">✉️ Einladen</button>\n                    <button class="btn-secondary" onclick="openProfileModal()" style="padding: 6px 15px; font-size: 0.85rem; border: none; background: #e2e8f0; color: var(--primary-color);">⚙️ Passwort ändern</button>'
content = re.sub(profil_btn_regex, invite_btn, content)

# Change Profil Modal labels 
content = content.replace("Dein Erzähler-PIN", "Neues Passwort")
content = content.replace("Neuer Erzähler-PIN", "Neues Passwort setzen")
content = content.replace('id="profile-erzaehler-pin"', 'id="profile-new-password"')
content = content.replace("Der Zuhörer-PIN für Angehörige", "Altes Passwort (zur Bestätigung)")
content = content.replace("Neuer Zuhörer-PIN", "Altes Passwort")
content = content.replace('id="profile-zuhoerer-pin"', 'id="profile-old-password"')
content = content.replace("PIN ändern", "Passwort ändern")
content = content.replace("PINs", "Passwort")
content = content.replace("PIN", "Passwort")

with open('index.html', 'w') as f:
    f.write(content)

