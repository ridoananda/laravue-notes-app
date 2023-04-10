<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <!-- Primary Meta Tags -->
    <title>Rido's Notes</title>
    <meta name="title" content="Rido's Notes | Catatan Rido">
    <meta name="description" content="Catatan dan Pengalaman hidup dari seorang pria sederhana">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://notes.ridoananda.com">
    <meta property="og:title" content="Rido's Notes | Catatan Rido">
    <meta property="og:description" content="Catatan dan Pengalaman hidup dari seorang pria sederhana">
    <meta property="og:image" content="/images/profile.jpg">

    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image">
    <meta property="twitter:url" content="https://notes.ridoananda.com">
    <meta property="twitter:title" content="Rido's Notes | Catatan Rido">
    <meta property="twitter:description" content="Catatan dan Pengalaman hidup dari seorang pria sederhana">
    <meta property="twitter:image" content="/images/profile.jpg" rel="stylesheet">
    <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png">
    <link rel="manifest" href="/favicons/site.webmanifest">
    <link href="https://fonts.googleapis.com/css2?family=Catamaran:wght@100;300;400;500;600;700;800;900&display=swap" rel="stylesheet">
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
</head>

<body class="antilaliased font-catamaran">

    <main id="app">
        <navigation></navigation>
        <div class="px-3 lg:w-10/12 mx-auto">
            <router-view></router-view>
        </div>
    </main>

    <!-- <script src="https://unpkg.com/mermaid/dist/mermaid.min.js"></script> -->
    <script src="{{ mix('js/app.js') }}"></script>
</body>

</html>