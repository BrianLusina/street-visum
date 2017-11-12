import delay from './delay';

export function postQuestionnaire(data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate server-side validation
            if (data.shop.length === 0) {
                reject(`Type of Shop must be filled.`);
            }

            if (data.agentsComments.length === 0) {
                reject(`Agent Comment must be filled.`);
            }

            resolve(data);
        }, delay);
    });
}
