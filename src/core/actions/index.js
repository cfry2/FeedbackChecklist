export const FEEDBACK_CHANGE = 'FEEDBACK_CHANGE';

export function feedbackChange(index, item, value) {
    return {
        type : FEEDBACK_CHANGE,
        index : index,
        item: item,
        value : value
    }
}