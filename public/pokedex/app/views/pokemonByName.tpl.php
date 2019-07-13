<?php if (count($viewVars['pokemonByName']) != 0): ?>
<h1 class="h1_details">Détails de <?= $viewVars['pokemonByName'][0]['nom'] ?></h1>
<div class="wrapper_details">
    <div class="displayPokemon">
        <img src="<?= $viewVars['baseUrl']?>/assets/img/<?= $viewVars['pokemonByName'][0]['numero'] ?>.png" alt="<?= $viewVars['pokemonByName']['nom'] ?>">
    </div>

    <div class="displayInfos">
        <h2>#<?= $viewVars['pokemonByName'][0]['numero'] ?> <?= $viewVars['pokemonByName'][0]['nom'] ?></h2>
        <div class="allType">
            <p class="type1" style="background-color: #<?= $viewVars['pokemonByName'][0]['color']?>"><?= $viewVars['pokemonByName'][0]['type'] ?></p>
            <?php if (!empty($viewVars['pokemonByName'][1])) : ?>
            <p class="type1" style="background-color: #<?= $viewVars['pokemonByName'][1]['color']?>"><?= $viewVars['pokemonByName'][1]['type'] ?></p>
            <?php endif; ?>
        </div>
        <h3>Statistiques</h3>

       <table>
	       <tr>
	            <td>PV</td>
	            <td><?= $viewVars['pokemonByName'][0]['pv'] ?></td>
	            <td>
	                <p class="progress-bar">-</p>
	                <p class="progress-bar-remplissage" style="width: calc(<?= $viewVars['pokemonByName'][0]['pv'] ?> * 100px / 255);">-</p>
	            <td>
	        </tr>
	        <tr>
	            <td>Attaque</td>
	            <td><?= $viewVars['pokemonByName'][0]['attaque'] ?></td>
	            <td>
	                <p class="progress-bar">-</p>
	                <p class="progress-bar-remplissage" style="width: calc(<?= $viewVars['pokemonByName'][0]['attaque'] ?> * 100px / 255);">-</p>
	            <td>
	        </tr>
	        <tr>
	            <td>Defense</td>
	            <td><?= $viewVars['pokemonByName'][0]['defense'] ?></td>
	            <td>
	                <p class="progress-bar">-</p>
	                <p class="progress-bar-remplissage" style="width: calc(<?= $viewVars['pokemonByName'][0]['defense'] ?> * 100px / 255);">-</p>
	            <td>
	        </tr>
	        <tr>
	            <td>Attaque Spé.</td>
	            <td><?= $viewVars['pokemonByName'][0]['attaque_spe'] ?></td>
	            <td>
	                <p class="progress-bar">-</p>
	                <p class="progress-bar-remplissage" style="width: calc(<?= $viewVars['pokemonByName'][0]['attaque_spe'] ?> * 100px / 255);">-</p>
	            <td>
	        </tr>
	        <tr>
	            <td>Défense Spé.</td>
	            <td><?= $viewVars['pokemonByName'][0]['defense_spe'] ?></td>
	            <td>
	                <p class="progress-bar">-</p>
	                <p class="progress-bar-remplissage" style="width: calc(<?= $viewVars['pokemonByName'][0]['defense_spe'] ?> * 100px / 255);">-</p>
	            <td>
	        </tr>
	        <tr>
	            <td>Vitesse</td>
	            <td><?= $viewVars['pokemonByName'][0]['vitesse'] ?></td>
	            <td>
	                <p class="progress-bar">-</p>
	                <p class="progress-bar-remplissage" style="width: calc(<?= $viewVars['pokemonByName'][0]['vitesse'] ?> * 100px / 255);">-</p>
	            <td>
	        </tr>
        </table>
    </div>
</div>
<a class="returnListe" href="<?= $viewVars['baseUrl']?>/">Revenir à la liste</a>
<?php else : ?>
<div class="error">
    <h1>Aucun pokémon trouvé</h1>
</div>
<?php endif; ?>