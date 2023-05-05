import { debug } from "@actions/core";
import { readFileSync } from "fs";

export async function check(packageJsonPath: string, nodeVersionPath: string) {
  const packageJsonObj = JSON.parse(readFileSync(packageJsonPath, "utf8"));
  const voltaNodeVersion: string = packageJsonObj.volta.node;
  debug(`volta_node_version: ${voltaNodeVersion}`);

  const nodeVersionVersion = readFileSync(nodeVersionPath, "utf8").replace(
    /\r?\n/g,
    ""
  );
  debug(`node_version_version: ${nodeVersionVersion}`);

  if (voltaNodeVersion !== nodeVersionVersion) {
    throw new Error(
      `volta node version ${voltaNodeVersion} does not match .node_version version ${nodeVersionVersion}`
    );
  }
  return nodeVersionVersion;
}
