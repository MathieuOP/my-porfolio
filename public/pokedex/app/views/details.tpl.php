<h1 class="h1_details">Détails de <?= $viewVars['displayPokemonInfos'][0]['nom'] ?></h1>
<div class="wrapper_details">
    <div class="displayPokemon">
        <img src="<?= $viewVars['baseUrl']?>/assets/img/<?= $viewVars['displayPokemonInfos'][0]['numero'] ?>.png" alt="<?= $viewVars['displayPokemonInfos']['nom'] ?>">
    </div>

    <div class="displayInfos">
        <h2>#<?= $viewVars['displayPokemonInfos'][0]['numero'] ?> <?= $viewVars['displayPokemonInfos'][0]['nom'] ?></h2>
        <div class="allType">
            <p class="type1" style="background-color: #<?= $viewVars['displayPokemonInfos'][0]['color']?>"><?= $viewVars['displayPokemonInfos'][0]['type'] ?></p>
            <?php if (!empty($viewVars['displayPokemonInfos'][1])) : ?>
            <p class="type1" style="background-color: #<?= $viewVars['displayPokemonInfos'][1]['color']?>"><?= $viewVars['displayPokemonInfos'][1]['type'] ?></p>
            <?php endif; ?>
        </div>
        <h3>Statistiques</h3>

       <table>
        <tr>
            <td>PV</td>
            <td><?= $viewVars['displayPokemonInfos'][0]['pv'] ?></td>
            <td>
                <p class="progress-bar">-</p>
                <p class="progress-bar-remplissage" style="width: calc(<?= $viewVars['displayPokemonInfos'][0]['pv'] ?> * 100px / 255);">-</p>
            <td>
        </tr>
        <tr>
            <td>Attaque</td>
            <td><?= $viewVars['displayPokemonInfos'][0]['attaque'] ?></td>
            <td>
                <p class="progress-bar">-</p>
                <p class="progress-bar-remplissage" style="width: calc(<?= $viewVars['displayPokemonInfos'][0]['attaque'] ?> * 100px / 255);">-</p>
            <td>
        </tr>
        <tr>
            <td>Defense</td>
            <td><?= $viewVars['displayPokemonInfos'][0]['defense'] ?></td>
            <td>
                <p class="progress-bar">-</p>
                <p class="progress-bar-remplissage" style="width: calc(<?= $viewVars['displayPokemonInfos'][0]['defense'] ?> * 100px / 255);">-</p>
            <td>
        </tr>
        <tr>
            <td>Attaque Spé.</td>
            <td><?= $viewVars['displayPokemonInfos'][0]['attaque_spe'] ?></td>
            <td>
                <p class="progress-bar">-</p>
                <p class="progress-bar-remplissage" style="width: calc(<?= $viewVars['displayPokemonInfos'][0]['attaque_spe'] ?> * 100px / 255);">-</p>
            <td>
        </tr>
        <tr>
            <td>Défense Spé.</td>
            <td><?= $viewVars['displayPokemonInfos'][0]['defense_spe'] ?></td>
            <td>
                <p class="progress-bar">-</p>
                <p class="progress-bar-remplissage" style="width: calc(<?= $viewVars['displayPokemonInfos'][0]['defense_spe'] ?> * 100px / 255);">-</p>
            <td>
        </tr>
        <tr>
            <td>Vitesse</td>
            <td><?= $viewVars['displayPokemonInfos'][0]['vitesse'] ?></td>
            <td>
                <p class="progress-bar">-</p>
                <p class="progress-bar-remplissage" style="width: calc(<?= $viewVars['displayPokemonInfos'][0]['vitesse'] ?> * 100px / 255);">-</p>
            <td>
        </tr>
        </table>
    </div>
</div>
<p class="returnListe" ><a href="<?= $viewVars['baseUrl']?>/">Revenir à la liste</a></p>