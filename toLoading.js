// Collect all picks, bans, team names, and player names from index.html and save to localStorage for loading.html
function saveDraftDataForLoading() {
    // Blue side picks (1-5)
    const bluePicks = [];
    for (let i = 1; i <= 5; i++) {
        bluePicks.push(document.getElementById(`search-${i}`).value);
    }
    // Blue side bans (6-8)
    const blueBans = [];
    for (let i = 6; i <= 8; i++) {
        blueBans.push(document.getElementById(`search-${i}`).value);
    }
    // Red side picks (9-13)
    const redPicks = [];
    for (let i = 9; i <= 13; i++) {
        redPicks.push(document.getElementById(`search-${i}`).value);
    }
    // Red side bans (14-16)
    const redBans = [];
    for (let i = 14; i <= 16; i++) {
        redBans.push(document.getElementById(`search-${i}`).value);
    }
    // Team names
    const teamA = document.getElementById('teamNameDisplay1').textContent;
    const teamB = document.getElementById('teamNameDisplay2').textContent;
    // Player names (inputs 1-5 blue, 6-10 red)
    const bluePlayers = [];
    for (let i = 1; i <= 5; i++) {
        bluePlayers.push(document.getElementById(`input${i}`).value);
    }
    const redPlayers = [];
    for (let i = 6; i <= 10; i++) {
        redPlayers.push(document.getElementById(`input${i}`).value);
    }
    // Save to localStorage
    localStorage.setItem('bluePicks', JSON.stringify(bluePicks));
    localStorage.setItem('blueBans', JSON.stringify(blueBans));
    localStorage.setItem('redPicks', JSON.stringify(redPicks));
    localStorage.setItem('redBans', JSON.stringify(redBans));
    localStorage.setItem('teamA', teamA);
    localStorage.setItem('teamB', teamB);
    localStorage.setItem('bluePlayers', JSON.stringify(bluePlayers));
    localStorage.setItem('redPlayers', JSON.stringify(redPlayers));
}

// Call this function before redirecting to loading.html
function goToLoadingScreen() {
    saveDraftDataForLoading();
    window.location.href = 'loading.html';
}

// Example: Add a button in index.html to trigger goToLoadingScreen()
// <button onclick="goToLoadingScreen()">Go to Loading Screen</button>
