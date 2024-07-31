// script.js
document.getElementById('generateForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const name = document.getElementById('name').value;
    const photoFile = document.getElementById('photo').files[0];
    const rank = document.getElementById('rank').value;
    const idNumber = document.getElementById('idNumber').value;
    
    const canvas = document.getElementById('outputCanvas');
    const ctx = canvas.getContext('2d');
    
   
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    /
    ctx.fillStyle = '#fff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = '#ccc';
    ctx.strokeRect(0, 0, canvas.width, canvas.height);

    // Draw photo
    if (photoFile) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const img = new Image();
            img.onload = function() {
                // Adjust the position and size of the photo
                const photoX = 30; 
                const photoY = 30; 
                const photoWidth = 200; 
                const photoHeight = 150; 

                ctx.drawImage(img, photoX, photoY, photoWidth, photoHeight);
                
                // Draw text details on the right
                ctx.fillStyle = '#333';
                
                // ID Number in the top-right corner
                ctx.font = '18px Arial'; // Font size for ID
                const idText = `ID: ${idNumber}`;
                const idTextWidth = ctx.measureText(idText).width;
                const idTextHeight = 18; 
                // User Name label and text
                ctx.font = '18px Arial'; 
                const labelText = 'User Name:';
                const nameText = name;
                const labelTextWidth = ctx.measureText(labelText).width;
                const nameTextWidth = ctx.measureText(nameText).width;
                const nameTextHeight = 20; 
                
                // Congratulatory message at the bottom
                const messageText = `Congratulations!! You have secured `;
                const rankText = rank;
                const fullMessageText = `${messageText}${rankText}`;
                
                ctx.font = '20px Arial'; 
                const messageTextWidth = ctx.measureText(messageText).width;
                const rankTextWidth = ctx.measureText(rankText).width;
                const messageTextHeight = 20; 

                // Position text
                const rightMargin = 30; 
                const topMargin = 30; 
                const textStartX = canvas.width - rightMargin - Math.max(idTextWidth, labelTextWidth + nameTextWidth); // Ensure alignment
                
               
                ctx.fillText(idText, textStartX, topMargin + idTextHeight);

                
                ctx.font = '18px Arial'; 
                ctx.fillText(labelText, textStartX, topMargin + idTextHeight + nameTextHeight + 15); 
                
                ctx.font = '20px Arial'; 
                const namePositionX = textStartX + labelTextWidth;
                ctx.fillText(nameText, namePositionX, topMargin + idTextHeight + nameTextHeight + 15);

                
                const messageX = (canvas.width - messageTextWidth - rankTextWidth) / 2; 
                const messageY = canvas.height - 30; 

                
                ctx.font = '20px Arial'; 
                ctx.fillText(messageText, messageX, messageY);

                // Draw rank part in bold
                ctx.font = 'bold 20px Arial'; 
                ctx.fillText(rankText, messageX + messageTextWidth, messageY);
            }
            img.src = e.target.result;
        }
        reader.readAsDataURL(photoFile);
    } else {
        
    }
});
