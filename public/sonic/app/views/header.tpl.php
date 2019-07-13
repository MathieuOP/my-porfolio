<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title><?= $viewVars['title'] ?></title>
    
    <link rel="stylesheet" href="<?= $viewVars['baseUrl']?>/assets/css/style.css">
</head>
<body>
    <header>
        <div class="logo">
            <a href="<?= $viewVars['baseUrl']?>/"><img src="<?= $viewVars['baseUrl']?>/assets/images/sonic_logo.png" alt=""></a>
        </div>
        <nav>
            <ul>
                <li><a href="<?= $viewVars['baseUrl']?>/">Accueil</a></li>
                <li><a href="<?= $viewVars['baseUrl']?>/creators">Les créateurs</a></li>
            </ul>
        </nav>
    </header>
    <main>