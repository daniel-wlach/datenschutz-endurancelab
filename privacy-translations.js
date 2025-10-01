// EnduranceLab Privacy Policy Translations
const privacyTranslations = {
    de: {
        privacy_tagline: "Datenschutzerklärung",
        back_to_support: "← Zurück zum Support",
        delete_account: "Konto löschen",
        support: "Support & Hilfe",
        terms: "Nutzungsbedingungen",
        welcome_title: "Datenschutzerklärung für EnduranceLab",
        welcome_text: "Diese Datenschutzerklärung informiert Sie über die Verarbeitung Ihrer personenbezogenen Daten bei der Nutzung der EnduranceLab App.",
        responsible_title: "1. Verantwortlicher",
        responsible_name: "Daniel Wlach",
        responsible_project: "Projekt: EnduranceLab",
        responsible_contact: "Kontakt:",
        responsible_date: "Stand: Januar 2025",
        data_title: "2. Welche Daten erheben wir?",
        account_data: "Kontodaten:",
        training_data: "Trainingsdaten:",
        competition_data: "Wettkampfdaten:",
        location_data: "Standortdaten:",
        app_data: "App-Nutzung und Technische Daten:",
        payment_data: "Zahlungsdaten (nur bei Premium-Nutzung):",
        usage_title: "3. Wie verwenden wir Ihre Daten?",
        third_party_title: "4. Datenübertragung an Drittanbieter",
        third_party_text: "Ihre Daten werden an folgende Dienste übertragen:",
        supabase_title: "Supabase (Datenbank-Service):",
        weather_title: "WeatherAPI.com (Wetterdienst):",
        revenue_title: "RevenueCat (Abonnement-Verwaltung):",
        store_title: "Apple App Store / Google Play Store:",
        local_storage_title: "5. Lokale Datenspeicherung",
        legal_basis_title: "6. Rechtsgrundlagen der Verarbeitung",
        rights_title: "7. Ihre Rechte nach DSGVO",
        deletion_title: "8. Datenlöschung und Speicherdauer",
        security_title: "9. Datensicherheit und Schutzmaßnahmen",
        premium_title: "10. Besondere Hinweise für Premium-Nutzer",
        cookies_title: "11. Cookies und Tracking",
        contact_title: "12. Kontakt und Datenschutzbeauftragter",
        changes_title: "13. Änderungen der Datenschutzerklärung",
        footer_rights: "Alle Rechte vorbehalten.",
        footer_privacy: "Datenschutzerklärung",
        footer_delete: "Konto löschen",
        footer_support: "Support",
        // Account data details
        account_username: "username",
        account_email: "E-Mail-Adresse (zur Anmeldung und Kommunikation)",
        account_name: "Name (optional)",
        account_photo: "Profilbild (coming soon)",
        account_password: "Passwort (verschlüsselt gespeichert)",
        // Training data details
        training_date: "Trainingsdatum und -zeit",
        training_sport: "Sportart (Laufen, Radfahren, Schwimmen, etc.)",
        training_duration: "Dauer in Minuten",
        training_distance: "Distanz in Kilometern",
        training_status: "Erledigungsstatus",
        training_notes: "Notizen (optional)",
        training_intervals: "Intervall-Trainings mit spezifischen Zeiten",
        // Competition data details
        comp_name: "Wettkampfname und -datum",
        comp_sport: "Sportart und Distanz",
        comp_times: "Zielzeiten und Pace-Berechnungen",
        comp_status: "Erledigungsstatus",
        comp_notes: "Notizen (optional)",
        comp_triathlon: "Triathlon-Distanzen (Schwimmen, Radfahren, Laufen)",
        // Location data details
        location_city: "Ausgewählte Stadt für Wetterdaten",
        location_no_gps: "Keine GPS-Standorte werden gespeichert",
        location_no_tracking: "Keine Bewegungsprofile werden erstellt",
        // App data details
        app_sync: "Synchronisationszeitpunkte",
        app_settings: "App-Einstellungen",
        app_cache: "Cache-Daten für Offline-Nutzung",
        app_logs: "Debug-Logs (nur bei Fehlern)",
        app_device: "Geräte-Informationen (für technischen Support)",
        app_version: "App-Version und Betriebssystem",
        // Payment data details
        payment_status: "Abonnement-Status",
        payment_dates: "Kaufdatum und Ablaufdatum",
        payment_no_card: "Keine Kreditkartendaten (werden von App Store/Play Store verarbeitet)",
        // Usage details
        usage_functions: "Bereitstellung der App-Funktionen (Trainingsplanung, Wettkampfverwaltung)",
        usage_sync: "Synchronisation zwischen Ihren Geräten",
        usage_weather: "Anzeige von Wetterdaten für Ihre ausgewählte Stadt",
        usage_stats: "Berechnung von Statistiken und Fortschritten",
        usage_premium: "Verwaltung von Premium-Abonnements",
        usage_support: "Technischer Support und Fehlerbehebung",
        usage_improvement: "Verbesserung der App-Funktionen",
        usage_offline: "Offline-Funktionalität durch lokale Datenspeicherung",
        // Third party details
        supabase_storage: "Speicherung Ihrer Trainings- und Wettkampfdaten",
        supabase_auth: "Sichere Authentifizierung und Session-Management",
        supabase_location: "Datenbank-Standort: Europa (DSGVO-konform)",
        weather_data: "Wetterdaten für Ihre ausgewählte Stadt",
        weather_no_personal: "Keine persönlichen Daten werden übertragen",
        weather_city_only: "Nur Stadtname wird übermittelt",
        revenue_status: "Abonnement-Status und Kaufverwaltung",
        revenue_premium: "Nur bei Nutzung von Premium-Features",
        revenue_userid: "Verknüpfung mit Ihrer User-ID",
        store_payment: "Zahlungsabwicklung für Premium-Abonnements",
        store_no_data: "Keine direkte Datenübertragung durch unsere App",
        // Local storage details
        local_training: "Alle Trainings- und Wettkampfdaten werden lokal auf Ihrem Gerät gespeichert",
        local_weather: "Wetterdaten werden für 3 Tage gecacht",
        local_settings: "App-Einstellungen und Präferenzen werden lokal gespeichert",
        local_isolated: "User-spezifische Daten sind isoliert gespeichert",
        local_deletion: "Daten werden bei App-Deinstallation automatisch gelöscht",
        local_async: "AsyncStorage wird für persistente Datenspeicherung verwendet",
        // Legal basis details
        legal_contract: "Vertragserfüllung: Bereitstellung der App-Funktionen",
        legal_interest: "Berechtigtes Interesse: Verbesserung der App-Funktionen",
        legal_consent: "Einwilligung: Premium-Abonnements und erweiterte Features",
        legal_technical: "Technische Notwendigkeit: Synchronisation und Offline-Funktionalität",
        // Rights details
        rights_text: "Sie haben das Recht:",
        rights_info: "Auf Auskunft über Ihre gespeicherten Daten",
        rights_correction: "Auf Berichtigung falscher oder unvollständiger Daten",
        rights_deletion: "Auf Löschung Ihrer Daten (\"Recht auf Vergessenwerden\")",
        rights_portability: "Auf Datenübertragbarkeit in einem strukturierten Format",
        rights_objection: "Auf Widerspruch gegen die Verarbeitung",
        rights_restriction: "Auf Einschränkung der Verarbeitung",
        rights_complaint: "Beschwerde bei der zuständigen Aufsichtsbehörde",
        // Deletion details
        deletion_account: "Alle Daten werden bei Konto-Löschung permanent entfernt",
        deletion_local: "Lokale Daten werden bei App-Deinstallation gelöscht",
        deletion_weather: "Wetter-Cache wird automatisch nach 3 Tagen erneuert",
        deletion_settings: "Sie können jederzeit Ihr Konto in den Einstellungen löschen",
        deletion_subscription: "Abonnement-Daten werden nach Kündigung gelöscht",
        deletion_logs: "Debug-Logs werden automatisch nach 30 Tagen gelöscht",
        // Security details
        security_encryption: "Alle Datenübertragungen sind verschlüsselt (HTTPS/TLS)",
        security_api: "Datenbankzugriff ist durch sichere API-Keys geschützt",
        security_local: "Lokale Daten sind nur auf Ihrem Gerät zugänglich",
        security_isolated: "User-Daten sind isoliert und können nicht von anderen Usern eingesehen werden",
        security_updates: "Regelmäßige Sicherheitsupdates der App",
        security_passwords: "Passwörter werden verschlüsselt gespeichert",
        security_tokens: "Session-Tokens werden sicher verwaltet",
        // Premium details
        premium_revenue: "RevenueCat sammelt Abonnement-Informationen",
        premium_userid: "Ihre User-ID wird mit RevenueCat verknüpft",
        premium_no_payment: "Keine Zahlungsinformationen werden von uns gespeichert",
        premium_stores: "Alle Zahlungen erfolgen über App Store/Play Store",
        premium_cancellation: "Abonnement-Kündigungen erfolgen über die Store-Plattformen",
        // Cookies details
        cookies_none: "Keine Cookies werden verwendet",
        cookies_no_tracking: "Kein Tracking oder Profiling",
        cookies_no_ads: "Keine Werbung von Drittanbietern",
        cookies_no_analytics: "Keine Analytics-Tools",
        cookies_logs: "Nur technische Logs für Fehlerbehebung",
        // Contact details
        contact_privacy: "Bei Fragen zum Datenschutz:",
        contact_privacy_email: "E-Mail: info@endurancelab.app",
        contact_support: "Für technischen Support:",
        contact_support_email: "E-Mail: support@endurancelab.app",
        contact_general: "Allgemeine Anfragen:",
        contact_general_email: "E-Mail: info@endurancelab.app",
        // Changes details
        changes_text: "Diese Datenschutzerklärung kann bei Bedarf aktualisiert werden. Wesentliche Änderungen werden Ihnen über die App oder per E-Mail mitgeteilt. Die aktuelle Version ist immer in der App unter \"Profil → Datenschutzerklärung\" verfügbar.",
        // Additional missing keys
        footer_terms: "Nutzungsbedingungen"
    },
    en: {
        privacy_tagline: "Privacy Policy",
        back_to_support: "← Back to Support",
        delete_account: "Delete Account",
        support: "Support & Help",
        terms: "Terms of Use",
        welcome_title: "Privacy Policy for EnduranceLab",
        welcome_text: "This privacy policy informs you about the processing of your personal data when using the EnduranceLab app.",
        responsible_title: "1. Responsible Party",
        responsible_name: "Daniel Wlach",
        responsible_project: "Project: EnduranceLab",
        responsible_contact: "Contact:",
        responsible_date: "Date: January 2025",
        data_title: "2. What data do we collect?",
        account_data: "Account data:",
        training_data: "Training data:",
        competition_data: "Competition data:",
        location_data: "Location data:",
        app_data: "App usage and technical data:",
        payment_data: "Payment data (Premium users only):",
        usage_title: "3. How do we use your data?",
        third_party_title: "4. Data transfer to third parties",
        third_party_text: "Your data is transferred to the following services:",
        supabase_title: "Supabase (Database Service):",
        weather_title: "WeatherAPI.com (Weather Service):",
        revenue_title: "RevenueCat (Subscription Management):",
        store_title: "Apple App Store / Google Play Store:",
        local_storage_title: "5. Local data storage",
        legal_basis_title: "6. Legal basis for processing",
        rights_title: "7. Your rights under GDPR",
        deletion_title: "8. Data deletion and retention period",
        security_title: "9. Data security and protection measures",
        premium_title: "10. Special notes for Premium users",
        cookies_title: "11. Cookies and tracking",
        contact_title: "12. Contact and data protection officer",
        changes_title: "13. Changes to the privacy policy",
        footer_rights: "All rights reserved.",
        footer_privacy: "Privacy Policy",
        footer_delete: "Delete Account",
        footer_support: "Support",
        // Account data details
        account_username: "username",
        account_email: "Email address (for login and communication)",
        account_name: "Name (optional)",
        account_photo: "Profile picture (coming soon)",
        account_password: "Password (encrypted storage)",
        // Training data details
        training_date: "Training date and time",
        training_sport: "Sport type (Running, Cycling, Swimming, etc.)",
        training_duration: "Duration in minutes",
        training_distance: "Distance in kilometers",
        training_status: "Completion status",
        training_notes: "Notes (optional)",
        training_intervals: "Interval training with specific times",
        // Competition data details
        comp_name: "Competition name and date",
        comp_sport: "Sport type and distance",
        comp_times: "Target times and pace calculations",
        comp_status: "Completion status",
        comp_notes: "Notes (optional)",
        comp_triathlon: "Triathlon distances (Swimming, Cycling, Running)",
        // Location data details
        location_city: "Selected city for weather data",
        location_no_gps: "No GPS locations are stored",
        location_no_tracking: "No movement profiles are created",
        // App data details
        app_sync: "Synchronization timestamps",
        app_settings: "App settings",
        app_cache: "Cache data for offline use",
        app_logs: "Debug logs (only for errors)",
        app_device: "Device information (for technical support)",
        app_version: "App version and operating system",
        // Payment data details
        payment_status: "Subscription status",
        payment_dates: "Purchase date and expiration date",
        payment_no_card: "No credit card data (processed by App Store/Play Store)",
        // Usage details
        usage_functions: "Provision of app functions (training planning, competition management)",
        usage_sync: "Synchronization between your devices",
        usage_weather: "Display of weather data for your selected city",
        usage_stats: "Calculation of statistics and progress",
        usage_premium: "Management of premium subscriptions",
        usage_support: "Technical support and troubleshooting",
        usage_improvement: "Improvement of app functions",
        usage_offline: "Offline functionality through local data storage",
        // Third party details
        supabase_storage: "Storage of your training and competition data",
        supabase_auth: "Secure authentication and session management",
        supabase_location: "Database location: Europe (GDPR compliant)",
        weather_data: "Weather data for your selected city",
        weather_no_personal: "No personal data is transmitted",
        weather_city_only: "Only city name is transmitted",
        revenue_status: "Subscription status and purchase management",
        revenue_premium: "Only when using premium features",
        revenue_userid: "Link with your user ID",
        store_payment: "Payment processing for premium subscriptions",
        store_no_data: "No direct data transmission through our app",
        // Local storage details
        local_training: "All training and competition data is stored locally on your device",
        local_weather: "Weather data is cached for 3 days",
        local_settings: "App settings and preferences are stored locally",
        local_isolated: "User-specific data is stored in isolation",
        local_deletion: "Data is automatically deleted when the app is uninstalled",
        local_async: "AsyncStorage is used for persistent data storage",
        // Legal basis details
        legal_contract: "Contract fulfillment: Provision of app functions",
        legal_interest: "Legitimate interest: Improvement of app functions",
        legal_consent: "Consent: Premium subscriptions and extended features",
        legal_technical: "Technical necessity: Synchronization and offline functionality",
        // Rights details
        rights_text: "You have the right to:",
        rights_info: "Information about your stored data",
        rights_correction: "Correction of incorrect or incomplete data",
        rights_deletion: "Deletion of your data (\"Right to be forgotten\")",
        rights_portability: "Data portability in a structured format",
        rights_objection: "Objection to processing",
        rights_restriction: "Restriction of processing",
        rights_complaint: "Complaint to the competent supervisory authority",
        // Deletion details
        deletion_account: "All data is permanently removed when the account is deleted",
        deletion_local: "Local data is deleted when the app is uninstalled",
        deletion_weather: "Weather cache is automatically renewed after 3 days",
        deletion_settings: "You can delete your account at any time in the settings",
        deletion_subscription: "Subscription data is deleted after cancellation",
        deletion_logs: "Debug logs are automatically deleted after 30 days",
        // Security details
        security_encryption: "All data transmissions are encrypted (HTTPS/TLS)",
        security_api: "Database access is protected by secure API keys",
        security_local: "Local data is only accessible on your device",
        security_isolated: "User data is isolated and cannot be viewed by other users",
        security_updates: "Regular security updates of the app",
        security_passwords: "Passwords are stored encrypted",
        security_tokens: "Session tokens are managed securely",
        // Premium details
        premium_revenue: "RevenueCat collects subscription information",
        premium_userid: "Your user ID is linked with RevenueCat",
        premium_no_payment: "No payment information is stored by us",
        premium_stores: "All payments are made through App Store/Play Store",
        premium_cancellation: "Subscription cancellations are made through the store platforms",
        // Cookies details
        cookies_none: "No cookies are used",
        cookies_no_tracking: "No tracking or profiling",
        cookies_no_ads: "No third-party advertising",
        cookies_no_analytics: "No analytics tools",
        cookies_logs: "Only technical logs for troubleshooting",
        // Contact details
        contact_privacy: "For privacy questions:",
        contact_privacy_email: "Email: info@endurancelab.app",
        contact_support: "For technical support:",
        contact_support_email: "Email: support@endurancelab.app",
        contact_general: "General inquiries:",
        contact_general_email: "Email: info@endurancelab.app",
        // Changes details
        changes_text: "This privacy policy can be updated as needed. Significant changes will be communicated to you via the app or by email. The current version is always available in the app under \"Profile → Privacy Policy\".",
        // Additional missing keys
        footer_terms: "Terms of Use"
    },
    es: {
        privacy_tagline: "Política de Privacidad",
        back_to_support: "← Volver al Soporte",
        delete_account: "Eliminar Cuenta",
        support: "Soporte y Ayuda",
        terms: "Términos de Uso",
        welcome_title: "Política de Privacidad para EnduranceLab",
        welcome_text: "Esta política de privacidad le informa sobre el procesamiento de sus datos personales al usar la app EnduranceLab.",
        responsible_title: "1. Responsable",
        responsible_name: "Daniel Wlach",
        responsible_project: "Proyecto: EnduranceLab",
        responsible_contact: "Contacto:",
        responsible_date: "Fecha: Enero 2025",
        data_title: "2. ¿Qué datos recopilamos?",
        account_data: "Datos de cuenta:",
        training_data: "Datos de entrenamiento:",
        competition_data: "Datos de competición:",
        location_data: "Datos de ubicación:",
        app_data: "Uso de la app y datos técnicos:",
        payment_data: "Datos de pago (solo usuarios Premium):",
        usage_title: "3. ¿Cómo usamos sus datos?",
        third_party_title: "4. Transferencia de datos a terceros",
        third_party_text: "Sus datos se transfieren a los siguientes servicios:",
        supabase_title: "Supabase (Servicio de Base de Datos):",
        weather_title: "WeatherAPI.com (Servicio Meteorológico):",
        revenue_title: "RevenueCat (Gestión de Suscripciones):",
        store_title: "Apple App Store / Google Play Store:",
        local_storage_title: "5. Almacenamiento local de datos",
        legal_basis_title: "6. Base legal para el procesamiento",
        rights_title: "7. Sus derechos bajo el RGPD",
        deletion_title: "8. Eliminación de datos y período de retención",
        security_title: "9. Seguridad de datos y medidas de protección",
        premium_title: "10. Notas especiales para usuarios Premium",
        cookies_title: "11. Cookies y seguimiento",
        contact_title: "12. Contacto y oficial de protección de datos",
        changes_title: "13. Cambios en la política de privacidad",
        footer_rights: "Todos los derechos reservados.",
        footer_privacy: "Política de Privacidad",
        footer_delete: "Eliminar Cuenta",
        footer_support: "Soporte"
    },
    fr: {
        privacy_tagline: "Politique de Confidentialité",
        back_to_support: "← Retour au Support",
        delete_account: "Supprimer le Compte",
        support: "Support et Aide",
        terms: "Conditions d'Utilisation",
        welcome_title: "Politique de Confidentialité pour EnduranceLab",
        welcome_text: "Cette politique de confidentialité vous informe sur le traitement de vos données personnelles lors de l'utilisation de l'app EnduranceLab.",
        responsible_title: "1. Responsable",
        responsible_name: "Daniel Wlach",
        responsible_project: "Projet: EnduranceLab",
        responsible_contact: "Contact:",
        responsible_date: "Date: Janvier 2025",
        data_title: "2. Quelles données collectons-nous?",
        account_data: "Données de compte:",
        training_data: "Données d'entraînement:",
        competition_data: "Données de compétition:",
        location_data: "Données de localisation:",
        app_data: "Utilisation de l'app et données techniques:",
        payment_data: "Données de paiement (utilisateurs Premium uniquement):",
        usage_title: "3. Comment utilisons-nous vos données?",
        third_party_title: "4. Transfert de données à des tiers",
        third_party_text: "Vos données sont transférées aux services suivants:",
        supabase_title: "Supabase (Service de Base de Données):",
        weather_title: "WeatherAPI.com (Service Météo):",
        revenue_title: "RevenueCat (Gestion des Abonnements):",
        store_title: "Apple App Store / Google Play Store:",
        local_storage_title: "5. Stockage local des données",
        legal_basis_title: "6. Base légale pour le traitement",
        rights_title: "7. Vos droits sous le RGPD",
        deletion_title: "8. Suppression des données et période de rétention",
        security_title: "9. Sécurité des données et mesures de protection",
        premium_title: "10. Notes spéciales pour les utilisateurs Premium",
        cookies_title: "11. Cookies et suivi",
        contact_title: "12. Contact et délégué à la protection des données",
        changes_title: "13. Modifications de la politique de confidentialité",
        footer_rights: "Tous droits réservés.",
        footer_privacy: "Politique de Confidentialité",
        footer_delete: "Supprimer le Compte",
        footer_support: "Support"
    }
};

