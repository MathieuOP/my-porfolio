<?php

require __DIR__.'/../models/Author.php';

/**
 * Classe permettant de retourner des données stockées dans la base de données
 */
class DBData {
	/** @var PDO */
	private $dbh;

    /**
     * Constructeur se connectant à la base de données à partir des informations du fichier de configuration
     */
    public function __construct() {
        // Récupération des données du fichier de config
        //   la fonction parse_ini_file parse le fichier et retourne un array associatif
        // Attention, "config.conf" ne doit pas être versionné,
        //   on versionnera plutôt un fichier d'exemple "config.dist.conf" ne contenant aucune valeur
        $configData = parse_ini_file(__DIR__.'/../config.conf');
        
        try {
            $this->dbh = new PDO(
                "mysql:host={$configData['DB_HOST']};dbname={$configData['DB_NAME']};charset=utf8",
                $configData['DB_USERNAME'],
                $configData['DB_PASSWORD'],
                array(PDO::ATTR_ERRMODE => PDO::ERRMODE_WARNING) // Affiche les erreurs SQL à l'écran
            );
        }
        catch(\Exception $exception) {
            echo 'Erreur de connexion...<br>';
            echo $exception->getMessage().'<br>';
            echo '<pre>';
            echo $exception->getTraceAsString();
            echo '</pre>';
            exit;
        }
    }

    // MES METHODES
    public function getPerson() {
        $sql = 'SELECT  `character`.picture, `character`.name, `character`.type_id, `character`.description, `type`.name AS type_name 
        FROM `character` 
        INNER JOIN `type` 
        ON `character`.type_id = `type`.id 
        ORDER BY `character`.name 
        ASC';

        $pdoStatement = $this->dbh->query($sql);
        return $pdoStatement->fetchAll(PDO::FETCH_ASSOC);
    }

    public function getAuthor() {
        $sql = 'SELECT * from author';
        $pdoStatement = $this->dbh->query($sql);
    
        return $pdoStatement->fetchAll(PDO::FETCH_CLASS, 'Author');
    }
}
