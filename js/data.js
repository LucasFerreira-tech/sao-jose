/* ============================================================
   SÃO JOSÉ – DADOS CENTRALIZADOS
   js/data.js — Fonte única de verdade para todo o conteúdo
   Editado via admin.html → gera ZIP para deploy no GitHub
   ============================================================ */

const SJ_DATA = {

  // ── PEREGRINAÇÕES ──────────────────────────────────────
  pilgrimages: [
    {
      id: "aparecida-marco-2026",
      title: "Excursão a Aparecida – Março 2026",
      destination: "Brasil – Aparecida do Norte",
      month: 3, year: 2026, dayStart: 27,
      dateLabel: "27 a 30 de Março de 2026",
      duration: "4 dias",
      price: "R$ 2.290,00",
      entryPayment: "R$ 500,00",
      installments: 6,
      description: "Um fim de semana abençoado em Aparecida do Norte, lar de Nossa Senhora Aparecida, Padroeira do Brasil. Saída de Campo Grande – MS.",
      img: "assets/images/pilgrimages/aparecida-marco-2026.jpg",
      href: "aparecida-marco-2026.html",
      category: "saojose",
      status: "confirmado",
      cancaoNova: false,
      directors: []
    },
    {
      id: "italia-abril-2026",
      title: "Itália – Abril 2026",
      destination: "Itália",
      month: 4, year: 2026, dayStart: 7,
      dateLabel: "07 a 18 de Abril de 2026",
      duration: "12 dias",
      price: null,
      entryPayment: null,
      installments: null,
      description: "Veneza, Pádua, Florença, Assis, Cássia, Loreto, Lanciano, Monte Gargano, San Giovanni Rotondo e Roma. Parceria especial com a Canção Nova.",
      img: "assets/images/pilgrimages/italia-abril-2026.jpg",
      href: "italia-abril-2026.html",
      category: "cancaonova",
      status: "confirmado",
      cancaoNova: true,
      directors: [
        { name: "Padre Renné Viana", role: "Diretor Espiritual", photo: "assets/images/padre-renne-viana.png" },
        { name: "Pitter Di Laura", role: "Missionário", photo: "assets/images/pitter-di-laura.jpg" }
      ]
    },
    {
      id: "belgica-maio-2026",
      title: "Bélgica, Holanda e Alemanha – Maio 2026",
      destination: "Bélgica · Holanda · Alemanha",
      month: 5, year: 2026, dayStart: 4,
      dateLabel: "04 a 16 de Maio de 2026",
      duration: "13 dias",
      price: "R$ 28.980,00",
      entryPayment: "R$ 5.000,00",
      installments: 10,
      description: "Bruxelas, Bruges, Amsterdam, Keukenhof, Colônia, Santuário de Schoenstatt e Frankfurt. Embarque em qualquer capital do Brasil.",
      img: "assets/images/pilgrimages/belgica-maio-2026.jpg",
      href: "belgica-maio-2026.html",
      category: "saojose",
      status: "confirmado",
      cancaoNova: false,
      directors: []
    },
    {
      id: "portugal-espanha-franca-maio-2026",
      title: "Portugal, Espanha e França – Maio 2026",
      destination: "Portugal · Espanha · França",
      month: 5, year: 2026, dayStart: 10,
      dateLabel: "10 a 25 de Maio de 2026",
      duration: "16 dias",
      price: "R$ 28.980,00",
      entryPayment: "R$ 5.000,00",
      installments: 10,
      description: "Lisboa, Óbidos, Nazaré, Fátima, Madrid, Lourdes, Ars, Paray-le-Monial, Nevers, Paris e Lisieux. 13 de Maio em Fátima. Com Padre Linniker.",
      img: "assets/images/pilgrimages/portugal-espanha-franca-maio-2026.jpg",
      href: "portugal-espanha-franca-maio-2026.html",
      category: "saojose",
      status: "confirmado",
      cancaoNova: false,
      directors: [
        { name: "Padre Linniker", role: "Diretor Espiritual", photo: "assets/images/padre-linniker.png" }
      ]
    },
    {
      id: "mexico-maio-2026",
      title: "México – Maio 2026",
      destination: "México",
      month: 5, year: 2026, dayStart: 12,
      dateLabel: "12 a 20 de Maio de 2026",
      duration: "9 dias",
      price: "R$ 18.980,00",
      entryPayment: "R$ 3.000,00",
      installments: 8,
      description: "Basílica de Nossa Senhora de Guadalupe, Tulpetlac, Cuautitlán, Pirâmides de Teotihuacán, Puebla e Cholula. Com Padre Jesú e Sônia Venâncio.",
      img: "assets/images/pilgrimages/mexico-maio-2026.jpg",
      href: "mexico-maio-2026.html",
      category: "cancaonova",
      status: "confirmado",
      cancaoNova: true,
      directors: [
        { name: "Padre Jesú", role: "Diretor Espiritual", photo: "assets/images/padre-jesu.png" },
        { name: "Sônia Venâncio", role: "Missionária", photo: "assets/images/sonia-venancio.png" }
      ]
    },
    {
      id: "franca-junho-2026",
      title: "Santuários Franceses – Junho 2026",
      destination: "França",
      month: 6, year: 2026, dayStart: 1,
      dateLabel: "01 a 16 de Junho de 2026",
      duration: "16 dias",
      price: "R$ 26.980,00",
      entryPayment: "R$ 5.000,00",
      installments: 10,
      description: "Paris, Lisieux, Monte São Michel, Lourdes, La Salette, Paray-le-Monial e Nevers. Com Padre Alessandro e Salette Ferreira.",
      img: "assets/images/pilgrimages/franca-junho-2026.jpg",
      href: "franca-junho-2026.html",
      category: "cancaonova",
      status: "confirmado",
      cancaoNova: true,
      directors: [
        { name: "Padre Alessandro", role: "Diretor Espiritual", photo: "assets/images/padre-alessandro.jpg" },
        { name: "Salette Ferreira", role: "Missionária", photo: "assets/images/salette-ferreira.jpg" }
      ]
    },
    {
      id: "italia-junho-2026",
      title: "Itália – Junho 2026",
      destination: "Itália",
      month: 6, year: 2026, dayStart: 15,
      dateLabel: "15 a 30 de Junho de 2026",
      duration: "16 dias",
      price: "R$ 27.980,00",
      entryPayment: "R$ 5.000,00",
      installments: 10,
      description: "Milão, Turim, Veneza, Pádua, Florença, Siena, Assis, Cássia, Lanciano, San Giovanni Rotondo, Monte Sant'Angelo e Roma. Com Padre Márcio Reis.",
      img: "assets/images/pilgrimages/italia-junho-2026.jpg",
      href: "italia-junho-2026.html",
      category: "saojose",
      status: "confirmado",
      cancaoNova: false,
      directors: [
        { name: "Padre Márcio Reis", role: "Diretor Espiritual", photo: "assets/images/padre-marcio-reis.jpg" }
      ]
    },
    {
      id: "terra-santa-julho-2026",
      title: "Terra Santa – Julho 2026",
      destination: "Israel · Palestina",
      month: 7, year: 2026, dayStart: 7,
      dateLabel: "07 a 16 de Julho de 2026",
      duration: "10 dias",
      price: "R$ 23.980,00",
      entryPayment: "R$ 4.000,00",
      installments: 8,
      description: "Jerusalém, Belém, Betânia, Cafarnaum, Jericó, Rio Jordão e Mar Morto. Uma peregrinação pelos lugares sagrados onde Jesus viveu e pregou.",
      img: "assets/images/pilgrimages/terra-santa-julho-2026.jpg",
      href: "terra-santa-julho-2026.html",
      category: "saojose",
      status: "confirmado",
      cancaoNova: false,
      directors: []
    },
    {
      id: "italia-franca-julho-2026",
      title: "Itália e França – Julho 2026",
      destination: "Itália · França",
      month: 7, year: 2026, dayStart: 18,
      dateLabel: "18 a 31 de Julho de 2026",
      duration: "14 dias",
      price: "R$ 27.980,00",
      entryPayment: "R$ 5.000,00",
      installments: 10,
      description: "Roma, Assis, Cássia, Lanciano, Monte Gargano, San Giovanni Rotondo, Paris e Lisieux. Grandes santuários da Europa com o diferencial espiritual da Canção Nova.",
      img: "assets/images/pilgrimages/italia-franca-julho-2026.jpg",
      href: "italia-franca-julho-2026.html",
      category: "cancaonova",
      status: "confirmado",
      cancaoNova: true,
      directors: [
        { name: "Pe. Evandro", role: "Diretor Espiritual", photo: null }
      ]
    },
    {
      id: "portugal-italia-agosto-2026",
      title: "Portugal e Itália – Agosto 2026",
      destination: "Portugal · Itália",
      month: 8, year: 2026, dayStart: 3,
      dateLabel: "03 a 17 de Agosto de 2026",
      duration: "15 dias",
      price: "R$ 26.980,00",
      entryPayment: "R$ 5.000,00",
      installments: 10,
      description: "Fátima, Lisboa, Roma, Vaticano, Assis, Loreto, San Giovanni Rotondo e Veneza. Com Pe. Fábio Galdino, Pe. Duarte Lara e Danilo Gesualdo.",
      img: "assets/images/pilgrimages/portugal-italia-agosto-2026.jpg",
      href: "portugal-italia-agosto-2026.html",
      category: "cancaonova",
      status: "confirmado",
      cancaoNova: true,
      directors: [
        { name: "Pe. Fábio Galdino", role: "Diretor Espiritual", photo: null },
        { name: "Pe. Duarte Lara", role: "Diretor Espiritual", photo: null },
        { name: "Danilo Gesualdo", role: "Missionário", photo: null }
      ]
    },
    {
      id: "republica-tcheca-agosto-2026",
      title: "República Tcheca, Alemanha, Áustria, Eslováquia e Hungria – Agosto 2026",
      destination: "Rep. Tcheca · Alemanha · Áustria · Hungria",
      month: 8, year: 2026, dayStart: 10,
      dateLabel: "Agosto de 2026",
      duration: "A confirmar",
      price: null,
      entryPayment: null,
      installments: null,
      description: "Praga, Karlovy Vary, Munique, Castelo de Neuschwanstein, Innsbruck, Salzburgo, Melk, Viena, Bratislava e Budapeste.",
      img: "assets/images/pilgrimages/republica-tcheca-agosto-2026.jpg",
      href: "republica-tcheca-agosto-2026.html",
      category: "saojose",
      status: "confirmado",
      cancaoNova: false,
      directors: []
    },
    {
      id: "grecia-turquia-agosto-2026",
      title: "Grécia e Turquia com Capadócia e Ilhas Gregas – Agosto 2026",
      destination: "Grécia · Turquia · Capadócia",
      month: 8, year: 2026, dayStart: 15,
      dateLabel: "Agosto de 2026",
      duration: "A confirmar",
      price: null,
      entryPayment: null,
      installments: null,
      description: "Capadócia, Éfeso, Casa de Nossa Senhora, Patmos, Santorini, Rodes, Creta, Atenas, Meteora e Tessalônica.",
      img: "assets/images/pilgrimages/grecia-turquia-capadocia-agosto-2026.jpg",
      href: "grecia-turquia-julho-2026.html",
      category: "saojose",
      status: "confirmado",
      cancaoNova: false,
      directors: []
    }
  ],

  // ── GALLERY (Momentos de Fé) ───────────────────────────
  gallery: [
    // Add gallery images here as objects: { src, alt }
    // Example: { src: "assets/images/gallery/foto1.jpg", alt: "Peregrinação Roma 2024" }
  ],

  // ── METADATA ─────────────────────────────────────────
  meta: {
    lastUpdated: new Date().toISOString()
  }
};

