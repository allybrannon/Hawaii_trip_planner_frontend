import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import Form from "../components/Form";

describe("<Form />", () => {
  let getByTestId;

  afterEach(cleanup);

  describe("clicking the send button", () => {
    let sendHandler;

    beforeEach(() => {
      sendhandler = jest.fn();
      ({ getByTestId } = render(<Form onSend={sendHandler} />));

      fireEvent.change(getByTestId("messageText"), {
        target: {
          value: "New message",
        },
      });

      fireEvent.click(getByTestId("sendButton"));
    });

    it("clears the text field", () => {
      expect(getByTestId("messageText").value).toEqual("");
    });
    it("calls the send handler", () => {
      expect(sendHandler).toHaveBeenCalledWith("New message");
    });
  });
});
