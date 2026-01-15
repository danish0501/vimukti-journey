Add-Type -AssemblyName System.Drawing

$images = Get-ChildItem "C:\Users\admin\Desktop\vimukti-journey\src\assets\WhatsApp*.jpeg"

foreach ($file in $images) {
    try {
        $img = [System.Drawing.Image]::FromFile($file.FullName)
        $aspect = $img.Width / $img.Height
        Write-Output "$($file.Name) | W: $($img.Width) | H: $($img.Height) | Aspect: $aspect"
        $img.Dispose()
    } catch {
        Write-Error "Could not process $($file.Name)"
    }
}
