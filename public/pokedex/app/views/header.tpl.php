<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title><?= $viewVars['title'] ?></title>

     <!-- BOOTSTRAP CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <!-- RESET CSS-->
    <link rel="stylesheet" href="<?=$viewVars['baseUrl'];?>/assets/css/reset.css">
    <!-- PERSO CSS-->
    <link rel="stylesheet" href="<?=$viewVars['baseUrl'];?>/assets/css/style.css">
    <!-- GOOGLE FONT -->
    <link href="https://fonts.googleapis.com/css?family=Bree+Serif" rel="stylesheet">
</head>
<body>
    <div class="wrapper">
        <div class="container">
            <div class="row">
                <header>
                    <!-- <h1>Pokédex</h1> -->

                    <!-- <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse d-flex justify-content-end" id="navbarSupportedContent">
                        <form styl="" action="<?= $viewVars['baseUrl']?>/searchPokemon" method="post" class="search"> 
                            <input type="text" class="form-control" name="pokemon" id="pokemon" placeholder="Recherche Pokémon">
                            <button class="btn" type="submit">Rechercher</button>
                        </form>

                        <nav class="d-flex justify-content-end">
                            <ul>
                                <li> <a href="<?= $viewVars['baseUrl']?>/">Listes</a> </li>
                                <li><a href="<?= $viewVars['baseUrl']?>/type">Types</a></li>
                            </ul>
                        </nav>
                    </div> -->

                    <nav class="navbar navbar-expand-lg navbar-light">
                        <h1>Pokédex</h1>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>

                        <div class="collapse navbar-collapse justify-content-start justify-content-sm-end" id="navbarSupportedContent">
                            <form class="form-inline my-2 my-lg-0 search" action="<?= $viewVars['baseUrl']?>/searchPokemon" method="post"> 
                                <input type="text" class="form-control" name="pokemon" id="pokemon" placeholder="Recherche Pokémon">
                                <button class="btn" type="submit">Rechercher</button>
                            </form>

                            <ul class="navbar-nav mr-auto mr-sm-0">
                                <li class="nav-item">
                                    <a class="nav-link" href="<?= $viewVars['baseUrl']?>/">Liste</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="<?= $viewVars['baseUrl']?>/type">Types</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </header>
            </div>
            <main>
            
            