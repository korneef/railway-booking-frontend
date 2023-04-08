import useFindTicketRequest from "./useFindTicketsRequest"

export default function useOffsetReset(): Function {
  const ticketOfssetReset = useFindTicketRequest();

  return () => {
    ticketOfssetReset('offset', 0);
  }
}