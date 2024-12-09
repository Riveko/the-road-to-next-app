export const initialTickets = [
    {
        id: "1",
        title: "First ticket",
        content: "This is the first ticket",
        status: "DONE" as const,
    },
    {
        id: "2",
        title: "Second ticket",
        content: "This is the second ticket",
        status: "OPEN" as const,
    },
    {
        id: "3",
        title: "Third ticket",
        content: "This is the third ticket",
        status: "IN_PROGRESS" as const,
    },
];