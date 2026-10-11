/**
 * Dados dos palestrantes.
 * Adicione mais participantes conforme o exemplo.
 */

const speakers = {
  // "Giulia Bordignon": {
  //   photo: "./img/speakers/Giulia-Bordignon.jpg",
  //   title: "Palestrante",
  //   abstract: "Mestra em engenharia de computação e desenvolvedora backend. Através da criação de conteúdos, sonho impactar vidas de forma positiva com rompimento de barreiras e empoderamento tecnológico, reconstruindo a área tecnológica como um espaço acessível e pertencente a todas as pessoas.",
  //   events: [
  //     {
  //       title:
  //         "Mulheres na TI: Como sobreviver em uma área majoritariamente masculina?",
  //     },
  //   ],
  //   contact: {
  //     email: "contato@spacecoding.dev",
  //   },
  // },
  "Evandro Chagas Ribeiro": {
    photo: "./img/palestrantes/Evandro-Chagas-Ribeiro.png",
    title: "Palestrante",
    abstract:
      "Líder em desenvolvimento de tecnologias na Quantuloop, responsável por Pesquisa e Desenvolvimento (P&D).",
    events: [
      {
        title:
          "Stack de Software Quântica - Ferramentas, Linguagens, Compiladores e Bibliotecas",
      },
      {
        title:
          "Pipeline de distribuição de uma biblioteca de computação quântica para Python",
      },
    ],
    contact: {
      linkedin: "https://www.linkedin.com/in/evandro-crr",
    },
  },
  "Sofia Gazolla": {
    photo: "./img/palestrantes/Sofia-Gazolla.png",
    title: "Palestrante",
    abstract:
      "Graduanda de Ciências da Computação na UFSC e presidente da EJ Pixel.",
    events: [
      {
        title: "Experiência do Usuário",
      },
    ],
    contact: {
      linkedin:
        "https://www.linkedin.com/in/sofia-gazolla-da-costa-silva-79b4202a4/",
    },
  },
  "Prof. Jerusa Marchi": {
    photo: "./img/palestrantes/Jerusa-Marchi.png",
    title: "Palestrante",
    abstract:
      "Professora do INE, co-fundadora do Grupo de Computação Quântica da UFSC, supervisora do LIAA.",
    events: [
      {
        title:
          "Computação Quântica: do limite do silício à nova era da computação",
      },
      {
        title: "Painel - Computação Quântica",
      },
    ],
    contact: {
      lattes: "https://lattes.cnpq.br/0882497234989588",
      linkedin: "https://www.linkedin.com/in/jerusa-marchi-b401aa15a/",
    },
  },
  "Alessandro Benedet": {
    photo: "./img/palestrantes/Alessandro-Benedet.png",
    title: "Palestrante",
    abstract:
      "Aluno de Sistemas de Informação e Cientista de Dados, atuando no MTST.",
    events: [
      {
        title:
          "Geocodificação e Dados Abertos: Uma análise sobre os domicílios vagos e o Defícit Habitacional no Brasil",
      },
    ],
    contact: {
      linkedin:
        "https://www.linkedin.com/in/alessandro-thomaz-benedet-18902424b/",
    },
  },
  "Ruan Luiz Molgero Lopes": {
    photo: "./img/palestrantes/Ruan-Luiz-Molgero-Lopes.png",
    title: "Ministrante",
    abstract:
      "Pesquisador no Grupo de Computação Quântica da UFSC e atua no desenvolvimento da plataforma Ket.",
    events: [
      {
        title:
          "Como programar Computadores Quânticos Usando a Plataforma Ket - Introdução",
      },
      {
        title:
          "Como programar Computadores Quânticos Usando a Plataforma Ket - Avançado",
      },
    ],
    contact: {
      linkedin: "https://www.linkedin.com/in/ruanmolgero/",
    },
  },
  "Lucas Alves de Souza": {
    photo: "./img/palestrantes/Lucas-Alves-de-Souza.png",
    title: "Ministrante",
    abstract: "Aluno de Ciência da Computação, desenvolvedor e pesquisador.",
    events: [
      {
        title: "Minicurso de Git",
      },
    ],
    contact: {
      linkedin: "https://www.linkedin.com/in/lucasszalves/",
    },
  },
  "Luiz-Roberto-Scolari": {
    photo: "./img/palestrantes/Luiz-Roberto-Scolari.png",
    title: "Palestrante",
    abstract:
      "Graduando de Ciências da Computação na UFSC e desenvolvedor de Software no LabSEC.",
    events: [
      {
        title:
          "Unbounded Cover-Free Families e suas Aplicações em Criptografia",
      },
    ],
    contact: {
      linkedin: "https://www.linkedin.com/in/luizscolari/",
    },
  },
  "Miguel Estivalet Pinto": {
    photo: "./img/palestrantes/Miguel-Estivalet-Pinto.png",
    title: "Palestrante",
    abstract:
      "Graduando de Ciências da Computação na UFSC e membro do Grupo de Computação Quântica.",
    events: [
      {
        title: "Introdução a Aprendizado de Máquina Quântico",
      },
    ],
    contact: {
      linkedin: "https://www.linkedin.com/in/miguel-estivalet-pinto-7a2075267/",
    },
  },
  "Anthony Kamers": {
    photo: "./img/palestrantes/Anthony-Kamers.png",
    title: "Palestrante",
    abstract:
      "Cofundador da Rubrix-lat e fundador da Zerus IA. Também foi liderança em projetos como PBAD, Validar e AssinaGov.",
    events: [
      {
        title:
          "Os diferentes tipos de assinaturas eletrônicas e como fazer em PQC.",
      },
    ],
    contact: {
      linkedin: "https://www.linkedin.com/in/anthony-kamers/",
    },
  },
  "Walmer Bittencourt Junior": {
    photo: "./img/palestrantes/Walmer-Bittencourt-Junior.png",
    title: "Palestrante",
    abstract: "Graduando de Ciências da Computação e bolsista do LAPSI-UDESC.",
    events: [
      {
        title:
          "Computação Quântica Colaborativa: O Papel dos Protocolos Descentralizados na Ciência Aberta.",
      },
    ],
    contact: {
      linkedin: "https://www.linkedin.com/in/walmerbjunior/",
    },
  },
  "Prof. Ronaldo Mello": {
    photo: "./img/palestrantes/Ronaldo-Mello.png",
    title: "Palestrante",
    abstract:
      "Professor Titular do INE, com experiência em pesquisa na àrea de modelagem de dados.",
    events: [
      {
        title: "Modelagem Poliglota de Dados",
      },
    ],
    contact: {
      site: "https://www.inf.ufsc.br/~r.mello/",
    },
  },
  "Brunna Raphaela": {
    photo: "./img/palestrantes/Brunna-Raphaela.png",
    title: "Ministrante",
    abstract:
      "Graduanda de Ciências da Computação na UFSC, membro do PET Informática e pesquisadora no LVA.",
    events: [
      {
        title: "Minicurso - Aplicações de Microcontroladores de Arduino",
      },
    ],
    contact: {
      linkedin: "https://www.linkedin.com/in/brunna-raphaela/",
    },
  },
  "Kalleb da Costa Santos": {
    photo: "./img/palestrantes/Kalleb-da-Costa-Santos.png",
    title: "Ministrante",
    abstract:
      "Graduando de Engenharia da Computação na UFSC, fundador do Bell e membro do LIA.",
    events: [
      {
        title: "Minicurso - Comunicação Quântica",
      },
    ],
    contact: {
      linkedin: "https://www.linkedin.com/in/kallebcsantos/",
    },
  },
  "Cesar Augusto do Amaral": {
    photo: "./img/palestrantes/Cesar-Augusto-do-Amaral.png",
    title: "Palestrante",
    abstract:
      "Cursando Doutorado em Física pela UFSC, com foco em Computação Quântica.",
    events: [
      {
        title: "Computação Quântica Aplicada ao Mercado Financeiro",
      },
    ],
    contact: {
      lattes: "http://lattes.cnpq.br/1226091321730236/",
    },
  },
  "Lucas Semprebon Herdt": {
    photo: "./img/palestrantes/Lucas-Semprebon-Herdt.png",
    title: "Ministrante",
    abstract:
      "Graduando de Ciência da Computação, Presidente do Calico e membro do PET Informática.",
    events: [
      {
        title: "Minicurso - LaTeX.",
      },
    ],
    contact: {
      lattes: "http://lattes.cnpq.br/2395518461227175/",
    },
  },
  "Diego Meditsch": {
    photo: "./img/palestrantes/Diego-Meditsch.png",
    title: "Ministrante",
    abstract:
      "Graduando de Ciência da Computação na UFSC e Pesquisador no Laboratório de Computação Embarcada (ECL).",
    events: [
      {
        title: "Minicurso - LaTeX.",
      },
    ],
    contact: {
      linkedin: "https://www.linkedin.com/in/diego-meditsch",
    },
  },
  "Jullyano Lino": {
    photo: "./img/palestrantes/Jullyano-Lino.png",
    title: "Palestrante",
    abstract:
      "Bacharel em Ciências da Computação pela UFPI e conselheiro de cibersegurança no BID.",
    events: [
      {
        title: "You Can't Clone A Qubits, Unless You Encrypted It First.",
      },
    ],
    contact: {
      linkedin: "https://www.linkedin.com/in/jullyanolino/",
    },
  },
  "Bento Montenegro": {
    photo: "./img/palestrantes/Bento-Montenegro.png",
    title: "Palestrante",
    abstract:
      "Doutorando em Física pela UNICAMP e pesquisador de algoritmos quânticos.",
    events: [
      {
        title: "Algoritmos Quânticos para Sistemas Lineares",
      },
    ],
    contact: {
      linkedin: "https://www.linkedin.com/in/bentomontenegro/",
    },
  },
};

export { speakers };
