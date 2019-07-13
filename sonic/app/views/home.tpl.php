<div class="main">
    
    <div class="accordeon">
        <?php foreach($viewVars['personInfos'] as $person) : ?>
        <h2 class="titre">
            <?= $person['name']; ?>  
            <div class="arrow">►</div>
        </h2>
        <div class="contenu">
            <p>
                <img src="<?= $viewVars['baseUrl']?>/assets/images/<?= $person['picture']; ?>" alt="personnage sonic"> 
            </p>

            <h3>
                <?= $person['type_name']; ?> 
            </h3>
            
            <p>
                <?= $person['description']; ?> 
            </p>
        </div>
        <?php endforeach; ?>
    </div>
</div>
    