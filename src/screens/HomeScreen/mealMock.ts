interface Meal {
  name: string;
  time: string;
  isDiet: boolean;
}

export interface UserMeals {
  date: string;
  meals: Meal[];
}

type dayMeals = UserMeals[];

export const mealMock: dayMeals = [
  {
    date: "12.01.2024",
    meals: [
      {
        name: "Pão",
        time: "08:00",
        isDiet: true,
      },
      {
        name: "X-Tudo com Salada",
        time: "12:00",
        isDiet: false,
      },
    ],
  },
  {
    date: "13.03.2024",
    meals: [
      {
        name: "Macarrão com queijo",
        time: "08:00",
        isDiet: true,
      },
      {
        name: "Pão doce com goiaba",
        time: "12:00",
        isDiet: true,
      },
    ],
  },
  {
    date: "13.02.2024",
    meals: [
      {
        name: "Macarrão com queijo",
        time: "08:00",
        isDiet: true,
      },
      {
        name: "Pão doce com goiaba",
        time: "12:00",
        isDiet: true,
      },
    ],
  },
  {
    date: "13.06.2024",
    meals: [
      {
        name: "Macarrão com queijo",
        time: "08:00",
        isDiet: true,
      },
      {
        name: "Pão doce com goiaba",
        time: "12:00",
        isDiet: true,
      },
    ],
  },
];
