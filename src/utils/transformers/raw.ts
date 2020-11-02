import { MergeRequest } from '../../commands/mr';

/* eslint-disable indent */
export const toRaw = (data: MergeRequest[]) => {
    return data.map(({ title, description }: MergeRequest) => `- ${title}
    ${description}
    `).join('\n');
};
/* eslint-enable indent */
