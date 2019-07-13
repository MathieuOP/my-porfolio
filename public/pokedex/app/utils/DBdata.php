<?php

require_once __DIR__.'/../models/Pokemon.php';
require_once __DIR__.'/../models/Type.php';

class DBData
{
    private $pdo;

    /**
     *  Connexion à la base de données
     */
    public function __construct()
    {
        $dsn = 'mysql:dbname=db773797115;host=db773797115.hosting-data.io;charset=UTF8';
        $username = 'dbo773797115';
        $password = 'Me14059.';
        // J'ajoute une option qui me permet d'avoir les erreurs directement en Warning dans PHP
        $options = [
            PDO::ATTR_ERRMODE => PDO::ERRMODE_WARNING
        ];
        $this->pdo = new PDO($dsn, $username, $password, $options);
    }

    public function displayAllPokemon() {
        $pdoStatement = $this->pdo->query('SELECT * FROM pokemon'); 
        return $pdoStatement->fetchAll(PDO::FETCH_CLASS, 'Pokemon');
    }
    
    public function displayPokemonInfos($id) {
        $pdoStatement = $this->pdo->query("SELECT pokemon.*, pokemon_type.pokemon_numero, type.name AS type, type.color, type.id FROM pokemon INNER JOIN pokemon_type ON pokemon.numero = pokemon_type.pokemon_numero INNER JOIN type ON pokemon_type.type_id = type.id WHERE pokemon.numero = $id ORDER BY pokemon.id");
        return $pdoStatement->fetchAll(PDO::FETCH_ASSOC);
    }

    public function allType() {
        $pdoStatement = $this->pdo->query('SELECT * FROM type');
        return $pdoStatement->fetchAll(PDO::FETCH_CLASS, 'Type');
    }

    public function pokemonByType($id) {
        $pdoStatement = $this->pdo->query("SELECT pokemon.*, pokemon_type.pokemon_numero, type.name AS type, type.color, type.id FROM pokemon INNER JOIN pokemon_type ON pokemon.numero = pokemon_type.pokemon_numero INNER JOIN type ON pokemon_type.type_id = type.id WHERE pokemon_type.type_id = $id ORDER BY pokemon.id");
        return $pdoStatement->fetchAll(PDO::FETCH_ASSOC);
    }

    public function searchPokemon($name) {
        $pdoStatement = $this->pdo->query("SELECT pokemon.*, pokemon_type.pokemon_numero, type.name AS type, type.color, type.id FROM pokemon INNER JOIN pokemon_type ON pokemon.numero = pokemon_type.pokemon_numero INNER JOIN type ON pokemon_type.type_id = type.id WHERE nom = '$name'");
        return $pdoStatement->fetchAll(PDO::FETCH_ASSOC);
    }
}