"use client";
import Accordion from "react-bootstrap/Accordion";
import CardLayout from "./Cardlayout";
import { useParams } from "next/navigation";
import { switcher } from "@/models/utils/subCategory";

export default function AccordionLayout({ data2 }) {
  const cat = useParams().category;
  return (
    <Accordion defaultActiveKey={"0"}>
      {switcher(cat).map((data, index) => (
        <Accordion.Item key={index} eventKey={index.toString()}>
          <Accordion.Header>{data.type}</Accordion.Header>
          <Accordion.Body className="flex gap-2 flex-wrap mx-auto">
            {data2.map((cad, index) => (
              <CardLayout key={index} data={cad} category={cat} />
            ))}
          </Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
  );
}
