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

export const notesLabels = [
  "All",
  "React Router Dom",
  "useRef",
  "npm",
  "React",
];

export const notes = [
  {
    id: 0,
    labels: "",
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
    links_icons: [
      {
        id: 1,
        url: "https://heroicons.com/",
        title: "Heroicon",
        decription: "Ресурс з популярними іконками і зручним експортом",
      },
      {
        id: 2,
        url: "https://react-icons.github.io/react-icons/search",
        title: "React Icons",
        decription: "Популярний сайт з великою кількістю різноманітних іконок.",
      },
    ],
    links_json: [
      {
        id: 1,
        url: "http://json2ts.com/",
        title: "JSON to TypeScript",
        decription:
          "Тут можна швидко згенерувати інтерфейс для TypeScript з JSON об'єкта",
      },
    ],
    path: "/notes/0",
  },
  {
    id: 1,
    labels: "npm",
    title: "NPM команди, що можуть знадобитись",
    subtitle: "",
    description: `Створити програму в корені папки:
    npm create vite@latest .
    
    Видалити пакет: 
    npx remove react-router-dom 
    
    Вирішення проблеми запуску коду з чужого репозиторія:
    "start": "react-scripts --openssl-legacy-provider start"
    
    cd // mk dir // ls
    `,
  },
  {
    id: 2,
    labels: "useRef, React",
    title: "Автофокус в React з useRef",
    subtitle: "",
    description: `Автофокус:
    const inputRef = useRef();
    Чіпляємо на інпут: ref={inputRef}
    
    Викликаємо або кліком:
    const handleClick = () => ref.current.focus()
    <button onClick={handleClick}>Focus input</button>
    
    або при монтуванні:
    useEffect(() => {
      inputRef.current.focus()
    }, [visible])`,
  },
  {
    id: 3,
    labels: "React Router Dom, React",
    title: "Корисні команди для роутингу",
    subtitle: "React Router Dom",
    description: `const navigate = useNavigate();
    const goHome = () => navigate("/");
    const goBack = () => navigate(-1);

    const location = useLocation();
    const home = location.pathname === "/";
    {home ? <Home /> : <Outlet />}
  `,
  },
];
