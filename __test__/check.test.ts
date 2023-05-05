import { check } from "../src/check";
import { expect, test } from "@jest/globals";

test("sync version", async () => {
  const packageJsonPath = "./__test__/package.test.json";
  const nodeVersionPath = "./__test__/.node-version.test";
  expect(await check(packageJsonPath, nodeVersionPath)).toMatch("16.20.0");
});

test("async version", () => {
  const packageJsonPath = "./__test__/package.test.json";
  const nodeVersionPath = "./__test__/.node-version.test.async";
  expect(() => check(packageJsonPath, nodeVersionPath)).rejects.toThrow(
    "volta node version 16.20.0 does not match .node_version version 18.16.0"
  );
});
