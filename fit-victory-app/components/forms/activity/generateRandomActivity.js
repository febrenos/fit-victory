export const generateRandomActivity = () => {
    const activities = [
        {
            title: "Alongar Tríceps",
            date: "25/10/2023",
            duration: "10 min",
            description:
              "Levante um braço e dobre o cotovelo, colocando a mão no meio das costas. Com a outra mão, segure o cotovelo dobrado e suavemente puxe o braço para trás até sentir um alongamento na parte de trás do braço (tríceps).",
          },
          {
            title: "Corrida no Parque",
            date: "30/10/2023",
            duration: "30 min",
            description:
              "Corra ao redor do parque para melhorar a resistência cardiovascular e aproveitar a natureza ao seu redor.",
          },
          {
            title: "Exercícios de Flexão",
            date: "02/11/2023",
            duration: "15 min",
            description:
              "Realize uma série de flexões para fortalecer os músculos do peito, ombros e tríceps.",
          },
          {
            title: "Alongamento de Pernas",
            date: "01/11/2023",
            duration: "12 min",
            description:
              "Sente-se no chão e estenda as pernas, incline-se para a frente para alongar os músculos das pernas e das costas.",
          },
          {
            title: "Refeição Saudável",
            date: "06/11/2023",
            duration: "30 min",
            description:
              "Prepare e desfrute de uma refeição saudável rica em vegetais, proteínas magras e grãos integrais.",
          },
          {
            title: "Beber 2L de água",
            date: "08/11/2023",
            duration: "24 horas",
            description:
              "Hidrate-se ao longo do dia, beba 5 copos de 400ml",
          },
          {
            title: "Yoga Matinal",
            date: "10/11/2023",
            duration: "20 min",
            description:
              "Pratique yoga para melhorar a flexibilidade, equilíbrio e promover uma mente calma e focada.",
          },
          {
            title: "Treino de Resistência",
            date: "09/11/2023",
            duration: "25 min",
            description:
              "Use pesos leves ou a resistência do próprio corpo para fortalecer os principais grupos musculares.",
          },
      // Adicione mais atividades conforme necessário
    ];
  
    return activities[Math.floor(Math.random() * activities.length)];
  };
  