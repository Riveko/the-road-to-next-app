import Link from "next/link";
import { initialTickets } from "@/data";
import { ticketPath } from "@/paths";

const TicketsPage = () => {
    return (
        <div>
            {initialTickets.map((ticket) => (
                <div key={ticket.id}>
                    <h2 className="text-lg">{ticket.content}</h2>

                    <Link href={ticketPath(ticket.id)} className="text-sm underline">
                        View ticket
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default TicketsPage;