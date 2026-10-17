function goToScreen(screenId) {
    // 1. Cacher tous les écrans
    const screens = document.querySelectorAll('.screen');
    screens.forEach(screen => screen.classList.remove('active'));

    // 2. Afficher l'écran demandé
    const targetScreen = document.getElementById(screenId);
    if (targetScreen) {
        targetScreen.classList.add('active');
    }

    // 3. Changer la couleur de fond du body
    document.body.className = ''; // Réinitialise les classes
    document.body.classList.add('bg-' + screenId);
}
