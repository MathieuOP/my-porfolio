<?php 

require __DIR__ . '/../vendor/autoload.php';
require __DIR__.'/../app/controllers/MainController.php';

$router = new AltoRouter();

$baseUrl = dirname($_SERVER['SCRIPT_NAME']);
$router->setBasePath($baseUrl);

// CONTROLER "MainController"
$router->map('GET', '/', 'MainController#home');
$router->map('GET', '/creators', 'MainController#creators');
$router->map('GET', '/error404', 'MainController#error404');

$match = $router->match();

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
    
    $controller->$methodName();
    
} else {
    $controller = new MainController();
    $controller->error404();
}