import React from "react";
import { ItemTypes } from "./Constans";
import { useDrag, DragPreviewImage } from "react-dnd";


export default function Kight() {

  const knightImage = require('./knight.png')
  const [{ isDragging }, drag, preview] = useDrag({
    item: { type: ItemTypes.KNIGHT },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  })


  return (
    <>
    <DragPreviewImage connect={preview} src={knightImage}/>
    <div
      ref={drag}
      style={{
        opacity: isDragging ? 0.5 : 1,
        fontSize: 70,
        fontWeight: "bold",
        cursor: "move",
      }}
    >
      &#9816;
    </div>
    </>
  );
}
