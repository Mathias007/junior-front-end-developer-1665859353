import React from "react";
import MessageBox from "./MessageBox";

export default function MessagesList(props) {
    const { task, onClick } = props;

    return (
        <section className="main__messages-list messages-list">
            {task
                ? task.map((context) => {
                      const { id } = context;

                      return (
                          <MessageBox
                              key={id}
                              contextData={context}
                              onClick={() => onClick(id)}
                          />
                      );
                  })
                : null}
        </section>
    );
}
