# Sync volta and .node_version

This action checks the synchronized volta and .node_version.

## Inputs

### `package_json_path`

The path of `package.json`.

Default: `./package.json`

### `node_version_path`

The path of `.node-version`.

Default: `./.node_version`

## Outputs

The result of the checks will be output.

## Example usage

```yaml
uses: My-MC/check-sync-volta-and-node-version@master
```
