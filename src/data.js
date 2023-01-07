export const projectCategories = [
  {
    title: "React",
    path: "/react",
    icon: "/aside-icons/react-icon.svg",
    background: "#35363A",
  },
  {
    title: "CSS",
    path: "/css",
    icon: "/aside-icons/css-icon.svg",
    background: "#264DE4",
  },
  {
    title: "HTML",
    path: "/html",
    icon: "/aside-icons/html5-icon.svg",
    background: "#E44D26",
  },
];

export const notes = [
  {
    id: 0,
    title: "Корисні ресурси для швидкої розробки",
    subtitle: "Список корисних сайтів",
    description: `Лінь - один з найкращих двигунів прогресу! Вона змушує людину працювати менше, часто оптимізуючи робочий процес.
      В цій статті зібрані посилання, що допоможуть пришвидшити розробку, витрачаючи менше зусиль.`,
    links_pictures: [
      {
        id: 1,
        url: "https://react-svgr.com/playground/",
        title: "Генератор React компонента з svg",
        decription:
          "Достатньо вставити код svg і ресурс згенерує Реакт-компонент, що дозволить більш гнучко працювати з svg (наприклад змінювати зображення через прокинутий props).",
      },
      {
        id: 2,
        url: "https://jakearchibald.github.io/svgomg/",
        title: "Оптимізатор розміру svg",
        decription:
          "Ресурс дозволяє зменшити зображення в форматі svg, видаляючи непотрібну інформацію з коду картинки.",
      },
    ],
    image: "/notes/images/0.jpg",
    path: "/notes/0",
    isBig: true,
  },
  {
    id: 1,
    title: "Корисні ресурси",
    subtitle: "Посилання, що допоможуть",
    description: `Лінь - один з найкращих двигунів прогресу! Вона змушує людину працювати менше, часто прискорюючи робочий процес.
      В цій статті зібрані дуже корисні ресурси, що допоможуть пришвидшити розробку.`,
    body: ``,
  },
];
