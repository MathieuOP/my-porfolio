<div class="wrapper_type">
    <p>Cliquez sur un type pour voir tous les Pokémon de ce type</p>

    <div class="eachType">
        <?php foreach( $viewVars['allType'] as $type) : ?>
        <div class="type" style="background-color: #<?=$type->getColor(); ?>">
            <a href="<?= $viewVars['baseUrl']?>/pokemonByType/<?= $type->getId();?>"><?=$type->getName(); ?></a>
        </div>
        <?php endforeach; ?>
    </div>
    
</div>