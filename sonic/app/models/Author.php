<?php

require_once __DIR__.'/CoreModel.php';

class Author {
    private $first_name;
    private $last_name;
    private $picture;
    private $information;

    /**
     * Get the value of name
     */ 
    public function getFirstName()
    {
        return $this->first_name;
    }

    /**
     * Set the value of name
     *
     * @return  self
     */ 
    public function setFirstName($first_name)
    {
        $this->first_name = $first_name;
    }

    /**
     * Get the value of description
     */ 
    public function getLastName()
    {
        return $this->last_name;
    }

    /**
     * Set the value of description
     *
     * @return  self
     */ 
    public function setLastName($last_name)
    {
        $this->last_name = $last_name;
    }

    /**
     * Get the value of picture
     */ 
    public function getPicture()
    {
        return $this->picture;
    }

    /**
     * Set the value of picture
     *
     * @return  self
     */ 
    public function setPicture($picture)
    {
        $this->picture = $picture;
    }

    /**
     * Get the value of type_id
     */ 
    public function getInformation()
    {
        return $this->information;
    }

    /**
     * Set the value of type_id
     *
     * @return  self
     */ 
    public function setInformation($information)
    {
        $this->information = $information;
    }
}