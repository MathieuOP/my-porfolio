<div class='row allPokemon'>
    <?php foreach ($viewVars['allPokemon'] as $key => $eachPokemon) : ?>
    <!-- <?php dump($eachPokemon-> getNumero()); ?> -->
    <div class="eachPokemon">
        <img src="<?=$viewVars['baseUrl'];?>/assets/img/<?= $eachPokemon->getNumero();?>.png" alt="pokemon <?= $eachPokemon->getNom(); ?>">
        <p> <a href="<?= $viewVars['baseUrl']?>/details/<?= $eachPokemon->getNumero();?>">#<?= $eachPokemon->getNumero();?> <?=$eachPokemon->getNom(); ?></a> </p>
    </div>

    <?php endforeach; ?>
</div>