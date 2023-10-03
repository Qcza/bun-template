import { describe, expect, it } from "bun:test";
import { root } from "../root.ts";

describe("root", () => {
  it("should respond with the root view", () => {
    const fakeRequest = <Request>{
      url: "https://foo/bar",
    };

    const response = root(fakeRequest);
    expect(response).toBeInstanceOf(Response);
    expect(response.headers).toEqual(
      new Headers({ "content-type": "text/html" }),
    );
  });
});
