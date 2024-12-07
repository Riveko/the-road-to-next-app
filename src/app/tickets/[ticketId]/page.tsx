import { initialTickets } from "@/data";

type TicketPageProps = {
    params: {
        ticketId: string;
    };
};

async function TicketPage({ params }: TicketPageProps) {
    const { ticketId } = await params;
    const ticket = initialTickets.find((ticket) => ticket.id === ticketId);

    if (!ticket) {
        return <div>Ticket not found</div>;
    }

    return (
        <div>
            <h2 className="text-lg">{ticket.title}</h2>
            <p className="text-sm">{ticket.content}</p>
        </div>
    );
};

export default TicketPage;