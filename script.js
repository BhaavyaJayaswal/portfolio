const projects = [
    {
        title: "Metastream Analyzer",
        description: "A Streamlit application for predicting and analyzing network throughput requirements during adaptive video streaming quality transitions. Given time-series network metrics, trained ML models (Random Forest, Gradient Boosting, XGBoost) predict the throughput needed to sustain a target VMAF quality level, and the app visualizes prediction accuracy against ground truth. Automatically detects and lets users drill into \"error regions\" where predictions deviate beyond a configurable threshold, with rolling error, CDF, and zoomed-region charts. Includes a full model-training pipeline (dataset construction from raw packet-capture ZIPs, train/test splitting, class balancing across games, background-threaded hyperparameter grid search with live progress and cancellation) and a save/load system for trained models.",
        techStack: "Python, Streamlit, scikit-learn, XGBoost, Plotly, Pandas/NumPy, joblib",
        imageUrl: "media/analyzer.png",
        githubLink: "https://github.com/BhaavyaJayaswal/Metastream-Analyzer"
    },
    {
        title: "Labyrinth",
        description: "Java-based game where the player must clear multiple levels of a maze while avoiding an evil dragon. The dragon moves until it encounters a wall, making strategic movement crucial. Implements a database to maintain a scoreboard of the top 10 players. Complies with OOP principles.",
        techStack: "Java (Swing, AWT), SQL",
        imageUrl: "media/labyrinth.png",
        githubLink: "https://github.com/BhaavyaJayaswal/Labyrinth"
    },
    {
        title: "Dracula's Flight",
        description: "A 2D side-scrolling game where the player controls Dracula as he flies through the screen, avoiding pipes and trying to survive for as long as possible.",
        techStack: "Java (Swing, AWT)",
        imageUrl: "media/dracula.png",
        githubLink: "https://github.com/BhaavyaJayaswal/Dracula-s-Flight"
    },
    {
        title: "Car Renting Portal",
        description: "A PHP-based car rental website where users can browse, book, and manage car rentals. The website includes Guest Access, Registration, User Authentication and Admin Features in a Responsive design. Logged-in users can select a car, choose a rental period, and confirm their booking. The system prevents double-booking for the same period.",
        techStack: "PHP, JavaScript, CSS",
        imageUrl: "media/car_rental.png",
        githubLink: "https://github.com/BhaavyaJayaswal/iKarRental"
    },
    {
        title: "Four Game",
        description: "Four Game is a simple turn-based strategy game where players select a board size (3x3, 5x5, or 7x7) and compete to win. The game features a graphical user interface (GUI) built with Java Swing, allowing users to open multiple game windows and interact with the game visually.",
        techStack: "Java (Swing, AWT)",
        imageUrl: "media/four.png",
        githubLink: "https://github.com/BhaavyaJayaswal/Four-Game"
    },
    {
        title: "Tic Tac Toe",
        description: "A simple Tic Tac Toe game built using Java Swing and AWT. The game features a graphical user interface (GUI) where two players take turns placing Xs and Os on a 3x3 grid.",
        techStack: "Java (Swing, AWT)",
        imageUrl: "media/tictactoe.png",
        githubLink: "https://github.com/BhaavyaJayaswal/TicTacToe"
    },
    {
        title: "Rock Paper Scissors",
        description: "The classic Rock Paper Scissors game, where a player competes against the computer.",
        techStack: "Python, Tkinter, PIL",
        imageUrl: "media/RPS.png",
        githubLink: "https://github.com/BhaavyaJayaswal/Rock-Paper-Scissors"
    },
    {
        title: "Atmosphere Simulator",
        description: "C# program to model and simulate the effects of weather phenomena (thunderstorms, sunshine, and others) on atmospheric gas layers (ozone, oxygen, carbon dioxide).",
        techStack: "C#",
        imageUrl: "media/csharpicon.png",
        githubLink: "https://github.com/BhaavyaJayaswal/Atmosphere-Simulator"
    },
    {
        title: "Cyptids' Website",
        description: "Informatory website about Cryptids - creatures whose existence is wrapped in mystery and largely unverified.",
        techStack: "HTML, CSS",
        imageUrl: "media/cryptids.png",
        githubLink: "https://github.com/BhaavyaJayaswal/Cryptids-Website-"
    }

];

const projectsSection = document.getElementById('projects');

function createProjectCard(project) {
    const card = document.createElement('div');
    card.classList.add('project-card');

    const image = document.createElement('img');
    image.src = project.imageUrl;
    image.alt = `${project.title} Image`;

    const title = document.createElement('h3');
    title.textContent = project.title;

    const description = document.createElement('p');
    description.classList.add('description');
    description.textContent = project.description;

    const techStack = document.createElement('p');
    techStack.classList.add('tech-stack');
    techStack.textContent = `Tech Stack: ${project.techStack}`;

    const githubLink = document.createElement('a');
    githubLink.href = project.githubLink;
    githubLink.target = "_blank";
    githubLink.classList.add('github-link');
    githubLink.textContent = "View on GitHub";

    card.appendChild(image);
    card.appendChild(title);
    card.appendChild(description);
    card.appendChild(techStack);
    card.appendChild(githubLink);

    return card;
}

projects.forEach(project => {
    const card = createProjectCard(project);
    projectsSection.appendChild(card); 
});
