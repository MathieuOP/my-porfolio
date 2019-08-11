const datas = [
    {
        id: 1,
        image: "todolist.png",
        techno: ['React', 'Redux', 'JavaScript', 'NodeJS', 'Express', 'Mongoose', 'MongoDB'],
        description: `J'ai réalise ce projet pour mettre en pratique NodeJS. Pour le back, j'ai créé une API avec le framework Express, cette API
        permet d'afficher, supprimer et de créer les éléments de la liste. Elle permet aussi de modifier le status d'un élément. Pour le front, j'ai utilisé la librairie React afin de consommer mon API.`,
        link: '',
        github: true,
        reposFront: 'https://github.com/MathieuOP/todo-list',
        reposBack: 'https://github.com/MathieuOP/todo-list-api',
    },
    {
        id: 2,
        image: "ochildren.png",
        techno: ['HTML', 'CSS', 'JavaScript', 'React', 'React-Router', 'Twig', 'Redux', 'Axios', 'Symfony 4'],
        description: `Ce projet a été réalisé en groupe pendant le dernier mois de ma formation chez O'clock. 
        Je me suis occupé, de l'intégration de plusieurs pages, de la réalisation des puzzles, des quiz et des memory. 
        Je me suis aussi occupé des routes et de la mise en place côté front de la reception d'un email en cas de perte 
        du mot de passe.`,
        link: 'ochildren/index.html',
        
    },
    {
        id: 3,
        image: "projet-github.png",
        techno: ['JavaScript', 'Semantic ui', 'API', 'Axios', 'Redux', 'React-router'],
        description: `Ce projet a été réalisé pour l'évaluation de fin de spécialisation React lors de ma formation chez O'clock.
        J'ai utilisé l'api react afin de pouvoir recherche des utilisateurs github. Pour avoir accès à la recherche et à son profil
        il faut entrer son token github.`,
        link: 'projet-github/index.html'
    },
    {
        id: 4,
        image: "oquiz.png",
        techno: ['PHP', 'Lumen', 'HTML', 'CSS', 'Composer'],
        description: `Ce projet a été réalisé pendant un atelier. Sur ce site il est possible de voir les quiz disponile sans pouvoir y
        jouer si on est pas connecté. Il est possible de rechercher les quiz par thème. Une fois le quiz finit, le joueur peut voir son score. Enfin,
        j'ai créé un espace admin qui permet de modifier le contenu du site.`,
        link: 'oquiz/public',
    },
    {
        id: 5,
        image: "pokedex.png",
        techno: ['HTML', 'CSS', 'JavaScript', 'PHP', 'POO', 'MVC', 'SQL', 'Alto router', 'Composer'],
        description: `Ce projet a été réalisé pendant un atelier lors de ma formation chez O'clock. J'ai utilisé des
        requêtes sql afin de pouvoir récupéré les données dans la base de données puis de les afficher. Toujours avec les
        reqûetes sql, j'ai pu mettre en place un système de triage pour avoir tous les pokémon selon un type.`,
        link: 'pokedex/public'
    },
    {
        id: 6,
        image: "sonic.png",
        techno: ['HTML', 'CSS', 'JavaScript', 'PHP', 'POO', 'MVC', 'SQL', 'Alto router', 'Composer'],
        description: `Ce projet a été réalisé pendant un parcours lors de ma formation chez O'clock. J'ai
        récupéré les informations dans la base de données via des requêtes sql afin de les afficher. J'ai
        choisi de faire un menu accordeon en Vanilla JS.
        `,
        link: 'sonic/public'
    },
    
];

export default datas;