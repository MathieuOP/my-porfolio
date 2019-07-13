<?php

require_once __DIR__.'/CoreControllers.php';

class MainController extends CoreControllers {
    public function home() {

        $dbd = new DBData;
        $person = $dbd->getPerson();

       $this->show('home', ['title' => 'Home', 'personInfos' => $person]);
    }

    public function creators() {
        $dbd = new DBData;
        $authorInfosList = $dbd->getAuthor();

        $this->show('creators', ['title' => 'Les créateurs', 'authorInfosList' => $authorInfosList]);
    }

    public function error404() {
        $this->show('error404', ['title' => 'Erreur 404']);
    }
}