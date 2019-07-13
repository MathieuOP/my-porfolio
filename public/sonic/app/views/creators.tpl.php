<div class="wrapper">
    <div class="main">
        <div class="accordeon">
        	<?php foreach ($viewVars['authorInfosList'] as $authorInfos ) : ?>
            <h2 class="titre">
            	<?= $authorInfos->getFirstName() . ' ' . $authorInfos->getLastName() ?>
                <div class="arrow">►</div>
            </h2>
            <div class="contenu">
              	<p> <?= $authorInfos->getInformation() ?> </p>
            </div>
        	<?php endforeach; ?>
        </div>
    </div>
</div>