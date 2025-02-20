let balance = 0;

// Countdown Timer
function startCountdown(duration) {
    let timer = duration, minutes, seconds;
    let countdownElement = document.getElementById("countdown");

    let interval = setInterval(() => {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);
        countdownElement.textContent = `Time Left: ${minutes}:${seconds}`;

        if (--timer < 0) {
            clearInterval(interval);
            countdownElement.textContent = "Airdrop Expired!";
        }
    }, 1000);
}

// Fake Wallet Connection
document.getElementById("claimBtn").addEventListener("click", function() {
    let statusMessage = document.getElementById("statusMessage");
    statusMessage.textContent = "Connecting to wallet...";
    
    setTimeout(() => {
        statusMessage.textContent = "Airdrop Claimed Successfully!";
        balance += 100; // Give 100 tokens
        updateBalance();
    }, 2000);
});

// Update balance
function updateBalance() {
    document.getElementById("balance").textContent = balance;
}

// Spin Wheel Game
document.getElementById("spinBtn").addEventListener("click", function() {
    let wheel = document.getElementById("wheel");
    let randomDegree = 1800 + Math.floor(Math.random() * 360); // Rotate multiple times
    wheel.style.transform = `rotate(${randomDegree}deg)`;

    setTimeout(() => {
        let reward = [10, 20, 50, 100, 5, 15, 25, 75][Math.floor(Math.random() * 8)];
        alert(`You won ${reward} tokens!`);
        balance += reward;
        updateBalance();
    }, 3000);
});

// Click Coin Game
document.getElementById("coin").addEventListener("click", function() {
    balance += 5;
    updateBalance();
});

// Start countdown (5 minutes)
startCountdown(300);
