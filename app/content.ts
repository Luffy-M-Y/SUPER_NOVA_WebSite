export const features = [
  {
    number: "01",
    title: "Scanner Wi-Fi",
    text: "Consultez localement les informations du réseau Wi-Fi connecté dans une interface claire. La localisation Windows peut être requise.",
    mediaId: "media-scan-wifi",
    mediaSrc: "/screenshots/scan_wifi.mp4",
    mediaTitle: "Démonstration pratique du scanner Wi-Fi",
  },
  {
    number: "02",
    title: "Mot de passe Windows",
    text: "Gérez les mots de passe des comptes Windows locaux depuis l’application. Les comptes Microsoft restent gérés dans les paramètres Windows.",
    mediaId: "media-password",
    mediaSrc: "/screenshots/MDP_change.mp4",
    mediaTitle: "Démonstration pratique de la gestion des mots de passe",
  },
  {
    number: "03",
    title: "Compagnon Recovery",
    text: "SUPER NOVA RECOVERY est un projet WinPE séparé pour créer, lorsque nécessaire, une clé USB de récupération autorisée.",
    mediaId: "media-recovery",
    mediaSrc: "/screenshots/RECOVERY.mp4",
    mediaTitle: "Démonstration pratique de SUPER NOVA RECOVERY",
  },
] as const;

export type Feature = (typeof features)[number];

export const screenshots = [
  ["vue_generale.webp", "Vue générale de SUPER NOVA"],
  ["scan_wifi.webp", "Analyse des informations Wi-Fi"],
  ["mot_de_passe_definition1.webp", "Choix Je n’ai pas de mot de passe"],
  ["mot_de_passe_definition2.webp", "Définition d’un nouveau mot de passe"],
  ["Mot_de_passe_defini.webp", "Mot de passe défini avec succès"],
  ["mot_de_passe_incorect.webp", "Message de mot de passe incorrect"],
  ["onglet_recovery.webp", "Onglet Recovery de SUPER NOVA"],
  ["creation_clef_succes.webp", "Création réussie d’une clé de récupération"],
] as const;

export const recoveryScreenshots = [
  ["select_key.webp", "Sélection de la clé USB", "Choisissez précisément le périphérique à préparer avant toute écriture."],
  ["avertissemnt_formatage_clef.webp", "Avertissement avant le formatage", "Les données de la clé sélectionnée seront effacées avant la création."],
  ["creation_clef_winpe.webp", "Création de la clé WinPE", "La copie de l’image et la préparation des fichiers WinPE se déroulent étape par étape."],
  ["creation_clef_succes.webp", "Création de la clé terminée", "La clé est prête à démarrer le parcours de récupération Windows."],
] as const;
