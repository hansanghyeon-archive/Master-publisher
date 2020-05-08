echo "Adding bit.dev to npm registry"
echo "always-auth=true" >>~/.npmrc
echo "@bit:registry=https://node.bit.dev" >>~/.npmrc
echo "//node.bit.dev/:_authToken={$BIT_TOKEN}" >>~/.npmrc
echo "Completed adding bit.dev to npm registry"
