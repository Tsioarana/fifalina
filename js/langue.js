
const translations = {
    fr: {
        home: "Accueil",
        services: "Services",
        projects: "Projets",
        portfolio: "Portfolio",
        zah: "Je suis",
        specialist: "Gestionnaire de Projet, Analyste Financier, Spécialiste en Marketing, Responsable RH, Consultant en Gestion",
        cv: "Télécharger le CV",
        welcome: "Bienvenue sur notre site web",
        profil1: "Je suis étudiant en gestion, spécialisé dans l'analyse financière, la gestion des ressources humaines et le marketing. Je me concentre sur l'efficacité organisationnelle et l'innovation.",
        profil2: "Je suis motivé par l'amélioration continue et aspire à contribuer au développement durable des entreprises.",
    },
    en: {
        home: "Accueil",
        services: "Services",
        projects: "Projets",
        portfolio: "Portfolio",
        zah: "I'm",
        specialist: "Project Manager, Financial Analyst, Marketing Specialist, HR Manager, Management Consultant",
        cv: "Download CV",
        welcome: "Welcome to our website",
        profil1: "I am a management student, specializing in financial analysis, human resource management, and marketing. I focus on organizational efficiency and innovation.",
        profil2: "I am motivated by continuous improvement and aim to contribute to the sustainable development of businesses.",
    },
    mg: {
        home: "Accueil",
        services: "Services",
        projects: "Projets",
        portfolio: "Portfolio",
        zah: "Soy",
        cv: "Descargar CV",
        specialist: "Gestor de Proyectos, Analista Financiero, Especialista en Marketing, Responsable de RRHH, Consultor de Gestión",
        welcome: "Bienvenido a nuestro sitio web",
        profil1: "Soy estudiante de gestión, especializado en análisis financiero, gestión de recursos humanos y marketing. Me centro en la eficiencia organizacional y la innovación.",
        profil2: "Estoy motivado por la mejora continua y aspiro a contribuir al desarrollo sostenible de las empresas.",
    },
    es: {
        home: "Accueil",
        services: "Services",
        projects: "Projets",
        portfolio: "Portfolio",
        zah: "Ich bin",
        cv: "Lebenslauf herunterladen",
        specialist: "Projektmanager, Finanzanalyst, Marketing-Spezialist, Personalmanager, Managementberater",
        welcome: "Willkommen auf unserer Website",
        profil1: "Ich bin Management-Student, spezialisiert auf Finanzanalyse, Personalmanagement und Marketing. Mein Fokus liegt auf organisatorischer Effizienz und Innovation.",
        profil2: "Ich bin motiviert durch kontinuierliche Verbesserung und strebe danach, zur nachhaltigen Entwicklung von Unternehmen beizutragen."
    }
};

document.querySelectorAll('.lang-btn').forEach(button => {
    button.addEventListener('click', () => {
        const lang = button.getAttribute('data-lang');
        applyTranslations(lang);
    });
});

function applyTranslations(lang) {
    document.querySelectorAll('[data-key]').forEach(element => {
        const key = element.getAttribute('data-key');
        element.textContent = translations[lang][key];
    });
}

document.querySelector('.selected-language').addEventListener('click', function() {
    document.querySelector('.language-select').classList.toggle('open');
});

document.querySelectorAll('.language-options li').forEach(option => {
    option.addEventListener('click', function() {
        const selectedLanguage = document.querySelector('.selected-language');
        const flagSrc = this.querySelector('.flag').src;
        const languageName = this.querySelector('span').textContent;
        
        selectedLanguage.querySelector('.flag').src = flagSrc;
        selectedLanguage.querySelector('span').textContent = languageName;
        
        // Changer la langue de la page
        const lang = this.getAttribute('data-lang');
        applyTranslations(lang);
    });
});
