export function OrderStatus(status) {
  switch (status) {
    case "PLACED":
      return (
        <span
          style={{
            color: "rgb(2 132 199)",
            backgroundColor: "rgb(224 242 254)",
            textTransform: "capitalize !important",
            padding: "0.25rem 0.5rem",
            borderRadius: "0.37rem",
            fontSize: "o.7rem",
            lineHeight: "1rem",
          }}
        >
          {status.toLowerCase()}
        </span>
      );
    case "CONFIRMED":
      return (
        <span
          style={{
            textTransform: "capitalize !important",
            padding: "0.25rem 0.5rem",
            borderRadius: "0.37rem",
            fontSize: "o.7rem",
            lineHeight: "1rem",
            color: "rgb(234 88 12)",
            backgroundColor: "rgb(255 237 213)",
          }}
        >
          {status.toLowerCase()}
        </span>
      );
    case "SHIPPED":
      return (
        <span
          style={{
            textTransform: "capitalize !important",
            padding: "0.25rem 0.5rem",
            borderRadius: "0.37rem",
            fontSize: "o.7rem",
            lineHeight: "1rem",
            color: "rgb(13 148 136)",
            backgroundColor: "rgb(204 251 241)",
          }}
        >
          {status.toLowerCase()}
        </span>
      );
    case "OUT FOR DELIVERY":
      return (
        <span
          style={{
            textTransform: "capitalize !important",
            padding: "0.25rem 0.5rem",
            borderRadius: "0.37rem",
            fontSize: "o.7rem",
            lineHeight: "1rem",
            color: "rgb(202 138 4)",
            backgroundColor: "rgb(254 249 195)",
          }}
        >
          {status.toLowerCase()}
        </span>
      );
    case "DELIVERED":
      return (
        <span
          style={{
            textTransform: "capitalize !important",
            padding: "0.25rem 0.5rem",
            borderRadius: "0.37rem",
            fontSize: "o.7rem",
            lineHeight: "1rem",
            color: "rgb(22 163 74)",
            backgroundColor: "rgb(220 252 231)",
          }}
        >
          {status.toLowerCase()}
        </span>
      );
    default:
      return (
        <span
          style={{
            textTransform: "capitalize !important",
            padding: "0.25rem 0.5rem",
            borderRadius: "0.37rem",
            fontSize: "o.7rem",
            lineHeight: "1rem",
            color: "rgb(75 85 99)",
            backgroundColor: "rgb(243 244 246)",
          }}
        >
          {status.toLowerCase()}
        </span>
      );
  }
}
