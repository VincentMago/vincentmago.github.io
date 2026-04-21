const projects = [
    {
        title: "Kawasaki ZX4RR Night Aesthetic",
        tools: "DaVinci Resolve / Color Grading",
        link: "https://www.tiktok.com/player/v1/7624857912158063893" 
    },
    {
        title: "Big Bike Philippines Cinematic",
        tools: "DaVinci Resolve / Sound Design",
        link: "https://www.tiktok.com/player/v1/7605088650027715861" 
    },
    {
        title: "BMW GS310 | Adventure & Storytelling",
        tools: "Adobe Premiere / Action Sequencing",
        link: "https://www.tiktok.com/player/v1/7422287989411253522" 
    }
];

const container = document.getElementById('project-container');

// This function builds your cards automatically
projects.forEach(p => {
    container.innerHTML += `
        <div class="card">
            <div class="vid-container">
                <iframe 
                    src="${p.link}" 
                    allow="autoplay; encrypted-media" 
                    allowfullscreen>
                </iframe>
            </div>
            <div class="card-info">
                <h3>${p.title}</h3>
                <p>Expertise: ${p.tools}</p>
            </div>
        </div>
    `;
});