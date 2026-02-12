function moveButton() {
            const noBtn = document.getElementById('noBtn');
            
            // Calculate random positions within the screen bounds
            // Subtracting button width/height so it doesn't go off-screen
            const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
            const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);

            noBtn.style.left = `${x}px`;
            noBtn.style.top = `${y}px`;
        }

        function celebrate() {
            document.body.innerHTML = `
                <div style="text-align: center;">
                    <h1 style="font-size: 4rem;">Yay! See you on the 14th! 🥰</h1>
                    <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbXNreXN6Z3B3YXF4ZzRnd3B3YXF4ZzRnd3B3YXF4ZzRnd3B3YXF4ZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/c76IJbxUyvAAtBvMvI/giphy.gif" style="width: 300px;">
                </div>
            `;
            document.body.style.backgroundColor = "#fce4ec";
        }