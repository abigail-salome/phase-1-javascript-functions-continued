// code your solution here

// Function to return a message about Saturday plans
function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`;
}

// Function to return a message about Monday plans
const mondayWork = function (activity = "go to the office") {
  return `This Monday, I will ${activity}.`;
};

// Function to create a function that wraps an adjective in a highlight
function wrapAdjective(flair = "*") {
  return function (adjective) {
    return `You are ${flair}${adjective}${flair}!`;
  };
}
