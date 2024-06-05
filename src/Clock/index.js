import { ClockContainer } from "./styled";
import useCurrentDate from "./useCurrentDate";

const Clock = () => {
  const date = useCurrentDate();

  return (
    <ClockContainer>
      {date.toLocaleString("en-US", {
        weekday: "long",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      })}
    </ClockContainer>
  );
};

export default Clock;
