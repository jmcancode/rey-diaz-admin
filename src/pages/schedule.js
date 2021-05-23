import React from "react";
import {  Row, Col } from "react-bootstrap";
import TopNav from "../components/navigation/navBar";
import FullCalendar from "@fullcalendar/react";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import { motion } from "framer-motion";

const handleDateClick = (arg) => {
  alert(arg.dateStr);
};
export default function SchedulePage() {
  return (
    <>
      <TopNav />
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        className="container"
      >
        <Row className="pt-3" xs={1} md={1} lg={1}>
          <Col>
            <FullCalendar
              plugins={[timeGridPlugin, interactionPlugin]}
              initialView="timeGridWeek"
              eventAdd={true}
              nowIndicator={true}
              slotDuration="00:30:00"
              dateClick={handleDateClick}
              events={[
                {
                  title: "Discovery Meeting with",
                  date: "2021-05-22",
                  time: "08:00:00",
                },
                { title: "Garza Case | Bexar County", date: "2021-05-19" },
              ]}
            />
          </Col>
        </Row>
      </motion.div>
    </>
  );
}
