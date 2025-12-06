import { getInput, setFailed, info, setOutput } from "@actions/core";
import { check } from "./check";

function run() {
  try {
    const packageJsonPath = getInput("package_json_path");
    const nodeVersionPath = getInput("node_version_path");
    setOutput("version", check(packageJsonPath, nodeVersionPath));

    info("volta node version matches .node_version version");
  } catch (error) {
    if (error instanceof Error) setFailed(error.message);
  }
}

run();
