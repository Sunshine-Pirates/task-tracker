import React, { useState } from "react";

export const Notification = () => {
  const [currentPage, setCurrentPage] = useState("home");

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return (
          <div>
            <h1>Notification</h1>
            <button onClick={() => setCurrentPage("page2")}> Boards</button>
          </div>
        );
      case "page2":
        return (
          <div>
            <h1>Вы на второй странице!</h1>
            <button onClick={() => setCurrentPage("home")}>
              Вернуться на первую страницу
            </button>
          </div>
        );
      default:
        return <div>Страница не найдена</div>;
    }
  };

  return <div>{renderPage()}</div>;
};