// Language switching functionality for privacy page
document.addEventListener('DOMContentLoaded', function() {
    const langButtons = document.querySelectorAll('.lang-btn');
    const elements = document.querySelectorAll('[data-translate]');
    
    // Debug: Log missing translations (remove in production)
    // console.log('Privacy translations loaded:', Object.keys(privacyTranslations));
    // console.log('Elements with data-translate:', elements.length);
    
    // Set initial language
    let currentLang = 'de';
    
    function switchLanguage(lang) {
        currentLang = lang;
        
        // Update active button
        langButtons.forEach(btn => {
            btn.classList.remove('active');
            if (btn.dataset.lang === lang) {
                btn.classList.add('active');
            }
        });
        
        // Update content
        elements.forEach(element => {
            const key = element.dataset.translate;
            if (privacyTranslations[lang] && privacyTranslations[lang][key]) {
                element.textContent = privacyTranslations[lang][key];
            } else {
                // console.log('Missing translation for key:', key, 'in language:', lang);
            }
        });
        
        // Update document language
        document.documentElement.lang = lang;
        
        // Save language preference
        localStorage.setItem('privacy-lang', lang);
    }
    
    // Load saved language or default to German
    const savedLang = localStorage.getItem('privacy-lang') || 'de';
    switchLanguage(savedLang);
    
    // Add click handlers
    langButtons.forEach(button => {
        button.addEventListener('click', function() {
            switchLanguage(this.dataset.lang);
        });
    });
});
