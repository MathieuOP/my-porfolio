<?php 

// composer
require_once __DIR__.'/../vendor/autoload.php';

// controllers
require_once __DIR__.'/../app/controllers/MainController.php';

$router = new AltoRouter();
$baseUrl = dirname($_SERVER['SCRIPT_NAME']);
$router->setBasePath($baseUrl);

$router->map('GET', '/', 'MainController#home', 'home');
$router->map('GET', '/details/[i:id]', 'MainController#details', 'details');
$router->map('GET', '/error404', 'MainController#error404', 'error404');
$router->map('GET', '/type', 'MainController#type', 'type');
$router->map('GET', '/pokemonByType/[i:id]', 'MainController#pokemonByType', 'pokemonByType');
$router->map('POST', '/searchPokemon', 'MainController#searchPokemon', 'searchPokemon');
$router->map('GET', '/pokemonByName', 'MainController#pokemonByName', 'pokemonByName');

// dump($router);
$match = $router->match();

// dump($match);

if ($match) {
    // dump($match);
    // Je récupère les informations sur le controller et la méthode
    $dispatcherInfos = $match['target'];
    //dump($dispatcherInfos); // debug
    
    // Je sépare les 2 parties se trouvant dans "target" ('MainController#home')
    $controllerAndMethod = explode('#', $dispatcherInfos);
    //dump($controllerAndMethod); // debug
    
    // Je stocke les noms dans des variables
    $controllerName = $controllerAndMethod[0];
    //echo '<br>$controllerName='.$controllerName.'<br>';
    $methodName = $controllerAndMethod[1];
    //echo '$methodName='.$methodName.'<br>';

    // J'instancie le controller
    // PHP va remplacer la variable $controllerName par sa valeur
    // puis va instancier la bonne classe "new MainController()" par exemple
    $controller = new $controllerName();
    // J'appelle la méthode correspond à la route
    // PHP va remplacer la variable $methodName par sa valeur
    // puis va appeler la bonne méthode "->home()" par exemple
    
    if (!empty($match['params']['id'])) {
        $id = $match['params']['id'];
        $controller->$methodName($id);
    }
    else {
        $controller->$methodName();
    }
    
} else {
    $controller = new MainController();
    $controller->error404();
}