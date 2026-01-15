$source = "C:\Users\admin\Desktop\vimukti-journey\src\assets"
$legacy = "$source\legacy"

# Legacy Mapping
Move-Item "$source\WhatsApp Image 2026-01-13 at 1.51.22 PM.jpeg" "$legacy\guru-madhavdasji-new.jpg"
Move-Item "$source\WhatsApp Image 2026-01-13 at 1.51.22 PM (1).jpeg" "$legacy\guru-yogendra-ji-new.jpg"
Move-Item "$source\WhatsApp Image 2026-01-13 at 1.51.24 PM.jpeg" "$legacy\guru-sitadevi-new.jpg"
Move-Item "$source\WhatsApp Image 2026-01-13 at 1.51.25 PM.jpeg" "$legacy\guru-jayadeva-new.jpg"
Move-Item "$source\WhatsApp Image 2026-01-13 at 1.51.42 PM.jpeg" "$legacy\guru-hansaji-new.jpg"
Move-Item "$source\WhatsApp Image 2026-01-13 at 2.15.41 PM (1).jpeg" "$legacy\guru-hrishi-new.jpg"

# Hero
Move-Item "$source\WhatsApp Image 2026-01-13 at 2.15.41 PM.jpeg" "$source\hero-new.jpg"

# Blog
Move-Item "$source\WhatsApp Image 2026-01-13 at 2.15.42 PM.jpeg" "$source\blog-1.jpg"
Move-Item "$source\WhatsApp Image 2026-01-13 at 2.15.43 PM.jpeg" "$source\blog-2.jpg"
Move-Item "$source\WhatsApp Image 2026-01-13 at 2.15.43 PM (1).jpeg" "$source\blog-3.jpg"

# Offerings
Move-Item "$source\WhatsApp Image 2026-01-13 at 1.51.23 PM.jpeg" "$source\offering-1.jpg"
Move-Item "$source\WhatsApp Image 2026-01-13 at 1.51.23 PM (1).jpeg" "$source\offering-2.jpg"
Move-Item "$source\WhatsApp Image 2026-01-13 at 1.51.26 PM.jpeg" "$source\offering-3.jpg"

# Wellness
Move-Item "$source\WhatsApp Image 2026-01-13 at 1.51.26 PM (1).jpeg" "$source\wellness-1.jpg"
Move-Item "$source\WhatsApp Image 2026-01-13 at 1.51.42 PM (1).jpeg" "$source\wellness-2.jpg"
Move-Item "$source\WhatsApp Image 2026-01-13 at 1.51.42 PM (2).jpeg" "$source\wellness-3.jpg"

# Delete Unused
Remove-Item "$source\WhatsApp Image 2026-01-13 at 1.51.43 PM.jpeg"
Remove-Item "$source\WhatsApp Image 2026-01-13 at 1.51.43 PM (1).jpeg"
Remove-Item "$source\WhatsApp Image 2026-01-13 at 1.51.43 PM (2).jpeg"
Remove-Item "$source\WhatsApp Image 2026-01-13 at 2.15.43 PM (2).jpeg"
Remove-Item "$source\WhatsApp Image 2026-01-13 at 2.15.41 PM (2).jpeg"
