export default {
  global: {
    numeroUnidad: '1',
    tituloUnidad: 'Conceptos fundamentales',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'La democracia',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Definición de la Constitución Política y democracia',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Estructura ética y los derechos fundamentales',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia: 'Platón. (2004). La República: ( ed.). El Cid Editor.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/35993',
    },
    {
      referencia:
        'Arriola, C. (1994). ¿Qué es la democracia?: ( ed.). Editorial Miguel Ángel Porrúa.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/72937',
    },
    {
      referencia:
        'Valadés, D. (2002). Constitución y democracia: ( ed.). Instituto de Investigaciones Jurídicas - UNAM.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/72296',
    },
    {
      referencia:
        'Alvarez Yágüez, J. (2012). Política y República: Aristóteles y Maquiavelo: ( ed.). Biblioteca Nueva.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/106238',
    },
    {
      referencia:
        'Trill, M. (2017). El hombre bueno y el buen ciudadano en Aristóteles: ( ed.). EUNSA.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/47367',
    },
    {
      referencia:
        'Arévalo Reyes, H. D. (2016). Constitución política de Colombia 1991: ( ed.). Ecoe Ediciones.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/70449',
    },
  ],
  glosario: [
    {
      termino: 'Asamblea ateniense',
      significado:
        'institución política de la antigua Grecia donde los ciudadanos participaban directamente en la toma de decisiones, siendo un modelo temprano de democracia directa.',
    },
    {
      termino: 'Bloque de constitucionalidad',
      significado:
        'conjunto de normas y principios que, aunque no están textualmente en la constitución, tienen el mismo valor normativo y sirven para interpretar y complementar los derechos fundamentales.',
    },
    {
      termino: 'Contrapesos institucionales',
      significado:
        'mecanismos establecidos en la constitución para equilibrar los poderes del Estado, garantizando que ninguna rama del gobierno acumule un poder desmedido y protegiendo los derechos fundamentales.',
    },
    {
      termino: 'Cultura política',
      significado:
        'valores, actitudes y conocimientos que los ciudadanos tienen respecto a su sistema político, influyendo en su relación con la democracia y los derechos fundamentales.',
    },
    {
      termino: 'Democracia directa',
      significado:
        'sistema político en el que los ciudadanos toman decisiones de forma directa, sin intermediarios, como ocurrió en Atenas.',
    },
    {
      termino: 'Democracia representativa',
      significado:
        'modelo de democracia en el que los ciudadanos eligen a representantes que toman decisiones en su nombre, siendo la forma predominante en los Estados modernos.',
    },
    {
      termino: 'Derechos colectivos',
      significado:
        'derechos que protegen a comunidades específicas, como los pueblos indígenas o las minorías étnicas, y que incluyen la preservación de sus culturas, territorios y formas de vida.',
    },
    {
      termino: 'Derechos de participación política',
      significado:
        'garantías constitucionales que permiten a los ciudadanos incidir en las decisiones públicas mediante el voto, los referendos y otros mecanismos de deliberación.',
    },
    {
      termino: 'Estado de derecho',
      significado:
        'principio que establece que todas las personas, incluidos los gobernantes, están sujetos a la ley y que esta debe garantizar los derechos fundamentales.',
    },
    {
      termino: 'Justicia distributiva',
      significado:
        'enfoque ético que busca garantizar una distribución equitativa de los recursos, responsabilidades y beneficios dentro de una sociedad democrática.',
    },
    {
      termino: 'Soberanía popular',
      significado:
        'fundamento de las democracias modernas, que establece que el poder reside en el pueblo y que las decisiones públicas deben reflejar su voluntad.',
    },
    {
      termino: 'Supremacía de la ley',
      significado:
        'doctrina que asegura que ninguna autoridad ni individuo está por encima de la constitución y que las normas legales deben prevalecer sobre las arbitrariedades.',
    },
    {
      termino: 'Valores democráticos',
      significado:
        'principios como la libertad, la igualdad, la justicia y la solidaridad que orientan la acción política y social en los sistemas democráticos.',
    },
  ],
}