// ── STATUS HELPERS ─────────────────────────────────────
SJ_DATA.getStatusHTML = function(status) {
  const map = {
    confirmado:     `<span class="status-confirmed">&#10004; Confirmada</span>`,
    pendente:       `<span class="status-awaiting">&#9679; Aguardando grupo</span>`,
    cancelado:      `<span class="status-awaiting" style="color:#c0392b;">&#10008; Cancelada</span>`,
    ultimas_vagas:  `<span class="status-confirmed" style="color:#e67e22;">&#9650; Últimas Vagas</span>`,
    esgotada:       `<span class="status-awaiting" style="color:#888;">&#9679; Esgotada</span>`,
    em_planejamento:`<span class="status-awaiting" style="color:#2980b9;">&#9675; Em Planejamento</span>`,
  };
  return map[status] || map['pendente'];
};

SJ_DATA.getBorderStyle = function(p) {
  if (p.category === 'cancaonova') return 'border:2px solid #1a3a6b;';
  if (p.status === 'confirmado') return 'border:2px solid var(--green-dark);';
  return '';
};

SJ_DATA.getDate = function(p) {
  if (!p.year || !p.month) return null;
  return new Date(p.year, p.month - 1, p.dayStart || 1);
};

SJ_DATA.isVisible = function(p) {
  return p.status !== 'cancelado' && p.status !== 'esgotada';
};
