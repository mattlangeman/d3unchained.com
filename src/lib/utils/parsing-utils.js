export const getMaxStepNumber = (codeString) => {
    // Extract the content between <!-- and -->
    let commentMatch = codeString.match(/<!--([\s\S]*?)-->/);

    if (!commentMatch) return null;

    let commentContent = commentMatch[1];

    // Find all occurrences of the pattern "Step <number>:"
    let stepMatches = commentContent.match(/Step (\d+):/g);

    if (!stepMatches) return null;

    // Extract numbers and find the max
    let maxStep = Math.max(...stepMatches.map(step => parseInt(step.replace('Step ', '').replace(':', ''))));

    return maxStep;
}