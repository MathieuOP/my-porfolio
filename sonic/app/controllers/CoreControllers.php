<?php 

require_once __DIR__.'/../utils/DBData.php';

class CoreControllers {

    protected function show($viewName, $viewVars=array()) {
        // $viewVars est disponible dans chaque fichier de vue
        $dbd = new DBData();

        $viewVars['baseUrl'] = dirname($_SERVER['SCRIPT_NAME']);
        include(__DIR__.'/../views/header.tpl.php');
        include(__DIR__.'/../views/'.$viewName.'.tpl.php'); // => views/index.tpl.php
        include(__DIR__.'/../views/footer.tpl.php');
    }
}