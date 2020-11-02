import { MergeRequest } from '../../commands/mr';
import json2md = require('json2md');

/* eslint-disable indent */
export const toMarkdown = (data: any): string => {
    return data.map((input: MergeRequest) => json2md([
        { h2: input.title },
        { h4: 'Description' },
        { p: input.description },
        { ol: input.tags },
        { h6: 'Meta' },
        { p: `Author: ${input.author} - Merged at: ${input.merged_at}` },
        { p: `Source: ${input.source} - Target: ${input.target}` },
        { link: { title: `#${input.sha}`, source: input.url } },
    ]));
};
/* eslint-enable indent */
