import { expect, it, describe, spyOn } from "bun:test";
import { isStatic, statics } from "../statics.ts";
import { type BunFile } from "bun";

describe("statics", () => {
  it("should confirm that requested url is a static file", () => {
    const url = "https://foo/bar/baz.ext";

    expect(isStatic(new URL(url))).toBe(true);
  });

  it("should confirm that requested url is not a static file", () => {
    const url = "https://foo/bar/baz";

    expect(isStatic(new URL(url))).toBe(false);
  });

  it("should response with the static file", () => {
    const fakeRequest = <Request>{
      url: "https://foo/bar",
    };
    const expected = new Blob() as BunFile;
    spyOn(Bun, "file").mockImplementation(() => expected);

    const response = statics(fakeRequest);

    expect(response).toBeInstanceOf(Response);
    expect(response.body).toEqual(expected);
  });
});
