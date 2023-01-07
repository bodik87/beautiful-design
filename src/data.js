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
    id: 1,
    title: "20 методов массивов",
    subtitle: "20 методов массивов",
    body: `
    const [inputText, setInputText] = useState("");
    const inputHandler = (e) => {
      let lowerCase = e.target.value.toLowerCase();
      setInputText(lowerCase);
    };
    const filteredData = notes.filter((note) => {
      if (inputText === "") {
        return note;
      } else {
        return note.title.toLowerCase().includes(inputText);
      }
    });
    `,
    path: "/react",
    icon: "/aside-icons/react-icon.svg",
    background: "#35363A",
    more: true,
    isBig: true,
  },
  {
    id: 2,
    title: "CSS колонки",
    path: "/css",
    icon: "/aside-icons/css-icon.svg",
    background: "#264DE4",
    more: true,
  },
  {
    id: 3,
    title: "HTML структурв",
    path: "/html",
    icon: "/aside-icons/html5-icon.svg",
    background: "#E44D26",
  },
  {
    id: 4,
    title: "HTML структурв",
    path: "/html",
    icon: "/aside-icons/html5-icon.svg",
    background: "#E44D26",
    more: true,
    isBig: true,
  },
  {
    id: 5,
    title: "HTML структурв",
    path: "/html",
    icon: "/aside-icons/html5-icon.svg",
    background: "#E44D26",
  },
  {
    id: 6,
    title: "HTML структурв",
    path: "/html",
    icon: "/aside-icons/html5-icon.svg",
    background: "#E44D26",
    more: true,
  },
];
