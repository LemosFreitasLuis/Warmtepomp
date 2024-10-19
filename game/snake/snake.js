const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Dynamic canvas sizing
function resizeCanvas() {
    canvas.width = Math.min(window.innerWidth, 400); // Cap width at 400px for larger screens
    canvas.height = canvas.width; // Keep the canvas square
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas(); // Call it initially to set canvas size

const gridSize = canvas.width / 20; // Adjust grid size dynamically based on canvas size
let snake = [{x: gridSize * 8, y: gridSize * 8}]; // Snake starting position
let direction = {x: gridSize, y: 0}; // Snake starts moving right
let food = {x: 0, y: 0}; // Food position
let gameInterval;
let gameRunning = false;
let score = 0;
let highScore = localStorage.getItem('highScore') || 0; // Load high score from localStorage

// Start Button Event
document.getElementById('startButton').addEventListener('click', startGame);

// Function to start the game
function startGame() {
    if (gameRunning) return; // Prevent multiple start clicks
    resetGame();
    placeFood();
    gameRunning = true;
    gameInterval = setInterval(gameLoop, 100); // Game loop runs every 100ms
}

// Function to reset the game state
function resetGame() {
    snake = [{x: gridSize * 8, y: gridSize * 8}]; // Reset snake position
    direction = {x: gridSize, y: 0}; // Reset direction
    score = 0;
    gameRunning = true;
    clearInterval(gameInterval); // Clear any previous game loop
    updateScoreDisplay(); // Update displayed score and high score
}

// Function to place food randomly on the canvas
function placeFood() {
    food.x = Math.floor(Math.random() * (canvas.width / gridSize)) * gridSize;
    food.y = Math.floor(Math.random() * (canvas.height / gridSize)) * gridSize;
}

// Game Loop
function gameLoop() {
    updateSnakePosition();
    checkCollision();
    checkFood();
    drawGame();
}

// Update the snake's position based on direction
function updateSnakePosition() {
    const head = {x: snake[0].x + direction.x, y: snake[0].y + direction.y}; // New head based on direction
    snake.unshift(head); // Add new head to the snake

    // Remove the tail unless the snake ate food
    if (head.x === food.x && head.y === food.y) {
        score++;
        placeFood(); // Place new food when snake eats
    } else {
        snake.pop(); // Remove the last piece of the snake
    }
    updateScoreDisplay(); // Update the score display while playing
}

// Check for collisions with walls or itself
function checkCollision() {
    const head = snake[0];

    // Wall collision
    if (head.x < 0 || head.x >= canvas.width || head.y < 0 || head.y >= canvas.height) {
        endGame();
    }

    // Self collision
    for (let i = 1; i < snake.length; i++) {
        if (head.x === snake[i].x && head.y === snake[i].y) {
            endGame();
        }
    }
}

// Check if the snake eats the food
function checkFood() {
    if (snake[0].x === food.x && snake[0].y === food.y) {
        // Grow snake by not removing tail and place new food
        placeFood();
    }
}

// End the game
function endGame() {
    gameRunning = false;
    clearInterval(gameInterval);

    // Update high score if the player's score is higher
    if (score > highScore) {
        highScore = score;
        localStorage.setItem('highScore', highScore); // Save the new high score to localStorage
        alert(`New High Score! Your Score: ${score}`);
    } else {
        alert(`Game Over! Your Score: ${score}`);
    }
    updateScoreDisplay(); // Update the score display after the game ends
}

// Draw the game (snake, food, and grid)
function drawGame() {
    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw the snake
    ctx.fillStyle = 'green';
    snake.forEach(part => {
        ctx.fillRect(part.x, part.y, gridSize, gridSize);
    });

    // Draw the food
    ctx.fillStyle = 'red';
    ctx.fillRect(food.x, food.y, gridSize, gridSize);
}

// Keydown event to control snake's direction (desktop)
document.addEventListener('keydown', (event) => {
    switch(event.code) {
        case 'ArrowUp':
            if (direction.y === 0) direction = {x: 0, y: -gridSize}; // Move up
            break;
        case 'ArrowDown':
            if (direction.y === 0) direction = {x: 0, y: gridSize}; // Move down
            break;
        case 'ArrowLeft':
            if (direction.x === 0) direction = {x: -gridSize, y: 0}; // Move left
            break;
        case 'ArrowRight':
            if (direction.x === 0) direction = {x: gridSize, y: 0}; // Move right
            break;
    }
});

// Touch controls (mobile swipe)
let touchStartX = 0;
let touchStartY = 0;

// Touch start event (store the starting position)
document.addEventListener('touchstart', (event) => {
    const touch = event.touches[0];
    touchStartX = touch.clientX;
    touchStartY = touch.clientY;
});

// Touch end event (detect swipe direction)
document.addEventListener('touchend', (event) => {
    const touch = event.changedTouches[0];
    const touchEndX = touch.clientX;
    const touchEndY = touch.clientY;

    const deltaX = touchEndX - touchStartX;
    const deltaY = touchEndY - touchStartY;

    if (Math.abs(deltaX) > Math.abs(deltaY)) {
        // Horizontal swipe
        if (deltaX > 0 && direction.x === 0) {
            direction = {x: gridSize, y: 0}; // Swipe right
        } else if (deltaX < 0 && direction.x === 0) {
            direction = {x: -gridSize, y: 0}; // Swipe left
        }
    } else {
        // Vertical swipe
        if (deltaY > 0 && direction.y === 0) {
            direction = {x: 0, y: gridSize}; // Swipe down
        } else if (deltaY < 0 && direction.y === 0) {
            direction = {x: 0, y: -gridSize}; // Swipe up
        }
    }
});

// Add event listeners for on-screen control buttons
document.getElementById('upButton').addEventListener('click', () => {
    if (direction.y === 0) direction = {x: 0, y: -gridSize}; // Move up
});
document.getElementById('downButton').addEventListener('click', () => {
    if (direction.y === 0) direction = {x: 0, y: gridSize}; // Move down
});
document.getElementById('leftButton').addEventListener('click', () => {
    if (direction.x === 0) direction = {x: -gridSize, y: 0}; // Move left
});
document.getElementById('rightButton').addEventListener('click', () => {
    if (direction.x === 0) direction = {x: gridSize, y: 0}; // Move right
});

// Update the score and high score display
function updateScoreDisplay() {
    document.getElementById('scoreDisplay').textContent = `Score: ${score} | High Score: ${highScore}`;
}
