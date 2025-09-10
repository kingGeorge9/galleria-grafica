#!/bin/bash

# Create directories if they don't exist
mkdir -p images/thumbs
mkdir -p images/full

# Function to optimize and resize images
process_image() {
    local src="$1"
    local filename=$(basename "$src")
    
    # Create thumbnail (300px wide)
    convert "$src" -resize "300x>" "images/thumbs/$filename"
    
    # Create optimized full-size version (max 1200px wide)
    convert "$src" -resize "1200x>" "images/full/$filename"
}

# Process all jpg files in the images directory
cd images
for img in *.jpg; do
    if [ -f "$img" ]; then
        echo "Processing $img..."
        process_image "$img"
    fi
done

echo "Image processing complete!"
