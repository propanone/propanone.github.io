function createEncryptionAnimation(containerId, originalImagePath, encryptedImagePath) {
    const container = document.getElementById(containerId);
    if (!container) {
        console.error('Container not found:', containerId);
        return;
    }
    
    // Style the parent containers to ensure full width
    container.closest('.frame').style.maxWidth = '1200px';
    container.closest('.frame').style.width = '100%';
    container.closest('.style1').style.maxWidth = '1200px';
    container.closest('.style1').style.width = '100%';
    
    const img = document.createElement('img');
    const label = document.createElement('div');
    
    // Style the container with much larger dimensions
    container.style.position = 'relative';
    container.style.width = '100%';
    container.style.maxWidth = '1200px';  // Significantly increased
    container.style.margin = '0 auto';
    container.style.minHeight = '600px';  // Added minimum height to container
    
    // Style the image with larger dimensions
    img.style.width = '100%';
    img.style.minHeight = '600px';  // Increased minimum height
    img.style.maxHeight = '800px';  // Added maximum height
    img.style.objectFit = 'contain';
    img.style.transition = 'opacity 1s ease-in-out';
    img.src = originalImagePath;
    
    // Add error handling for images
    img.onerror = function() {
        console.error('Failed to load image:', this.src);
        this.src = '';
    };
    
    // Style the label
    label.style.position = 'absolute';
    label.style.bottom = '30px';
    label.style.left = '30px';
    label.style.backgroundColor = 'rgba(0, 0, 0, 0.75)';
    label.style.color = 'white';
    label.style.padding = '12px 24px';
    label.style.borderRadius = '30px';
    label.style.fontSize = '18px';
    label.textContent = 'Original';
    
    // Add elements to container
    container.appendChild(img);
    container.appendChild(label);
    
    // Animation state
    let showingEncrypted = false;
    
    // Animation loop
    setInterval(() => {
        showingEncrypted = !showingEncrypted;
        img.style.opacity = '0';
        
        setTimeout(() => {
            img.src = showingEncrypted ? encryptedImagePath : originalImagePath;
            label.textContent = showingEncrypted ? 'Encrypted' : 'Original';
            img.style.opacity = '1';
        }, 500);
    }, 2000);
}