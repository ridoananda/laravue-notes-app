<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <!-- Primary Meta Tags -->
    <title>Rido's Notes</title>
    <meta name="title" content="Rido's Notes">
    <meta name="description" content="See my daily notes here . . .">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://notes.ridoananda.my.id">
    <meta property="og:title" content="Rido's Notes">
    <meta property="og:description" content="See my daily notes here . . .">
    <meta property="og:image" content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png">

    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image">
    <meta property="twitter:card" content="summary_large_image">
    <meta property="twitter:url" content="https://metatags.io/">
    <meta property="twitter:title" content="Rido's Notes">
    <meta property="twitter:description" content="See my daily notes here . . .">
    <meta property="twitter:image" content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png">
    <link href="https://fonts.googleapis.com/css2?family=Catamaran:wght@100;300;400;500;600;700;800;900&display=swap" rel="stylesheet">
    <link rel="icon" type="image/png" href="../assets/images/r-logo.png">
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
</head>
<body class="antilaliased font-catamaran">

    <main id="app">
        <navigation></navigation>
        <div class="px-3 lg:w-10/12 mx-auto">
            <router-view></router-view>
        </div>
    </main>

    <script src="https://unpkg.com/mermaid/dist/mermaid.min.js"></script>
    <script src="{{ mix('js/app.js') }}"></script>
</body>
</html>