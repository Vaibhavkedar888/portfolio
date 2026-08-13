Place the full-size photo in this folder as `photo.jpg`.

The site references images/photo.jpg in the hero section. To add the image copy the attached photo to this path, or run:

Windows PowerShell:

    cp "C:\path\to\downloaded\attachment.jpg" .\photo.jpg

Or in Git Bash / WSL:

    cp /path/to/attachment.jpg ./photo.jpg

After adding the image, run:

    git add images/photo.jpg
    git commit -m "Add hero image"
    git push
