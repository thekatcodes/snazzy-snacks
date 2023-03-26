import React, { useEffect, useState } from "react";
import axios from "axios";

export default function SnackPreview(props) {
	const [order, setOrder] = useState([]);
  const [sent, setSent] = useState(false);
  const [text, setText] = useState("");

	useEffect(() => {
		axios
			.get("/order")
			.then((response) => {
				setOrder(response.data);
			})
			.catch((error) => console.log(error));
	}, []);

  const handleSend = async() => {
    setSent(true);
    try {
      await axios.post("/send_mail", {
        text: text
      })
    } catch (error) {
      console.log(error);
    }
  }

  const orderItem = order.map(item => {
    <div>{item.snack}</div>
  });

  return (
    <div>
      <button onClick={() => {
          setText(orderItem);
          handleSend()
        }}
      >
        Send Email
      </button>
    </div>
  );
}