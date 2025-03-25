<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sandeep M S - Portfolio</title>
    <link rel="stylesheet" href="styles.css">
    <script defer src="script.js"></script>
</head>
<body>
    <header>
        <nav>
            <ul>
                <li><a href="#home" onclick="showSection('home')">Home</a></li>
                <li><a href="#about" onclick="showSection('about')">About</a></li>
                <li><a href="#skills" onclick="showSection('skills')">Skills</a></li>
                <li><a href="#projects" onclick="showSection('projects')">Projects</a></li>
                <li><a href="#blog" onclick="showSection('blog')">Blog</a></li>
                <li><a href="#contact" onclick="showSection('contact')">Contact</a></li>
            </ul>
        </nav>
    </header>
    
    <section id="home">
        <h2>Welcome to My Portfolio</h2>
        <p>Hi, I'm Sandeep M S, a passionate developer with a keen interest in software development and problem-solving.</p>
    </section>
    
    <section id="about">
        <h2>About Me</h2>
        <p>Motivated final-year Computer Science Engineering student with expertise in software development, web technologies, and database management.</p>
    </section>
    
    <section id="skills">
        <h2>Skills</h2>
        <p>Programming Languages: Java, Python, SQL, OpenGL, C Programming</p>
        <p>Web Technologies: HTML, CSS</p>
        <p>Databases: MySQL</p>
        <p>Operating Systems: Windows, Linux</p>
    </section>
    
    <section id="blog">
        <h2>Blog</h2>
        <p>Stay tuned for my latest articles on software development, emerging technologies, and programming insights.</p>
    </section>
    
    <section id="contact">
        <h2>Contact Me</h2>
        <p>Email: sandeepms636@gmail.com</p>
        <p>Phone: +91-9110862068</p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/sandeepms" target="_blank">linkedin.com/in/sandeepms</a></p>
        <p>GitHub: <a href="https://github.com/sandeepms" target="_blank">github.com/sandeepms</a></p>
    </section>
    
    <section id="projects">
        <h2>Projects</h2>
        <div class="project" onclick="showModal('Smart Parking System', 'Implemented a web-based parking solution using Node.js and MySQL.', 'smart_parkin.jpg')">
            <h3>Smart Parking System</h3>
            <img src="smart_parkin.jpg" alt="">
        </div>
        <div class="project" onclick="showModal('QR Based Attendance System', 'Developed a QR code-based system for attendance tracking with real-time updates.', 'qr_attendance.jpg')">
            <h3>QR Based Attendance System</h3>
            <img src="qr_attendance.jpg" alt="">
        </div>
    </section>
    
    <div id="modal" class="modal" style="display: none;">
        <h2 id="modal-title"></h2>
        <p id="modal-description"></p>
        <img id="modal-image" src="" alt="">
        <button onclick="closeModal()">Close</button>
    </div>
</body>
</html>