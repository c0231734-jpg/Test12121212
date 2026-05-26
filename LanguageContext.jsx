import React, { createContext, useContext, useState } from 'react';

const translations = {
  'pt-BR': {
    nav: { team: 'EQUIPE', games: 'JOGOS', contact: 'CONTATO' },
    hero: {
      badge: 'Roblox Game Studio',
      sub: 'Productions',
      desc: 'Criando experiências imersivas e inesquecíveis no universo Roblox.',
      cta: 'NOSSOS JOGOS',
      discord: 'DISCORD',
      scroll: 'SCROLL',
    },
    about: {
      label: 'Sobre o projeto',
      title: 'Terror que fica na sua mente.',
      body: 'A Midnight Productions é um estúdio independente focado em criar jogos de terror e suspense dentro da plataforma Roblox. Nosso objetivo é levar experiências cinematográficas, narrativas profundas e atmosferas perturbadoras para jogadores de todo o mundo.',
    },
    game: {
      label: 'Nosso jogo',
      title: 'Em desenvolvimento',
      seeMore: 'Ver mais',
      imgPlaceholder: 'Imagem do jogo',
      statusBadge: 'Em Desenvolvimento',
      tba: '— —',
      tbaDesc: 'Informações do jogo serão reveladas em breve. Acompanhe nosso Discord para novidades.',
      genre: 'Gênero', platform: 'Plataforma', status: 'Status',
    },
    team: {
      label: 'Quem somos',
      title: 'Nossa equipe',
      seeAll: 'Ver todos',
    },
    wiki: {
      label: 'Universo',
      title: 'Wiki do universo',
      body: 'Explore o universo sombrio da Midnight Productions. Conheça as criaturas que habitam o Vazio, descubra fragmentos do lore e entenda o que realmente acontece nos Hotéis. A wiki está crescendo — e há muito mais por vir.',
      cta: 'Explorar Wiki',
      cats: ['Criaturas', 'Lore', 'Habitats'],
      soon: 'Em breve',
    },
    lore: {
      label: 'Lore',
      title: 'O Início de Tudo',
      text: `Pessoas começaram a desaparecer. Sumiam envoltas por um forte brilho, rápido demais para ser compreendido, como se algo as tivesse arrancado da realidade. E arrancou.

Uma entidade sádica e profundamente maléfica, que se autoproclama "Midnight Host", um ser que encontra prazer genuíno em observar o sofrimento, a queda da sanidade e a desgraça de suas vítimas.

Essa entidade nos levou para lugares que passamos a chamar de "Hoteis", espalhados por uma dimensão vazia, silenciosa e antinatural que apelidamos de "Vazio". Agora estamos presos, flutuando neste Hotel maldito, sem qualquer chance real de fuga.

Exploramos seus corredores intermináveis e descobrimos algo ainda pior. Cada porta leva a uma dimensão diferente: mundos distorcidos e abandonados, habitados por criaturas e monstros que eu jamais imaginei que pudessem existir. Essas coisas são criações dela, experimentos, ferramentas feitas unicamente para nos fazer sofrer.

A morte, contudo, não nos liberta. Sempre que morremos naquele lugar, não é o fim. Após algum tempo, despertamos novamente no Hotel, ilesos, como se nada tivesse acontecido, como se estivéssemos em um ciclo.

Com o passar do tempo, tornou-se impossível ignorar a verdade. Não sentimos fome. Não sentimos sede. Não envelhecemos. Não morremos. Ela nos mantém aqui vivos apenas para nos observar sofrer. Somos prisioneiros conscientes em seus experimentos doentios.

O que ainda sustenta nossa fé é uma possibilidade de que uma dessas portas, em algum momento, leve a uma saída. Essa esperança, mesmo que improvável, é tudo o que nos mantém de pé.

A entidade nos deixou neste lugar onde tudo é possível e, contra a própria vontade dela, estamos nos adaptando. Ficando mais fortes. Mais resistentes.

Ela deixou brechas. E nós as vemos.

Vamos sair daqui. Mesmo que demore séculos.`,
    },
    contact: {
      label: 'Fale conosco',
      title: 'CONTATO',
      desc: 'Entre em contato com a equipe Midnight Productions pelo Discord ou redes sociais.',
      discordLabel: 'Discord',
      socialLabel: 'Redes sociais',
      socialSoon: 'Em breve.',
    },
    game_page: {
      title: 'JOGOS',
      imgPlaceholder: 'Arte do jogo',
      noGamesDesc: 'Detalhes do jogo serão revelados em breve. Fique atento ao nosso Discord.',
      playRoblox: 'Jogar no Roblox',
      status: { concept: 'Conceito', pre_production: 'Pré-produção', in_development: 'Em Desenvolvimento', alpha: 'Alpha', beta: 'Beta', released: 'Lançado' },
    },
    team_page: { noMembers: 'Nenhum membro ainda.' },
    wiki_page: {
      intro: 'Explore o universo de terror da Midnight Productions. Criaturas, lore, habitats e segredos aguardam os mais corajosos.',
      records: 'registros',
      noCreatures: 'Nenhuma criatura registrada',
      noCreaturesDesc: 'Os arquivos estão sendo compilados...',
      viewSheet: 'Ver ficha',
      image: 'Imagem',
    },
  },
  'en': {
    nav: { team: 'TEAM', games: 'GAMES', contact: 'CONTACT' },
    hero: {
      badge: 'Roblox Game Studio',
      sub: 'Productions',
      desc: 'Creating immersive and unforgettable experiences in the Roblox universe.',
      cta: 'OUR GAMES',
      discord: 'DISCORD',
      scroll: 'SCROLL',
    },
    about: {
      label: 'About the project',
      title: 'Horror that stays in your mind.',
      body: 'Midnight Productions is an independent studio focused on creating horror and suspense games within the Roblox platform. Our goal is to bring cinematic experiences, deep narratives and disturbing atmospheres to players around the world.',
    },
    game: {
      label: 'Our game',
      title: 'In development',
      seeMore: 'See more',
      imgPlaceholder: 'Game image',
      statusBadge: 'In Development',
      tba: '— —',
      tbaDesc: 'Game information will be revealed soon. Follow our Discord for updates.',
      genre: 'Genre', platform: 'Platform', status: 'Status',
    },
    team: {
      label: 'Who we are',
      title: 'Our team',
      seeAll: 'See all',
    },
    wiki: {
      label: 'Universe',
      title: 'Universe Wiki',
      body: 'Explore the dark universe of Midnight Productions. Discover the creatures that inhabit the Void, uncover lore fragments, and understand what truly happens inside the Hotels. The wiki is growing — and there is much more to come.',
      cta: 'Explore Wiki',
      cats: ['Creatures', 'Lore', 'Habitats'],
      soon: 'Coming soon',
    },
    lore: {
      label: 'Lore',
      title: 'The Beginning of Everything',
      text: `People began to disappear. They vanished, engulfed by an intense glow, too fast to be fully understood, as if something had torn them out of reality. And it did.

A sadistic and profoundly malevolent entity, which calls itself Midnight Host, a being that takes genuine pleasure in watching the suffering, the erosion of sanity, and the ruin of its victims.

This entity took us to places we came to call Hotels, scattered across an empty, silent, and unnatural dimension we named the Void. Now we are trapped, drifting within this cursed hotel, with no real chance of escape.

We explored its endless corridors and discovered something even worse. Every door leads to a different dimension, distorted, abandoned worlds inhabited by creatures and monsters I never imagined could exist. These things are its creations, experiments, tools made solely to make us suffer.

Death, however, does not set us free. Every time we die in that place, it is not the end. After some time, we awaken once more in the Hotel, unharmed, as if nothing had happened, as if we were trapped in a loop.

As time passed, it became impossible to ignore the truth. We do not feel hunger. We do not feel thirst. We do not age. We do not die. It keeps us here alive for the sole purpose of watching us suffer. We are conscious prisoners in its twisted experiments.

What still sustains our faith is the possibility that one of these doors might, someday, lead to an exit. That hope, however unlikely, is all that keeps us standing.

The entity abandoned us in this place where anything is possible, and against its own will, we are adapting. Growing stronger. More resilient.

It may be omnipresent. But we are human, and there is nothing better than us when it comes to adapting to situations many would call impossible.

It left cracks. And we see them.

We will get out of here. Even if it takes centuries.`,
    },
    contact: {
      label: 'Get in touch',
      title: 'CONTACT',
      desc: 'Contact the Midnight Productions team via Discord or social media.',
      discordLabel: 'Discord',
      socialLabel: 'Social media',
      socialSoon: 'Coming soon.',
    },
    game_page: {
      title: 'GAMES',
      imgPlaceholder: 'Game art',
      noGamesDesc: 'Game details will be revealed soon. Follow our Discord for updates.',
      playRoblox: 'Play on Roblox',
      status: { concept: 'Concept', pre_production: 'Pre-production', in_development: 'In Development', alpha: 'Alpha', beta: 'Beta', released: 'Released' },
    },
    team_page: { noMembers: 'No members yet.' },
    wiki_page: {
      intro: 'Explore the horror universe of Midnight Productions. Creatures, lore, habitats and secrets await the bravest.',
      records: 'records',
      noCreatures: 'No creatures registered',
      noCreaturesDesc: 'Files are being compiled...',
      viewSheet: 'View sheet',
      image: 'Image',
    },
  },
  'es': {
    nav: { team: 'EQUIPO', games: 'JUEGOS', contact: 'CONTACTO' },
    hero: {
      badge: 'Roblox Game Studio',
      sub: 'Productions',
      desc: 'Creando experiencias inmersivas e inolvidables en el universo Roblox.',
      cta: 'NUESTROS JUEGOS',
      discord: 'DISCORD',
      scroll: 'SCROLL',
    },
    about: {
      label: 'Sobre el proyecto',
      title: 'Terror que se queda en tu mente.',
      body: 'Midnight Productions es un estudio independiente enfocado en crear juegos de terror y suspenso dentro de la plataforma Roblox. Nuestro objetivo es llevar experiencias cinematográficas, narrativas profundas y atmósferas perturbadoras a jugadores de todo el mundo.',
    },
    game: {
      label: 'Nuestro juego',
      title: 'En desarrollo',
      seeMore: 'Ver más',
      imgPlaceholder: 'Imagen del juego',
      statusBadge: 'En Desarrollo',
      tba: '— —',
      tbaDesc: 'La información del juego se revelará próximamente. Sigue nuestro Discord para novedades.',
      genre: 'Género', platform: 'Plataforma', status: 'Estado',
    },
    team: {
      label: 'Quiénes somos',
      title: 'Nuestro equipo',
      seeAll: 'Ver todos',
    },
    wiki: {
      label: 'Universo',
      title: 'Wiki del universo',
      body: 'Explora el oscuro universo de Midnight Productions. Conoce las criaturas que habitan el Vacío, descubre fragmentos del lore y entiende qué ocurre realmente dentro de los Hoteles. La wiki está creciendo — y hay mucho más por venir.',
      cta: 'Explorar Wiki',
      cats: ['Criaturas', 'Lore', 'Hábitats'],
      soon: 'Próximamente',
    },
    lore: {
      label: 'Lore',
      title: 'El Principio de Todo',
      text: `La gente comenzó a desaparecer. Se desvanecían envueltos en un intenso resplandor, demasiado rápido para ser comprendido, como si algo los hubiera arrancado de la realidad. Y así fue.

Una entidad sádica y profundamente malévola, que se llama a sí misma "Midnight Host", un ser que encuentra placer genuino al observar el sufrimiento, la erosión de la cordura y la ruina de sus víctimas.

Esta entidad nos llevó a lugares que comenzamos a llamar "Hoteles", dispersos por una dimensión vacía, silenciosa y antinatural que denominamos el "Vacío". Ahora estamos atrapados, a la deriva en este maldito hotel, sin ninguna oportunidad real de escapar.

Exploramos sus interminables corredores y descubrimos algo aún peor. Cada puerta lleva a una dimensión diferente: mundos distorsionados y abandonados habitados por criaturas y monstruos que jamás imaginé que pudieran existir. Estas cosas son sus creaciones, experimentos, herramientas hechas únicamente para hacernos sufrir.

La muerte, sin embargo, no nos libera. Cada vez que morimos en ese lugar, no es el fin. Después de un tiempo, despertamos nuevamente en el Hotel, ilesos, como si nada hubiera pasado, como si estuviéramos atrapados en un bucle.

Con el paso del tiempo, se volvió imposible ignorar la verdad. No sentimos hambre. No sentimos sed. No envejecemos. No morimos. Nos mantiene aquí vivos con el único propósito de vernos sufrir. Somos prisioneros conscientes en sus retorcidos experimentos.

Lo que aún sostiene nuestra fe es la posibilidad de que una de estas puertas, algún día, lleve a una salida. Esa esperanza, por improbable que sea, es todo lo que nos mantiene en pie.

La entidad nos abandonó en este lugar donde todo es posible y, contra su propia voluntad, nos estamos adaptando. Volviéndonos más fuertes. Más resilientes.

Puede que sea omnipresente. Pero somos humanos, y no hay nada mejor que nosotros cuando se trata de adaptarnos a situaciones que muchos llamarían imposibles.

Dejó grietas. Y las vemos.

Saldremos de aquí. Aunque tarde siglos.`,
    },
    contact: {
      label: 'Contáctanos',
      title: 'CONTACTO',
      desc: 'Contacta al equipo de Midnight Productions por Discord o redes sociales.',
      discordLabel: 'Discord',
      socialLabel: 'Redes sociales',
      socialSoon: 'Próximamente.',
    },
    game_page: {
      title: 'JUEGOS',
      imgPlaceholder: 'Arte del juego',
      noGamesDesc: 'Los detalles del juego se revelarán pronto. Sigue nuestro Discord para novedades.',
      playRoblox: 'Jugar en Roblox',
      status: { concept: 'Concepto', pre_production: 'Pre-producción', in_development: 'En Desarrollo', alpha: 'Alpha', beta: 'Beta', released: 'Lanzado' },
    },
    team_page: { noMembers: 'Ningún miembro todavía.' },
    wiki_page: {
      intro: 'Explora el universo de terror de Midnight Productions. Criaturas, lore, hábitats y secretos aguardan a los más valientes.',
      records: 'registros',
      noCreatures: 'Ninguna criatura registrada',
      noCreaturesDesc: 'Los archivos están siendo compilados...',
      viewSheet: 'Ver ficha',
      image: 'Imagen',
    },
  },
};

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('en');
  const t = translations[lang];
  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}