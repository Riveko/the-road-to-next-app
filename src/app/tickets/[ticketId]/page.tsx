import { initialTickets } from "@/data";

type TicketPageProps = Promise<{
    ticketId: string;
}>;

async function TicketPage(props: { params: TicketPageProps }) {
    const { ticketId } = await props.params;
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