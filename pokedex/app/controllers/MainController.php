<?php

require_once __DIR__.'/CoreController.php';

class MainController extends CoreController {

    public function home() {
        $pdo = new DBdata();
        $allPokemon = $pdo->displayAllPokemon();
        // dump($allPokemon);

        $this->show('home', ['title' => 'Page d\'accueil', 'allPokemon' => $allPokemon]);
    }

    public function details($id) {
        $pdo = new DBdata();
        $displayPokemonInfos = $pdo->displayPokemonInfos($id);
        $this->show('details', ['title' => 'Page détails', 'displayPokemonInfos' => $displayPokemonInfos]);
    }

    public function type() {
        $pdo = new DBdata();
        $allType = $pdo->allType();
        $this->show('type', ['title' => 'Type', 'allType' => $allType]);
    }

    public function pokemonByType($id) {
        $pdo = new DBdata();
        $pokemonByType = $pdo->pokemonByType($id);
        $this->show('pokemonByType', ['title' => 'pokemon par type', 'pokemonByType' => $pokemonByType]);
    }

    public function searchPokemon() {
        $pdo = new DBdata();
        $pokemonByName = $pdo->searchPokemon($_POST['pokemon']);
        
        $this->show('pokemonByName', ['title' => 'Resultat recherche', 'pokemonByName' => $pokemonByName]);
    }

    public function error404() {
        $this->show('error404', ['title' => 'Erreur 404']);
    }
}