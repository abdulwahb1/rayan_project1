import React from "react";
import SessionPlanCard from "./SessionPlanCard";
import { SESSION_DATA } from "../../constants/constant";

const SessionPlan = () => {
  return (
    <div>
      {SESSION_DATA.map((session) => (
        <SessionPlanCard
          key={session.id}
          title={session.title}
          date={session.date}
          image={session.image}
        />
      ))}
    </div>
  );
};

export default SessionPlan;
