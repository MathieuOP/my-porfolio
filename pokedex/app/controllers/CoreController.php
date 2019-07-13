<?php 

require_once __DIR__.'/../utils/DBdata.php';

class CoreController {
    public function show($viewName, $viewVars = []) {
        
        $viewVars['baseUrl'] = dirname($_SERVER['SCRIPT_NAME']);
        require __DIR__.'/../views/header.tpl.php';
        require __DIR__."/../views/$viewName.tpl.php";
        require __DIR__.'/../views/footer.tpl.php';
    }

    // public function redirect($url) {
    //     header('Location: '. dirname($_SERVER['SCRIPT_NAME']) . '/' . $url);
    // }
}