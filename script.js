class FFX2Tracker {
    constructor() {
        this.currentView = 'numbered';
        this.completedEnemies = new Set();
        this.init();
    }

    init() {
        this.loadProgress();
        this.setupEventListeners();
        this.renderCurrentView();
        this.updateProgress();
    }

    setupEventListeners() {
        document.getElementById('numbered-view-btn').addEventListener('click', () => {
            this.switchView('numbered');
        });

        document.getElementById('floor-view-btn').addEventListener('click', () => {
            this.switchView('floor');
        });

        document.getElementById('chapter-view-btn').addEventListener('click', () => {
            this.switchView('chapter');
        });

        document.getElementById('two-column-toggle').addEventListener('change', (e) => {
            this.toggleTwoColumnLayout(e.target.checked);
        });

        document.getElementById('check-all-btn').addEventListener('click', () => {
            this.checkAll();
        });

        document.getElementById('uncheck-all-btn').addEventListener('click', () => {
            this.uncheckAll();
        });
    }

    switchView(view) {
        this.currentView = view;
        
        document.querySelectorAll('.view-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        document.getElementById(`${view}-view-btn`).classList.add('active');

        document.querySelectorAll('.view-section').forEach(section => {
            section.classList.remove('active');
        });
        document.getElementById(`${view}-view`).classList.add('active');

        this.renderCurrentView();
    }

    toggleTwoColumnLayout(enabled) {
        const enemyList = document.getElementById('numbered-enemy-list');
        if (enabled) {
            enemyList.classList.add('two-column');
        } else {
            enemyList.classList.remove('two-column');
        }
        
        localStorage.setItem('ffx2-two-column-layout', JSON.stringify(enabled));
    }

    renderCurrentView() {
        if (this.currentView === 'numbered') {
            this.renderNumberedView();
        } else if (this.currentView === 'floor') {
            this.renderFloorView();
        } else if (this.currentView === 'chapter') {
            this.renderChapterView();
        }
    }

    renderNumberedView() {
        const container = document.getElementById('numbered-enemy-list');
        container.innerHTML = '';

        enemiesData.forEach(enemy => {
            const enemyElement = this.createEnemyElement(enemy, 'numbered');
            container.appendChild(enemyElement);
        });
    }

    renderFloorView() {
        const container = document.getElementById('floor-enemy-list');
        container.innerHTML = '';

        const { floorMap, sortedFloors } = organizeEnemiesByFloor();

        sortedFloors.forEach(floor => {
            const enemies = floorMap.get(floor);
            const floorSection = this.createFloorSection(floor, enemies);
            container.appendChild(floorSection);
        });
    }

    renderChapterView() {
        const container = document.getElementById('chapter-enemy-list');
        container.innerHTML = '';

        const { chapterMap, sortedChapters } = organizeEnemiesByChapter();

        sortedChapters.forEach(chapter => {
            const enemies = chapterMap.get(chapter);
            const chapterSection = this.createChapterSection(chapter, enemies);
            container.appendChild(chapterSection);
        });
    }

    createFloorSection(floor, enemies) {
        const section = document.createElement('div');
        section.className = 'floor-section';

        const header = document.createElement('h3');
        header.className = 'floor-header';
        header.textContent = floor === "Other" ? "Special Encounters" : `Floor ${floor}`;

        const enemiesContainer = document.createElement('div');
        enemiesContainer.className = 'floor-enemies';

        enemies.forEach(enemy => {
            const enemyElement = this.createEnemyElement(enemy, 'floor');
            enemiesContainer.appendChild(enemyElement);
        });

        section.appendChild(header);
        section.appendChild(enemiesContainer);
        return section;
    }

    createChapterSection(chapter, enemies) {
        const section = document.createElement('div');
        section.className = 'chapter-section';

        const header = document.createElement('h3');
        header.className = 'chapter-header';
        header.textContent = chapter;

        const enemiesContainer = document.createElement('div');
        enemiesContainer.className = 'chapter-enemies';

        enemies.forEach(enemy => {
            const enemyElement = this.createEnemyElement(enemy, 'chapter');
            enemiesContainer.appendChild(enemyElement);
        });

        section.appendChild(header);
        section.appendChild(enemiesContainer);
        return section;
    }

    createEnemyElement(enemy, viewType) {
        const item = document.createElement('div');
        if (viewType === 'numbered') {
            item.className = 'enemy-item';
        } else if (viewType === 'floor') {
            item.className = 'floor-enemy-item';
        } else if (viewType === 'chapter') {
            item.className = 'chapter-enemy-item';
        }
        
        if (this.completedEnemies.has(enemy.id)) {
            item.classList.add('completed');
        }

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = `enemy-${enemy.id}-${viewType}`;
        checkbox.checked = this.completedEnemies.has(enemy.id);
        checkbox.addEventListener('change', (e) => {
            this.toggleEnemy(enemy.id, e.target.checked);
        });

        const label = document.createElement('label');
        label.htmlFor = checkbox.id;
        label.className = 'enemy-checkbox';

        const info = document.createElement('div');
        info.className = 'enemy-info';

        const name = document.createElement('div');
        name.className = 'enemy-name';
        
        if (viewType === 'numbered') {
            name.innerHTML = `<span class="enemy-number">${enemy.id}.</span> ${enemy.name}`;
        } else {
            name.textContent = enemy.name;
        }

        const details = document.createElement('div');
        details.className = 'enemy-details';
        
        let detailsText = enemy.location;
        if (enemy.floors && enemy.floors !== "") {
            detailsText += ` (Floors ${enemy.floors})`;
        }
        details.textContent = detailsText;

        info.appendChild(name);
        info.appendChild(details);
        label.appendChild(checkbox);
        label.appendChild(info);
        item.appendChild(label);

        return item;
    }

    toggleEnemy(enemyId, isCompleted) {
        if (isCompleted) {
            this.completedEnemies.add(enemyId);
        } else {
            this.completedEnemies.delete(enemyId);
        }

        this.saveProgress();
        this.updateProgress();
        this.syncCheckboxes(enemyId, isCompleted);
        this.updateEnemyItemAppearance(enemyId, isCompleted);
    }

    syncCheckboxes(enemyId, isCompleted) {
        // Update all checkboxes for this enemy across both views
        const checkboxes = document.querySelectorAll(`input[id^="enemy-${enemyId}-"]`);
        checkboxes.forEach(checkbox => {
            checkbox.checked = isCompleted;
        });
    }

    updateEnemyItemAppearance(enemyId, isCompleted) {
        // Update visual appearance of enemy items across both views
        const items = document.querySelectorAll(`input[id^="enemy-${enemyId}-"]`);
        items.forEach(checkbox => {
            const item = checkbox.closest('.enemy-item, .floor-enemy-item');
            if (item) {
                if (isCompleted) {
                    item.classList.add('completed');
                } else {
                    item.classList.remove('completed');
                }
            }
        });
    }

    checkAll() {
        enemiesData.forEach(enemy => {
            this.completedEnemies.add(enemy.id);
        });
        
        this.saveProgress();
        this.updateProgress();
        this.syncAllCheckboxes();
        this.updateAllEnemyAppearances();
    }

    uncheckAll() {
        if (confirm('Are you sure you want to uncheck all enemies?')) {
            this.completedEnemies.clear();
            
            this.saveProgress();
            this.updateProgress();
            this.syncAllCheckboxes();
            this.updateAllEnemyAppearances();
        }
    }

    syncAllCheckboxes() {
        const checkboxes = document.querySelectorAll('input[type="checkbox"][id^="enemy-"]');
        checkboxes.forEach(checkbox => {
            const enemyId = parseInt(checkbox.id.match(/enemy-(\d+)-/)[1]);
            checkbox.checked = this.completedEnemies.has(enemyId);
        });
    }

    updateAllEnemyAppearances() {
        const items = document.querySelectorAll('.enemy-item, .floor-enemy-item, .chapter-enemy-item');
        items.forEach(item => {
            const checkbox = item.querySelector('input[type="checkbox"]');
            if (checkbox) {
                const enemyId = parseInt(checkbox.id.match(/enemy-(\d+)-/)[1]);
                if (this.completedEnemies.has(enemyId)) {
                    item.classList.add('completed');
                } else {
                    item.classList.remove('completed');
                }
            }
        });
    }

    updateProgress() {
        const completed = this.completedEnemies.size;
        const total = enemiesData.length;
        const percentage = Math.round((completed / total) * 100);
        
        const progressText = document.getElementById('progress-text');
        progressText.textContent = `Progress: ${completed}/${total} (${percentage}%)`;
        
        const progressBarFill = document.getElementById('progress-bar-fill');
        progressBarFill.style.width = `${percentage}%`;
        
        if (percentage === 100) {
            progressBarFill.style.background = 'linear-gradient(90deg, #4caf50, #66bb6a, #4caf50)';
            progressBarFill.style.boxShadow = '0 0 20px rgba(76, 175, 80, 0.6)';
        } else if (percentage >= 75) {
            progressBarFill.style.background = 'linear-gradient(90deg, #ff9800, #ffb74d, #ff9800)';
        } else {
            progressBarFill.style.background = 'linear-gradient(90deg, #4a90e2, #5ba3f5, #4a90e2)';
            progressBarFill.style.boxShadow = 'none';
        }
    }

    saveProgress() {
        const progressData = Array.from(this.completedEnemies);
        localStorage.setItem('ffx2-oversouled-progress', JSON.stringify(progressData));
    }

    loadProgress() {
        try {
            const saved = localStorage.getItem('ffx2-oversouled-progress');
            if (saved) {
                const progressData = JSON.parse(saved);
                this.completedEnemies = new Set(progressData);
            }
        } catch (error) {
            console.error('Error loading progress:', error);
            this.completedEnemies = new Set();
        }

        try {
            const layoutPref = localStorage.getItem('ffx2-two-column-layout');
            if (layoutPref) {
                const twoColumnEnabled = JSON.parse(layoutPref);
                const toggle = document.getElementById('two-column-toggle');
                toggle.checked = twoColumnEnabled;
                this.toggleTwoColumnLayout(twoColumnEnabled);
            }
        } catch (error) {
            console.error('Error loading layout preference:', error);
        }
    }

    importProgress(jsonData) {
        try {
            const progress = JSON.parse(jsonData);
            if (progress.completed && Array.isArray(progress.completed)) {
                this.completedEnemies = new Set(progress.completed);
                this.saveProgress();
                this.renderCurrentView();
                this.updateProgress();
                return true;
            }
        } catch (error) {
            console.error('Error importing progress:', error);
        }
        return false;
    }

    resetProgress() {
        if (confirm('Are you sure you want to reset all progress? This cannot be undone.')) {
            this.completedEnemies.clear();
            this.saveProgress();
            this.renderCurrentView();
            this.updateProgress();
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    window.ffx2Tracker = new FFX2Tracker();
});
