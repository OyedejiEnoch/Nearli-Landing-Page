Add-Type -AssemblyName System.Drawing

$outputDir = Join-Path $PSScriptRoot 'ahiver_caption_frames'
New-Item -ItemType Directory -Force -Path $outputDir | Out-Null

$captions = @(
    @{ File='caption01.png'; Lines=@(@{Text='IF YOU RUN A'; Color='#FFFFFF'}, @{Text='SMALL BUSINESS'; Color='#9D5CFF'}) },
    @{ File='caption02.png'; Lines=@(@{Text='THINK ABOUT THIS'; Color='#FFFFFF'}, @{Text='FOR A SECOND'; Color='#FFFFFF'}) },
    @{ File='caption03.png'; Lines=@(@{Text='YOU POST ON WHATSAPP'; Color='#FFFFFF'}, @{Text='YOU POST ON INSTAGRAM'; Color='#9D5CFF'}) },
    @{ File='caption04.png'; Lines=@(@{Text='BUT MOST PEOPLE SEEING'; Color='#FFFFFF'}, @{Text='YOUR BUSINESS...'; Color='#FFFFFF'}) },
    @{ File='caption05.png'; Lines=@(@{Text='ALREADY KNOW YOU'; Color='#FFFFFF'}, @{Text='OR ALREADY FOLLOW YOU'; Color='#FFFFFF'}) },
    @{ File='caption06.png'; Lines=@(@{Text='MEANWHILE...'; Color='#FF5A4F'}) },
    @{ File='caption07.png'; Lines=@(@{Text='PEOPLE AROUND YOU'; Color='#9D5CFF'}, @{Text='COULD BE LOOKING FOR...'; Color='#FFFFFF'}) },
    @{ File='caption08.png'; Size=46; Lines=@(@{Text='EXACTLY WHAT YOU SELL —'; Color='#FFFFFF'}, @{Text="THEY DON'T EVEN KNOW YOUR BUSINESS EXISTS"; Color='#FF5A4F'}) },
    @{ File='caption09.png'; Lines=@(@{Text="THAT'S WHAT AHIVER"; Color='#9D5CFF'}, @{Text='IS CHANGING'; Color='#FFFFFF'}) },
    @{ File='caption10.png'; Lines=@(@{Text='PUT YOUR BUSINESS'; Color='#FFFFFF'}, @{Text='ON AHIVER'; Color='#9D5CFF'}) },
    @{ File='caption11.png'; Lines=@(@{Text='PEOPLE AROUND YOU CAN'; Color='#FFFFFF'}, @{Text='DISCOVER WHAT YOU SELL'; Color='#FFFFFF'}) },
    @{ File='caption12.png'; Lines=@(@{Text="IT'S COMPLETELY"; Color='#FFFFFF'}, @{Text='FREE TO GET STARTED'; Color='#FF5A4F'}) }
)

$fontFamily = New-Object System.Drawing.FontFamily('Arial')
$format = New-Object System.Drawing.StringFormat
$format.Alignment = [System.Drawing.StringAlignment]::Center
$format.LineAlignment = [System.Drawing.StringAlignment]::Center

foreach ($caption in $captions) {
    $bitmap = New-Object System.Drawing.Bitmap(960, 260, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
    $graphics = [System.Drawing.Graphics]::FromImage($bitmap)
    $graphics.Clear([System.Drawing.Color]::Transparent)
    $graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
    $graphics.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::AntiAliasGridFit

    $lineCount = $caption.Lines.Count
    $lineHeight = 92
    $startY = 130 - (($lineCount - 1) * $lineHeight / 2)

    for ($i = 0; $i -lt $lineCount; $i++) {
        $line = $caption.Lines[$i]
        $path = New-Object System.Drawing.Drawing2D.GraphicsPath
        $rect = New-Object System.Drawing.RectangleF(0, ($startY + ($i * $lineHeight) - 55), 960, 110)
        $fontSize = if ($caption.ContainsKey('Size')) { $caption.Size } else { 58 }
        $path.AddString($line.Text, $fontFamily, [int][System.Drawing.FontStyle]::Bold, $fontSize, $rect, $format)
        $outline = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(235, 0, 0, 0), 10)
        $outline.LineJoin = [System.Drawing.Drawing2D.LineJoin]::Round
        $graphics.DrawPath($outline, $path)
        $brush = New-Object System.Drawing.SolidBrush([System.Drawing.ColorTranslator]::FromHtml($line.Color))
        $graphics.FillPath($brush, $path)
        $brush.Dispose()
        $outline.Dispose()
        $path.Dispose()
    }

    $target = Join-Path $outputDir $caption.File
    $bitmap.Save($target, [System.Drawing.Imaging.ImageFormat]::Png)
    $graphics.Dispose()
    $bitmap.Dispose()
}

$fontFamily.Dispose()
$format.Dispose()

$sequenceDir = Join-Path $PSScriptRoot 'ahiver_caption_sequence'
New-Item -ItemType Directory -Force -Path $sequenceDir | Out-Null
$blankPath = Join-Path $outputDir 'blank.png'
$blankBitmap = New-Object System.Drawing.Bitmap(960, 260, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
$blankBitmap.Save($blankPath, [System.Drawing.Imaging.ImageFormat]::Png)
$blankBitmap.Dispose()

$timings = @(
    @{ Start=0.166666; End=1.9; File='caption01.png' },
    @{ Start=2.0; End=3.733333; File='caption02.png' },
    @{ Start=4.366666; End=7.8; File='caption03.png' },
    @{ Start=8.0; End=10.133333; File='caption04.png' },
    @{ Start=10.133333; End=12.666666; File='caption05.png' },
    @{ Start=12.633333; End=13.233333; File='caption06.png' },
    @{ Start=13.133333; End=15.633333; File='caption07.png' },
    @{ Start=15.6; End=18.7; File='caption08.png' },
    @{ Start=19.033333; End=21.233333; File='caption09.png' },
    @{ Start=21.233333; End=22.866666; File='caption10.png' },
    @{ Start=22.866666; End=25.733333; File='caption11.png' },
    @{ Start=25.9; End=28.266666; File='caption12.png' }
)

for ($frame = 0; $frame -lt 1023; $frame++) {
    $time = $frame / 30.0
    $source = $blankPath
    foreach ($timing in $timings) {
        if ($time -ge $timing.Start -and $time -le $timing.End) {
            $source = Join-Path $outputDir $timing.File
        }
    }
    $target = Join-Path $sequenceDir ('frame{0:D4}.png' -f $frame)
    Copy-Item -LiteralPath $source -Destination $target -Force
}

Write-Output $outputDir
