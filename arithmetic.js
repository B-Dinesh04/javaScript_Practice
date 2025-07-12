function buildFormula(node) {
    if (node.value !== undefined) return node.value.toString(); // Direct value
    if (node.variable !== undefined) return node.variable; // Variable name
  
    // Recursively build the formula
    return `(${buildFormula(node.left)} ${node.operator} ${buildFormula(node.right)})`;
  }

  const jsonPayload = {
    "operator": "/",
    "left": {
      "operator": "*",
      "left": {
        "operator": "+",
        "left": { "variable": "v1", "value": 10 },
        "right": { "variable": "v2", "value": 5 }
      },
      "right": { "variable": "v3", "value": 2 }
    },
    "right": {
      "operator": "-",
      "left": { "variable": "v4", "value": 8 },
      "right": { "variable": "v5", "value": 3 }
    }
  };

  const val = buildFormula(jsonPayload)
  
  console.log(val);