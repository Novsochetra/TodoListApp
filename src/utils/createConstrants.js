export default function createConstants(...constants) {
  return constants.reduce((action, constant) => {
    action[constant] = constant
    return action
  }, {})
}