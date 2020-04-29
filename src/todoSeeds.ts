export interface ITodo {
    id: number;
    title: string;
    content: string;
    createdAt: Date;
    updatedAt: Date;
    important: boolean;
    checked: boolean;
    due?: Date;
}

const seeds: ITodo[] = [
    {
        id: 1,
        title: "Study React.js",
        content: "asdfasdfasdfasdfasdf",
        createdAt: new Date(2020, 4, 22, 9, 30),
        updatedAt: new Date(2020, 4, 22, 9, 30),
        checked: false,
        important: true,
    },
    {
        id: 2,
        title: "Go home early",
        content: "HOME!!!",
        createdAt: new Date(2020, 4, 21, 9, 30),
        updatedAt: new Date(2020, 4, 21, 19, 10, 23),
        important: true,
        checked: true,
        due: new Date(2020, 4, 21, 18, 30),
    },
    {
        id: 3,
        title: "Pick lunch",
        content: "배가 고픕니다.",
        createdAt: new Date(2020, 4, 22, 10, 27),
        updatedAt: new Date(2020, 4, 22, 10, 27),
        important: true,
        checked: false,
        due: new Date(2020, 4, 21, 18, 30),
    },
    {
        id: 4,
        title: "Clean table",
        content: "So dirty...",
        createdAt: new Date(2020, 4, 20, 13, 55),
        updatedAt: new Date(2020, 4, 22, 10, 27),
        important: false,
        checked: false,
    },
    {
        id: 5,
        title: "Order coffee",
        content: "COFFEE MAKETH CODE",
        createdAt: new Date(2020, 4, 20, 15, 20),
        updatedAt: new Date(2020, 4, 20, 15, 20),
        important: true,
        checked: false,
        due: new Date(2020, 4, 29, 18, 30),
    },
];