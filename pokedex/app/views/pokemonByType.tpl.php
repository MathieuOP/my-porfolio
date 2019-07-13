<div class='allPokemon'>
    <?php foreach ($viewVars['pokemonByType'] as $key => $eachPokemon) : ?>
    <!-- <?php dump($eachPokemon['pokemon_numero']); ?> -->
    <div class="eachPokemon">
        <img src="<?=$viewVars['baseUrl'];?>/assets/img/<?= $eachPokemon['pokemon_numero'];?>.png" alt="pokemon <?= $eachPokemon['nom']; ?>">
        <p> <a href="<?= $viewVars['baseUrl']?>/details/<?= $eachPokemon['pokemon_numero'];?>">#<?= $eachPokemon['pokemon_numero'];?> <?=$eachPokemon['nom']; ?></a> </p>
    </div>
    <?php endforeach; ?>
</div>
<p class="returnType"><a href="<?= $viewVars['baseUrl']?>/type">Retour à la selection des types</a></p>