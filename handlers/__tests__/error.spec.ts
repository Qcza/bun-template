import { describe, expect, it } from "bun:test";
import { error } from "../error.ts";

describe("error", () => {
  it("should respond with the error", () => {
    const response = error(new Error("foo"));
    expect(response).toBeInstanceOf(Response);
    expect(response.headers).toEqual(
      new Headers({ "content-type": "text/html" }),
    );
  });
});
