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
        footer_support: "Soporte",
        // Account data details
        account_username: "nombre de usuario",
        account_email: "Dirección de email (para inicio de sesión y comunicación)",
        account_name: "Nombre (opcional)",
        account_photo: "Foto de perfil (próximamente)",
        account_password: "Contraseña (almacenamiento encriptado)",
        // Training data details
        training_date: "Fecha y hora del entrenamiento",
        training_sport: "Tipo de deporte (Correr, Ciclismo, Natación, etc.)",
        training_duration: "Duración en minutos",
        training_distance: "Distancia en kilómetros",
        training_status: "Estado de finalización",
        training_notes: "Notas (opcional)",
        training_intervals: "Entrenamiento por intervalos con tiempos específicos",
        // Competition data details
        comp_name: "Nombre y fecha de la competición",
        comp_sport: "Tipo de deporte y distancia",
        comp_times: "Tiempos objetivo y cálculos de ritmo",
        comp_status: "Estado de finalización",
        comp_notes: "Notas (opcional)",
        comp_triathlon: "Distancias de triatlón (Natación, Ciclismo, Correr)",
        // Location data details
        location_city: "Ciudad seleccionada para datos meteorológicos",
        location_no_gps: "No se almacenan ubicaciones GPS",
        location_no_tracking: "No se crean perfiles de movimiento",
        // App data details
        app_sync: "Marcas de tiempo de sincronización",
        app_settings: "Configuración de la app",
        app_cache: "Datos de caché para uso offline",
        app_logs: "Registros de depuración (solo para errores)",
        app_device: "Información del dispositivo (para soporte técnico)",
        app_version: "Versión de la app y sistema operativo",
        // Payment data details
        payment_status: "Estado de suscripción",
        payment_dates: "Fecha de compra y fecha de vencimiento",
        payment_no_card: "Sin datos de tarjeta de crédito (procesados por App Store/Play Store)",
        // Usage details
        usage_functions: "Provisión de funciones de la app (planificación de entrenamientos, gestión de competiciones)",
        usage_sync: "Sincronización entre tus dispositivos",
        usage_weather: "Visualización de datos meteorológicos para tu ciudad seleccionada",
        usage_stats: "Cálculo de estadísticas y progreso",
        usage_premium: "Gestión de suscripciones premium",
        usage_support: "Soporte técnico y resolución de problemas",
        usage_improvement: "Mejora de las funciones de la app",
        usage_offline: "Funcionalidad offline a través del almacenamiento local de datos",
        // Third party details
        supabase_storage: "Almacenamiento de tus datos de entrenamiento y competición",
        supabase_auth: "Autenticación segura y gestión de sesiones",
        supabase_location: "Ubicación de la base de datos: Europa (conforme al RGPD)",
        weather_data: "Datos meteorológicos para tu ciudad seleccionada",
        weather_no_personal: "No se transmiten datos personales",
        weather_city_only: "Solo se transmite el nombre de la ciudad",
        revenue_status: "Estado de suscripción y gestión de compras",
        revenue_premium: "Solo al usar funciones premium",
        revenue_userid: "Enlace con tu ID de usuario",
        store_payment: "Procesamiento de pagos para suscripciones premium",
        store_no_data: "Sin transmisión directa de datos a través de nuestra app",
        // Local storage details
        local_training: "Todos los datos de entrenamiento y competición se almacenan localmente en tu dispositivo",
        local_weather: "Los datos meteorológicos se almacenan en caché durante 3 días",
        local_settings: "La configuración y preferencias de la app se almacenan localmente",
        local_isolated: "Los datos específicos del usuario se almacenan de forma aislada",
        local_deletion: "Los datos se eliminan automáticamente al desinstalar la app",
        local_async: "Se usa AsyncStorage para el almacenamiento persistente de datos",
        // Legal basis details
        legal_contract: "Cumplimiento del contrato: Provisión de funciones de la app",
        legal_interest: "Interés legítimo: Mejora de las funciones de la app",
        legal_consent: "Consentimiento: Suscripciones premium y funciones extendidas",
        legal_technical: "Necesidad técnica: Sincronización y funcionalidad offline",
        // Rights details
        rights_text: "Tienes derecho a:",
        rights_info: "Información sobre tus datos almacenados",
        rights_correction: "Corrección de datos incorrectos o incompletos",
        rights_deletion: "Eliminación de tus datos (\"Derecho al olvido\")",
        rights_portability: "Portabilidad de datos en un formato estructurado",
        rights_objection: "Objeción al procesamiento",
        rights_restriction: "Restricción del procesamiento",
        rights_complaint: "Queja ante la autoridad de supervisión competente",
        // Deletion details
        deletion_account: "Todos los datos se eliminan permanentemente al eliminar la cuenta",
        deletion_local: "Los datos locales se eliminan al desinstalar la app",
        deletion_weather: "La caché meteorológica se renueva automáticamente después de 3 días",
        deletion_settings: "Puedes eliminar tu cuenta en cualquier momento en la configuración",
        deletion_subscription: "Los datos de suscripción se eliminan después de la cancelación",
        deletion_logs: "Los registros de depuración se eliminan automáticamente después de 30 días",
        // Security details
        security_encryption: "Todas las transmisiones de datos están encriptadas (HTTPS/TLS)",
        security_api: "El acceso a la base de datos está protegido por claves API seguras",
        security_local: "Los datos locales solo son accesibles en tu dispositivo",
        security_isolated: "Los datos del usuario están aislados y no pueden ser vistos por otros usuarios",
        security_updates: "Actualizaciones de seguridad regulares de la app",
        security_passwords: "Las contraseñas se almacenan encriptadas",
        security_tokens: "Los tokens de sesión se gestionan de forma segura",
        // Premium details
        premium_revenue: "RevenueCat recopila información de suscripción",
        premium_userid: "Tu ID de usuario está vinculado con RevenueCat",
        premium_no_payment: "No almacenamos información de pago",
        premium_stores: "Todos los pagos se realizan a través de App Store/Play Store",
        premium_cancellation: "Las cancelaciones de suscripción se realizan a través de las plataformas de tienda",
        // Cookies details
        cookies_none: "No se usan cookies",
        cookies_no_tracking: "Sin seguimiento o perfilado",
        cookies_no_ads: "Sin publicidad de terceros",
        cookies_no_analytics: "Sin herramientas de análisis",
        cookies_logs: "Solo registros técnicos para resolución de problemas",
        // Contact details
        contact_privacy: "Para preguntas de privacidad:",
        contact_privacy_email: "Email: info@endurancelab.app",
        contact_support: "Para soporte técnico:",
        contact_support_email: "Email: support@endurancelab.app",
        contact_general: "Consultas generales:",
        contact_general_email: "Email: info@endurancelab.app",
        // Changes details
        changes_text: "Esta política de privacidad puede actualizarse según sea necesario. Los cambios significativos se te comunicarán a través de la app o por email. La versión actual siempre está disponible en la app bajo \"Perfil → Política de Privacidad\".",
        // Additional missing keys
        footer_terms: "Términos de Uso"
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
        footer_support: "Support",
        // Account data details
        account_username: "nom d'utilisateur",
        account_email: "Adresse email (pour connexion et communication)",
        account_name: "Nom (optionnel)",
        account_photo: "Photo de profil (bientôt disponible)",
        account_password: "Mot de passe (stockage chiffré)",
        // Training data details
        training_date: "Date et heure d'entraînement",
        training_sport: "Type de sport (Course, Cyclisme, Natation, etc.)",
        training_duration: "Durée en minutes",
        training_distance: "Distance en kilomètres",
        training_status: "Statut d'achèvement",
        training_notes: "Notes (optionnel)",
        training_intervals: "Entraînement par intervalles avec temps spécifiques",
        // Competition data details
        comp_name: "Nom et date de la compétition",
        comp_sport: "Type de sport et distance",
        comp_times: "Temps cibles et calculs de rythme",
        comp_status: "Statut d'achèvement",
        comp_notes: "Notes (optionnel)",
        comp_triathlon: "Distances de triathlon (Natation, Cyclisme, Course)",
        // Location data details
        location_city: "Ville sélectionnée pour les données météo",
        location_no_gps: "Aucune localisation GPS n'est stockée",
        location_no_tracking: "Aucun profil de mouvement n'est créé",
        // App data details
        app_sync: "Horodatages de synchronisation",
        app_settings: "Paramètres de l'app",
        app_cache: "Données de cache pour utilisation hors ligne",
        app_logs: "Journaux de débogage (seulement pour les erreurs)",
        app_device: "Informations sur l'appareil (pour le support technique)",
        app_version: "Version de l'app et système d'exploitation",
        // Payment data details
        payment_status: "Statut d'abonnement",
        payment_dates: "Date d'achat et date d'expiration",
        payment_no_card: "Aucune donnée de carte de crédit (traitées par App Store/Play Store)",
        // Usage details
        usage_functions: "Fourniture des fonctions de l'app (planification d'entraînement, gestion de compétition)",
        usage_sync: "Synchronisation entre vos appareils",
        usage_weather: "Affichage des données météo pour votre ville sélectionnée",
        usage_stats: "Calcul des statistiques et des progrès",
        usage_premium: "Gestion des abonnements premium",
        usage_support: "Support technique et résolution de problèmes",
        usage_improvement: "Amélioration des fonctions de l'app",
        usage_offline: "Fonctionnalité hors ligne grâce au stockage local des données",
        // Third party details
        supabase_storage: "Stockage de vos données d'entraînement et de compétition",
        supabase_auth: "Authentification sécurisée et gestion de session",
        supabase_location: "Emplacement de la base de données: Europe (conforme RGPD)",
        weather_data: "Données météo pour votre ville sélectionnée",
        weather_no_personal: "Aucune donnée personnelle n'est transmise",
        weather_city_only: "Seul le nom de la ville est transmis",
        revenue_status: "Statut d'abonnement et gestion des achats",
        revenue_premium: "Seulement lors de l'utilisation des fonctionnalités premium",
        revenue_userid: "Lien avec votre ID utilisateur",
        store_payment: "Traitement des paiements pour les abonnements premium",
        store_no_data: "Aucune transmission directe de données via notre app",
        // Local storage details
        local_training: "Toutes les données d'entraînement et de compétition sont stockées localement sur votre appareil",
        local_weather: "Les données météo sont mises en cache pendant 3 jours",
        local_settings: "Les paramètres et préférences de l'app sont stockés localement",
        local_isolated: "Les données spécifiques à l'utilisateur sont stockées de manière isolée",
        local_deletion: "Les données sont automatiquement supprimées lors de la désinstallation de l'app",
        local_async: "AsyncStorage est utilisé pour le stockage persistant des données",
        // Legal basis details
        legal_contract: "Exécution du contrat: Fourniture des fonctions de l'app",
        legal_interest: "Intérêt légitime: Amélioration des fonctions de l'app",
        legal_consent: "Consentement: Abonnements premium et fonctionnalités étendues",
        legal_technical: "Nécessité technique: Synchronisation et fonctionnalité hors ligne",
        // Rights details
        rights_text: "Vous avez le droit:",
        rights_info: "D'information sur vos données stockées",
        rights_correction: "De correction de données incorrectes ou incomplètes",
        rights_deletion: "De suppression de vos données (\"Droit à l'oubli\")",
        rights_portability: "De portabilité des données dans un format structuré",
        rights_objection: "D'objection au traitement",
        rights_restriction: "De restriction du traitement",
        rights_complaint: "De plainte auprès de l'autorité de contrôle compétente",
        // Deletion details
        deletion_account: "Toutes les données sont supprimées définitivement lors de la suppression du compte",
        deletion_local: "Les données locales sont supprimées lors de la désinstallation de l'app",
        deletion_weather: "Le cache météo est automatiquement renouvelé après 3 jours",
        deletion_settings: "Vous pouvez supprimer votre compte à tout moment dans les paramètres",
        deletion_subscription: "Les données d'abonnement sont supprimées après annulation",
        deletion_logs: "Les journaux de débogage sont automatiquement supprimés après 30 jours",
        // Security details
        security_encryption: "Toutes les transmissions de données sont chiffrées (HTTPS/TLS)",
        security_api: "L'accès à la base de données est protégé par des clés API sécurisées",
        security_local: "Les données locales ne sont accessibles que sur votre appareil",
        security_isolated: "Les données utilisateur sont isolées et ne peuvent pas être vues par d'autres utilisateurs",
        security_updates: "Mises à jour de sécurité régulières de l'app",
        security_passwords: "Les mots de passe sont stockés chiffrés",
        security_tokens: "Les tokens de session sont gérés de manière sécurisée",
        // Premium details
        premium_revenue: "RevenueCat collecte les informations d'abonnement",
        premium_userid: "Votre ID utilisateur est lié à RevenueCat",
        premium_no_payment: "Aucune information de paiement n'est stockée par nous",
        premium_stores: "Tous les paiements sont effectués via App Store/Play Store",
        premium_cancellation: "Les annulations d'abonnement sont effectuées via les plateformes de magasin",
        // Cookies details
        cookies_none: "Aucun cookie n'est utilisé",
        cookies_no_tracking: "Aucun suivi ou profilage",
        cookies_no_ads: "Aucune publicité de tiers",
        cookies_no_analytics: "Aucun outil d'analyse",
        cookies_logs: "Seulement des journaux techniques pour le dépannage",
        // Contact details
        contact_privacy: "Pour les questions de confidentialité:",
        contact_privacy_email: "Email: info@endurancelab.app",
        contact_support: "Pour le support technique:",
        contact_support_email: "Email: support@endurancelab.app",
        contact_general: "Demandes générales:",
        contact_general_email: "Email: info@endurancelab.app",
        // Changes details
        changes_text: "Cette politique de confidentialité peut être mise à jour si nécessaire. Les changements importants vous seront communiqués via l'app ou par email. La version actuelle est toujours disponible dans l'app sous \"Profil → Politique de Confidentialité\".",
        // Additional missing keys
        footer_terms: "Conditions d'Utilisation"
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
