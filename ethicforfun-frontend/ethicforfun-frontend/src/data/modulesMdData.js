const modulesData = [
    {
        id: 1,
        title: "Intro to Ethics",
        file: () => import("../data/modules-md/introduction-to-ethics.md?raw"),
    },
{
    id: 2,
    title: "More Ethics",
    file: () => import("../data/modules-md/introduction-to-ethics.md?raw"),
},
{
    id: 3,
    title: "Yet more Ethics",
    file: () => import("../data/modules-md/introduction-to-ethics.md?raw"),
},

// add more modules here...
];

export default modulesData;
