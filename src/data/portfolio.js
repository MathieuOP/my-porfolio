const datas = [
    {
        id: 1,
        image: "ochildren.png",
        techno: ['JavaScript', 'React', 'React-Router', 'Redux', 'React-redux', 'Axios', 'Twig', 'Symfony 4'],
        description: `Ce projet a été réalisé en groupe pendant le dernier mois de ma formation chez O'clock. 
        Je me suis occupé, de l'intégration de plusieurs pages, de la réalisation des puzzles, des quiz et des memory. 
        Je me suis aussi occupé des routes et de la mise en place côté front de la reception d'un email en cas de perte 
        du mot de passe.`,
        link: 'ochildren/index.html',
        github: true,
        reposFront: 'https://github.com/MathieuOP/ochildren-MathieuOP',
        
    },
    {
        id: 2,
        image: "nobo.png",
        techno: [ 'JavaScript', 'React', 'React-router', 'Material UI', 'PropTypes', 'Axios', 'Hooks', 'Local Storage', 'API'],
        description: `Permet de recherche une série et de pouvoir avoir plus d'information sur celle-ci en cliquant dessus.`,
        link: 'nobo',
        github: false,
        reposFront: 'https://github.com/MathieuOP/nobo',
    },
    {
        id: 3,
        image: "todolist.png",
        techno: ['React', 'React-redux', 'Redux', 'JavaScript', 'NodeJS', 'Express', 'Mongoose', 'MongoDB'],
        description: `J'ai réalise ce projet pour mettre en pratique NodeJS. Pour le back, j'ai créé une API avec le framework Express, cette API
        permet d'afficher, supprimer et de créer les éléments de la liste. Elle permet aussi de modifier le status d'un élément. Pour le front, j'ai utilisé la librairie React afin de consommer mon API.`,
        link: '',
        github: true,
        reposFront: 'https://github.com/MathieuOP/todo-list',
        reposBack: 'https://github.com/MathieuOP/todo-list-api',
    },
    {
        id: 4,
        image: "marvel.png",
        techno: ['React', 'JavaScript', 'Redux', 'React-redux', 'React-router-dom', 'PropTypes', 'API'],
        description: `Affichage des héros marvel lors d'une recherche. Possibilité d'avoir plus d'information sur un héros en cliquant dessus.`,
        link: 'marvel',
        github: true,
        reposFront: 'https://github.com/MathieuOP/marvel',
    },
    {
        id: 5,
        image: "projet-github.png",
        techno: ['JavaScript', 'React', 'Redux', 'React-redux', 'React-router', 'Semantic ui', 'Axios', 'API'],
        description: `Ce projet a été réalisé pour l'évaluation de fin de spécialisation React lors de ma formation chez O'clock.
        J'ai utilisé l'api react afin de pouvoir recherche des utilisateurs github. Pour avoir accès à la recherche et à son profil
        il faut entrer son token github.`,
        link: 'projet-github/index.html'
    },
    {
        id: 6,
        image: "particeep.png",
        techno: ['JavaScript', 'React', 'Redux', 'React-redux', 'SCSS', 'PropTypes', 'Axios', 'API'],
        description: `Sur ce site il est possible: de filtrer les films par une ou plusieurs catégories, de like ou dislike un film, de supprimer un film et de choisir le nombre
        de film afficher (4, 8 ou 12).`,
        link: 'particeep',
        github: true,
        reposFront: 'https://github.com/MathieuOP/react-interview',
    },
    {
        id: 7,
        image: "tictactrip.png",
        techno: ['JavaScript', 'React', 'Redux', 'React-redux', 'React-responsive', 'SCSS', 'PropTypes', 'Axios', 'API'],
        description: `Récupération d'une suggestion de ville de départ, selon ce que recherche l'utilisateur et 
        récupération des destinations les plus populaires à partir de la ville de départ. La suggestion des villes et fourni par une API.`,
        link: 'tictactrip',
        github: true,
        reposFront: 'https://github.com/MathieuOP/exo-tictactrip',
    },
    {
        id: 8,
        image: "calculator.png",
        techno: ['JavaScript', 'HTML', 'CSS'],
        description: `Simple calculatrice réalisé en JavaScript. Il est possible d'additionner, de soustraire, de multiplier et de diviser avec
        cette calculatrice.`,
        link: 'calculator/index.html',
        github: true,
        reposFront: 'https://github.com/MathieuOP/calculator',
    },
    {
        id: 9,
        image: "oquiz.png",
        techno: ['PHP', 'Lumen', 'HTML', 'CSS', 'Composer'],
        description: `Ce projet a été réalisé pendant un atelier. Sur ce site il est possible de voir les quiz disponile sans pouvoir y
        jouer si on est pas connecté. Il est possible de rechercher les quiz par thème. Une fois le quiz finit, le joueur peut voir son score. Enfin,
        j'ai créé un espace admin qui permet de modifier le contenu du site.`,
        link: 'oquiz/public',
    }
];

export default datas;